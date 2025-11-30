import React from 'react';
import { WeekPlan, SessionType } from '../types';
import { SESSION_COLORS } from '../constants';
import { format, parseISO } from 'date-fns';
import { Clock } from 'lucide-react';

interface Props {
  week: WeekPlan;
  onSelectSession: (session: any) => void;
}

export const WeekView: React.FC<Props> = ({ week, onSelectSession }) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
           <h2 className="text-2xl font-bold text-slate-900">Week {week.id}: {week.subPhase}</h2>
           <p className="text-slate-500">{format(parseISO(week.startDate), 'MMM d')} - {format(parseISO(week.endDate), 'MMM d, yyyy')}</p>
        </div>
        <div className="mt-2 md:mt-0 px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-600">
          Total Volume: {week.totalHours}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {week.days.map((day, idx) => {
          const isRest = day.session?.type === SessionType.REST;
          return (
            <div 
              key={idx} 
              className={`
                relative flex flex-col p-3 rounded-xl border transition-all duration-200 min-h-[140px]
                ${isRest ? 'bg-slate-50 border-slate-100 md:opacity-75' : 'bg-white border-slate-200 hover:shadow-md cursor-pointer group'}
              `}
              onClick={() => !isRest && day.session && onSelectSession(day.session)}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                  {day.dayOfWeek.substring(0, 3)}
                </span>
                <span className="text-xs text-slate-400">
                  {format(parseISO(day.date), 'd')}
                </span>
              </div>
              
              {day.session ? (
                <>
                  <div className={`
                    text-[10px] font-bold px-2 py-0.5 rounded w-fit mb-2
                    ${SESSION_COLORS[day.session.type]}
                  `}>
                    {day.session.type}
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm leading-tight mb-2 group-hover:text-blue-600 transition-colors break-words hyphens-auto">
                    {day.session.title}
                  </h3>
                  {day.session.duration !== '-' && (
                    <div className="mt-auto flex items-center gap-1 text-slate-500 text-xs pt-2">
                      <Clock size={12} />
                      {day.session.duration}
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center flex-grow text-slate-300 text-sm italic">
                  Rest
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
        <h3 className="text-blue-900 font-bold mb-2">Phase Focus</h3>
        <p className="text-blue-800">{week.description}</p>
      </div>
    </div>
  );
};