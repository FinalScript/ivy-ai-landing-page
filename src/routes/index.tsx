import { EventContentArg, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { createFileRoute, Link } from '@tanstack/react-router';
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
    Users
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Route = createFileRoute('/')({
    component: Index,
});

const currentDate = new Date();

// Helper function to format the current month and year
const formatMonthYear = (date: Date) => {
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
};

// Helper function to get date for current week
const getDateForCurrentWeek = (dayOfWeek: number, timeString: string) => {
    const date = new Date();
    const currentDay = date.getDay();
    const daysToMonday = currentDay === 0 ? 1 : (1 - currentDay);
    const daysToAdd = daysToMonday + (dayOfWeek - 1);
    date.setDate(date.getDate() + daysToAdd);
    const [hours, minutes] = timeString.split(':');
    date.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);
    return date;
};

const events: EventInput[] = [
    // Monday Events
    {
        title: 'CS 202 Lecture',
        start: getDateForCurrentWeek(1, '09:00'),
        end: getDateForCurrentWeek(1, '10:30'),
        backgroundColor: 'rgb(219 234 254)',
        borderColor: 'rgb(219 234 254)',
        textColor: 'rgb(29 78 216)',
        extendedProps: {
            icon: 'graduation',
            type: 'lecture'
        }
    },
    {
        title: 'CS 202 Assignment 3',
        start: getDateForCurrentWeek(1, '11:00'),
        backgroundColor: 'rgb(219 234 254)',
        borderColor: 'rgb(219 234 254)',
        textColor: 'rgb(29 78 216)',
        extendedProps: {
            icon: 'file',
            type: 'assignment'
        }
    },
    {
        title: 'PSYC 101 Lecture',
        start: getDateForCurrentWeek(1, '12:00'),
        end: getDateForCurrentWeek(1, '13:30'),
        backgroundColor: 'rgb(220 252 231)',
        borderColor: 'rgb(220 252 231)',
        textColor: 'rgb(21 128 61)',
        extendedProps: {
            icon: 'graduation',
            type: 'lecture'
        }
    },
    // Tuesday Events
    {
        title: 'MATH 201 Lecture',
        start: getDateForCurrentWeek(2, '10:30'),
        end: getDateForCurrentWeek(2, '12:00'),
        backgroundColor: 'rgb(254 226 226)',
        borderColor: 'rgb(254 226 226)',
        textColor: 'rgb(185 28 28)',
        extendedProps: {
            icon: 'graduation',
            type: 'lecture'
        }
    },
    {
        title: 'MATH 201 Quiz',
        start: getDateForCurrentWeek(2, '12:30'),
        end: getDateForCurrentWeek(2, '12:45'),
        backgroundColor: 'rgb(254 226 226)',
        borderColor: 'rgb(254 226 226)',
        textColor: 'rgb(185 28 28)',
        extendedProps: {
            icon: 'alert',
            type: 'quiz'
        }
    },
    {
        title: 'PHYS 102 Lecture',
        start: getDateForCurrentWeek(2, '13:30'),
        end: getDateForCurrentWeek(2, '16:30'),
        backgroundColor: 'rgb(255 237 213)',
        borderColor: 'rgb(255 237 213)',
        textColor: 'rgb(194 65 12)',
        extendedProps: {
            icon: 'graduation',
            type: 'lecture'
        }
    },
    // Wednesday Events
    {
        title: 'CS 202 Lecture',
        start: getDateForCurrentWeek(3, '09:00'),
        end: getDateForCurrentWeek(3, '10:30'),
        backgroundColor: 'rgb(219 234 254)',
        borderColor: 'rgb(219 234 254)',
        textColor: 'rgb(29 78 216)',
        extendedProps: {
            icon: 'graduation',
            type: 'lecture'
        }
    },
    {
        title: 'MATH 201 Quiz',
        start: getDateForCurrentWeek(3, '11:00'),
        backgroundColor: 'rgb(243 232 255)',
        borderColor: 'rgb(243 232 255)',
        textColor: 'rgb(126 34 206)',
        extendedProps: {
            icon: 'alert',
            type: 'quiz'
        }
    },
    {
        title: 'PSYC 101 Lecture',
        start: getDateForCurrentWeek(3, '12:00'),
        end: getDateForCurrentWeek(3, '13:30'),
        backgroundColor: 'rgb(220 252 231)',
        borderColor: 'rgb(220 252 231)',
        textColor: 'rgb(21 128 61)',
        extendedProps: {
            icon: 'graduation',
            type: 'lecture'
        }
    },
    // Thursday Events
    {
        title: 'MATH 201 Lecture',
        start: getDateForCurrentWeek(4, '10:30'),
        end: getDateForCurrentWeek(4, '12:00'),
        backgroundColor: 'rgb(243 232 255)',
        borderColor: 'rgb(243 232 255)',
        textColor: 'rgb(126 34 206)',
        extendedProps: {
            icon: 'graduation',
            type: 'lecture'
        }
    },
    {
        title: 'PHYS 102 Assignment 4',
        start: getDateForCurrentWeek(4, '12:30'),
        backgroundColor: 'rgb(255 237 213)',
        borderColor: 'rgb(255 237 213)',
        textColor: 'rgb(194 65 12)',
        extendedProps: {
            icon: 'file',
            type: 'assignment'
        }
    },
    {
        title: 'PHYS 102 Lab',
        start: getDateForCurrentWeek(4, '13:30'),
        end: getDateForCurrentWeek(4, '16:30'),
        backgroundColor: 'rgb(255 237 213)',
        borderColor: 'rgb(255 237 213)',
        textColor: 'rgb(194 65 12)',
        extendedProps: {
            icon: 'monitor',
            type: 'lab'
        }
    },
    // Friday Events
    {
        title: 'CS 202 Lab',
        start: getDateForCurrentWeek(5, '09:00'),
        end: getDateForCurrentWeek(5, '11:00'),
        backgroundColor: 'rgb(219 234 254)',
        borderColor: 'rgb(219 234 254)',
        textColor: 'rgb(29 78 216)',
        extendedProps: {
            icon: 'monitor',
            type: 'lab'
        }
    },
    {
        title: 'MATH 201 Tutorial',
        start: getDateForCurrentWeek(5, '12:00'),
        end: getDateForCurrentWeek(5, '13:30'),
        backgroundColor: 'rgb(254 226 226)',
        borderColor: 'rgb(254 226 226)',
        textColor: 'rgb(185 28 28)',
        extendedProps: {
            icon: 'users',
            type: 'tutorial'
        }
    },
    {
        title: 'PSYC 101 Assignment 3',
        start: getDateForCurrentWeek(5, '14:00'),
        backgroundColor: 'rgb(220 252 231)',
        borderColor: 'rgb(220 252 231)',
        textColor: 'rgb(21 128 61)',
        extendedProps: {
            icon: 'file',
            type: 'assignment'
        }
    },
    // Saturday Events
    {
        title: 'PHYS 102 Study Group',
        start: getDateForCurrentWeek(6, '11:00'),
        end: getDateForCurrentWeek(6, '14:00'),
        backgroundColor: 'rgb(255 237 213)',
        borderColor: 'rgb(255 237 213)',
        textColor: 'rgb(194 65 12)',
        extendedProps: {
            icon: 'users',
            type: 'study'
        }
    }
];

