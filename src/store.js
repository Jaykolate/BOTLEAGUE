import { configureStore, createSlice } from '@reduxjs/toolkit';

// Auth Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('botleague_token', action.payload.token);
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('botleague_token');
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

// UI Slice
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    activeCategory: 'all', // 'all', 'mini', 'junior', 'young', 'robo'
    mobileMenuOpen: false,
    ecosystemTab: 'judge', // 'judge', 'volunteer', 'member'
    registrationModalOpen: false,
    registrationSuccess: false,
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setMobileMenu: (state, action) => {
      state.mobileMenuOpen = action.payload;
    },
    setEcosystemTab: (state, action) => {
      state.ecosystemTab = action.payload;
    },
    toggleRegistrationModal: (state) => {
      state.registrationModalOpen = !state.registrationModalOpen;
    },
    setRegistrationSuccess: (state, action) => {
      state.registrationSuccess = action.payload;
    },
  },
});

export const { 
  setActiveCategory, 
  toggleMobileMenu, 
  setMobileMenu,
  setEcosystemTab, 
  toggleRegistrationModal,
  setRegistrationSuccess
} = uiSlice.actions;

// Leaderboard Slice
const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: {
    category: 'all',
    searchQuery: '',
  },
  reducers: {
    setLeaderboardCategory: (state, action) => {
      state.category = action.payload;
    },
    setLeaderboardSearch: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setLeaderboardCategory, setLeaderboardSearch } = leaderboardSlice.actions;

// Configure Store
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    leaderboard: leaderboardSlice.reducer,
  },
});
