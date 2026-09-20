import React from 'react';
import { Award, ExternalLink, CheckCircle2, ShieldCheck, FileCheck, Sparkles } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-slate-100/70 dark:bg-slate-950/60 border-t border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs font-mono text-emerald-700 dark:text-[#00ff9d] shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & <span className="text-emerald-600 dark:text-[#00ff9d]">Courses</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
            Formal professional training programs, cybersecurity specializations, and developer certifications.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-5 relative group shadow-sm"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${cert.badgeColor}`}></div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-100 text-cyan-800 dark:bg-slate-900 dark:text-cyan-300 border border-slate-300 dark:border-slate-800 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-[#00ff9d]" />
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono group-hover:text-emerald-600 dark:group-hover:text-[#00ff9d] transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-sans">
                  {cert.description}
                </p>
              </div>

              {/* Skills Covered Pills */}
              <div className="space-y-4 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((skill) => (
                    <span key={skill} className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 dark:bg-slate-950 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-950">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verification Link */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{cert.status}</span>
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 px-2.5 py-1 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-colors shadow-sm"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
