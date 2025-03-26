import React, { useRef } from "react";
import { EventContentArg, EventInput } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Bell,
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  FileText,
  GraduationCap,
  ListTodo,
  Lock,
  Monitor,
  Plus,
  Search,
  Users,
} from "lucide-react";

// Helper function to format the current month and year
const formatMonthYear = (date: Date) => {
  return date.toLocaleString("en-US", { month: "long", year: "numeric" });
};

// Helper function to get date for current week
const getDateForCurrentWeek = (dayOfWeek: number, timeString: string) => {
  const date = new Date();
  const currentDay = date.getDay();
  const daysToMonday = currentDay === 0 ? 1 : 1 - currentDay;
  const daysToAdd = daysToMonday + (dayOfWeek - 1);
  date.setDate(date.getDate() + daysToAdd);
  const [hours, minutes] = timeString.split(":");
  date.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);
  return date;
};

const events: EventInput[] = [
  // Monday Events
  {
    title: "CS 202 Lecture",
    start: getDateForCurrentWeek(1, "09:00"),
    end: getDateForCurrentWeek(1, "10:30"),
    backgroundColor: "rgb(219 234 254)",
    borderColor: "rgb(219 234 254)",
    textColor: "rgb(29 78 216)",
    extendedProps: {
      icon: "graduation",
      type: "lecture",
    },
  },
  {
    title: "CS 202 Assignment 3",
    start: getDateForCurrentWeek(1, "11:00"),
    backgroundColor: "rgb(219 234 254)",
    borderColor: "rgb(219 234 254)",
    textColor: "rgb(29 78 216)",
    extendedProps: {
      icon: "file",
      type: "assignment",
    },
  },
  {
    title: "PSYC 101 Lecture",
    start: getDateForCurrentWeek(1, "12:00"),
    end: getDateForCurrentWeek(1, "13:30"),
    backgroundColor: "rgb(220 252 231)",
    borderColor: "rgb(220 252 231)",
    textColor: "rgb(21 128 61)",
    extendedProps: {
      icon: "graduation",
      type: "lecture",
    },
  },
  // Tuesday Events
  {
    title: "MATH 201 Lecture",
    start: getDateForCurrentWeek(2, "10:30"),
    end: getDateForCurrentWeek(2, "12:00"),
    backgroundColor: "rgb(254 226 226)",
    borderColor: "rgb(254 226 226)",
    textColor: "rgb(185 28 28)",
    extendedProps: {
      icon: "graduation",
      type: "lecture",
    },
  },
  {
    title: "MATH 201 Quiz",
    start: getDateForCurrentWeek(2, "12:30"),
    end: getDateForCurrentWeek(2, "12:45"),
    backgroundColor: "rgb(254 226 226)",
    borderColor: "rgb(254 226 226)",
    textColor: "rgb(185 28 28)",
    extendedProps: {
      icon: "alert",
      type: "quiz",
    },
  },
  {
    title: "PHYS 102 Lecture",
    start: getDateForCurrentWeek(2, "13:30"),
    end: getDateForCurrentWeek(2, "16:30"),
    backgroundColor: "rgb(255 237 213)",
    borderColor: "rgb(255 237 213)",
    textColor: "rgb(194 65 12)",
    extendedProps: {
      icon: "graduation",
      type: "lecture",
    },
  },
  // Wednesday Events
  {
    title: "CS 202 Lecture",
    start: getDateForCurrentWeek(3, "09:00"),
    end: getDateForCurrentWeek(3, "10:30"),
    backgroundColor: "rgb(219 234 254)",
    borderColor: "rgb(219 234 254)",
    textColor: "rgb(29 78 216)",
    extendedProps: {
      icon: "graduation",
      type: "lecture",
    },
  },
  {
    title: "MATH 201 Quiz",
    start: getDateForCurrentWeek(3, "11:00"),
    backgroundColor: "rgb(243 232 255)",
    borderColor: "rgb(243 232 255)",
    textColor: "rgb(126 34 206)",
    extendedProps: {
      icon: "alert",
      type: "quiz",
    },
  },
  {
    title: "PSYC 101 Lecture",
    start: getDateForCurrentWeek(3, "12:00"),
    end: getDateForCurrentWeek(3, "13:30"),
    backgroundColor: "rgb(220 252 231)",
    borderColor: "rgb(220 252 231)",
    textColor: "rgb(21 128 61)",
    extendedProps: {
      icon: "graduation",
      type: "lecture",
    },
  },
];

