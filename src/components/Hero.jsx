import React, { useState, useEffect } from 'react';
import { Shield, Terminal, ArrowRight, Download, Mail, ExternalLink, Lock, CheckCircle2, Cpu, Globe, Server } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal, onDownloadResume }) {
  const [typedText, setTypedText] = useState('');
  const roles = [
    'Aspiring Penetration Tester',
    'Web Application Security Learner',
    'VAPT & OWASP Practitioner',
    'Ethical Hacking Enthusiast'
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2200; // Pause at end of text
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      setTypedText(currentRole.substring(0, isDeleting ? charIndex - 1 : charIndex + 1));
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cyber-grid-pattern">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Recruiter Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 shadow-cyber-glow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Seeking Cybersecurity Internships & Fresher Roles</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-[#00ff9d] via-teal-300 to-cyan-400 bg-clip-text text-transparent">Anushka Singh</span>
              </h1>
              
              <div className="h-10 text-lg sm:text-xl md:text-2xl font-mono text-cyan-300 flex items-center gap-2">
                <span className="text-slate-500">&gt;</span>
                <span>{typedText}</span>
                <span className="w-2 h-6 bg-[#00ff9d] animate-pulse"></span>
              </div>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              I am a final-year B.Tech Computer Science Engineering student passionate about cybersecurity, ethical hacking, web application security, and penetration testing. I am continuously building practical skills through labs, projects, and hands-on security testing.
            </p>

            {/* Quick Skills Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {['VAPT', 'Web App Security', 'OWASP Top 10', 'Burp Suite', 'Nmap', 'Kali Linux', 'Python'].map((skill) => (
                <span key={skill} className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d]"></span>
                  {skill}
                </span>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onDownloadResume}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-emerald-500/40 hover:border-emerald-400 text-[#00ff9d] font-mono text-sm transition-all shadow-cyber-glow transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-[#00ff9d]" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 text-slate-200 text-sm font-mono transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Visual Cyber Card / Terminal Widget */}
          <div className="lg:col-span-5 relative">
            {/* Cyber Terminal Widget */}
            <div className="glass-card rounded-2xl p-5 border border-slate-700/60 shadow-2xl relative overflow-hidden group">
              {/* Header bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Shield className="w-3.5 h-3.5 text-[#00ff9d]" />
                  <span>sec_profile.sys</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                  ONLINE
                </span>
              </div>

              {/* Security Metrics Widget Content */}
              <div className="space-y-4 font-mono text-xs">
                {/* Status Console Box */}
                <div className="p-3 rounded-lg bg-slate-950/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1 text-[#00ff9d]">
                      <Terminal className="w-3 h-3" /> SECURITY_STATUS
                    </span>
                    <span className="text-slate-500">v2.4.0</span>
                  </div>
                  <p className="text-slate-300">
                    Candidate: <span className="text-white font-bold">Anushka Singh</span>
                  </p>
                  <p className="text-slate-300">
                    Degree: <span className="text-emerald-300">B.Tech CSE (Final Year)</span>
                  </p>
                  <p className="text-slate-300">
                    GPA: <span className="text-cyan-300">7.5 / 10.0</span> (BIAS)
                  </p>
                  <div className="pt-1 flex items-center gap-2 text-[11px] text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Background Verification & Certs Validated</span>
                  </div>
                </div>

                {/* Key Skills Status Grid */}
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Lock className="w-3 h-3 text-emerald-400" /> Web VAPT
                    </span>
                    <span className="text-emerald-400 font-bold">ACTIVE</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Server className="w-3 h-3 text-cyan-400" /> OWASP Top 10
                    </span>
                    <span className="text-cyan-400 font-bold">PRACTICED</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-purple-400" /> Burp & Nmap
                    </span>
                    <span className="text-purple-400 font-bold">PROFICIENT</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Globe className="w-3 h-3 text-amber-400" /> Networking
                    </span>
                    <span className="text-amber-400 font-bold">SOLID</span>
                  </div>
                </div>

                {/* Live Certifications Quick Pills */}
                <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 space-y-1.5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Verified Credentials:</span>
                  <div className="flex flex-wrap gap-1.5 text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800">
                      Google Cybersecurity
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                      ISC2 CC Training
                    </span>
                    <span className="px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800">
                      Cisco NetAcad
                    </span>
                  </div>
                </div>

                {/* Simulated CLI Prompt */}
                <div className="p-2.5 rounded-lg bg-black/90 font-mono text-[11px] text-slate-300 flex items-center justify-between border border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">anushka@sec-lab:~$</span>
                    <span className="text-slate-200">./start_vapt_scan.sh</span>
                  </div>
                  <span className="w-2 h-3 bg-emerald-400 animate-pulse"></span>
                </div>
              </div>
            </div>

            {/* Decorative Glow Ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl -z-10 opacity-70"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
