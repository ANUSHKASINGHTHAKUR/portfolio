import React from 'react';
import { Compass, Terminal, Network, Code, Globe, ShieldAlert, Activity, Crosshair, Cloud, Box, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { learningJourney } from '../data/portfolioData';

export default function LearningJourney() {
  const getPhaseIcon = (iconName) => {
    switch (iconName) {
      case 'Terminal': return Terminal;
      case 'Network': return Network;
      case 'Code': return Code;
      case 'Globe': return Globe;
      case 'ShieldAlert': return ShieldAlert;
      case 'Activity': return Activity;
      case 'Crosshair': return Crosshair;
      case 'Cloud': return Cloud;
      case 'Box': return Box;
      case 'Award': return Award;
      default: return Compass;
    }
  };

  return (
    <section id="journey" className="py-20 relative bg-slate-50 dark:bg-[#070a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs font-mono text-emerald-700 dark:text-[#00ff9d] shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>Skill Acquisition Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Learning <span className="text-emerald-600 dark:text-[#00ff9d]">Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
            A structured step-by-step roadmap from system fundamentals to offensive security, cloud integration, and penetration testing.
          </p>
        </div>

        {/* Top Horizontal Quick Roadmap Chain */}
        <div className="mb-16 p-4 sm:p-6 glass-card rounded-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto shadow-sm">
          <h3 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#00ff9d]"></span>
            Roadmap Sequence Flow
          </h3>
          <div className="flex items-center gap-2 min-w-max">
            {learningJourney.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className={`px-3 py-2 rounded-xl border text-xs font-mono flex items-center gap-2 ${
                  step.status === 'Completed'
                    ? 'bg-emerald-100 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300'
                    : step.status === 'Active Focus'
                    ? 'bg-cyan-100 dark:bg-cyan-950/80 border-cyan-300 dark:border-cyan-400 text-cyan-800 dark:text-cyan-300 shadow-sm dark:shadow-cyber-cyan'
                    : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400'
                }`}>
                  <span className="font-bold">{step.phase}</span>
                  <span>{step.title.split(' ')[0]}</span>
                </div>
                {idx < learningJourney.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-600 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Vertical Timeline Card Grid */}
        <div className="relative border-l-2 border-slate-300 dark:border-slate-800/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {learningJourney.map((item, idx) => {
            const IconComponent = getPhaseIcon(item.icon);
            const isCompleted = item.status === 'Completed';
            const isActive = item.status === 'Active Focus';

            return (
              <div key={idx} className="relative group">
                {/* Timeline Dot Indicator */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-mono font-bold transition-transform group-hover:scale-125 ${
                  isCompleted
                    ? 'bg-emerald-100 dark:bg-emerald-950 border-emerald-500 dark:border-[#00ff9d] text-emerald-700 dark:text-[#00ff9d]'
                    : isActive
                    ? 'bg-cyan-100 dark:bg-cyan-950 border-cyan-500 dark:border-cyan-400 text-cyan-800 dark:text-cyan-300 animate-pulse'
                    : 'bg-white dark:bg-slate-900 border-slate-400 dark:border-slate-700 text-slate-600 dark:text-slate-500'
                }`}>
                  {item.phase}
                </div>

                {/* Timeline Content Card */}
                <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-4 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 flex items-center justify-center text-emerald-600 dark:text-[#00ff9d] shadow-sm">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono">
                        {item.title}
                      </h3>
                    </div>

                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                      isCompleted
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                        : isActive
                        ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border-cyan-300 dark:border-cyan-800'
                        : 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-400 border-slate-300 dark:border-slate-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800/60 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="p-2 rounded-lg bg-white/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-[11px] font-mono text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shadow-sm">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-[#00ff9d] shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
