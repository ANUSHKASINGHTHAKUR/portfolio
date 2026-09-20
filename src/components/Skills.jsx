import React, { useState } from 'react';
import { Cpu, Search, ShieldAlert, Terminal, Code, Network, Lock, Cloud, Sparkles, Filter, Check } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert': return ShieldAlert;
      case 'Terminal': return Terminal;
      case 'Code': return Code;
      case 'Network': return Network;
      case 'Cloud': return Cloud;
      case 'Lock': return Lock;
      default: return Cpu;
    }
  };

  const categories = ['All', ...skillsData.map(s => s.category)];

  const filteredCategories = skillsData.map(cat => {
    const matchesSearch = cat.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return {
      ...cat,
      skills: matchesSearch
    };
  }).filter(cat => {
    if (activeCategory !== 'All' && cat.category !== activeCategory) return false;
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="py-20 relative bg-slate-50 dark:bg-[#070a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs font-mono text-emerald-700 dark:text-[#00ff9d] shadow-sm">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skill <span className="text-emerald-600 dark:text-[#00ff9d]">Matrix</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
            Categorized technical skill sets across offensive security, network analysis, scripting, and system administration.
          </p>
        </div>

        {/* Filter Controls (Search + Tabs) */}
        <div className="space-y-6 mb-12">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Burp Suite, Python, TCP/IP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-mono focus:outline-none focus:border-emerald-500 dark:focus:border-[#00ff9d]/60 focus:ring-1 focus:ring-emerald-500/40 dark:focus:ring-[#00ff9d]/40 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white dark:text-black font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 glass-card rounded-2xl border border-slate-300 dark:border-slate-800">
              <p className="text-slate-600 dark:text-slate-400 font-mono text-sm">No skills found matching "{searchQuery}"</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-3 text-xs font-mono text-emerald-600 dark:text-[#00ff9d] underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredCategories.map((group, idx) => {
              const IconComponent = getCategoryIcon(group.icon);
              return (
                <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-6">
                  {/* Category Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-emerald-600 dark:text-[#00ff9d] shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono">{group.category}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">{group.description}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-slate-800">
                      {group.skills.length} Items
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 dark:hover:border-[#00ff9d]/40 transition-all hover:bg-white dark:hover:bg-slate-900 flex items-center justify-between group shadow-sm"
                      >
                        <div className="space-y-1">
                          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors block">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-slate-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-950">
                              {skill.tag}
                            </span>
                          </div>
                        </div>

                        {/* Skill Level Badge */}
                        <span className={`text-[10px] font-mono font-semibold px-2 py-1 rounded ${
                          skill.level === 'Advanced'
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                            : skill.level === 'Intermediate'
                            ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800'
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-400 border border-slate-300 dark:border-slate-800'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}
