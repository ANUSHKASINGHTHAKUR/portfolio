import React from 'react';
import { Award, ExternalLink, CheckCircle2, ShieldCheck, FileCheck, Sparkles } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-slate-950/60 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-[#00ff9d]">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-[#00ff9d]">Courses</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
            Formal professional training programs, cybersecurity specializations, and developer certifications.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-5 relative group"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${cert.badgeColor}`}></div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00ff9d]" />
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-mono group-hover:text-[#00ff9d] transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed font-sans">
                  {cert.description}
                </p>
              </div>

              {/* Skills Covered Pills */}
              <div className="space-y-4 pt-3 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((skill) => (
                    <span key={skill} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-emerald-400 border border-emerald-950">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verification Link */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{cert.status}</span>
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3 text-cyan-400" />
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
