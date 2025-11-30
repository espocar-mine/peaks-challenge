import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { WeekPlan } from '../types';

interface Props {
  plans: WeekPlan[];
  currentWeekId: number;
  onWeekClick?: (weekId: number) => void;
}

export const StatsView: React.FC<Props> = ({ plans, currentWeekId, onWeekClick }) => {
  const data = plans.map(p => {
    // Convert "H:MM" to decimal hours
    const [h, m] = p.totalHours.split(':').map(Number);
    const decimal = h + (m / 60);
    return {
      name: String(p.id),
      hours: decimal,
      label: p.totalHours,
      active: p.id === currentWeekId
    };
  });

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <h3 className="text-lg font-bold text-slate-900 mb-6">Program Volume</h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fontSize: 11, fill: '#64748b', fontWeight: 500}}
              interval={0}
              dy={10}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis hide />
            <Tooltip 
              cursor={{fill: '#f1f5f9', radius: 4}}
              contentStyle={{
                borderRadius: '8px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                padding: '8px 12px'
              }}
              labelStyle={{ color: '#64748b', marginBottom: '4px', fontSize: '12px' }}
              itemStyle={{ color: '#0f172a', fontWeight: 600, fontSize: '14px' }}
              formatter={(value: number) => [`${value.toFixed(1)} hrs`, 'Volume']}
              labelFormatter={(label) => `Week ${label}`}
            />
            <Bar 
              dataKey="hours" 
              radius={[4, 4, 4, 4]}
              onClick={(data: any, index: number, e: any) => {
                if (onWeekClick && data) {
                  const weekId = parseInt(data.name);
                  onWeekClick(weekId);
                }
              }}
              style={{ cursor: onWeekClick ? 'pointer' : 'default' }}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.active ? '#2563eb' : '#e2e8f0'} 
                  className={onWeekClick ? "transition-all duration-300 hover:opacity-80 cursor-pointer" : "transition-all duration-300 hover:opacity-80"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between items-center text-xs text-slate-400 mt-6 px-2 border-t border-slate-100 pt-4">
        <span>Week 1</span>
        <span>Avg 10.5 hrs</span>
        <span>Week 16</span>
      </div>
    </div>
  );
};