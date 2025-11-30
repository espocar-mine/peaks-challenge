import React, { useState, useMemo } from 'react';
import { PLANS } from './data';
import { Session, PlanLevel } from './types';
import { WeekView } from './components/WeekView';
import { CalendarView } from './components/CalendarView';
import { SessionDetail } from './components/SessionDetail';
import { StatsView } from './components/StatsView';
import { ChevronLeft, ChevronRight, Calendar, BarChart2, List, Clock, Settings, Target } from 'lucide-react';
import { addMonths, subMonths, format, parseISO, differenceInWeeks, isBefore, isAfter } from 'date-fns';

const App: React.FC = () => {
  const [view, setView] = useState<'week' | 'month'>('week');
  const [planLevel, setPlanLevel] = useState<PlanLevel>('Low');
  const [currentWeekId, setCurrentWeekId] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date('2025-11-17')); // Start date of plan
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  const currentPlan = PLANS[planLevel];

  const currentWeek = useMemo(() => 
    currentPlan.find(w => w.id === currentWeekId) || currentPlan[0], 
    [currentWeekId, currentPlan]
  );

  const handleNextWeek = () => {
    if (currentWeekId < 16) {
      setCurrentWeekId(prev => prev + 1);
      const nextWeek = currentPlan.find(w => w.id === currentWeekId + 1);
      if (nextWeek) setCurrentDate(parseISO(nextWeek.startDate));
    }
  };

  const handlePrevWeek = () => {
    if (currentWeekId > 1) {
      setCurrentWeekId(prev => prev - 1);
      const prevWeek = currentPlan.find(w => w.id === currentWeekId - 1);
      if (prevWeek) setCurrentDate(parseISO(prevWeek.startDate));
    }
  };

  const handleMonthNav = (dir: 'prev' | 'next') => {
    setCurrentDate(prev => dir === 'next' ? addMonths(prev, 1) : subMonths(prev, 1));
  };

  const goToWeek = (weekId: number) => {
    setCurrentWeekId(weekId);
    setView('week');
    const week = currentPlan.find(w => w.id === weekId);
    if (week) setCurrentDate(parseISO(week.startDate));
  };

  const goToToday = () => {
    const today = new Date();
    const startDate = new Date('2025-11-17');
    
    // Check if we are before the start of the program
    if (isBefore(today, startDate)) {
      goToWeek(1);
      return;
    }

    const weeksDiff = differenceInWeeks(today, startDate) + 1;
    
    if (weeksDiff > 16) {
      goToWeek(16);
    } else if (weeksDiff < 1) {
      goToWeek(1);
    } else {
      goToWeek(weeksDiff);
    }
    
    // Also ensure the calendar view highlights today if we are in that mode
    setCurrentDate(today);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-40 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
              P
             </div>
             <div>
               <h1 className="text-xl font-bold tracking-tight">Peaks Challenge Falls Creek</h1>
               <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">Training Companion • 2026</p>
             </div>
          </div>
          
          <div className="flex flex-wrap gap-2 items-center">
            {/* Plan Selector */}
            <div className="mr-2 flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
               <Target size={14} className="ml-2 text-slate-400" />
               <select 
                  value={planLevel}
                  onChange={(e) => {
                    setPlanLevel(e.target.value as PlanLevel);
                    setCurrentWeekId(1); // Reset to week 1 to avoid data mismatch issues
                  }}
                  className="bg-transparent text-sm text-white font-medium py-1 px-2 outline-none border-none focus:ring-0 cursor-pointer"
               >
                 <option value="Low">Low Volume (7-15h)</option>
                 <option value="Intermediate">Intermediate (9-18h)</option>
                 <option value="High">High Volume (12-22h)</option>
               </select>
            </div>

            <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700">
              <button 
                onClick={() => setView('week')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${view === 'week' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                <List size={16} />
                <span className="hidden sm:inline">Weekly</span>
              </button>
              <button 
                onClick={() => setView('month')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${view === 'month' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                <Calendar size={16} />
                <span className="hidden sm:inline">Monthly</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Navigation Controls */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-2">
            <button 
              onClick={goToToday}
              className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors shadow-sm"
            >
              <Clock size={16} />
              Today
            </button>
          </div>

          <div className="flex items-center gap-4">
            {view === 'week' ? (
              <>
                <button 
                  onClick={handlePrevWeek}
                  disabled={currentWeekId === 1}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="font-semibold text-slate-700 min-w-[100px] text-center">
                  Week {currentWeekId} / 16
                </span>
                <button 
                  onClick={handleNextWeek}
                  disabled={currentWeekId === 16}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => handleMonthNav('prev')}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  <ChevronLeft size={16} />
                  {format(subMonths(currentDate, 1), 'MMM')}
                </button>
                <span className="font-bold text-lg text-slate-800 min-w-[140px] text-center">
                  {format(currentDate, 'MMMM yyyy')}
                </span>
                <button 
                  onClick={() => handleMonthNav('next')}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  {format(addMonths(currentDate, 1), 'MMM')}
                  <ChevronRight size={16} />
                </button>
              </>
            )}
          </div>
          
          <div className="w-[88px]"></div> {/* Spacer for alignment */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {view === 'week' ? (
              <WeekView 
                week={currentWeek} 
                onSelectSession={setSelectedSession}
              />
            ) : (
              <CalendarView 
                plans={currentPlan} 
                currentDate={currentDate}
                onSelectWeek={goToWeek}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <StatsView 
              plans={currentPlan} 
              currentWeekId={currentWeekId} 
              onSelectWeek={goToWeek}
            />
            
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="font-bold text-lg mb-2">Training Zones</h3>
              <p className="text-blue-100 text-sm mb-4">
                Remember to keep your Zone 2 rides strictly aerobic. Consistency is key.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center bg-white/10 px-3 py-2 rounded">
                  <span>Z2 Aerobic</span>
                  <span className="font-mono">56-75% FTP</span>
                </div>
                <div className="flex justify-between items-center bg-white/10 px-3 py-2 rounded">
                  <span>Z3 Tempo</span>
                  <span className="font-mono">76-90% FTP</span>
                </div>
                 <div className="flex justify-between items-center bg-white/10 px-3 py-2 rounded">
                  <span>Z4 Threshold</span>
                  <span className="font-mono">91-105% FTP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      {selectedSession && (
        <SessionDetail 
          session={selectedSession} 
          onClose={() => setSelectedSession(null)} 
        />
      )}
    </div>
  );
};

export default App;