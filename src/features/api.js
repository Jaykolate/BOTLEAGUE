import axios from 'axios';

// Axios instance (used for JWT interceptor pattern demonstration)
export const axiosInstance = axios.create({
  baseURL: 'https://api.botleague.in/v1',
  headers: { 'Content-Type': 'application/json' },
});

// JWT interceptor: attach stored token to every real request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('botleague_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ─── Mock Data ───────────────────────────────────────────────────────────────

const UPCOMING_EVENTS = [
  { id: 1, name: 'Mumbai Regionals',  date: 'Oct 12-14, 2026',  venue: 'IIT Bombay Arena',          category: 'Young Engineers & Robo Minds',       spotsLeft: 12 },
  { id: 2, name: 'Delhi Regionals',   date: 'Nov 05-07, 2026',  venue: 'IIT Delhi Sports Complex',  category: 'Junior Innovators & Young Engineers', spotsLeft: 8  },
  { id: 3, name: 'Kolkata Regionals', date: 'Dec 18-20, 2026',  venue: 'Science City Hall',          category: 'Mini Makers & Junior Innovators',     spotsLeft: 20 },
  { id: 4, name: 'Chennai Regionals', date: 'Jan 15-17, 2027',  venue: 'IIT Madras Exhibition Hall', category: 'All Categories',                      spotsLeft: 15 },
];

const LEADERBOARD = [
  { id: 1,  name: 'Pranav Sharma',   team: 'Zenith Robotics', rank: 1,  score: 2950, category: 'robo',   winLoss: '14-1', winRate: '93%' },
  { id: 2,  name: 'Aarav Patel',     team: 'Mechanizers',     rank: 2,  score: 2840, category: 'young',  winLoss: '12-2', winRate: '85%' },
  { id: 3,  name: 'Ananya Iyer',     team: 'Cyber Spark',     rank: 3,  score: 2790, category: 'young',  winLoss: '11-2', winRate: '84%' },
  { id: 4,  name: 'Rohan Deshmukh', team: 'Viper Bots',      rank: 4,  score: 2650, category: 'robo',   winLoss: '10-3', winRate: '76%' },
  { id: 5,  name: 'Kabir Sen',       team: 'Mini Mavericks',  rank: 5,  score: 2500, category: 'junior', winLoss: '9-1',  winRate: '90%' },
  { id: 6,  name: 'Diya Nair',       team: 'Robo Cubs',       rank: 6,  score: 2420, category: 'mini',   winLoss: '8-2',  winRate: '80%' },
  { id: 7,  name: 'Aditya Rao',      team: 'Gears of War',    rank: 7,  score: 2390, category: 'robo',   winLoss: '9-4',  winRate: '69%' },
  { id: 8,  name: 'Isha Gupta',      team: 'Alpha Force',     rank: 8,  score: 2310, category: 'junior', winLoss: '7-3',  winRate: '70%' },
  { id: 9,  name: 'Vivaan Verma',    team: 'Micro Bots',      rank: 9,  score: 2280, category: 'mini',   winLoss: '6-2',  winRate: '75%' },
  { id: 10, name: 'Sanjana Joshi',   team: 'Byte Sized',      rank: 10, score: 2210, category: 'junior', winLoss: '6-4',  winRate: '60%' },
];

// ─── Simulated delay ─────────────────────────────────────────────────────────
const delay = (ms = 400) => new Promise((res) => setTimeout(res, ms));

// ─── Mock API functions (called by React Query) ──────────────────────────────

export async function fetchEvents() {
  await delay();
  return UPCOMING_EVENTS;
}

export async function fetchLeaderboard({ category = 'all', search = '' } = {}) {
  await delay();
  let filtered = [...LEADERBOARD];

  if (category && category !== 'all') {
    filtered = filtered.filter((item) => item.category === category);
  }
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.team.toLowerCase().includes(q)
    );
  }

  filtered.sort((a, b) => b.score - a.score);
  return filtered.map((item, idx) => ({ ...item, rank: idx + 1 }));
}

export async function submitRegistration(data) {
  await delay(600);
  return {
    success: true,
    message: `Registration successful! Welcome to the ecosystem, ${data.name || 'Participant'}.`,
    registrationId: 'BL-' + Math.floor(Math.random() * 900000 + 100000),
  };
}

export async function loginUser({ email, password }) {
  await delay(500);
  if (email && password) {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy_token';
    localStorage.setItem('botleague_token', token);
    return {
      success: true,
      token,
      user: { name: email.split('@')[0], email, role: 'Competitor' },
    };
  }
  throw new Error('Invalid email or password');
}
