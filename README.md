# 🤖 BOTLEAGUE - India's Ultimate Robotics Arena

[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-64748b?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.1-764abc?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org/)

**BOTLEAGUE** is India's leading platform fostering competitive combat robotics and automation design thinking. This repository houses the client-side landing page and interactive portal built to connect young makers, autonomous vehicle coders, and heavyweight robot builders with official tournament brackets, local registrations, and sponsorship directories.

Designed with a high-fidelity **cyberpunk/mechanical industrial aesthetic**, the application matches the intensity of live combat arenas with smooth, interactive interfaces, dynamic micro-animations, and complete user engagement workflows.

---

## ⚡ Tech Stack & Architecture

- **Core Framework**: React 19 & Vite 8 (fast hot module replacement, optimized production bundles)
- **Styling**: Tailwind CSS (custom utility classes, neon glows, glassmorphism, responsive grid layouts)
- **Global State Management**: Redux Toolkit (handling UI preferences, interactive tabs, active filters)
- **Server State & Data Fetching**: TanStack React Query v5 (handling API calls for upcoming regional tournaments and volunteer logs)
- **Form Handling & Validation**: React Hook Form (handling multi-role forms independently with immediate client-side error states)
- **Iconography**: Lucide React (vector-based tech icons matching the sports disciplines)

---

## 🚀 Key Features Built for Recruiters to Review

If you are a recruiter looking at this codebase, here are the main components and patterns implemented:

### 1. High-Fidelity & Responsive Cyberpunk UI
- Crafted custom HSL neon shadow utilities (`shadow-neon-red`, `cyber-grid` backgrounds) to emulate a live robot combat arena environment.
- Fully responsive layout adapting from mobile devices to ultrawide desktop monitors using Tailwind grids.

### 2. Multi-Role Engagement Forms (Side-by-Side Grid)
- Implemented **3 independent registration pipelines** (Become a Judge, Volunteer Registry, Community Member) side-by-side.
- Powered by **React Hook Form** to decouple forms, avoiding unnecessary re-renders while providing immediate validation feedback (required fields, valid emails, pattern matching).
- Connected to simulated API mutations using TanStack Query, showing detailed success overlays and loaders.

### 3. Dynamic Live Brackets & Tournament Viewers
- Custom hierarchical visual bracket (`LiveBracket.jsx`) showing the Bengaluru Regionals quarterfinalists, semifinalists, and winners.
- Active visual state cues showing live matches versus archived results.

### 4. Interactive Leaderboard
- Top pilots and team stats panel highlighting score indexes, wins, and category badges.
- Dynamic search and filter options to quickly navigate team standings.

### 5. Automated Build Verification
- Rigorous linting, clean module imports, and a build verified free of compilation warnings.

---

## 📂 Project Structure

```bash
src/
├── assets/             # BattleBots, Line Follower, and Robo Race graphics
├── components/
│   ├── Navbar.jsx      # Sticky cyber-styled navigation header
│   ├── Footer.jsx      # High-fidelity information directory
│   ├── LiveBracket.jsx # Interactive visual tournament flow
│   ├── Leaderboard.jsx # Dynamic pilot standings and badges
│   └── RegisterForm.jsx# Reusable, validated client submission form
├── features/
│   └── api.js          # API queries/mutations for events and register
├── store.js            # Redux store and slice configuration
├── App.jsx             # Main container assembling all UI sections
├── index.css           # Global custom styles and neon configurations
└── main.jsx            # React root mount and Query/Redux providers
```

---

## 🛠️ How to Run Locally

Follow these steps to spin up the local development server:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/botleague.git
cd botleague
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser to see the app!

### 4. Build for production
```bash
npm run build
```
This will compile static assets in the `dist/` directory.

---

## 📝 Proposed Git Commit Strategy (Recruiter-Friendly)

To make your repository look professional, commit your work using **Semantic Commit Messages**:

- `feat: initialize Vite project with Tailwind CSS config`
- `feat: implement cyber-theme layout grid and Navbar component`
- `feat: add LiveBracket for regional tournaments`
- `feat: add multi-form Ecosystem registration using React Hook Form`
- `feat: build Pilot Leaderboard component with custom category badges`
- `docs: write premium README.md with system architecture overview`
- `chore: clean up console logs and verify production build`