const CalendarDemo: React.FC = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const currentDate = new Date();

  const renderEventContent = (eventInfo: EventContentArg) => {
    const icon = eventInfo.event.extendedProps.icon;
    const isShortEvent =
      eventInfo.event.end &&
      eventInfo.event.start &&
      eventInfo.event.end.getTime() - eventInfo.event.start.getTime() <=
        30 * 60 * 1000;

    return (
      <div
        className={twMerge(
          "p-1 sm:p-1.5 flex flex-col h-full relative group",
          isShortEvent ? "justify-center" : "justify-between"
        )}
      >
        <div className="flex flex-col min-w-0 pr-2 sm:pr-4">
          <span className="text-[8px] sm:text-[10px] leading-tight font-medium break-words">
            {eventInfo.event.title}
          </span>
          {!isShortEvent && eventInfo.timeText && (
            <div className="text-[8px] sm:text-[10px] leading-tight opacity-70 mt-0.5">
              {eventInfo.timeText}
            </div>
          )}
        </div>
        <div className="absolute bottom-1 right-1 transform transition-transform duration-300 group-hover:scale-125">
          {icon === "graduation" && <GraduationCap className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />}
          {icon === "file" && <FileText className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />}
          {icon === "monitor" && <Monitor className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />}
          {icon === "alert" && <AlertCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />}
          {icon === "users" && <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />}
        </div>
      </div>
    );
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  // Item animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 22,
        stiffness: 350,
      },
    },
  };

  // Button animation variants
  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#0ca678" },
    tap: { scale: 0.98 },
  };

  // Quick access item variants
  const quickAccessVariants = {
    hover: { x: 5, color: "#11ba82" },
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto px-3 sm:px-4 py-10 sm:py-12 lg:py-16 select-none relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.h2
        variants={itemVariants}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-4"
      >
        Your Smart <span className="text-[#11ba82]">Calendar</span> Assistant
      </motion.h2>
      
      <motion.p 
        variants={itemVariants}
        className="text-center text-sm sm:text-base text-gray-700 max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-12"
      >
        Visualize your academic life with intelligent scheduling and reminders
      </motion.p>
      
      {/* Container */}
      <div className="max-w-6xl mx-auto mt-6 sm:mt-8 md:mt-10 relative">
        {/* Calendar UI */}
        <motion.div
          ref={calendarRef}
          className="relative z-10 border border-gray-200 bg-white rounded-xl shadow-xl max-w-4xl mx-auto overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Calendar Header */}
          <div className="border-b border-gray-100 relative z-10">
            {/* Top Bar */}
            <div className="p-2 sm:p-3 flex items-center bg-gray-50/90 backdrop-blur-xl border-b border-gray-200/80">
              <div className="flex items-center space-x-1 sm:space-x-1.5">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 mx-16 sm:mx-24">
                <div className="mx-auto max-w-xl sm:max-w-2xl bg-gray-200/70 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-md flex items-center gap-1 border border-gray-200/60">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400" />
                    <span className="text-[11px] sm:text-[13px] text-gray-500 font-medium">
                      https://
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-[13px] text-gray-500">
                    {window.location.host}/calendar
                  </span>
                </div>
              </div>
            </div>

            {/* Sub Header */}
            <div className="p-3 sm:p-4 flex items-center justify-between bg-white/95 backdrop-blur-xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#11ba82]" />
                <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                  Ivy AI Dashboard
                </h2>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <motion.div className="p-1.5 sm:p-2 cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                </motion.div>
                <motion.div className="p-1.5 sm:p-2 cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                </motion.div>
                <motion.div 
                  className="flex items-center gap-1.5 sm:gap-2 bg-[#11ba82] text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold cursor-pointer shadow-md"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                  Add Event
                </motion.div>
              </div>
            </div>

            {/* Navigation Bar */}
            <div className="px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between border-t border-b border-gray-200/80 bg-white/95 backdrop-blur-xl">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                    {formatMonthYear(currentDate)}
                  </h3>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium">
                    Winter Term
                  </div>
                </div>
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <motion.div 
                    className="p-1 sm:p-1.5 hover:bg-gray-100 rounded-md cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: "#f1f5f9" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                  </motion.div>
                  <motion.div 
                    className="p-1 sm:p-1.5 hover:bg-gray-100 rounded-md cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: "#f1f5f9" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                  </motion.div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <motion.div 
                  className="text-xs sm:text-sm text-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md hover:bg-gray-100 cursor-pointer"
                  whileHover={{ backgroundColor: "#f1f5f9", color: "#11ba82" }}
                >
                  Today
                </motion.div>
                <div className="h-3 sm:h-4 w-[1px] bg-gray-300"></div>
                <motion.div 
                  className="text-xs sm:text-sm text-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-gray-100"
                  whileHover={{ backgroundColor: "#e2f8f0" }}
                >
                  Week
                </motion.div>
                <motion.div 
                  className="text-xs sm:text-sm text-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md hover:bg-gray-100 cursor-pointer"
                  whileHover={{ backgroundColor: "#f1f5f9", color: "#11ba82" }}
                >
                  Month
                </motion.div>
              </div>
            </div>
          </div>

          {/* Calendar Content */}
          <div className="flex">
            {/* Sidebar */}
            <div className="w-48 sm:w-56 md:w-64 shrink-0 py-4 sm:py-6 px-3 sm:px-4 space-y-4 sm:space-y-6 bg-gray-50/90 backdrop-blur-xl border-r border-gray-200/80 relative z-10">
              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-[11px] sm:text-[13px] font-semibold text-gray-900 uppercase tracking-wide px-2">
                  Quick Access
                </h4>
                <div className="space-y-0.5 sm:space-y-1">
                  <motion.div 
                    className="w-full flex items-center gap-2 sm:gap-2.5 px-2 sm:px-3 py-1.5 sm:py-2 text-[12px] sm:text-[14px] text-gray-700 rounded-md cursor-pointer"
                    variants={quickAccessVariants}
                    whileHover="hover"
                  >
                    <BookOpen className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-gray-400" />
                    <span className="font-medium truncate">Courses</span>
                  </motion.div>
                  <motion.div 
                    className="w-full flex items-center gap-2 sm:gap-2.5 px-2 sm:px-3 py-1.5 sm:py-2 text-[12px] sm:text-[14px] text-gray-700 rounded-md cursor-pointer"
                    variants={quickAccessVariants}
                    whileHover="hover"
                  >
                    <ListTodo className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-gray-400" />
                    <span className="font-medium truncate">Assignments</span>
                  </motion.div>
                  <motion.div 
                    className="w-full flex items-center gap-2 sm:gap-2.5 px-2 sm:px-3 py-1.5 sm:py-2 text-[12px] sm:text-[14px] text-gray-700 rounded-md cursor-pointer"
                    variants={quickAccessVariants}
                    whileHover="hover"
                  >
                    <AlertCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-gray-400" />
                    <span className="font-medium truncate">Quizzes</span>
                  </motion.div>
                  <motion.div 
                    className="w-full flex items-center gap-2 sm:gap-2.5 px-2 sm:px-3 py-1.5 sm:py-2 text-[12px] sm:text-[14px] text-gray-700 rounded-md cursor-pointer"
                    variants={quickAccessVariants}
                    whileHover="hover"
                  >
                    <GraduationCap className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-gray-400" />
                    <span className="font-medium truncate">Exams</span>
                  </motion.div>
                </div>
              </div>
              <div className="h-[1px] bg-gray-200"></div>
              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-[11px] sm:text-[13px] font-semibold text-gray-900 uppercase tracking-wide px-2">
                  My Courses
                </h4>
                <div className="space-y-0.5 sm:space-y-1">
                  <motion.div 
                    className="w-full flex items-center gap-2 sm:gap-2.5 px-2 sm:px-3 py-1.5 sm:py-2 text-[12px] sm:text-[14px] text-gray-700 rounded-md cursor-pointer"
                    variants={quickAccessVariants}
                    whileHover="hover"
                  >
                    <div className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-full bg-blue-500 shrink-0"></div>
                    <span className="font-medium truncate">
                      CS 202 - Data Structures
                    </span>
                  </motion.div>
                  <motion.div 
                    className="w-full flex items-center gap-2 sm:gap-2.5 px-2 sm:px-3 py-1.5 sm:py-2 text-[12px] sm:text-[14px] text-gray-700 rounded-md cursor-pointer"
                    variants={quickAccessVariants}
                    whileHover="hover"
                  >
                    <div className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-full bg-purple-500 shrink-0"></div>
                    <span className="font-medium truncate">
                      MATH 201 - Calculus II
                    </span>
                  </motion.div>
                  <motion.div 
                    className="w-full flex items-center gap-2 sm:gap-2.5 px-2 sm:px-3 py-1.5 sm:py-2 text-[12px] sm:text-[14px] text-gray-700 rounded-md cursor-pointer"
                    variants={quickAccessVariants}
                    whileHover="hover"
                  >
                    <div className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-full bg-green-500 shrink-0"></div>
                    <span className="font-medium truncate">
                      PSYC 101 - Intro Psychology
                    </span>
                  </motion.div>
                  <motion.div 
                    className="w-full flex items-center gap-2 sm:gap-2.5 px-2 sm:px-3 py-1.5 sm:py-2 text-[12px] sm:text-[14px] text-gray-700 rounded-md cursor-pointer"
                    variants={quickAccessVariants}
                    whileHover="hover"
                  >
                    <div className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-full bg-orange-500 shrink-0"></div>
                    <span className="font-medium truncate">
                      PHYS 102 - Physics II
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="flex-1 min-w-0">
              <FullCalendar
                ref={calendarRef}
                plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                headerToolbar={false}
                events={events}
                eventContent={renderEventContent}
                allDaySlot={false}
                slotMinTime="08:00:00"
                slotMaxTime="18:00:00"
                expandRows={true}
                dayHeaderFormat={{ weekday: "short", day: "numeric" }}
                slotLabelFormat={{
                  hour: "numeric",
                  minute: "2-digit",
                  meridiem: "short",
                }}
                nowIndicator={true}
                initialDate={new Date()}
                firstDay={1}
                slotDuration="00:30:00"
                slotLabelInterval="01:00"
                eventMinHeight={30}
                height="auto"
                eventClassNames="rounded-md sm:rounded-[6px] border-0 shadow-sm hover:shadow-md transition-shadow duration-200"
                slotLabelClassNames="text-gray-700 text-[10px] sm:text-[13px] font-medium !px-2 sm:!px-3"
                dayHeaderClassNames="text-gray-700 text-xs sm:text-sm font-medium"
                slotLaneClassNames="border-gray-200/80"
                nowIndicatorClassNames="!border-[#11ba82] z-10"
                editable={true}
                droppable={true}
                selectable={true}
                displayEventEnd={true}
                eventDisplay="block"
                eventTimeFormat={{
                  hour: "numeric",
                  minute: "2-digit",
                  meridiem: "short",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CalendarDemo; 