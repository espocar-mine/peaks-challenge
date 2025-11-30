import { WeekPlan, SessionType, Phase, PlanLevel } from './types';

// Helper to generate dates relative to start date
const START_DATE = new Date('2025-11-17'); // Nov 17 2025 based on PDF

const addDays = (date: Date, days: number): string => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toISOString().split('T')[0];
};

const LOW_VOLUME_PLAN: WeekPlan[] = [
  {
    id: 1,
    startDate: addDays(START_DATE, 0),
    endDate: addDays(START_DATE, 6),
    phase: Phase.BASE,
    subPhase: 'Base 1',
    totalHours: '7:00',
    description: 'Establish baseline fitness and testing.',
    days: [
      { date: addDays(START_DATE, 0), dayOfWeek: 'Monday', session: { id: '1-1', title: '20 Min FTP Test', duration: '1:00', type: SessionType.TEST, description: 'Use today to check if Training Zones need updating. Ensure you are motivated and mentally prepared.', warmUp: '10 min building close to threshold.', mainSet: '20 min at your best sustainable power. Keep it steady. Don\'t go out too hard! Aim for 103-105% of known FTP if on trainer.', coolDown: 'Spin easy to finish.' } },
      { date: addDays(START_DATE, 1), dayOfWeek: 'Tuesday', session: { id: '1-2', title: '4x10 Min Strength Efforts', duration: '1:00', type: SessionType.STRENGTH, description: 'Long sustained effort that fatigues the legs in the later half. Sub-threshold.', mainSet: '4 x 10 min on 2 min recovery. Target High Z2 Power (75% FTP). Low cadence (40-60 rpm) to build strength.' } },
      { date: addDays(START_DATE, 2), dayOfWeek: 'Wednesday', session: { id: '1-3', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest and recover.' } },
      { date: addDays(START_DATE, 3), dayOfWeek: 'Thursday', session: { id: '1-4', title: 'Aerobic Capacity', duration: '1:00', type: SessionType.AEROBIC, description: 'Targets efficiency. Longer sustained efforts holding specific heart rate.', mainSet: '3 to 6 x 10 min on 2 min recovery at top of Z2 Heart Rate. Cadence 90-100 rpm.' } },
      { date: addDays(START_DATE, 4), dayOfWeek: 'Friday', session: { id: '1-5', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest and recover.' } },
      { date: addDays(START_DATE, 5), dayOfWeek: 'Saturday', session: { id: '1-6', title: 'Strength Endurance', duration: '3:00', type: SessionType.STRENGTH, description: 'Ride the rest of the ride by feel with a focus on pushing a bigger gear when appropriate.', mainSet: '3 to 5 x 8 min Strength Efforts (SE) @ 50-60 rpm. Target High Z3 to Mid Z4 Power. Find a solid climb.' } },
      { date: addDays(START_DATE, 6), dayOfWeek: 'Sunday', session: { id: '1-7', title: 'Aerobic Ride', duration: '1:00', type: SessionType.AEROBIC, description: 'Ride by feel. Nothing hard, just enough to get in some endurance.', mainSet: 'Aim for 20-60min efforts close to 75-80% of FTP at 100+ rpm if legs feel good.' } },
    ]
  },
  {
    id: 2,
    startDate: addDays(START_DATE, 7),
    endDate: addDays(START_DATE, 13),
    phase: Phase.BASE,
    subPhase: 'Base 2',
    totalHours: '8:15',
    description: 'Building aerobic base and strength.',
    days: [
      { date: addDays(START_DATE, 7), dayOfWeek: 'Monday', session: { id: '2-1', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 8), dayOfWeek: 'Tuesday', session: { id: '2-2', title: '5x10 Min Strength Efforts', duration: '1:00', type: SessionType.STRENGTH, description: 'Long sustained effort sub-threshold.', mainSet: '5 x 10 min on 2 min recovery. Target High Z2 Power (75% FTP) at 40-60 rpm.' } },
      { date: addDays(START_DATE, 9), dayOfWeek: 'Wednesday', session: { id: '2-3', title: 'Aerobic Ride', duration: '1:00', type: SessionType.AEROBIC, description: 'Go by feel.', mainSet: 'Aim for 20-60min efforts close to 75-80% FTP at 100+ rpm.' } },
      { date: addDays(START_DATE, 10), dayOfWeek: 'Thursday', session: { id: '2-4', title: 'Aerobic Capacity', duration: '1:15', type: SessionType.AEROBIC, description: 'Targets efficiency. Can be done fasted.', mainSet: '3 to 4 x 10 min on 2 min recovery at top of Z2 Heart Rate. Cadence 90-100 rpm.' } },
      { date: addDays(START_DATE, 11), dayOfWeek: 'Friday', session: { id: '2-5', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 12), dayOfWeek: 'Saturday', session: { id: '2-6', title: 'Strength Endurance', duration: '3:30', type: SessionType.STRENGTH, description: 'Ride the rest by feel.', mainSet: '3 to 5 x 10 min SE\'s @ 50-60 rpm. Target High Z3 to Mid Z4. Find a solid climb.' } },
      { date: addDays(START_DATE, 13), dayOfWeek: 'Sunday', session: { id: '2-7', title: 'Aerobic Ride', duration: '1:30', type: SessionType.AEROBIC, description: 'Longer ride, go by feel.', mainSet: '20-60 min efforts at 75-80% FTP, 100+ rpm.' } },
    ]
  },
  {
    id: 3,
    startDate: addDays(START_DATE, 14),
    endDate: addDays(START_DATE, 20),
    phase: Phase.BASE,
    subPhase: 'Base 3',
    totalHours: '9:45',
    description: 'Increasing duration and strength work.',
    days: [
      { date: addDays(START_DATE, 14), dayOfWeek: 'Monday', session: { id: '3-1', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 15), dayOfWeek: 'Tuesday', session: { id: '3-2', title: '6x10 Min Strength Efforts', duration: '1:30', type: SessionType.STRENGTH, description: 'Sub-threshold strength work.', mainSet: '6 x 10 min on 2 min recovery. Target High Z2 Power (75% FTP) at 40-60 rpm.' } },
      { date: addDays(START_DATE, 16), dayOfWeek: 'Wednesday', session: { id: '3-3', title: 'Aerobic Ride', duration: '1:00', type: SessionType.AEROBIC, description: 'Go by feel.', mainSet: '20-60min efforts close to 75-80% FTP at 100+ rpm.' } },
      { date: addDays(START_DATE, 17), dayOfWeek: 'Thursday', session: { id: '3-4', title: 'Seated Strength Odds/Evens', duration: '1:15', type: SessionType.STRENGTH, description: 'Decreasing duration efforts getting harder.', mainSet: 'Set 1: 1x8, 1x6, 1x4, 1x2 min. Set 2: 1x7, 1x5, 1x3, 1x1 min. Recovery 2 min b/w intervals. Cadence 55-65 rpm. 75% FTP building to 100% FTP for shorter efforts.' } },
      { date: addDays(START_DATE, 18), dayOfWeek: 'Friday', session: { id: '3-5', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 19), dayOfWeek: 'Saturday', session: { id: '3-6', title: 'Strength Endurance', duration: '4:00', type: SessionType.STRENGTH, description: 'Long ride with solid climbing sets.', mainSet: '3 to 5 x 12 min SE\'s @ 50-60 rpm. Target High Z3 to Mid Z4.' } },
      { date: addDays(START_DATE, 20), dayOfWeek: 'Sunday', session: { id: '3-7', title: 'Aerobic Ride', duration: '2:00', type: SessionType.AEROBIC, description: 'Longer ride.', mainSet: 'Aim for 20-60min efforts close to 75-80% FTP at 100+ rpm.' } },
    ]
  },
  {
    id: 4,
    startDate: addDays(START_DATE, 21),
    endDate: addDays(START_DATE, 27),
    phase: Phase.BASE,
    subPhase: 'Recovery 1',
    totalHours: '7:30',
    description: 'Recovery week with a power test.',
    days: [
      { date: addDays(START_DATE, 21), dayOfWeek: 'Monday', session: { id: '4-1', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 22), dayOfWeek: 'Tuesday', session: { id: '4-2', title: '6x6 Min Cadence Focus', duration: '1:00', type: SessionType.AEROBIC, description: 'Specific focus on higher cadence.', mainSet: '6 x 6 min on 2 min recovery at top of Z2 HR/Power. Focus on form and 100+ rpm if possible.' } },
      { date: addDays(START_DATE, 23), dayOfWeek: 'Wednesday', session: { id: '4-3', title: 'Aerobic Ride', duration: '1:00', type: SessionType.AEROBIC, description: 'Ride by feel.', mainSet: '20-60min efforts close to 75-80% FTP at 100+ rpm.' } },
      { date: addDays(START_DATE, 24), dayOfWeek: 'Thursday', session: { id: '4-4', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 25), dayOfWeek: 'Friday', session: { id: '4-5', title: 'Recovery Ride', duration: '0:30', type: SessionType.RECOVERY, description: 'Preserve the feel for the legs but go easy. Coffee shop ride.', mainSet: 'Maintain Z1 to mid Z2. Small chainring.' } },
      { date: addDays(START_DATE, 26), dayOfWeek: 'Saturday', session: { id: '4-6', title: '20 Min Power Test (Hill)', duration: '4:00', type: SessionType.TEST, description: 'Test best 20 min power on a long climb.', mainSet: 'Set 1: 20 min Test - Go Hard. Set 2: 1 x 20 min 75% effort on same climb.' } },
      { date: addDays(START_DATE, 27), dayOfWeek: 'Sunday', session: { id: '4-7', title: 'Aerobic Ride', duration: '1:00', type: SessionType.AEROBIC, description: 'Ride by feel.', mainSet: '20-60min efforts close to 75-80% FTP at 100+ rpm.' } },
    ]
  },
  // Week 5 - Build 1
  {
    id: 5,
    startDate: addDays(START_DATE, 28),
    endDate: addDays(START_DATE, 34),
    phase: Phase.BUILD,
    subPhase: 'Build 1',
    totalHours: '10:00',
    description: 'Ramping up intensity with sustained threshold work.',
    days: [
      { date: addDays(START_DATE, 28), dayOfWeek: 'Monday', session: { id: '5-1', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 29), dayOfWeek: 'Tuesday', session: { id: '5-2', title: '15 Min @ 90% Threshold', duration: '1:00', type: SessionType.THRESHOLD, description: 'Sub-FTP session to work on sustained power.', mainSet: '2 to 3 x 15 min efforts. Aim to build to then sustain 90% FTP HR (approx 85-88% Power). 5-10 min recovery.' } },
      { date: addDays(START_DATE, 30), dayOfWeek: 'Wednesday', session: { id: '5-3', title: 'Aerobic Ride', duration: '1:00', type: SessionType.AEROBIC, description: 'By feel.' } },
      { date: addDays(START_DATE, 31), dayOfWeek: 'Thursday', session: { id: '5-4', title: 'Sub-FTP Big Gear', duration: '1:00', type: SessionType.STRENGTH, description: 'Aerobic ride with big gear efforts.', mainSet: 'Efforts in 53/14-11 at 50-60 rpm. Power 75-80% FTP. Range 5 to 20 min each.' } },
      { date: addDays(START_DATE, 32), dayOfWeek: 'Friday', session: { id: '5-5', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 33), dayOfWeek: 'Saturday', session: { id: '5-6', title: 'Climbing Endurance', duration: '4:00', type: SessionType.TEMPO, description: 'Build muscular endurance on extended climbs.', mainSet: '4 x 10 min OR 2 x 20 min. High Z3 to Mid Z4. Consistent effort.' } },
      { date: addDays(START_DATE, 34), dayOfWeek: 'Sunday', session: { id: '5-7', title: 'Aerobic Z2 Focus', duration: '3:00', type: SessionType.AEROBIC, description: 'Hilly ride keeping Z2.', mainSet: 'Focus on sustaining highest power while limiting HR to top of Z2.' } },
    ]
  },
    // Week 6 - Build 2
  {
    id: 6,
    startDate: addDays(START_DATE, 35),
    endDate: addDays(START_DATE, 41),
    phase: Phase.BUILD,
    subPhase: 'Build 2',
    totalHours: '11:15',
    description: 'Alternating intensity and longer climbing endurance.',
    days: [
      { date: addDays(START_DATE, 35), dayOfWeek: 'Monday', session: { id: '6-1', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 36), dayOfWeek: 'Tuesday', session: { id: '6-2', title: '15 Min Alternating', duration: '1:00', type: SessionType.THRESHOLD, description: 'Longer steady efforts with bursts.', mainSet: 'Set 1: 15 min (30 sec Z5 burst / 30 sec Z1 recovery). Set 2: 15-20 min steady High Z3/Low Z4.' } },
      { date: addDays(START_DATE, 37), dayOfWeek: 'Wednesday', session: { id: '6-3', title: 'Aerobic Ride', duration: '1:00', type: SessionType.AEROBIC, description: 'By feel. 75-80% FTP at 100+ rpm.' } },
      { date: addDays(START_DATE, 38), dayOfWeek: 'Thursday', session: { id: '6-4', title: 'Sub-FTP Big Gear', duration: '1:15', type: SessionType.STRENGTH, description: 'Controlled build in intensity in a big gear.', mainSet: 'Efforts in 53/14 at 50-60 rpm, 75-80% FTP.' } },
      { date: addDays(START_DATE, 39), dayOfWeek: 'Friday', session: { id: '6-5', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 40), dayOfWeek: 'Saturday', session: { id: '6-6', title: 'Climbing Endurance', duration: '4:30', type: SessionType.TEMPO, description: 'Extended climbs.', mainSet: '6 x 10 min OR 3 x 20 min at High Z3/Mid Z4.' } },
      { date: addDays(START_DATE, 41), dayOfWeek: 'Sunday', session: { id: '6-7', title: 'Aerobic Z2 Focus', duration: '3:30', type: SessionType.AEROBIC, description: 'Keep it controlled in Z2 on hills.' } },
    ]
  },
    // Week 7 - Build 3
  {
    id: 7,
    startDate: addDays(START_DATE, 42),
    endDate: addDays(START_DATE, 48),
    phase: Phase.BUILD,
    subPhase: 'Build 3',
    totalHours: '12:15',
    description: 'Peak volume for Build phase.',
    days: [
      { date: addDays(START_DATE, 42), dayOfWeek: 'Monday', session: { id: '7-1', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 43), dayOfWeek: 'Tuesday', session: { id: '7-2', title: '20 Min Alternating', duration: '1:00', type: SessionType.THRESHOLD, description: 'Steady efforts mixed with bursts.', mainSet: 'Set 1: 20 min (30s Z5 / 30s Z1). Set 2: 15-20 min steady High Z3/Low Z4.' } },
      { date: addDays(START_DATE, 44), dayOfWeek: 'Wednesday', session: { id: '7-3', title: 'Aerobic Ride', duration: '1:00', type: SessionType.AEROBIC, description: 'By feel.' } },
      { date: addDays(START_DATE, 45), dayOfWeek: 'Thursday', session: { id: '7-4', title: '4x10 Min Tempo Alternating', duration: '1:15', type: SessionType.TEMPO, description: 'Cadence and intensity variance.', mainSet: '4 x 10 min blocks: 2min SE Z3 (60rpm), 3min Spin Z3 (110rpm), 2min SE Z3, 3min Spin Z3.' } },
      { date: addDays(START_DATE, 46), dayOfWeek: 'Friday', session: { id: '7-5', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 47), dayOfWeek: 'Saturday', session: { id: '7-6', title: 'Climbing Endurance', duration: '5:00', type: SessionType.TEMPO, description: 'Long ride with significant climbing.', mainSet: '8 x 10 min OR 4 x 20 min. High Z3/Low Z4.' } },
      { date: addDays(START_DATE, 48), dayOfWeek: 'Sunday', session: { id: '7-7', title: 'Aerobic Z2 Focus', duration: '4:00', type: SessionType.AEROBIC, description: 'Hilly ride Z2 focus.' } },
    ]
  },
   // Week 8 - Recovery 2
  {
    id: 8,
    startDate: addDays(START_DATE, 49),
    endDate: addDays(START_DATE, 55),
    phase: Phase.BUILD,
    subPhase: 'Recovery 2',
    totalHours: '7:00',
    description: 'Absorb the training with a lighter week.',
    days: [
      { date: addDays(START_DATE, 49), dayOfWeek: 'Monday', session: { id: '8-1', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 50), dayOfWeek: 'Tuesday', session: { id: '8-2', title: 'Aerobic Ride', duration: '1:00', type: SessionType.AEROBIC, description: 'By feel.' } },
      { date: addDays(START_DATE, 51), dayOfWeek: 'Wednesday', session: { id: '8-3', title: 'FTP 5x5 Min', duration: '1:00', type: SessionType.THRESHOLD, description: 'Increasing intensity.', mainSet: '5 x 5 min. Build intensity with each effort so final effort is above FTP. 5 min recovery.' } },
      { date: addDays(START_DATE, 52), dayOfWeek: 'Thursday', session: { id: '8-4', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 53), dayOfWeek: 'Friday', session: { id: '8-5', title: 'Recovery Ride', duration: '1:00', type: SessionType.RECOVERY, description: 'Coffee shop ride. Z1 to mid Z2.' } },
      { date: addDays(START_DATE, 54), dayOfWeek: 'Saturday', session: { id: '8-6', title: 'Climbing Tempo Standing', duration: '4:00', type: SessionType.TEMPO, description: 'Out of saddle focus.', mainSet: '4 min Strength Effort out of saddle on 2 min recovery. Aim for 6-9 reps.' } },
      { date: addDays(START_DATE, 55), dayOfWeek: 'Sunday', session: { id: '8-7', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
    ]
  },
  // Week 9 - Build 4
  {
    id: 9,
    startDate: addDays(START_DATE, 56),
    endDate: addDays(START_DATE, 62),
    phase: Phase.BUILD,
    subPhase: 'Build 4',
    totalHours: '11:30',
    description: 'High intensity intervals and long endurance.',
    days: [
      { date: addDays(START_DATE, 56), dayOfWeek: 'Monday', session: { id: '9-1', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 57), dayOfWeek: 'Tuesday', session: { id: '9-2', title: 'FTP 5x5 Min (5m Reco)', duration: '1:00', type: SessionType.THRESHOLD, description: 'Best sustainable intensity.', mainSet: '5 x 5 min intervals on 5 min recovery. Target 100-105% FTP.' } },
      { date: addDays(START_DATE, 58), dayOfWeek: 'Wednesday', session: { id: '9-3', title: 'Aerobic Focus', duration: '1:00', type: SessionType.AEROBIC, description: 'Fatigue resistance.', mainSet: '4 x 10 min on 1 min recovery at Mid/High Z2.' } },
      { date: addDays(START_DATE, 59), dayOfWeek: 'Thursday', session: { id: '9-4', title: '5x10 Min Pyramids', duration: '1:00', type: SessionType.THRESHOLD, description: 'Cycles between Z2 and FTP.', mainSet: '5 x 10 min Pyramids: 1min 60%, 1min 70%, 1min 80%, 1min 90%, 1min 100% FTP. Repeat down.' } },
      { date: addDays(START_DATE, 60), dayOfWeek: 'Friday', session: { id: '9-5', title: 'Recovery', duration: '1:00', type: SessionType.RECOVERY, description: 'Coffee shop ride.' } },
      { date: addDays(START_DATE, 61), dayOfWeek: 'Saturday', session: { id: '9-6', title: 'FTP Focus - 50% Duration', duration: '5:00', type: SessionType.THRESHOLD, description: 'Long ride with FTP work.', mainSet: '5 min intervals at Mid Z4. Repeat up a hill until you can no longer sustain intensity. Aim for 6-12 efforts.' } },
      { date: addDays(START_DATE, 62), dayOfWeek: 'Sunday', session: { id: '9-7', title: 'Aerobic Ride', duration: '2:30', type: SessionType.AEROBIC, description: 'By feel.' } },
    ]
  },
  // Week 10 - Build 5
  {
    id: 10,
    startDate: addDays(START_DATE, 63),
    endDate: addDays(START_DATE, 69),
    phase: Phase.BUILD,
    subPhase: 'Build 5',
    totalHours: '13:00',
    description: 'Peak Build volume.',
    days: [
      { date: addDays(START_DATE, 63), dayOfWeek: 'Monday', session: { id: '10-1', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 64), dayOfWeek: 'Tuesday', session: { id: '10-2', title: 'FTP 5x5 Min (3m Reco)', duration: '1:00', type: SessionType.THRESHOLD, description: 'Reduced recovery.', mainSet: '5 x 5 min intervals on 3 min recovery. Target 100-105% FTP.' } },
      { date: addDays(START_DATE, 65), dayOfWeek: 'Wednesday', session: { id: '10-3', title: 'Aerobic Focus', duration: '1:15', type: SessionType.AEROBIC, description: 'Fatigue resistance.', mainSet: '5 x 10 min on 1 min recovery at Mid/High Z2.' } },
      { date: addDays(START_DATE, 66), dayOfWeek: 'Thursday', session: { id: '10-4', title: '6x10 Min Pyramids', duration: '1:15', type: SessionType.THRESHOLD, description: 'Pyramid intervals.', mainSet: '6 x 10 min Pyramids (60-100% FTP steps).' } },
      { date: addDays(START_DATE, 67), dayOfWeek: 'Friday', session: { id: '10-5', title: 'Recovery', duration: '1:00', type: SessionType.RECOVERY, description: 'Easy spin.' } },
      { date: addDays(START_DATE, 68), dayOfWeek: 'Saturday', session: { id: '10-6', title: 'FTP Focus - 55% Duration', duration: '5:30', type: SessionType.THRESHOLD, description: 'Very long ride with FTP work.', mainSet: 'Repeat 5 min intervals at Mid Z4 (FTP) up a hill until failure. Aim for 6-12 efforts.' } },
      { date: addDays(START_DATE, 69), dayOfWeek: 'Sunday', session: { id: '10-7', title: 'Aerobic Ride', duration: '3:00', type: SessionType.AEROBIC, description: 'By feel.' } },
    ]
  },
  // Week 11 - Build 6
  {
    id: 11,
    startDate: addDays(START_DATE, 70),
    endDate: addDays(START_DATE, 76),
    phase: Phase.BUILD,
    subPhase: 'Build 6',
    totalHours: '15:15',
    description: 'Maximum volume week.',
    days: [
      { date: addDays(START_DATE, 70), dayOfWeek: 'Monday', session: { id: '11-1', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 71), dayOfWeek: 'Tuesday', session: { id: '11-2', title: 'FTP 5x5 Min (2m Reco)', duration: '1:00', type: SessionType.THRESHOLD, description: 'Hard intervals.', mainSet: '5 x 5 min intervals on 2 min recovery. Target 100-105% FTP.' } },
      { date: addDays(START_DATE, 72), dayOfWeek: 'Wednesday', session: { id: '11-3', title: 'Aerobic Ride', duration: '2:30', type: SessionType.AEROBIC, description: 'By feel.' } },
      { date: addDays(START_DATE, 73), dayOfWeek: 'Thursday', session: { id: '11-4', title: '4x10 Min Z3 w/ VO2 Lifts', duration: '1:15', type: SessionType.VO2MAX, description: 'Steady state with spikes.', mainSet: '4 x 10 min at High Z3. Each effort has a 90 sec lift to Z5 (110-120%) at 0, 2, 4, or 6 min marks.' } },
      { date: addDays(START_DATE, 74), dayOfWeek: 'Friday', session: { id: '11-5', title: 'Recovery', duration: '1:00', type: SessionType.RECOVERY, description: 'Easy spin.' } },
      { date: addDays(START_DATE, 75), dayOfWeek: 'Saturday', session: { id: '11-6', title: 'FTP Focus - 60% Duration', duration: '6:00', type: SessionType.THRESHOLD, description: 'Longest ride.', mainSet: 'Repeat 5 min intervals at Mid Z4 up a hill until failure. 6-12 efforts total.' } },
      { date: addDays(START_DATE, 76), dayOfWeek: 'Sunday', session: { id: '11-7', title: 'Aerobic Ride', duration: '3:30', type: SessionType.AEROBIC, description: 'By feel.' } },
    ]
  },
  // Week 12 - Recovery 3
  {
    id: 12,
    startDate: addDays(START_DATE, 77),
    endDate: addDays(START_DATE, 83),
    phase: Phase.BUILD,
    subPhase: 'Recovery 3',
    totalHours: '8:00',
    description: 'Pre-Focus phase recovery.',
    days: [
      { date: addDays(START_DATE, 77), dayOfWeek: 'Monday', session: { id: '12-1', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 78), dayOfWeek: 'Tuesday', session: { id: '12-2', title: 'Aerobic Ride', duration: '1:00', type: SessionType.AEROBIC, description: 'By feel.' } },
      { date: addDays(START_DATE, 79), dayOfWeek: 'Wednesday', session: { id: '12-3', title: 'FTP 5x5 Min Increasing', duration: '1:00', type: SessionType.THRESHOLD, description: 'Build intensity.', mainSet: '5 x 5 min. Build intensity so final effort is above FTP.' } },
      { date: addDays(START_DATE, 80), dayOfWeek: 'Thursday', session: { id: '12-4', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 81), dayOfWeek: 'Friday', session: { id: '12-5', title: 'Recovery', duration: '1:00', type: SessionType.RECOVERY, description: 'Easy spin.' } },
      { date: addDays(START_DATE, 82), dayOfWeek: 'Saturday', session: { id: '12-6', title: 'Aerobic Z2 Focus', duration: '4:00', type: SessionType.AEROBIC, description: 'Climbing efforts.', mainSet: 'Sustain highest power while limiting HR to top of Z2.' } },
      { date: addDays(START_DATE, 83), dayOfWeek: 'Sunday', session: { id: '12-7', title: 'Recovery', duration: '1:00', type: SessionType.RECOVERY, description: 'Easy spin.' } },
    ]
  },
   // Week 13 - Focus 1
  {
    id: 13,
    startDate: addDays(START_DATE, 84),
    endDate: addDays(START_DATE, 90),
    phase: Phase.FOCUS,
    subPhase: 'Focus 1',
    totalHours: '13:30',
    description: 'VO2 Max builds and event simulation.',
    days: [
      { date: addDays(START_DATE, 84), dayOfWeek: 'Monday', session: { id: '13-1', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 85), dayOfWeek: 'Tuesday', session: { id: '13-2', title: '3 Min Builds FTP to VO2', duration: '1:00', type: SessionType.VO2MAX, description: 'High intensity.', mainSet: '4 to 6 x 3 min building from Z4 to Z5 (100-125% FTP). Stop when you can\'t sustain intensity.' } },
      { date: addDays(START_DATE, 86), dayOfWeek: 'Wednesday', session: { id: '13-3', title: 'Aerobic Ride', duration: '2:00', type: SessionType.AEROBIC, description: 'By feel.' } },
      { date: addDays(START_DATE, 87), dayOfWeek: 'Thursday', session: { id: '13-4', title: 'Aerobic Focus', duration: '1:30', type: SessionType.AEROBIC, description: 'Fatigue resistance.', mainSet: '6 x 10 min on 1 min recovery at Mid/High Z2.' } },
      { date: addDays(START_DATE, 88), dayOfWeek: 'Friday', session: { id: '13-5', title: 'Recovery', duration: '1:00', type: SessionType.RECOVERY, description: 'Easy spin.' } },
      { date: addDays(START_DATE, 89), dayOfWeek: 'Saturday', session: { id: '13-6', title: 'Tempo Flats / Sweet Spot Hills', duration: '6:00', type: SessionType.TEMPO, description: 'Simulate event demands.', mainSet: '2x20m Z3 Tempo Flats (70-80rpm) + 2-4x Z3 Hill Efforts + 2x30m Top of Z2. Final hour: 1x10min ALL OUT.' } },
      { date: addDays(START_DATE, 90), dayOfWeek: 'Sunday', session: { id: '13-7', title: 'Aerobic Ride', duration: '2:00', type: SessionType.AEROBIC, description: 'By feel.' } },
    ]
  },
  // Week 14 - Focus 2
  {
    id: 14,
    startDate: addDays(START_DATE, 91),
    endDate: addDays(START_DATE, 97),
    phase: Phase.FOCUS,
    subPhase: 'Focus 2',
    totalHours: '15:15',
    description: 'Repeats to failure and VO2 work.',
    days: [
      { date: addDays(START_DATE, 91), dayOfWeek: 'Monday', session: { id: '14-1', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 92), dayOfWeek: 'Tuesday', session: { id: '14-2', title: '3 Min Builds FTP to VO2', duration: '1:00', type: SessionType.VO2MAX, description: 'High intensity.', mainSet: '4 to 6 x 3 min building from Z4 to Z5. 5 min recovery.' } },
      { date: addDays(START_DATE, 93), dayOfWeek: 'Wednesday', session: { id: '14-3', title: 'Aerobic Ride', duration: '2:00', type: SessionType.AEROBIC, description: 'By feel.' } },
      { date: addDays(START_DATE, 94), dayOfWeek: 'Thursday', session: { id: '14-4', title: '15 Min Alt + 2x10 Steady', duration: '1:15', type: SessionType.THRESHOLD, description: 'Mixed intensity.', mainSet: 'Set 1: 15 min Alternating (30s Z5/30s Z1). Set 2: 2 x 10 min Steady High Z3/Low Z4.' } },
      { date: addDays(START_DATE, 95), dayOfWeek: 'Friday', session: { id: '14-5', title: 'Recovery', duration: '1:00', type: SessionType.RECOVERY, description: 'Easy spin.' } },
      { date: addDays(START_DATE, 96), dayOfWeek: 'Saturday', session: { id: '14-6', title: 'Tempo Hills Repeats', duration: '8:00', type: SessionType.TEMPO, description: 'Repeats to failure. Massive day.', mainSet: 'Pick a 15+ min hill. Complete as many reps as possible. Push limits.' } },
      { date: addDays(START_DATE, 97), dayOfWeek: 'Sunday', session: { id: '14-7', title: 'Aerobic Ride', duration: '2:00', type: SessionType.AEROBIC, description: 'By feel.' } },
    ]
  },
  // Week 15 - Focus 3
  {
    id: 15,
    startDate: addDays(START_DATE, 98),
    endDate: addDays(START_DATE, 104),
    phase: Phase.FOCUS,
    subPhase: 'Focus 3',
    totalHours: '10:45',
    description: 'Final taper begins. VO2 sharpness.',
    days: [
      { date: addDays(START_DATE, 98), dayOfWeek: 'Monday', session: { id: '15-1', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 99), dayOfWeek: 'Tuesday', session: { id: '15-2', title: 'VO2 Max 1 Min Efforts', duration: '1:15', type: SessionType.VO2MAX, description: 'Short sharp efforts.', mainSet: '3 x 1 min at VO2max (Top Z5 - 9/10 effort). 30 sec recovery. Do 3-5 sets of these (5 min between sets).' } },
      { date: addDays(START_DATE, 100), dayOfWeek: 'Wednesday', session: { id: '15-3', title: 'Aerobic Ride', duration: '2:30', type: SessionType.AEROBIC, description: 'By feel.' } },
      { date: addDays(START_DATE, 101), dayOfWeek: 'Thursday', session: { id: '15-4', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Enjoy an extra day off.' } },
      { date: addDays(START_DATE, 102), dayOfWeek: 'Friday', session: { id: '15-5', title: 'Recovery', duration: '1:00', type: SessionType.RECOVERY, description: 'Easy spin.' } },
      { date: addDays(START_DATE, 103), dayOfWeek: 'Saturday', session: { id: '15-6', title: 'Final Long Ride + 20m Test', duration: '5:00', type: SessionType.TEST, description: 'Final test.', mainSet: 'Ride to hill (20m). Set 1: 20m Test Hard. Set 2: 1-2 x 20m at 75% effort.' } },
      { date: addDays(START_DATE, 104), dayOfWeek: 'Sunday', session: { id: '15-7', title: 'Aerobic Ride', duration: '1:00', type: SessionType.AEROBIC, description: 'By feel.' } },
    ]
  },
  // Week 16 - Event Taper
  {
    id: 16,
    startDate: addDays(START_DATE, 105),
    endDate: addDays(START_DATE, 111),
    phase: Phase.TAPER,
    subPhase: 'Event Taper',
    totalHours: '19:30', // Note: includes event duration estimate
    description: 'Taper and Event Day!',
    days: [
      { date: addDays(START_DATE, 105), dayOfWeek: 'Monday', session: { id: '16-1', title: 'Day Off', duration: '-', type: SessionType.REST, description: 'Rest.' } },
      { date: addDays(START_DATE, 106), dayOfWeek: 'Tuesday', session: { id: '16-2', title: 'FTP 5x5 Min Increasing', duration: '1:00', type: SessionType.THRESHOLD, description: 'Keep legs open.', mainSet: '5 x 5 min building intensity to >FTP. 5 min recovery.' } },
      { date: addDays(START_DATE, 107), dayOfWeek: 'Wednesday', session: { id: '16-3', title: 'Recovery', duration: '1:00', type: SessionType.RECOVERY, description: 'Easy spin.' } },
      { date: addDays(START_DATE, 108), dayOfWeek: 'Thursday', session: { id: '16-4', title: 'Tempo Loop', duration: '2:00', type: SessionType.TEMPO, description: 'Deplete glycogen slightly to super-compensate.', mainSet: 'Ride rolling loop with hills at controlled pace. Intensity similar to event.' } },
      { date: addDays(START_DATE, 109), dayOfWeek: 'Friday', session: { id: '16-5', title: 'Recovery', duration: '1:00', type: SessionType.RECOVERY, description: 'Very easy.' } },
      { date: addDays(START_DATE, 110), dayOfWeek: 'Saturday', session: { id: '16-6', title: 'Aerobic Ride', duration: '1:30', type: SessionType.AEROBIC, description: 'Openers.', mainSet: 'Nothing hard. Just enough to get some endurance type efforts.' } },
      { date: addDays(START_DATE, 111), dayOfWeek: 'Sunday', session: { id: '16-7', title: 'EVENT DAY!!', duration: '13:00', type: SessionType.EVENT, description: 'Peaks Challenge Falls Creek', mainSet: 'Good luck! Remember nutrition and pacing.' } },
    ]
  },
];

// Generate placeholder plans for Intermediate and High volume since actual data text was not provided
// We will scale duration to mimic higher volume plans
const scaleTime = (timeStr: string, multiplier: number): string => {
  if (timeStr === '-') return '-';
  const [h, m] = timeStr.split(':').map(Number);
  const totalMins = (h * 60) + m;
  const newMins = Math.round(totalMins * multiplier);
  const newH = Math.floor(newMins / 60);
  const newM = newMins % 60;
  return `${newH}:${newM.toString().padStart(2, '0')}`;
};

const createVariant = (base: WeekPlan[], multiplier: number, label: string): WeekPlan[] => {
  return base.map(week => ({
    ...week,
    subPhase: `${week.subPhase} (${label})`,
    totalHours: scaleTime(week.totalHours, multiplier),
    description: `${week.description} [${label} Intensity Modifier]`,
    days: week.days.map(d => ({
      ...d,
      session: d.session ? {
        ...d.session,
        duration: scaleTime(d.session.duration, multiplier)
      } : null
    }))
  }));
};

export const PLANS: Record<PlanLevel, WeekPlan[]> = {
  Low: LOW_VOLUME_PLAN,
  Intermediate: createVariant(LOW_VOLUME_PLAN, 1.25, 'Inter'),
  High: createVariant(LOW_VOLUME_PLAN, 1.5, 'High')
};