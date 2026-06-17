import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, Trophy, Medal, Award, User, RefreshCw } from 'lucide-react';
import { fetchLeaderboard } from '../features/api';

export default function Leaderboard() {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  
  // React Query fetching leaderboard data via mock API
  const { data: rankings, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ['leaderboard', category, search],
    queryFn: () => fetchLeaderboard({ category, search }),
    placeholderData: (prev) => prev,
  });

  const categories = [
    { key: 'all', name: 'All Categories' },
    { key: 'mini', name: 'Mini Makers' },
    { key: 'junior', name: 'Junior Innovators' },
    { key: 'young', name: 'Young Engineers' },
    { key: 'robo', name: 'Robo Minds' },
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy size={18} className="text-cyber-yellow" />;
      case 2:
        return <Medal size={18} className="text-slate-300" />;
      case 3:
        return <Award size={18} className="text-amber-600" />;
      default:
        return <span className="font-mono text-sm text-cyber-muted font-bold">{rank}</span>;
    }
  };

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case 'mini': return 'Mini Makers';
      case 'junior': return 'Junior Innovators';
      case 'young': return 'Young Engineers';
      case 'robo': return 'Robo Minds';
      default: return 'All';
    }
  };

  return (
    <div className="bg-cyber-card border border-cyber-border rounded-xl shadow-glass p-4 sm:p-6 w-full max-w-xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyber-yellow to-cyber-orange">
            LEADERBOARD
          </h3>
          <p className="text-xs text-cyber-muted uppercase tracking-widest mt-0.5">Scouting & Standings</p>
        </div>
        <button 
          onClick={() => refetch()}
          disabled={isLoading || isFetching}
          className="text-cyber-muted hover:text-primary transition-colors disabled:opacity-50 p-2 border border-cyber-border/40 rounded hover:bg-cyber-bg/40"
        >
          <RefreshCw size={14} className={`${isFetching ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* Category Pills Slider */}
      <div className="flex space-x-2 overflow-x-auto pb-4 mb-4 scrollbar-thin scrollbar-thumb-cyber-border">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setCategory(cat.key)}
            className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider font-title border transition-all ${
              category === cat.key
                ? 'bg-primary border-primary text-white shadow-neon-red'
                : 'bg-cyber-bg border-cyber-border text-cyber-muted hover:text-cyber-text hover:border-cyber-muted'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="absolute left-3.5 top-3 text-cyber-muted" size={18} />
        <input
          type="text"
          placeholder="Search pilot or team name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-cyber-bg border border-cyber-border rounded px-10 py-2.5 text-cyber-text text-sm focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Table / List Container */}
      <div className="space-y-2.5 max-h-[350px] overflow-y-auto pr-1">
        {isLoading ? (
          // Skeleton loader
          Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="h-16 bg-cyber-bg/40 border border-cyber-border/40 rounded-lg animate-pulse" />
          ))
        ) : isError ? (
          <div className="text-center py-8 text-sm text-red-400">
            Error loading ranking data. Please try again.
          </div>
        ) : rankings?.length === 0 ? (
          <div className="text-center py-12 text-sm text-cyber-muted">
            No pilots found matching criteria.
          </div>
        ) : (
          rankings?.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-between p-3.5 bg-cyber-bg/50 border border-cyber-border hover:border-primary/40 rounded-lg transition-all duration-300 group hover:shadow-[0_0_10px_rgba(255,59,48,0.1)]"
            >
              {/* Left Side: Rank, Avatar, Name */}
              <div className="flex items-center space-x-3.5">
                <div className="w-8 flex items-center justify-center">
                  {getRankIcon(item.rank)}
                </div>
                
                {/* Avatar Icon */}
                <div className="w-9 h-9 rounded-full bg-cyber-card border border-cyber-border flex items-center justify-center text-cyber-muted group-hover:text-primary transition-colors">
                  <User size={16} />
                </div>

                <div>
                  <h5 className="text-sm font-bold text-cyber-text group-hover:text-white transition-colors">
                    {item.name}
                  </h5>
                  <div className="flex items-center space-x-2 text-[10px] text-cyber-muted mt-0.5">
                    <span className="font-semibold uppercase tracking-wider text-cyber-yellow">{item.team}</span>
                    <span>•</span>
                    <span className="uppercase text-[9px] bg-cyber-card px-1.5 py-0.5 rounded border border-cyber-border/60">
                      {getCategoryLabel(item.category)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Score, Win-Loss Ratio */}
              <div className="text-right">
                <span className="font-mono text-sm font-bold text-cyber-yellow">{item.score} pts</span>
                <p className="text-[10px] text-cyber-muted mt-0.5">
                  W-L: <span className="text-cyber-orange">{item.winLoss}</span> ({item.winRate})
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
