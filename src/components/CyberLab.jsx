import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Shield, Cpu, Activity, Search, Box, Bug, Target, Award, GitBranch, RefreshCw, Send, Check, Copy } from 'lucide-react';
import { labTools, terminalCommands } from '../data/portfolioData';

export default function CyberLab() {
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'output', text: 'Welcome to Anushka Singh\'s Interactive Cybersecurity CLI Terminal v2.4' },
    { type: 'output', text: 'Type "help" or click suggestion pills below to execute security commands.' },
    { type: 'prompt', text: 'whoami' },
    { type: 'output', text: terminalCommands.whoami }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setTerminalHistory([]);
      setInputVal('');
      return;
    }

    const output = terminalCommands[trimmed] || `Command not found: "${trimmed}". Type "help" for a list of available commands.`;

    setTerminalHistory(prev => [
      ...prev,
      { type: 'prompt', text: cmd },
      { type: 'output', text: output }
    ]);
    setInputVal('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const suggestionPills = ['help', 'whoami', 'skills', 'projects', 'nmap', 'certs', 'lab', 'contact', 'clear'];

  const getToolIcon = (iconName) => {
    switch (iconName) {
      case 'Terminal': return Terminal;
      case 'ShieldAlert': return Shield;
      case 'Search': return Search;
      case 'Activity': return Activity;
      case 'Cpu': return Cpu;
      case 'Box': return Box;
      case 'Bug': return Bug;
      case 'Target': return Target;
      case 'Award': return Award;
      case 'GitBranch': return GitBranch;
      default: return Terminal;
    }
  };

  return (
    <section id="lab" className="py-20 relative bg-[#070a0f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-[#00ff9d]">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Environment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-[#00ff9d]">Cybersecurity Lab</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
            Hands-on virtual testing infrastructure, daily toolkits, and interactive command-line simulator.
          </p>
        </div>

        {/* 2-Column Layout: Interactive Terminal CLI + Lab Tools Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Terminal CLI Simulator */}
          <div className="lg:col-span-7 glass-card rounded-2xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col h-[520px]">
            {/* Terminal Header */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="text-xs font-mono text-slate-400 ml-2">anushka@kali-lab: ~/security-profile</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>BASH 5.2.15</span>
              </div>
            </div>

            {/* Command History View */}
            <div className="p-4 sm:p-5 flex-1 overflow-y-auto font-mono text-xs space-y-3 bg-slate-950/95 terminal-scanlines">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  {item.type === 'prompt' ? (
                    <div className="flex items-center gap-2 text-[#00ff9d] font-bold">
                      <span>anushka@sec-lab:~$</span>
                      <span className="text-white">{item.text}</span>
                    </div>
                  ) : (
                    <pre className="text-slate-300 whitespace-pre-wrap font-mono leading-relaxed pl-2 border-l-2 border-slate-800 text-[11px] sm:text-xs">
                      {item.text}
                    </pre>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Quick Command Suggestions Pills */}
            <div className="p-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
              <span className="text-slate-500 shrink-0 mr-1">Quick Commands:</span>
              {suggestionPills.map(pill => (
                <button
                  key={pill}
                  onClick={() => handleCommand(pill)}
                  className="px-2.5 py-1 rounded bg-slate-950 hover:bg-slate-800 text-emerald-300 border border-slate-800 shrink-0 transition-colors"
                >
                  {pill}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleFormSubmit} className="p-3 bg-black border-t border-slate-800 flex items-center gap-2">
              <span className="text-[#00ff9d] font-mono font-bold text-xs pl-2">anushka@sec-lab:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'nmap', 'projects', 'skills'..."
                className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-slate-600"
              />
              <button type="submit" className="p-1.5 rounded bg-emerald-500/20 text-[#00ff9d] hover:bg-emerald-500/30">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Right Column: Lab Tool Matrix & Practice Platforms */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00ff9d]" />
                Practiced Security Stack
              </h3>
              <span className="text-xs font-mono text-slate-400">10 Security Tools</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {labTools.map((tool, idx) => {
                const IconComponent = getToolIcon(tool.icon);
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-1.5 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-[#00ff9d]">
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-bold text-white text-xs font-mono group-hover:text-[#00ff9d] transition-colors">
                          {tool.name}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                        {tool.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug font-sans">
                      {tool.purpose}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
