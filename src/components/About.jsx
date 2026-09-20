import React from 'react';
import { UserCheck, GraduationCap, Shield, Award, Terminal, CheckCircle2, ArrowUpRight, Cpu, Cloud, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "B.Tech CSE Student",
      desc: "Final-Year Computer Science student at Birla Institute of Applied Sciences with a strong academic foundation (GPA: 7.5/10.0)."
    },
    {
      icon: Shield,
      title: "VAPT & Web Security",
      desc: "Deep focus on Web Application Security, OWASP Top 10 vulnerabilities, parameter tampering, and security audits."
    },
    {
      icon: Terminal,
      title: "Linux & Security Tools",
      desc: "Daily practitioner using Kali Linux, Burp Suite, Nmap, Wireshark, OWASP ZAP, and virtualized lab environments."
    },
    {
      icon: Cloud,
      title: "AWS & DevOps Interest",
      desc: "Expanding knowledge into cloud infrastructure security (AWS IAM, S3 policies), Docker containers, and CI/CD pipelines."
    },
    {
      icon: Cpu,
      title: "Security Automation",
      desc: "Leveraging Python, Socket programming, Regex, and Bash scripting to build custom security analysis utilities."
    },
    {
      icon: Target,
      title: "Internship Ready",
      desc: "Actively seeking Cybersecurity Analyst, VAPT, Web Application Security, SOC, or Penetration Testing fresher roles."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-100/70 dark:bg-slate-950/60 border-t border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs font-mono text-emerald-700 dark:text-[#00ff9d] shadow-sm">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Profile & Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="text-emerald-600 dark:text-[#00ff9d]">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
            A passionate Computer Science student dedicated to safeguarding digital applications, conducting vulnerability assessments, and mastering offensive security techniques.
          </p>
        </div>

        {/* Top 2-Column Grid: Recruiter Summary & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Recruiter Summary Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 font-mono">
                <Shield className="w-5 h-5 text-emerald-600 dark:text-[#00ff9d]" />
                Professional Synopsis
              </h3>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                Final Year B.Tech
              </span>
            </div>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a final-year <strong className="text-slate-900 dark:text-white">B.Tech Computer Science Engineering student</strong> with a keen interest in <strong className="text-emerald-600 dark:text-[#00ff9d]">Web Application Security, VAPT (Vulnerability Assessment & Penetration Testing), and Ethical Hacking</strong>.
              </p>
              <p>
                Throughout my academic journey, I have built a solid foundation in computer networking, TCP/IP protocols, operating systems, and full-stack software development. Combining software engineering principles with security research, I focus on identifying security flaws before malicious actors exploit them.
              </p>
              <p>
                I actively practice on platforms like <strong className="text-cyan-700 dark:text-cyan-400">TryHackMe</strong> and <strong className="text-cyan-700 dark:text-cyan-400">Hack The Box</strong>, maintaining a hands-on virtual security lab built with <strong className="text-emerald-700 dark:text-emerald-400">VirtualBox, Kali Linux, and Docker</strong>. Additionally, I am expanding my skills into <strong className="text-purple-700 dark:text-purple-400">AWS Cloud Security and DevOps fundamentals</strong>.
              </p>
            </div>

            {/* Quick Core Focus List */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#00ff9d]" />
                <span>Web App Security & OWASP Top 10</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#00ff9d]" />
                <span>VAPT & Security Auditing</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#00ff9d]" />
                <span>Linux & Security Toolkits</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#00ff9d]" />
                <span>AWS & Container Security</span>
              </div>
            </div>
          </div>

          {/* Education Details Card */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 font-mono pb-4 border-b border-slate-200 dark:border-slate-800">
                <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                Academic Background
              </h3>

              <div className="space-y-6">
                {/* College Education */}
                <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2 relative group hover:border-cyan-500/40 transition-colors shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                        {personalInfo.education.institution}
                      </h4>
                      <p className="text-xs text-cyan-700 dark:text-cyan-300 font-mono">
                        {personalInfo.education.degree}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800">
                      Expected 2027
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 pt-1">
                    <span>GPA: <strong className="text-slate-900 dark:text-white">{personalInfo.education.gpa}</strong></span>
                    <span className="text-emerald-600 dark:text-emerald-400">Final Year</span>
                  </div>
                </div>

                {/* Schooling Highlights */}
                <div className="space-y-3">
                  <h5 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Prior Education:</h5>
                  {personalInfo.education.schooling.map((school, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs shadow-sm">
                      <div>
                        <p className="font-semibold text-slate-800 dark:text-slate-200">{school.school}</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">{school.level}</p>
                      </div>
                      <span className="font-mono font-bold text-emerald-700 dark:text-[#00ff9d] bg-emerald-50 dark:bg-slate-950 px-2 py-1 rounded border border-emerald-200 dark:border-slate-800">
                        {school.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Career Objective Footer */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-950/40 dark:to-slate-900 border border-emerald-500/30 text-xs font-mono text-emerald-800 dark:text-emerald-300">
              <span className="font-bold block text-slate-900 dark:text-white mb-1">🎯 Career Goal:</span>
              Looking for VAPT, SOC, Penetration Testing & Cybersecurity internships or entry-level positions in forward-thinking security teams.
            </div>
          </div>

        </div>

        {/* Bottom Grid: 6 Key Candidate Strengths Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card glass-card-hover rounded-xl p-5 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 flex items-center justify-center text-emerald-600 dark:text-[#00ff9d] shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base font-mono">
                  {item.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
