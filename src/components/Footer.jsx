import React from 'react';
import { Shield, ArrowUp, Linkedin, Github, Mail, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-12 pb-8 relative text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-emerald-600 dark:text-[#00ff9d] shadow-sm">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="text-slate-900 dark:text-white font-bold text-sm block">Anushka Singh</span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px] font-sans">Cybersecurity Analyst & Aspiring Penetration Tester</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-slate-700 dark:text-slate-300">
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-[#00ff9d] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-[#00ff9d] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5 text-emerald-600 dark:text-[#00ff9d]" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="hover:text-emerald-600 dark:hover:text-[#00ff9d] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-emerald-500/50 dark:hover:border-[#00ff9d]/50 transition-colors flex items-center gap-2 shadow-sm"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-600 dark:text-[#00ff9d]" />
          </button>

        </div>

        {/* Bottom Copyright Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-2 text-[11px]">
          <p>© 2026 Anushka Singh. Built with passion for Cybersecurity.</p>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Terminal className="w-3 h-3 text-emerald-600 dark:text-[#00ff9d]" />
            <span>Encrypted & Secured • VAPT Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
