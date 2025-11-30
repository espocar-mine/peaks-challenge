export enum SessionType {
  REST = 'Rest',
  RECOVERY = 'Recovery',
  AEROBIC = 'Aerobic',
  TEMPO = 'Tempo',
  THRESHOLD = 'Threshold',
  VO2MAX = 'VO2 Max',
  STRENGTH = 'Strength',
  TEST = 'Test',
  EVENT = 'Event'
}

export enum Phase {
  BASE = 'Base',
  BUILD = 'Build',
  FOCUS = 'Focus',
  TAPER = 'Taper'
}

export interface Session {
  id: string;
  title: string;
  duration: string; // e.g., "1:00"
  type: SessionType;
  description: string;
  mainSet?: string;
  warmUp?: string;
  coolDown?: string;
  rpe?: string; // 1-10
  tss?: number; // Approximate Training Stress Score if available (optional)
}

export interface DaySchedule {
  date: string; // ISO string YYYY-MM-DD
  dayOfWeek: string; // Monday, Tuesday, etc.
  session: Session | null; // Null means rest day usually, or specific 'Rest' session
}

export interface WeekPlan {
  id: number;
  startDate: string;
  endDate: string;
  phase: Phase;
  subPhase: string; // e.g., "Base 1"
  totalHours: string;
  description: string;
  days: DaySchedule[];
}