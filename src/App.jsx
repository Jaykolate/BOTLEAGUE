import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import {
  Shield, MapPin, Trophy, Users, Wrench, Globe, Zap,
  Briefcase, Scale, Award, Activity, Cpu, ChevronRight,
  Layers, ArrowRight, Star, Target, BookOpen
} from 'lucide-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LiveBracket from './components/LiveBracket';
import Leaderboard from './components/Leaderboard';
import RegisterForm from './components/RegisterForm';
import { fetchEvents } from './features/api';
import { setEcosystemTab } from './store';

export default function App() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.ui.ecosystemTab);

  const { data: events, isLoading: eventsLoading } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  });

  const pathSteps = [
    { step: 'STEP 1', name: 'BUILD YOUR TEAM',        desc: 'Form a squad of passionate designers and programmers.',          icon: <Wrench className="text-white" size={22} /> },
    { step: 'STEP 2', name: 'COMPETE & CROSS REGIONAL', desc: 'Enter regional matches in nearby cities to qualify.',            icon: <Globe  className="text-white" size={22} /> },
    { step: 'STEP 3', name: 'BUILD NATIONAL RANK',    desc: 'Secure ranking points in every victory to climb the index.',     icon: <Trophy className="text-white" size={22} /> },
    { step: 'STEP 4', name: 'JOIN THE LEAGUE',        desc: 'Acquire sponsorship and represent in the pro national finals.',  icon: <Users  className="text-white" size={22} /> },
  ];

  const categories = [
    { id: 'mini',   title: 'MINI MAKERS',        age: 'Age 8-12',       icon: <Star size={28} />,   desc: 'Introduce young minds to fundamental design principles, simple motors and structural mechanics.',                  color: 'cyber-yellow', border: 'border-cyber-yellow/40', bg: 'bg-cyber-yellow/5',  hover: 'hover:border-cyber-yellow', text: 'text-cyber-yellow' },
    { id: 'junior', title: 'JUNIOR INNOVATORS',  age: 'Age 12-16',      icon: <Target size={28} />, desc: 'Build smart autonomous robots with integrated sensors, microcontrollers, and pathfinding algorithms.',           color: 'cyber-orange', border: 'border-cyber-orange/40', bg: 'bg-cyber-orange/5',  hover: 'hover:border-cyber-orange', text: 'text-cyber-orange' },
    { id: 'young',  title: 'YOUNG ENGINEERS',    age: 'Age 16-20',      icon: <Cpu size={28} />,    desc: 'Engineered metal combat frames, custom pneumatics, high-voltage battery arrays and precision RC systems.',       color: 'primary',      border: 'border-primary/40',      bg: 'bg-primary/5',       hover: 'hover:border-primary',      text: 'text-primary'      },
    { id: 'robo',   title: 'ROBO MINDS',         age: 'College & Pros', icon: <Shield size={28} />, desc: 'Elite standard combat bots, heavyweight autonomous systems, and advanced mechanical engineering.',               color: 'cyber-blue',   border: 'border-cyber-blue/40',   bg: 'bg-cyber-blue/5',    hover: 'hover:border-cyber-blue',   text: 'text-cyber-blue'   },
  ];

  const disciplines = [
    { name: 'Robo Race',     tag: 'SPEED & TRACTION',       image: '/assets/robo_race.png'     },
    { name: 'Line Follower', tag: 'AUTONOMOUS NAVIGATION',  image: '/assets/line_follower.png' },
    { name: 'RC Racing',     tag: 'MANUAL PRECISION',       image: '/assets/rc_racing.png'     },
    { name: 'Robo Hockey',   tag: 'TEAM TACTICS',           image: '/assets/robo_hockey.png'   },
    { name: 'Robo War',      tag: 'COMBAT & DAMAGE',        image: '/assets/robo_war.png'      },
  ];

  const advantages = [
    { title: 'NATIONAL RECOGNITION',    desc: 'Secure medals, certificate credentials, and ranking badges showcased on your pilot profile.',          icon: <Award    className="text-primary" size={22} /> },
    { title: 'FAIR JUDGING',            desc: 'Standardized automated rulesets, video reviews, and experienced technical arbiters.',                   icon: <Scale    className="text-primary" size={22} /> },
    { title: 'CAREER OPPORTUNITIES',    desc: 'Direct corporate channels, job interviews, and internships hosted with hardware automation companies.',  icon: <Briefcase className="text-primary" size={22} /> },
    { title: 'HIGH-ENERGY ECOSYSTEM',   desc: 'Vibrant, collaborative environments connecting you directly to mentors and component suppliers.',        icon: <Zap      className="text-primary" size={22} /> },
  ];

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text relative font-body overflow-x-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[1200px] right-1/4 w-[400px] h-[400px] rounded-full bg-cyber-yellow/5 blur-[100px]" />
      </div>

      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — Text LEFT · Robot image RIGHT (split layout)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* ── Left: text ── */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-primary">
              <Activity size={12} className="animate-pulse" />
              <span>THE ARENA IS WARMING UP</span>
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold font-title tracking-tight leading-[1.05] text-white uppercase">
              INDIA'S ULTIMATE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyber-orange to-cyber-yellow">
                ROBOTICS ARENA
              </span>
            </h1>

            {/* sub-tags matching reference */}
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-cyber-muted font-semibold uppercase tracking-widest">
              <span>Build Bots</span><span className="text-cyber-border">|</span>
              <span>Train Hard</span><span className="text-cyber-border">|</span>
              <span>Fight Smart</span>
            </div>

            <p className="text-sm sm:text-base text-cyber-muted max-w-md leading-relaxed">
              Build armored machines, code smart autonomous pilots, and rise through the national ranks in the most challenging engineering tournament in India.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollTo('ecosystem')}
                className="bg-primary hover:bg-primary-hover hover:shadow-neon-red text-white px-7 py-3 rounded font-title uppercase tracking-wider font-bold text-sm transition-all duration-300 flex items-center space-x-2"
              >
                <span>REGISTER NOW</span>
                <ChevronRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('competitions')}
                className="border border-cyber-border hover:border-cyber-muted bg-cyber-card/50 hover:bg-cyber-card text-cyber-text px-7 py-3 rounded font-title uppercase tracking-wider font-bold text-sm transition-all duration-300"
              >
                EXPLORE SCHEDULING
              </button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-4 border-t border-cyber-border/50">
              {[['500+','TEAMS'],['12+','ARENAS'],['₹10L+','PRIZES']].map(([val,lbl]) => (
                <div key={lbl}>
                  <span className="block font-mono text-2xl font-bold text-cyber-yellow">{val}</span>
                  <span className="text-[10px] text-cyber-muted uppercase tracking-wider">{lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: combat robot image in a card ── */}
          <div className="relative w-full aspect-video rounded-2xl border border-cyber-border/80 bg-cyber-card overflow-hidden shadow-[0_0_40px_rgba(255,59,48,0.15)] group">
            <img
              src="/assets/hero_bg.png"
              alt="Botleague Combat Robots"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/80 via-transparent to-transparent" />
            {/* caption bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-cyber-card/80 backdrop-blur-sm border border-cyber-border/60 rounded-lg p-3">
              <span className="text-[10px] text-cyber-yellow uppercase tracking-widest font-bold block mb-0.5">FEATURED MATCH</span>
              <h4 className="font-title text-sm font-bold text-white uppercase tracking-wide">Heavyweight Combat: Apex vs Goliath</h4>
              <p className="text-[11px] text-cyber-muted mt-0.5">Grand finals · Mumbai Regional Exhibition</p>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. COMPETITIONS & EVENTS
      ═══════════════════════════════════════════════════════════════ */}
      <section id="competitions" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cyber-border/60 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide uppercase">COMPETITIONS & EVENTS</h2>
            <p className="text-xs text-cyber-muted uppercase tracking-widest mt-1 font-title">THE ROADMAP FOR 2026</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Live Bracket */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-title text-xs font-bold tracking-widest text-primary uppercase">LIVE BRACKETS</h3>
              <LiveBracket />
            </div>

            {/* Upcoming Events + Past Results */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="font-title text-xs font-bold tracking-widest text-cyber-yellow uppercase mb-3">FAST RESULTS</h3>
                <div className="bg-cyber-card border border-cyber-border rounded-xl p-4 space-y-3">
                  {eventsLoading ? (
                    <div className="h-36 bg-cyber-bg/40 animate-pulse rounded" />
                  ) : events?.slice(0, 2).map((evt) => (
                    <div key={evt.id} className="p-3 bg-cyber-bg/50 border border-cyber-border rounded-lg hover:border-cyber-yellow/40 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <span className="text-[10px] text-cyber-yellow font-bold uppercase tracking-widest block">{evt.date}</span>
                          <h5 className="font-title text-xs font-bold text-white uppercase tracking-wide mt-0.5">{evt.name}</h5>
                        </div>
                        <span className="text-[10px] bg-cyber-yellow/10 border border-cyber-yellow/30 text-cyber-yellow px-2 py-0.5 rounded uppercase font-bold ml-2 whitespace-nowrap">
                          {evt.spotsLeft} left
                        </span>
                      </div>
                      <div className="flex items-center text-[11px] text-cyber-muted">
                        <MapPin size={11} className="mr-1 flex-shrink-0" />
                        <span>{evt.venue}</span>
                      </div>
                      <button
                        onClick={() => scrollTo('ecosystem')}
                        className="w-full mt-2.5 bg-cyber-yellow/10 hover:bg-cyber-yellow text-cyber-yellow hover:text-black py-1.5 rounded text-[11px] font-title font-bold uppercase tracking-wider transition-all"
                      >
                        REGISTER SPOT
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Past results */}
              <div>
                <h3 className="font-title text-xs font-bold tracking-widest text-cyber-orange uppercase mb-3">PAST ARCHIVES</h3>
                <div className="bg-cyber-card border border-cyber-border rounded-xl p-4 space-y-2.5">
                  {[
                    { name: 'Delhi Open Qualifier',  info: 'June 2026 · Champion: Zenith'    },
                    { name: 'Kochi Exhibition',      info: 'May 2026 · Champion: CyberSpark' },
                  ].map((r) => (
                    <div key={r.name} className="flex justify-between items-center text-xs p-2.5 bg-cyber-bg/40 border border-cyber-border/60 rounded-lg">
                      <div>
                        <span className="font-bold text-white block uppercase text-[11px]">{r.name}</span>
                        <span className="text-[10px] text-cyber-muted font-mono">{r.info}</span>
                      </div>
                      <span className="text-[10px] bg-cyber-orange/10 border border-cyber-orange/30 text-cyber-orange px-2 py-0.5 rounded font-bold uppercase ml-2">DONE</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. PATH TO THE LEAGUE
      ═══════════════════════════════════════════════════════════════ */}
      <section id="path" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-card/20 border-t border-b border-cyber-border/60 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-primary/20 text-primary text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full font-title border border-primary/30 mb-4">
              ★ LEAGUE JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide uppercase">YOUR PATH TO THE LEAGUE</h2>
            <p className="text-sm text-cyber-muted max-w-md mx-auto mt-2">
              From local workshops and community projects to international rankings and glory in the national arena.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathSteps.map((s, i) => (
              <div key={i} className="relative flex flex-col items-center text-center p-6 bg-cyber-bg border border-cyber-border rounded-xl hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,59,48,0.1)] transition-all duration-300 group">
                {/* connector line (except last) */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 h-px bg-cyber-border/60 z-10" />
                )}
                <div className="w-14 h-14 rounded-full bg-cyber-card border-2 border-primary/40 group-hover:border-primary flex items-center justify-center shadow-[0_0_10px_rgba(255,59,48,0.1)] group-hover:shadow-neon-red transition-all duration-300 mb-4">
                  {s.icon}
                </div>
                <span className="text-[10px] font-bold text-primary tracking-widest block mb-1 font-title">{s.step}</span>
                <h4 className="font-title text-sm font-bold text-white uppercase tracking-wide mb-2">{s.name}</h4>
                <p className="text-[11px] text-cyber-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. WHAT IS BOTLEAGUE?
      ═══════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text left */}
          <div className="space-y-6">
            <div>
              <span className="text-[11px] text-cyber-orange font-bold uppercase tracking-widest font-title">ABOUT ASSOCIATION</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide mt-1 uppercase">WHAT IS BOTLEAGUE?</h2>
            </div>
            <p className="text-sm text-cyber-muted leading-relaxed">
              Botleague is India's leading platform fostering competitive robotics and design thinking. We organize certified arenas, standardize hardware regulations, track builder indexes, and connect raw talent with mechanical engineering sponsors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { n: '1. Structured Events',  d: 'Standardized brackets, safety checkpoints, and verified tournament results.'         },
                { n: '2. Digital Identity',   d: 'Unique profile trackers displaying your wins, bot specs, and certifications.'        },
                { n: '3. National Ranking',   d: 'Benchmark your piloting abilities against the brightest robotics minds in India.'    },
                { n: '4. Career Pathway',     d: 'Exclusive internship calls and recruitment opportunities with automation sponsors.'   },
              ].map((f) => (
                <div key={f.n} className="space-y-1.5 p-4 bg-cyber-card/60 border border-cyber-border rounded-lg hover:border-primary/40 transition-colors">
                  <span className="font-title text-xs font-bold text-white uppercase tracking-wider">{f.n}</span>
                  <p className="text-[11px] text-cyber-muted leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SVG robot schematic right */}
          <div className="relative border border-cyber-border rounded-2xl bg-cyber-card/60 p-6 flex items-center justify-center overflow-hidden aspect-square">
            <div className="absolute inset-0 cyber-grid opacity-20" />
            <div className="absolute top-3 right-4 font-mono text-[9px] text-cyber-muted uppercase tracking-widest">SYSTEM: v4.12</div>
            <svg viewBox="0 0 400 400" className="w-full h-full max-w-[320px] max-h-[320px] drop-shadow-[0_0_20px_rgba(10,132,255,0.2)] text-cyber-blue">
              <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,10" className="opacity-30" />
              <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-50" />
              <rect x="140" y="160" width="120" height="100" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="115" y="180" width="25" height="60" rx="5" fill="none" stroke="#FF3B30" strokeWidth="2" />
              <rect x="260" y="180" width="25" height="60" rx="5" fill="none" stroke="#FF3B30" strokeWidth="2" />
              <circle cx="200" cy="210" r="25" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4" />
              <line x1="200" y1="160" x2="200" y2="100" stroke="#FFCC00" strokeWidth="3" />
              <circle cx="200" cy="100" r="10" fill="none" stroke="#FFCC00" strokeWidth="2" />
              <path d="M 170 160 L 170 130 Q 200 120 230 130 L 230 160 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="185" cy="145" r="4" fill="currentColor" />
              <circle cx="215" cy="145" r="4" fill="currentColor" />
              <line x1="260" y1="210" x2="320" y2="210" stroke="currentColor" strokeWidth="1" strokeDasharray="3" className="opacity-60" />
              <text x="325" y="214" fill="currentColor" fontSize="9" fontFamily="monospace">T: 32°C</text>
              <line x1="140" y1="210" x2="80" y2="210" stroke="currentColor" strokeWidth="1" strokeDasharray="3" className="opacity-60" />
              <text x="10" y="214" fill="currentColor" fontSize="9" fontFamily="monospace">4.8K RPM</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. CATEGORIES
      ═══════════════════════════════════════════════════════════════ */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cyber-border/60 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] text-cyber-orange font-bold uppercase tracking-widest font-title">AGE GROUPS & DIVISIONS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide mt-1 uppercase">CATEGORIES</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`border ${cat.border} ${cat.bg} ${cat.hover} rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer`}
              >
                <div>
                  <div className={`${cat.text} mb-4`}>{cat.icon}</div>
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-black/40 border border-cyber-border/40 inline-block mb-3 text-cyber-muted">
                    {cat.age}
                  </span>
                  <h4 className={`font-title text-base font-bold uppercase tracking-wider mb-3 ${cat.text}`}>{cat.title}</h4>
                  <p className="text-[11px] text-cyber-muted leading-relaxed">{cat.desc}</p>
                </div>
                <button
                  onClick={() => scrollTo('ecosystem')}
                  className={`mt-5 flex items-center space-x-1 text-[11px] font-bold font-title uppercase tracking-widest ${cat.text} hover:underline`}
                >
                  <span>Learn More</span>
                  <ArrowRight size={11} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. COMPETITION DISCIPLINES
      ═══════════════════════════════════════════════════════════════ */}
      <section id="disciplines" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 border-t border-cyber-border/60 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <span className="text-[11px] text-primary font-bold uppercase tracking-widest font-title">SPORTS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide mt-1 uppercase">COMPETITION DISCIPLINES</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {disciplines.map((d, i) => (
              <div
                key={i}
                onClick={() => scrollTo('ecosystem')}
                className="group relative rounded-xl border border-cyber-border bg-cyber-card overflow-hidden h-[200px] transition-all duration-300 hover:border-primary/60 hover:shadow-neon-red cursor-pointer"
              >
                <img src={d.image} alt={d.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:from-primary/70 transition-all duration-500" />
                <div className="absolute bottom-4 left-3 right-3 z-10">
                  <span className="text-[9px] font-bold text-cyber-yellow group-hover:text-white block tracking-widest uppercase mb-1">{d.tag}</span>
                  <h4 className="font-title text-sm font-bold text-white uppercase tracking-wide">{d.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. WHY REGISTER + LEADERBOARD
      ═══════════════════════════════════════════════════════════════ */}
      <section id="leaderboard" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-cyber-border/60 z-10 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[11px] text-cyber-yellow font-bold uppercase tracking-widest font-title">WHY REGISTER?</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide mt-1 uppercase">THE LEAGUE ADVANTAGE</h2>
              <p className="text-sm text-cyber-muted mt-2">Gain competitive benefits designed to scale your technical capability and builder credential values.</p>
            </div>

            <div className="space-y-5">
              {advantages.map((adv, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {adv.icon}
                  </div>
                  <div>
                    <h4 className="font-title text-sm font-bold text-white uppercase tracking-wide">{adv.title}</h4>
                    <p className="text-[11px] text-cyber-muted mt-1 leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Leaderboard */}
          <div className="lg:col-span-6">
            <Leaderboard />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. JOIN THE ECOSYSTEM — 3 side-by-side forms
      ═══════════════════════════════════════════════════════════════ */}
      <section id="ecosystem" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-card/20 border-t border-cyber-border/60 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] text-primary font-bold uppercase tracking-widest font-title">ENGAGEMENT NETWORKS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide mt-1 uppercase">JOIN THE ECOSYSTEM</h2>
            <p className="text-sm text-cyber-muted max-w-md mx-auto mt-2">
              Select your path of involvement. Support the arena as an evaluator, volunteer hands, or community pilot.
            </p>
          </div>

          {/* Three forms side by side — matching reference exactly */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RegisterForm formType="judge"     label="BECOME A JUDGE"     />
            <RegisterForm formType="volunteer" label="VOLUNTEER REGISTRY" />
            <RegisterForm formType="member"    label="COMMUNITY MEMBER"   />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          9. SPONSORS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-cyber-border/60 z-10 relative bg-black/40">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-[11px] text-cyber-muted uppercase tracking-widest font-semibold font-title mb-8">SPONSORS & PARTNERS</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
            {[
              { icon: <Cpu size={26} />,    name: 'IIT DELHI'    },
              { icon: <Shield size={26} />, name: 'BITS PILANI'  },
              { icon: <Layers size={26} />, name: 'IIT BOMBAY'   },
              { icon: <Globe size={26} />,  name: 'AERO LABS'    },
              { icon: <Cpu size={26} />,    name: 'CYBER AUTO'   },
              { icon: <Wrench size={26} />, name: 'ROBO CO.'     },
            ].map((s) => (
              <div key={s.name} className="flex flex-col items-center space-y-1.5 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <span className="text-cyber-muted">{s.icon}</span>
                <span className="font-title text-[10px] font-semibold text-cyber-text tracking-wider">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
