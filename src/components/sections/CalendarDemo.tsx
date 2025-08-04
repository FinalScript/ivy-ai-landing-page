import { EventContentArg, EventInput } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
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
    Menu,
    Monitor,
    Plus,
    Search,
    Users,
    X,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const currentDate = new Date();

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
    // Thursday Events
    {
        title: "MATH 201 Lecture",
        start: getDateForCurrentWeek(4, "10:30"),
        end: getDateForCurrentWeek(4, "12:00"),
        backgroundColor: "rgb(243 232 255)",
        borderColor: "rgb(243 232 255)",
        textColor: "rgb(126 34 206)",
        extendedProps: {
            icon: "graduation",
            type: "lecture",
        },
    },
    {
        title: "PHYS 102 Assignment 4",
        start: getDateForCurrentWeek(4, "12:30"),
        backgroundColor: "rgb(255 237 213)",
        borderColor: "rgb(255 237 213)",
        textColor: "rgb(194 65 12)",
        extendedProps: {
            icon: "file",
            type: "assignment",
        },
    },
    {
        title: "PHYS 102 Lab",
        start: getDateForCurrentWeek(4, "13:30"),
        end: getDateForCurrentWeek(4, "16:30"),
        backgroundColor: "rgb(255 237 213)",
        borderColor: "rgb(255 237 213)",
        textColor: "rgb(194 65 12)",
        extendedProps: {
            icon: "monitor",
            type: "lab",
        },
    },
    // Friday Events
    {
        title: "CS 202 Lab",
        start: getDateForCurrentWeek(5, "09:00"),
        end: getDateForCurrentWeek(5, "11:00"),
        backgroundColor: "rgb(219 234 254)",
        borderColor: "rgb(219 234 254)",
        textColor: "rgb(29 78 216)",
        extendedProps: {
            icon: "monitor",
            type: "lab",
        },
    },
    {
        title: "MATH 201 Tutorial",
        start: getDateForCurrentWeek(5, "12:00"),
        end: getDateForCurrentWeek(5, "13:30"),
        backgroundColor: "rgb(254 226 226)",
        borderColor: "rgb(254 226 226)",
        textColor: "rgb(185 28 28)",
        extendedProps: {
            icon: "users",
            type: "tutorial",
        },
    },
    {
        title: "PSYC 101 Assignment 3",
        start: getDateForCurrentWeek(5, "14:00"),
        backgroundColor: "rgb(220 252 231)",
        borderColor: "rgb(220 252 231)",
        textColor: "rgb(21 128 61)",
        extendedProps: {
            icon: "file",
            type: "assignment",
        },
    },
    // Saturday Events
    {
        title: "PHYS 102 Study Group",
        start: getDateForCurrentWeek(6, "11:00"),
        end: getDateForCurrentWeek(6, "14:00"),
        backgroundColor: "rgb(255 237 213)",
        borderColor: "rgb(255 237 213)",
        textColor: "rgb(194 65 12)",
        extendedProps: {
            icon: "users",
            type: "study",
        },
    },
];