function Index() {
    const calendarRef = useRef<any>(null);

    // Log the events when component mounts
    useEffect(() => {
        console.log(new Date().toISOString());
    }, []);

    const renderEventContent = (eventInfo: EventContentArg) => {
        console.log('Rendering event:', eventInfo.event);
        const icon = eventInfo.event.extendedProps.icon;
        const isShortEvent = eventInfo.event.end && eventInfo.event.start &&
            (eventInfo.event.end.getTime() - eventInfo.event.start.getTime()) <= 30 * 60 * 1000;

        return (
            <div className={twMerge('p-1.5 flex flex-col h-full relative', isShortEvent ? 'justify-center' : 'justify-between')}>
                <div className='flex flex-col min-w-0 pr-4'>
                    <span className='text-[10px] leading-tight font-medium break-words'>
                        {eventInfo.event.title}
                    </span>
                    {!isShortEvent && eventInfo.timeText && (
                        <div className='text-[10px] leading-tight opacity-70 mt-0.5'>
                            {eventInfo.timeText}
                        </div>
                    )}
                </div>
                <div className='absolute bottom-1 right-1'>
                    {icon === 'graduation' && <GraduationCap className='w-3.5 h-3.5' />}
                    {icon === 'file' && <FileText className='w-3.5 h-3.5' />}
                    {icon === 'monitor' && <Monitor className='w-3.5 h-3.5' />}
                    {icon === 'alert' && <AlertCircle className='w-3.5 h-3.5' />}
                    {icon === 'users' && <Users className='w-3.5 h-3.5' />}
                </div>
            </div>
        );
    };

    return (
        <div className='min-h-screen bg-white text-[#171919] font-sans'>
            {/* Navigation */}
            <nav className='bg-white backdrop-blur-md z-50 border-b border-[#171919]/10'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-16'>
                        {/* Logo */}
                        <Link to='/' className='text-lg font-bold'>
                            Ivy AI
                        </Link>

                        {/* Navigation Links */}
                        <div className='hidden md:flex items-center space-x-8'>
                            <a href='#features' className='text-[15px] text-gray-600 hover:text-[#11ba82] transition-colors font-semibold'>
                                Features
                            </a>
                            <a href='#how-it-works' className='text-[15px] text-gray-600 hover:text-[#11ba82] transition-colors font-semibold'>
                                How It Works
                            </a>
                        </div>

                        {/* Auth Buttons */}
                        <div className='flex items-center space-x-4'>
                            <Link
                                to='/'
                                className='bg-[#11ba82] text-[#fffffa] px-5 py-2 rounded-3xl text-[15px] font-semibold hover:bg-[#0ea371] transition-colors'>
                                Try Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className='h-[75vh] flex items-center px-4 sm:px-6 lg:px-8 relative'>
                <div className='max-w-7xl w-full mx-auto relative'>
                    {/* Floating Elements */}
                    <div className='absolute -left-20 top-20 transform -rotate-12 bg-white p-4 rounded-[10px] shadow-lg select-none'>
                        <div className='flex items-center space-x-2'>
                            <div className='w-8 h-8 bg-orange-100 rounded-[8px] flex items-center justify-center'>
                                <span className='text-orange-600 font-semibold'>P</span>
                            </div>
                            <div className='space-y-0.5'>
                                <p className='text-[13px] text-gray-900 font-semibold'>PSYC 101 Midterm</p>
                                <p className='text-[11px] text-gray-500 font-medium'>Next Tuesday • 2:30 PM<br />Chapters 4-7 • Room 302</p>
                            </div>
                        </div>
                    </div>

                    <div className='absolute -right-10 top-10 transform rotate-6 bg-white p-4 rounded-[10px] shadow-lg select-none'>
                        <div className='flex items-center space-x-2'>
                            <div className='w-8 h-8 bg-red-100 rounded-[8px] flex items-center justify-center'>
                                <span className='text-red-600 font-semibold'>C</span>
                            </div>
                            <div className='space-y-0.5'>
                                <p className='text-[13px] text-gray-900 font-semibold'>CS 202 Assignment 4</p>
                                <p className='text-[11px] text-gray-500 font-medium'> Tomorrow • 11:59 PM<br />Binary Trees & Heaps</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className='text-center max-w-3xl mx-auto'>
                        <h1 className='text-7xl leading-[1.1] font-extrabold mb-6'>
                            Stay more <span className='text-[#11ba82]'>organized</span>
                            <br />and less stressed
                        </h1>
                        <p className='text-[16px] leading-[1.6] text-[#171919]/70 mb-8 font-semibold'>
                            Upload your course outlines and schedules—our AI instantly creates a
                            <br />
                            smart calendar that syncs with your favorite calendar apps.
                        </p>
                        <button className='bg-[#11ba82] text-[#fffffa] px-8 py-3 rounded-3xl text-[16px] font-semibold hover:bg-[#0ea371] transition-colors'>
                            Try Interactive Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Calendar Demo */}
            <div className='max-w-6xl mx-auto p-8 select-none'>
                <div className='bg-white rounded-[12px] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08),0_8px_32px_-2px_rgba(0,0,0,0.12),0_0_48px_0_rgba(0,0,0,0.06)] overflow-hidden border border-gray-100/50 backdrop-blur-xl relative ring-1 ring-black/5'>
                    <div className='absolute inset-0 bg-gradient-to-b from-white/50 to-white/95 pointer-events-none'></div>

                    {/* Calendar Header */}
                    <div className='border-b border-gray-100'>
                        {/* Top Bar */}
                        <div className='p-3 flex items-center bg-gray-50/90 backdrop-blur-xl border-b border-gray-200/80 relative z-10'>
                            <div className='flex items-center space-x-1.5'>
                                <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                                <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                                <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                            </div>
                            <div className='flex-1 mx-24'>
                                <div className='mx-auto max-w-2xl bg-gray-200/70 backdrop-blur-sm px-3 py-1.5 rounded-md flex items-center gap-1 border border-gray-200/60'>
                                    <div className='flex items-center gap-2'>
                                        <Lock className='w-3.5 h-3.5 text-gray-400' />
                                        <span className='text-[13px] text-gray-500 font-medium'>https://</span>
                                    </div>
                                    <span className='text-[13px] text-gray-500'>{window.location.host}/calendar</span>
                                </div>
                            </div>

                        </div>

                        {/* Sub Header */}
                        <div className='p-4 flex items-center justify-between bg-white/95 backdrop-blur-xl relative z-10'>
                            <div className='flex items-center gap-3'>
                                <Calendar className='w-5 h-5 text-orange-500' />
                                <h2 className='text-lg font-semibold text-gray-900'>Ivy AI Dashboard</h2>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='p-2'>
                                    <Bell className='w-5 h-5 text-gray-500' />
                                </div>
                                <div className='p-2'>
                                    <Search className='w-5 h-5 text-gray-500' />
                                </div>
                                <div className='flex items-center gap-2 bg-orange-500 text-[#fffffa] px-3 py-1.5 rounded-full text-sm font-semibold'>
                                    <Plus className='w-4 h-4' />
                                    Add Event
                                </div>
                            </div>
                        </div>

                        {/* Navigation Bar */}
                        <div className='px-6 py-3 flex items-center justify-between border-t border-b border-gray-200/80 bg-white/95 backdrop-blur-xl relative z-10'>
                            <div className='flex items-center gap-4'>
                                <div className='flex items-center gap-3'>
                                    <h3 className='text-xl font-semibold text-gray-900'>{formatMonthYear(currentDate)}</h3>
                                    <div className='text-sm text-gray-500 font-medium'>Winter Term</div>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <div className='p-1.5 hover:bg-gray-100 rounded-md cursor-pointer'>
                                        <ChevronLeft className='w-4 h-4 text-gray-400' />
                                    </div>
                                    <div className='p-1.5 hover:bg-gray-100 rounded-md cursor-pointer'>
                                        <ChevronRight className='w-4 h-4 text-gray-400' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='text-sm text-gray-700 px-3 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer'>Today</div>
                                <div className='h-4 w-[1px] bg-gray-300'></div>
                                <div className='text-sm text-gray-700 px-3 py-1.5 rounded-md bg-gray-100'>Week</div>
                                <div className='text-sm text-gray-700 px-3 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer'>Month</div>
                            </div>
                        </div>
                    </div>

                    {/* Calendar Content */}
                    <div className='flex'>
                        {/* Sidebar */}
                        <div className='w-64 shrink-0 py-6 px-4 space-y-6 bg-gray-50/90 backdrop-blur-xl border-r border-gray-200/80 relative z-10'>
                            <div className='space-y-3'>
                                <h4 className='text-[13px] font-semibold text-gray-900 uppercase tracking-wide px-2'>Quick Access</h4>
                                <div className='space-y-1'>
                                    <div className='w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700'>
                                        <BookOpen className='w-[18px] h-[18px] text-gray-400' />
                                        <span className='font-medium truncate'>Courses</span>
                                    </div>
                                    <div className='w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700'>
                                        <ListTodo className='w-[18px] h-[18px] text-gray-400' />
                                        <span className='font-medium truncate'>Assignments</span>
                                    </div>
                                    <div className='w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700'>
                                        <AlertCircle className='w-[18px] h-[18px] text-gray-400' />
                                        <span className='font-medium truncate'>Quizzes</span>
                                    </div>
                                    <div className='w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700'>
                                        <GraduationCap className='w-[18px] h-[18px] text-gray-400' />
                                        <span className='font-medium truncate'>Exams</span>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[1px] bg-gray-200'></div>
                            <div className='space-y-3'>
                                <h4 className='text-[13px] font-semibold text-gray-900 uppercase tracking-wide px-2'>My Courses</h4>
                                <div className='space-y-1'>
                                    <div className='w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-blue-500 shrink-0'></div>
                                        <span className='font-medium truncate'>CS 202 - Data Structures</span>
                                    </div>
                                    <div className='w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-purple-500 shrink-0'></div>
                                        <span className='font-medium truncate'>MATH 201 - Calculus II</span>
                                    </div>
                                    <div className='w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-green-500 shrink-0'></div>
                                        <span className='font-medium truncate'>PSYC 101 - Intro Psychology</span>
                                    </div>
                                    <div className='w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-gray-700'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-orange-500 shrink-0'></div>
                                        <span className='font-medium truncate'>PHYS 102 - Physics II</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className='flex-1 min-w-0'>
                            <FullCalendar
                                ref={calendarRef}
                                plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
                                initialView='timeGridWeek'
                                headerToolbar={false}
                                events={events}
                                eventContent={renderEventContent}
                                allDaySlot={false}
                                slotMinTime='08:00:00'
                                slotMaxTime='18:00:00'
                                expandRows={true}
                                dayHeaderFormat={{ weekday: 'short', day: 'numeric' }}
                                slotLabelFormat={{
                                    hour: 'numeric',
                                    minute: '2-digit',
                                    meridiem: 'short'
                                }}
                                nowIndicator={false}
                                initialDate={new Date()}
                                firstDay={1}
                                slotDuration='00:30:00'
                                slotLabelInterval='01:00'
                                eventMinHeight={40}
                                eventClassNames='rounded-[4px] border-0'
                                slotLabelClassNames='text-gray-700 text-[13px] font-medium !px-3'
                                dayHeaderClassNames='text-gray-700 text-sm font-medium'
                                slotLaneClassNames='border-gray-200/80 '
                                nowIndicatorClassNames='!border-orange-600 !bg-gray-200/70'
                                editable={true}
                                droppable={true}
                                selectable={true}
                                displayEventEnd={true}
                                eventDisplay="block"
                                eventTimeFormat={{
                                    hour: 'numeric',
                                    minute: '2-digit',
                                    meridiem: 'short'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div id='features' className='py-24 bg-white scroll-mt-16'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-20'>
                        <span className='text-[#11ba82] font-semibold text-sm tracking-wider uppercase mb-3 block'>Features</span>
                        <h2 className='text-4xl font-bold text-[#171919] mb-4'>Your Academic Life, Intelligently Organized</h2>
                        <div className='w-20 h-1.5 bg-[#11ba82] mx-auto rounded-full'></div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-white p-8 rounded-2xl shadow-sm'>
                            <div className='w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6'>
                                <FileText className='w-6 h-6 text-orange-600' />
                            </div>
                            <h3 className='text-xl font-semibold text-[#171919] mb-3'>AI-Powered Syllabus Analysis</h3>
                            <p className='text-[#171919]/70 leading-relaxed'>
                                Our advanced AI reads and understands your course outlines like a human would, automatically extracting key dates and requirements.
                            </p>
                        </div>
                        <div className='bg-white p-8 rounded-2xl shadow-sm'>
                            <div className='w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6'>
                                <Bell className='w-6 h-6 text-orange-600' />
                            </div>
                            <h3 className='text-xl font-semibold text-[#171919] mb-3'>Smart Study Reminders</h3>
                            <p className='text-[#171919]/70 leading-relaxed'>
                                Get intelligent notifications that adapt to your study patterns and help you stay ahead of deadlines.
                            </p>
                        </div>
                        <div className='bg-white p-8 rounded-2xl shadow-sm'>
                            <div className='w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6'>
                                <Calendar className='w-6 h-6 text-orange-600' />
                            </div>
                            <h3 className='text-xl font-semibold text-[#171919] mb-3'>Universal Calendar Sync</h3>
                            <p className='text-[#171919]/70 leading-relaxed'>
                                Seamlessly integrates with Google Calendar, Apple Calendar, and other popular platforms to keep you in sync everywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div id='how-it-works' className='py-24 bg-white scroll-mt-16'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-20'>
                        <span className='text-[#11ba82] font-semibold text-sm tracking-wider uppercase mb-3 block'>How It Works</span>
                        <h2 className='text-4xl font-bold text-[#171919] mb-4'>Simple Steps to Academic Success</h2>
                        <div className='w-20 h-1.5 bg-[#11ba82] mx-auto rounded-full'></div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                        <div className='bg-white p-8 rounded-2xl shadow-sm'>
                            <div className='w-16 h-16 bg-[#ba1511]/10 rounded-xl flex items-center justify-center mb-6'>
                                <FileText className='w-8 h-8 text-[#ba1511]' />
                            </div>
                            <span className='bg-[#ba1511]/10 text-[#ba1511] text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4'>Step 1</span>
                            <h3 className='text-xl font-semibold text-[#171919] mb-3'>Upload Your Syllabi</h3>
                            <p className='text-[#171919]/70 leading-relaxed'>
                                Simply upload your course syllabi and materials. Our AI will automatically process and analyze them.
                            </p>
                        </div>
                        <div className='bg-white p-8 rounded-2xl shadow-sm'>
                            <div className='w-16 h-16 bg-[#ba1511]/10 rounded-xl flex items-center justify-center mb-6'>
                                <Calendar className='w-8 h-8 text-[#ba1511]' />
                            </div>
                            <span className='bg-[#ba1511]/10 text-[#ba1511] text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4'>Step 2</span>
                            <h3 className='text-xl font-semibold text-[#171919] mb-3'>Review & Customize</h3>
                            <p className='text-[#171919]/70 leading-relaxed'>
                                Check the automatically generated schedule and customize it to match your preferences.
                            </p>
                        </div>
                        <div className='bg-white p-8 rounded-2xl shadow-sm'>
                            <div className='w-16 h-16 bg-[#ba1511]/10 rounded-xl flex items-center justify-center mb-6'>
                                <Monitor className='w-8 h-8 text-[#ba1511]' />
                            </div>
                            <span className='bg-[#ba1511]/10 text-[#ba1511] text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4'>Step 3</span>
                            <h3 className='text-xl font-semibold text-[#171919] mb-3'>Stay Organized</h3>
                            <p className='text-[#171919]/70 leading-relaxed'>
                                Access your schedule anywhere and receive smart notifications for upcoming deadlines.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className='bg-white text-[#171919] py-16 border-t border-gray-200'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                        <div className='space-y-4'>
                            <Link to='/' className='text-2xl font-bold block text-[#171919]'>
                                Ivy AI
                            </Link>
                            <p className='text-gray-600 text-sm'>
                                Empowering students with AI-driven organization tools for academic success.
                            </p>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold mb-4 text-[#171919]'>Product</h4>
                            <ul className='space-y-2'>
                                <li><Link to='/' className='text-gray-600 hover:text-[#11ba82] transition-colors'>Features</Link></li>
                                <li><Link to='/' className='text-gray-600 hover:text-[#11ba82] transition-colors'>How It Works</Link></li>
                                <li><Link to='/' className='text-gray-600 hover:text-[#11ba82] transition-colors'>Early Access</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold mb-4 text-[#171919]'>Company</h4>
                            <ul className='space-y-2'>
                                <li><Link to='/' className='text-gray-600 hover:text-[#11ba82] transition-colors'>About</Link></li>
                                <li><Link to='/' className='text-gray-600 hover:text-[#11ba82] transition-colors'>Contact</Link></li>
                                <li><Link to='/' className='text-gray-600 hover:text-[#11ba82] transition-colors'>Privacy Policy</Link></li>
                            </ul>
                        </div>
                       
                    </div>
                    <div className='mt-12 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm'>
                        <p>&copy; {new Date().getFullYear()} Ivy AI. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

