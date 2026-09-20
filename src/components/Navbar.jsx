import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Menu, X, FileText, Send, Sparkles, ChevronRight, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResumeModal, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Cyber Lab', href: '#lab' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'lab', 'certifications', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-lg dark:shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 flex items-center justify-center group-hover:border-emerald-500 dark:group-hover:border-[#00ff9d] transition-colors shadow-sm dark:shadow-cyber-glow">
              <Shield className="w-5 h-5 text-emerald-600 dark:text-[#00ff9d] group-hover:scale-110 transition-transform" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-[#00ff9d] animate-ping opacity-75"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#00ff9d] transition-colors flex items-center gap-1">
                Anushka<span className="text-emerald-600 dark:text-[#00ff9d]">.sec</span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-wider">VAPT & Web Security</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-200/80 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-300/80 dark:border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-700 dark:text-[#00ff9d] border border-emerald-500/30 dark:border-[#00ff9d]/30 shadow-sm dark:shadow-[0_0_10px_rgba(0,255,157,0.15)] font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 transition-all shadow-sm group"
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                  <span className="text-xs font-mono hidden md:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" />
                  <span className="text-xs font-mono hidden md:inline">Dark</span>
                </>
              )}
            </button>

            {/* Status indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-slate-900/80 border border-emerald-500/30 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
              <span>Available for Internships</span>
            </div>

            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-[#00ff9d]/30 hover:border-emerald-500 dark:hover:border-[#00ff9d] text-xs font-mono text-slate-800 dark:text-emerald-300 transition-all shadow-sm dark:shadow-cyber-glow group"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-[#00ff9d] group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white dark:text-black font-semibold text-xs transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20"
            >
              <span>Contact</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Bar Actions */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Theme Toggle Button Mobile */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-[#00ff9d] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-slate-200 dark:border-slate-800/80 mt-3 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between px-2 pb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
              Available for Internships
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">B.Tech CSE Final Year</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono hover:border-emerald-500/40 dark:hover:border-[#00ff9d]/40 hover:text-emerald-600 dark:hover:text-[#00ff9d] transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-500" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-emerald-500/40 dark:border-[#00ff9d]/40 text-xs font-mono text-emerald-700 dark:text-[#00ff9d]"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500 text-white dark:text-black font-semibold text-xs font-mono"
            >
              <Send className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
