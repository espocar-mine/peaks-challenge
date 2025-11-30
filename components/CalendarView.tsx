import React from 'react';
import { WeekPlan } from '../types';
import { PHASE_COLORS } from '../constants';
import { format, parseISO, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, getDay } from 'date-fns';

interface Props {
  plans: WeekPlan[];
  currentDate: Date;
  onSelectWeek: (weekId: number) => void;
}

export const CalendarView: React.FC<Props> = ({ plans, currentDate, onSelectWeek }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Pad the start of the month
  const startDay = getDay(monthStart); // 0 = Sunday
  const paddingDays = startDay === 0 ? 6 : startDay - 1; // Make Monday start (1)
  
  const getDayPlan = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    for (const week of plans) {
      const day = week.days.find(d => d.date === dateStr);
      if (day) return { day, week };
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="grid grid-cols-7 border-b border-slate-100 bg-slate-50">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
          <div key={d} className="py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {d}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 auto-rows-fr">
        {Array.from({ length: paddingDays }).map((_, i) => (
          <div key={`pad-${i}`} className="h-32 bg-slate-50/50 border-b border-r border-slate-100" />
        ))}
        
        {daysInMonth.map(date => {
          const data = getDayPlan(date);
          const isToday = isSameDay(date, new Date());
          
          return (
            <div 
              key={date.toISOString()} 
              onClick={() => data && onSelectWeek(data.week.id)}
              className={`
                h-32 p-2 border-b border-r border-slate-100 relative group cursor-pointer transition-colors hover:bg-blue-50/30
                ${isToday ? 'bg-blue-50/50' : ''}
              `}
            >
              <span className={`
                text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full mb-1
                ${isToday ? 'bg-blue-600 text-white' : 'text-slate-700'}
              `}>
                {format(date, 'd')}
              </span>
              
              {data && data.day.session && data.day.session.type !== 'Rest' && (
                <div className="flex flex-col gap-1">
                  <div className={`text-[10px] px-1.5 py-0.5 rounded truncate font-medium ${PHASE_COLORS[data.week.phase] || 'bg-gray-100 text-gray-600'}`}>
                    {data.week.subPhase}
                  </div>
                  <div className="text-xs font-medium text-slate-800 leading-tight line-clamp-2">
                    {data.day.session.title}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {data.day.session.duration}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};