export function CalendarDemo() {
    const calendarRef = useRef<any>(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if we're on mobile
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            
            // Force calendar view change when screen size changes
            if (calendarRef.current) {
                const calendarApi = calendarRef.current.getApi();
                if (mobile) {
                    calendarApi.changeView('timeGridDay');
                } else {
                    calendarApi.changeView('timeGridWeek');
                }
            }
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const renderEventContent = (eventInfo: EventContentArg) => {
        const icon = eventInfo.event.extendedProps.icon;
        const isShortEvent = eventInfo.event.end && eventInfo.event.start && eventInfo.event.end.getTime() - eventInfo.event.start.getTime() <= 30 * 60 * 1000;

        return (
            <div className={twMerge("p-1.5 flex flex-col h-full relative", isShortEvent ? "justify-center" : "justify-between")}>
                <div className="flex flex-col min-w-0 pr-4">
                    <span className="text-[10px] leading-tight font-medium break-words">{eventInfo.event.title}</span>
                    {!isShortEvent && eventInfo.timeText && <div className="text-[10px] leading-tight opacity-70 mt-0.5">{eventInfo.timeText}</div>}
                </div>
                <div className="absolute bottom-1 right-1">
                    {icon === "graduation" && <GraduationCap className="w-3.5 h-3.5" />}
                    {icon === "file" && <FileText className="w-3.5 h-3.5" />}
                    {icon === "monitor" && <Monitor className="w-3.5 h-3.5" />}
                    {icon === "alert" && <AlertCircle className="w-3.5 h-3.5" />}
                    {icon === "users" && <Users className="w-3.5 h-3.5" />}
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 select-none">
            <div className="bg-white rounded-[12px] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08),0_8px_32px_-2px_rgba(0,0,0,0.12),0_0_48px_0_rgba(0,0,0,0.06)] overflow-hidden border border-gray-100/50 backdrop-blur-xl relative ring-1 ring-black/5">
                <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/95 pointer-events-none"></div>

                {/* Calendar Header */}
                <div className="border-b border-gray-100">
                    {/* Top Bar */}
                    <div className="p-2 sm:p-3 flex items-center bg-gray-50/90 backdrop-blur-xl border-b border-gray-200/80 relative z-10">
                        <div className="flex items-center space-x-1.5">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex-1 mx-8 sm:mx-24">
                            <div className="mx-auto max-w-2xl bg-gray-200/70 backdrop-blur-sm px-2 sm:px-3 py-1.5 rounded-md flex items-center gap-1 border border-gray-200/60">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <Lock className="w-3.5 h-3.5 text-gray-400" />
                                    <span className="text-[11px] sm:text-[13px] text-gray-500 font-medium hidden sm:inline">https://</span>
                                </div>
                                <span className="text-[11px] sm:text-[13px] text-gray-500 truncate">{window.location.host}/calendar</span>
                            </div>
                        </div>
                    </div>

                    {/* Sub Header */}
                    <div className="p-3 sm:p-4 flex items-center justify-between bg-white/95 backdrop-blur-xl relative z-10">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Ivy AI Dashboard</h2>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-3">
                            <div className="p-1.5 sm:p-2">
                                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                            </div>
                            <div className="p-1.5 sm:p-2">
                                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2 bg-orange-500 text-[#fffffa] px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                                <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="hidden sm:inline">Add Event</span>
                                <span className="sm:hidden">+</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Bar */}
                    <div className="px-3 sm:px-6 py-3 flex items-center justify-between border-t border-b border-gray-200/80 bg-white/95 backdrop-blur-xl relative z-10">
                        <div className="flex items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{formatMonthYear(currentDate)}</h3>
                                <div className="text-xs sm:text-sm text-gray-500 font-medium hidden sm:block">Winter Term</div>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="p-1.5 hover:bg-gray-100 rounded-md cursor-pointer">
                                    <ChevronLeft className="w-4 h-4 text-gray-400" />
                                </div>
                                <div className="p-1.5 hover:bg-gray-100 rounded-md cursor-pointer">
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                            <div className="text-xs sm:text-sm text-gray-700 px-2 sm:px-3 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">Today</div>
                            <div className="h-4 w-[1px] bg-gray-300 hidden sm:block"></div>
                            <div className="text-xs sm:text-sm text-gray-700 px-2 sm:px-3 py-1.5 rounded-md bg-gray-100">{isMobile ? 'Day' : 'Week'}</div>
                            <div className="text-xs sm:text-sm text-gray-700 px-2 sm:px-3 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer hidden sm:block">Month</div>
                        </div>
                    </div>
                </div>

                {/* Calendar Content */}
                <div className="flex relative">
                    {/* Mobile Sidebar Toggle */}
                    <div className="lg:hidden absolute top-4 left-4 z-30">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 bg-white/90 backdrop-blur-sm rounded-md shadow-sm border border-gray-200/60"
                        >
                            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </button>
                    </div>

                    {/* Mobile Overlay */}
                    {sidebarOpen && (
                        <div 
                            className="lg:hidden fixed inset-0 bg-black/20 z-20"
                            onClick={() => setSidebarOpen(false)}
                        />
                    )}

                    {/* Sidebar */}
                    <div className={twMerge(
                        "bg-gray-50/90 backdrop-blur-xl border-r border-gray-200/80 relative z-10 transition-all duration-300 ease-in-out",
                        "lg:w-64 lg:shrink-0 lg:py-6 lg:px-4 lg:space-y-6",
                        "w-64 shrink-0 py-6 px-4 space-y-6",
                        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
                        "lg:relative lg:transform-none",
                        "fixed top-0 left-0 h-full overflow-y-auto lg:static lg:transform-none",
                        "lg:bg-gray-50/90 lg:backdrop-blur-xl",
                        "bg-white shadow-lg lg:shadow-none",
                        "z-30"
                    )}>
                        <div className="space-y-3">
                            <h4 className="text-[13px] font-semibold text-gray-900 uppercase tracking-wide px-2">Quick Access</h4>
                            <div className="space-y-1">
                                <div className="w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700">
                                    <BookOpen className="w-[18px] h-[18px] text-gray-400" />
                                    <span className="font-medium truncate">Courses</span>
                                </div>
                                <div className="w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700">
                                    <ListTodo className="w-[18px] h-[18px] text-gray-400" />
                                    <span className="font-medium truncate">Assignments</span>
                                </div>
                                <div className="w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700">
                                    <AlertCircle className="w-[18px] h-[18px] text-gray-400" />
                                    <span className="font-medium truncate">Quizzes</span>
                                </div>
                                <div className="w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700">
                                    <GraduationCap className="w-[18px] h-[18px] text-gray-400" />
                                    <span className="font-medium truncate">Exams</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-[1px] bg-gray-200"></div>
                        <div className="space-y-3">
                            <h4 className="text-[13px] font-semibold text-gray-900 uppercase tracking-wide px-2">My Courses</h4>
                            <div className="space-y-1">
                                <div className="w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700">
                                    <div className="w-[6px] h-[6px] rounded-full bg-blue-500 shrink-0"></div>
                                    <span className="font-medium truncate">CS 202 - Data Structures</span>
                                </div>
                                <div className="w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700">
                                    <div className="w-[6px] h-[6px] rounded-full bg-purple-500 shrink-0"></div>
                                    <span className="font-medium truncate">MATH 201 - Calculus II</span>
                                </div>
                                <div className="w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700">
                                    <div className="w-[6px] h-[6px] rounded-full bg-green-500 shrink-0"></div>
                                    <span className="font-medium truncate">PSYC 101 - Intro Psychology</span>
                                </div>
                                <div className="w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700">
                                    <div className="w-[6px] h-[6px] rounded-full bg-orange-500 shrink-0"></div>
                                    <span className="font-medium truncate">PHYS 102 - Physics II</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="flex-1 min-w-0 lg:ml-0">
                        <FullCalendar
                            ref={calendarRef}
                            plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
                            initialView={isMobile ? "timeGridDay" : "timeGridWeek"}
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
                            nowIndicator={false}
                            initialDate={new Date()}
                            firstDay={1}
                            slotDuration="00:30:00"
                            slotLabelInterval="01:00"
                            eventMinHeight={40}
                            eventClassNames="rounded-[4px] border-0"
                            slotLabelClassNames="text-gray-700 text-[11px] sm:text-[13px] font-medium !px-2 sm:!px-3"
                            dayHeaderClassNames="text-gray-700 text-xs sm:text-sm font-medium"
                            slotLaneClassNames="border-gray-200/80"
                            nowIndicatorClassNames="!border-orange-600 !bg-gray-200/70"
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
                            height="auto"
                            aspectRatio={isMobile ? 1.8 : 1.35}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
