import React from 'react';
import { FileText, Download, Eye, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeSection({ onOpenResumeModal, onDownloadResume }) {
  return (
    <section id="resume" className="py-20 relative bg-slate-100/70 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden shadow-xl dark:shadow-2xl">
          {/* Subtle Glow Circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-emerald-500/30 text-xs font-mono text-emerald-700 dark:text-[#00ff9d] shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Recruiter Quick Action</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Interested in my <span className="text-emerald-600 dark:text-[#00ff9d]">profile?</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                Review my formal resume detailing technical proficiencies in VAPT, OWASP Top 10, Python automation, academic background at BIAS, and verified certifications.
              </p>

              {/* Quick Resume Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#00ff9d] shrink-0" />
                  <span>B.Tech CSE (GPA 7.5)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#00ff9d] shrink-0" />
                  <span>Google & ISC2 Certified</span>
                </div>
                <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#00ff9d] shrink-0" />
                  <span>VAPT & Security Tooling</span>
                </div>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onDownloadResume}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white dark:text-black font-bold text-sm font-mono shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-800 dark:text-white font-mono text-sm transition-all shadow-sm"
              >
                <Eye className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>View Resume Online</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
