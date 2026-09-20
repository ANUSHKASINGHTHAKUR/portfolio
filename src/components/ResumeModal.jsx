import React from 'react';
import { X, Download, FileText, ExternalLink, ShieldCheck, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { personalInfo, certificationsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, onDownload }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 space-y-6 relative shadow-2xl bg-white dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-emerald-600 dark:text-[#00ff9d] shadow-sm">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-mono">{personalInfo.name} - Resume Preview</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">{personalInfo.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onDownload}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white dark:text-black font-bold text-xs font-mono transition-colors shadow-md shadow-emerald-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Interactive Resume Document View */}
        <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-6 text-xs sm:text-sm font-sans text-slate-700 dark:text-slate-200 shadow-inner">
          
          {/* Header info */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide font-mono">{personalInfo.name}</h2>
              <p className="text-emerald-700 dark:text-emerald-400 font-mono text-xs">{personalInfo.role}</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs">{personalInfo.education.institution} • B.Tech CSE (Final Year)</p>
            </div>
            <div className="font-mono text-xs text-slate-600 dark:text-slate-300 space-y-1 sm:text-right">
              <p>Email: <span className="text-cyan-700 dark:text-cyan-300">{personalInfo.contact.email}</span></p>
              <p>Phone: <span className="text-cyan-700 dark:text-cyan-300">{personalInfo.contact.phone}</span></p>
              <p>Location: <span className="text-slate-500 dark:text-slate-400">{personalInfo.contact.location}</span></p>
              <p>GitHub: <a href={personalInfo.contact.github} target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">git-ANUSHKASINGHTHAKUR</a></p>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h4 className="font-mono font-bold text-emerald-700 dark:text-[#00ff9d] text-xs uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Professional Summary
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Aspiring Cybersecurity Analyst and Penetration Tester with a strong foundation in network security, ethical hacking, vulnerability assessment, and web security operations. Skilled in Python, Linux, Wireshark, Nmap, Burp Suite, Kali Linux, SQL, and TCP/IP networking. Knowledgeable in OWASP Top 10, incident response, threat detection, and risk assessment.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="font-mono font-bold text-cyan-700 dark:text-cyan-400 text-xs uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h4>
            <div className="p-3 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-1 shadow-sm">
              <div className="flex justify-between font-bold text-slate-900 dark:text-white text-xs">
                <span>{personalInfo.education.institution}</span>
                <span className="text-cyan-700 dark:text-cyan-300 font-mono">Expected 2027</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs">{personalInfo.education.degree} — GPA: <strong className="text-slate-900 dark:text-white">{personalInfo.education.gpa}</strong></p>
              <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 flex flex-wrap gap-4">
                <span>12th CBSE: <strong>85%</strong> (Sant Atulanand Convent School)</span>
                <span>10th CBSE: <strong>83%</strong> (Beersheba Senior Secondary School)</span>
              </div>
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-2">
            <h4 className="font-mono font-bold text-emerald-700 dark:text-[#00ff9d] text-xs uppercase tracking-wider">Technical Skills</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <strong className="text-slate-900 dark:text-white block font-mono">Cybersecurity & VAPT:</strong>
                <span className="text-slate-600 dark:text-slate-300">Web Security, OWASP Top 10, VAPT, Burp Suite, Nmap, Wireshark, Ethical Hacking</span>
              </div>
              <div className="p-2.5 rounded bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <strong className="text-slate-900 dark:text-white block font-mono">Programming & OS:</strong>
                <span className="text-slate-600 dark:text-slate-300">Python, Bash, SQL, JavaScript, HTML, CSS, Kali Linux, Ubuntu, Windows</span>
              </div>
              <div className="p-2.5 rounded bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <strong className="text-slate-900 dark:text-white block font-mono">Networking Protocols:</strong>
                <span className="text-slate-600 dark:text-slate-300">TCP/IP, OSI Model, DNS, DHCP, HTTP/HTTPS, SSH, Subnetting, Firewalls</span>
              </div>
              <div className="p-2.5 rounded bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <strong className="text-slate-900 dark:text-white block font-mono">Cloud & Virtualization:</strong>
                <span className="text-slate-600 dark:text-slate-300">AWS Basics, Docker, Git/GitHub, VirtualBox, VMware Workstation</span>
              </div>
            </div>
          </div>

          {/* Certifications Highlights */}
          <div className="space-y-2">
            <h4 className="font-mono font-bold text-amber-600 dark:text-amber-400 text-xs uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" /> Earned Certifications
            </h4>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
              {certificationsData.map((c) => (
                <li key={c.id}>
                  <strong className="text-slate-900 dark:text-white">{c.title}</strong> — {c.issuer}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="pt-2 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">PDF File: Anushka_Singh_Resume.pdf</span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-sm"
            >
              Close
            </button>
            <button
              onClick={onDownload}
              className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white dark:text-black font-bold text-xs font-mono flex items-center gap-2 shadow-md shadow-emerald-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
