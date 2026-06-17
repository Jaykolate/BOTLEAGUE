import React, { useState } from 'react';
import { Trophy, Flame } from 'lucide-react';

export default function LiveBracket() {
  const [hoveredTeam, setHoveredTeam] = useState(null);

  // Bracket Match Data
  const rounds = [
    {
      name: 'Quarterfinals',
      matches: [
        { id: 'q1', team1: 'Zenith', score1: '3', team2: 'GearsOfWar', score2: '1', winner: 'Zenith' },
        { id: 'q2', team1: 'CyberSpark', score1: '0', team2: 'ViperBots', score2: '3', winner: 'ViperBots' },
        { id: 'q3', team1: 'AlphaForce', score1: '3', team2: 'MicroBots', score2: '2', winner: 'AlphaForce' },
        { id: 'q4', team1: 'Mechanizers', score1: '3', team2: 'ByteSized', score2: '0', winner: 'Mechanizers' }
      ]
    },
    {
      name: 'Semifinals',
      matches: [
        { id: 's1', team1: 'Zenith', score1: '3', team2: 'ViperBots', score2: '2', winner: 'Zenith' },
        { id: 's2', team1: 'AlphaForce', score1: '1', team2: 'Mechanizers', score2: '3', winner: 'Mechanizers' }
      ]
    },
    {
      name: 'Finals',
      matches: [
        { id: 'f1', team1: 'Zenith', score1: '--', team2: 'Mechanizers', score2: '--', winner: null, isLive: true }
      ]
    }
  ];

  const getTeamStatusClass = (teamName, winnerName, isLive) => {
    const isHovered = hoveredTeam === teamName;
    const isWinner = teamName === winnerName;
    
    let base = "p-2 rounded border transition-all duration-200 flex items-center justify-between text-xs sm:text-sm ";
    
    if (isHovered) {
      base += "bg-primary/20 border-primary text-white shadow-[0_0_8px_rgba(255,59,48,0.4)] ";
    } else if (winnerName && isWinner) {
      base += "bg-cyber-card border-cyber-border text-cyber-yellow ";
    } else if (winnerName && !isWinner) {
      base += "bg-cyber-card/40 border-cyber-border/40 text-cyber-muted ";
    } else {
      base += "bg-cyber-card border-cyber-border text-cyber-text ";
    }
    
    return base;
  };

  return (
    <div className="bg-cyber-card border border-cyber-border p-4 sm:p-6 rounded-lg w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-primary rounded-full animate-ping"></span>
          <h4 className="font-title text-base sm:text-lg font-bold tracking-wider text-cyber-text">
            BENGALURU REGIONALS - PRO ARENA
          </h4>
        </div>
        <div className="flex items-center space-x-1 bg-primary/10 border border-primary/30 px-3 py-1 rounded text-primary text-xs font-semibold uppercase tracking-wider animate-pulse">
          <Flame size={14} />
          <span>Live Now</span>
        </div>
      </div>

      {/* Bracket Tree Flex Wrapper */}
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 md:gap-4 relative select-none">
        
        {rounds.map((round, rIdx) => (
          <div key={rIdx} className="flex-1 flex flex-col justify-around relative">
            {/* Round Name */}
            <div className="text-center md:text-left mb-3">
              <span className="text-xs uppercase tracking-widest text-cyber-muted font-title font-semibold">
                {round.name}
              </span>
            </div>

            {/* Match Cards Container */}
            <div className="flex flex-col gap-4 justify-around h-full">
              {round.matches.map((match) => (
                <div 
                  key={match.id} 
                  className={`relative flex flex-col gap-1.5 p-3 rounded-lg border bg-cyber-bg transition-all duration-300 ${
                    match.isLive ? 'border-primary/50 shadow-neon-red animate-pulse' : 'border-cyber-border/60'
                  }`}
                >
                  {/* Team 1 */}
                  <div 
                    className={getTeamStatusClass(match.team1, match.winner, match.isLive)}
                    onMouseEnter={() => setHoveredTeam(match.team1)}
                    onMouseLeave={() => setHoveredTeam(null)}
                  >
                    <span className="font-semibold">{match.team1}</span>
                    <span className={`font-mono text-xs px-1.5 rounded ${
                      match.winner === match.team1 ? 'text-cyber-yellow' : 'text-cyber-muted'
                    }`}>{match.score1}</span>
                  </div>

                  {/* Team 2 */}
                  <div 
                    className={getTeamStatusClass(match.team2, match.winner, match.isLive)}
                    onMouseEnter={() => setHoveredTeam(match.team2)}
                    onMouseLeave={() => setHoveredTeam(null)}
                  >
                    <span className="font-semibold">{match.team2}</span>
                    <span className={`font-mono text-xs px-1.5 rounded ${
                      match.winner === match.team2 ? 'text-cyber-yellow' : 'text-cyber-muted'
                    }`}>{match.score2}</span>
                  </div>

                  {/* Match Info overlay */}
                  {match.isLive && (
                    <div className="absolute -top-2.5 right-3 bg-primary text-white text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded flex items-center gap-1 shadow-neon-red">
                      <Trophy size={10} />
                      <span>GRAND FINALS</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bracket Footer Guideline */}
      <p className="mt-6 text-center text-xs text-cyber-muted italic">
        Hover over any team name to trace their path through the regional tournament tree.
      </p>
    </div>
  );
}
