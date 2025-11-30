# Peaks Challenge Falls Creek 2026 - Training Companion

A comprehensive training companion app for the Peaks Challenge Falls Creek 2026 cycling event. This app provides a detailed 16-week training plan with weekly and monthly views, session details, and progress tracking.

## Features

- **16-Week Training Plans**: Choose from Low, Intermediate, or High volume training plans
- **Weekly View**: Detailed day-by-day breakdown of each week's training sessions
- **Monthly Calendar View**: Visual calendar representation of your training schedule
- **Session Details**: Click on any session to view detailed instructions, zones, and training parameters
- **Progress Tracking**: View statistics and progress across your training plan
- **Training Zones Reference**: Quick reference for power zones and heart rate zones

## Run Locally

**Prerequisites:** Node.js (v18 or higher)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3001`

## Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

- `App.tsx` - Main application component
- `components/` - React components (WeekView, CalendarView, SessionDetail, StatsView)
- `data.ts` - Training plan data for all 16 weeks
- `types.ts` - TypeScript type definitions
- `constants.ts` - Color schemes and constants

## Training Plan Overview

The training plan is divided into 4 phases:
- **Base** (Weeks 1-4): Building aerobic base and strength
- **Build** (Weeks 5-12): Increasing intensity and volume
- **Focus** (Weeks 13-15): VO2 Max work and event simulation
- **Taper** (Week 16): Final preparation and event day

Each plan includes detailed session descriptions, power zones, cadence targets, and training instructions.
