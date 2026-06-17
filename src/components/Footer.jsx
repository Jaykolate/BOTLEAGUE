import React from 'react';

// Inline SVG social icons (lucide-react dropped brand icons in v0.300+)
const YoutubeSVG = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.6 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.3.6 9.3.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
  </svg>
);

const InstagramSVG = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-3.2-.1-4.8-1.7-4.9-4.9C2.1 15.6 2 15.2 2 12s0-3.6.1-4.9c.1-3.2 1.7-4.8 4.9-4.9 1.3-.1 1.7-.1 5-.1zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1.1 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7C24 15.7 24 15.3 24 12c0-3.3 0-3.7-.1-4.9-.2-4.3-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z"/>
  </svg>
);

const FacebookSVG = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23.1 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.2h3.3l-.5 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1z"/>
  </svg>
);

const TwitterSVG = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.2 2h3.5l-7.6 8.7L23 22h-7l-5.5-7.2L4.1 22H.7l8.1-9.3L1 2h7.2l4.9 6.5L18.2 2zm-1.2 18h1.9L7 3.9H5L17 20z"/>
  </svg>
);

export default function Footer() {
  const footerLinks = [
    { title: 'The Arena',  links: ['Home Arena', 'Rulebook', 'Match Schedule', 'Competitors'] },
    { title: 'Programs',   links: ['Mini Makers', 'Junior Innovators', 'Young Engineers', 'Robo Minds'] },
    { title: 'Resources',  links: ['Build Manuals', 'FAQs', 'Help Center', 'Legal'] },
    { title: 'Ecosystem',  links: ['Become Judge', 'Volunteer Registry', 'Community Forums', 'Press Kits'] },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-cyber-bg border-t border-cyber-border/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">

          {/* Brand Column */}
          <div className="col-span-2">
            <span className="text-3xl font-extrabold font-title italic bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyber-yellow tracking-wider">
              BOTLEAGUE
            </span>
            <p className="mt-4 text-sm text-cyber-muted max-w-xs leading-relaxed font-body">
              India's ultimate robotics battleground. Driving innovation, engineering excellence, and competitive spirit among young builders nationwide.
            </p>

            {/* Social Icons — using inline SVGs */}
            <div className="flex space-x-4 mt-6">
              <button onClick={() => window.open('https://youtube.com', '_blank')} className="text-cyber-muted hover:text-primary transition-colors" aria-label="YouTube">
                <YoutubeSVG />
              </button>
              <button onClick={() => window.open('https://instagram.com', '_blank')} className="text-cyber-muted hover:text-primary transition-colors" aria-label="Instagram">
                <InstagramSVG />
              </button>
              <button onClick={() => window.open('https://facebook.com', '_blank')} className="text-cyber-muted hover:text-primary transition-colors" aria-label="Facebook">
                <FacebookSVG />
              </button>
              <button onClick={() => window.open('https://twitter.com', '_blank')} className="text-cyber-muted hover:text-primary transition-colors" aria-label="X / Twitter">
                <TwitterSVG />
              </button>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col, idx) => (
            <div key={idx} className="col-span-1">
              <h4 className="font-title text-sm font-semibold tracking-wider text-cyber-text uppercase mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <button
                      onClick={() => scrollTo('competitions')}
                      className="text-sm text-cyber-muted hover:text-primary transition-colors text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyber-border/40 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-cyber-muted">
          <p>&copy; {new Date().getFullYear()} BOTLEAGUE Association. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0 font-title uppercase tracking-widest">
            <button onClick={() => scrollTo('about')} className="hover:text-primary transition-colors">Privacy Policy</button>
            <button onClick={() => scrollTo('about')} className="hover:text-primary transition-colors">Terms of Engagement</button>
            <span className="flex items-center space-x-1 text-cyber-yellow">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Secured</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
