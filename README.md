# Traveloop

Modern AI-powered travel planning platform with a premium glassmorphism UI.

## Stack
- Frontend: React + Vite + Tailwind CSS + Framer Motion
- Backend: Express + JWT auth
- DB: PostgreSQL schema in `backend/schema.sql`

## Pages Included
All requested pages are scaffolded with responsive UI routes:
- Auth: Login, Signup, Forgot Password
- Dashboard
- Create Trip
- My Trips
- Itinerary Builder
- Itinerary View
- City Search
- Activity Search
- Budget Breakdown
- Packing Checklist
- Shared Public Itinerary
- Profile & Settings
- Trip Notes / Journal
- Admin Analytics

## API Endpoints
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/forgot-password`
- `GET /api/trips`
- `POST /api/trips`
- `PUT /api/trips/:id`
- `DELETE /api/trips/:id`

## Extra Features Roadmap Hooks
- AI recommendations service layer (`backend/src/services`)
- Weather + currency integrations (to be connected via external APIs)
- Real-time notifications and collaborative planning via websockets

## Run
```bash
npm install
npm run dev
```
