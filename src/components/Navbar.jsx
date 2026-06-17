import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, X, LogIn, LogOut, Shield, User } from 'lucide-react';
import { toggleMobileMenu, logout, loginStart, loginSuccess, loginFailure } from '../store';
import { loginUser } from '../features/api';

export default function Navbar() {
  const dispatch = useDispatch();
  const { mobileMenuOpen } = useSelector((state) => state.ui);
  const { isAuthenticated, user, loading } = useSelector((state) => state.auth);
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleScroll = (id) => {
    dispatch(toggleMobileMenu(false));
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    setLoginError('');
    try {
      const data = await loginUser({ email: loginEmail, password: loginPassword });
      dispatch(loginSuccess({ user: data.user, token: data.token }));
      setShowLoginModal(false);
      setLoginEmail('');
      setLoginPassword('');
    } catch (err) {
      const errMsg = err.message || 'Login failed. Try user@example.com / password';
      dispatch(loginFailure(errMsg));
      setLoginError(errMsg);
    }
  };

  const handleDemoLogin = () => {
    setLoginEmail('competitor@botleague.in');
    setLoginPassword('password123');
  };

  const navLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Competitions', id: 'competitions' },
    { name: 'Path To League', id: 'path' },
    { name: 'Categories', id: 'categories' },
    { name: 'Disciplines', id: 'disciplines' },
    { name: 'Leaderboard', id: 'leaderboard' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-bg/80 backdrop-blur-md border-b border-cyber-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-3xl font-extrabold tracking-wider font-title italic bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyber-orange to-cyber-yellow">
                BOTLEAGUE
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className="font-title uppercase text-sm font-semibold tracking-wider text-cyber-text/80 hover:text-primary hover:border-b-2 hover:border-primary pb-1 transition-all duration-150"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 bg-cyber-card border border-cyber-border px-3 py-1.5 rounded-md text-xs font-semibold text-cyber-yellow">
                    <User size={14} />
                    <span>{user?.name}</span>
                  </div>
                  <button
                    onClick={() => dispatch(logout())}
                    className="flex items-center space-x-1 border border-primary hover:bg-primary/10 text-primary px-4 py-2 rounded-md font-title uppercase tracking-wider text-sm font-semibold transition-all duration-300"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="text-cyber-text hover:text-primary px-4 py-2 font-title uppercase tracking-wider text-sm font-semibold transition-colors duration-200"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById('ecosystem');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-primary hover:bg-primary-hover hover:shadow-neon-red text-white px-5 py-2.5 rounded-md font-title uppercase tracking-wider text-sm font-bold transition-all duration-300"
                  >
                    Register Now
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => dispatch(toggleMobileMenu())}
                className="text-cyber-text hover:text-primary focus:outline-none"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cyber-bg/95 border-b border-cyber-border py-4 px-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="block w-full text-left font-title uppercase text-base font-semibold tracking-wider text-cyber-text py-2 border-b border-cyber-border/40 hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            
            <div className="pt-4 flex flex-col space-y-3">
              {isAuthenticated ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 bg-cyber-card border border-cyber-border px-3 py-2 rounded-md text-sm font-semibold text-cyber-yellow">
                    <User size={16} />
                    <span>Logged in as: {user?.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(logout());
                      dispatch(toggleMobileMenu(false));
                    }}
                    className="w-full flex items-center justify-center space-x-2 border border-primary text-primary py-2.5 rounded-md font-title uppercase tracking-wider text-sm font-semibold"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      dispatch(toggleMobileMenu(false));
                    }}
                    className="w-full border border-cyber-border text-cyber-text py-2.5 rounded-md font-title uppercase tracking-wider text-sm font-semibold"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      dispatch(toggleMobileMenu(false));
                      const element = document.getElementById('ecosystem');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-primary hover:bg-primary-hover text-white py-2.5 rounded-md font-title uppercase tracking-wider text-sm font-bold"
                  >
                    Register Now
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-cyber-card border-2 border-primary rounded-lg shadow-neon-red p-6 sm:p-8 animate-pulse-glow">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-cyber-text/60 hover:text-primary transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyber-orange">
                COMMUNICATIONS PORTAL
              </h3>
              <p className="text-xs text-cyber-muted tracking-widest mt-1">SECURE NEURAL LINK ACCESS</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-cyber-text/80 mb-1">
                  Secure Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full bg-cyber-bg border border-cyber-border rounded px-4 py-2.5 text-cyber-text focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-cyber-text/80 mb-1">
                  Access Key (Password)
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full bg-cyber-bg border border-cyber-border rounded px-4 py-2.5 text-cyber-text focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {loginError && (
                <div className="flex items-center space-x-2 bg-red-900/30 border border-red-500/50 p-3 rounded text-xs text-red-400">
                  <Shield size={16} />
                  <span>{loginError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded font-title uppercase tracking-wider font-bold transition-all disabled:opacity-50"
              >
                {loading ? 'INITIATING LINK...' : 'ESTABLISH LINK'}
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-cyber-border/40 text-center">
              <button
                onClick={handleDemoLogin}
                className="text-xs text-cyber-yellow hover:underline tracking-wide font-semibold"
              >
                Auto-fill Demo Credentials
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
