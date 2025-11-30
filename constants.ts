import { SessionType } from './types';

export const SESSION_COLORS: Record<SessionType, string> = {
  [SessionType.REST]: 'bg-slate-100 text-slate-500 border-slate-200',
  [SessionType.RECOVERY]: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  [SessionType.AEROBIC]: 'bg-blue-100 text-blue-700 border-blue-200',
  [SessionType.TEMPO]: 'bg-cyan-100 text-cyan-700 border-cyan-200',
  [SessionType.THRESHOLD]: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  [SessionType.VO2MAX]: 'bg-red-100 text-red-700 border-red-200',
  [SessionType.STRENGTH]: 'bg-purple-100 text-purple-700 border-purple-200',
  [SessionType.TEST]: 'bg-orange-100 text-orange-800 border-orange-200',
  [SessionType.EVENT]: 'bg-indigo-600 text-white border-indigo-700',
};

export const PHASE_COLORS = {
  Base: 'text-blue-600 bg-blue-50',
  Build: 'text-orange-600 bg-orange-50',
  Focus: 'text-red-600 bg-red-50',
  Taper: 'text-emerald-600 bg-emerald-50',
};