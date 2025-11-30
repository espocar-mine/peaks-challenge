import React from 'react';
import { Session, SessionType } from '../types';
import { SESSION_COLORS } from '../constants';
import { X, Clock, Activity, Info, Zap } from 'lucide-react';

interface Props {
  session: Session;
  onClose: () => void;
}

export const SessionDetail: React.FC<Props> = ({ session, onClose }) => {
  const colorClass = SESSION_COLORS[session.type] || 'bg-gray-100';
  // Extract border color for accent
  const borderColor = colorClass.split(' ').find(c => c.startsWith('border-'))?.replace('border-', 'bg-') || 'bg-gray-500';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200" 
        onClick={e => e.stopPropagation()}
      >
        <div className={`p-6 border-b ${colorClass} bg-opacity-20`}>
          <div className="flex justify-between items-start">
            <div>
               <span className={`inline-block px-2 py-1 text-xs font-bold uppercase tracking-wider rounded-md mb-2 ${colorClass} bg-opacity-100 bg-white border`}>
                {session.type}
              </span>
              <h2 className="text-2xl font-bold text-slate-900">{session.title}</h2>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-black/10 rounded-full transition-colors">
              <X size={24} className="text-slate-600" />
            </button>
          </div>
          <div className="flex items-center gap-4 mt-4 text-slate-700">
            <div className="flex items-center gap-1">
              <Clock size={18} />
              <span className="font-medium">{session.duration}</span>
            </div>
            {session.rpe && (
              <div className="flex items-center gap-1">
                <Activity size={18} />
                <span>RPE {session.rpe}/10</span>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
              <Info size={16} />
              Overview
            </h3>
            <p className="text-slate-700 leading-relaxed">{session.description}</p>
          </div>

          {session.warmUp && (
             <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <h3 className="text-sm font-semibold text-slate-500 mb-1">Warm Up</h3>
              <p className="text-slate-700">{session.warmUp}</p>
            </div>
          )}

          {session.mainSet && (
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
               <h3 className="flex items-center gap-2 text-sm font-bold text-blue-800 mb-2">
                <Zap size={16} />
                MAIN SET
              </h3>
              <p className="text-slate-800 whitespace-pre-line leading-relaxed font-medium">
                {session.mainSet}
              </p>
            </div>
          )}

           {session.coolDown && (
             <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <h3 className="text-sm font-semibold text-slate-500 mb-1">Cool Down</h3>
              <p className="text-slate-700">{session.coolDown}</p>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};