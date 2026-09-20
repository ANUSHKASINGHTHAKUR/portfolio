import React from 'react';
import { X, ExternalLink, Github, ShieldAlert, CheckCircle2, Terminal, Code, Cpu, Award, FileText } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 space-y-6 relative shadow-2xl bg-white dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Status */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-emerald-700 dark:text-[#00ff9d]">
            {project.category}
          </span>
          <span className={`text-xs font-mono px-3 py-1 rounded-full ${
            project.isPlaceholder 
              ? 'bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border border-purple-300 dark:border-purple-800' 
              : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          {project.title}
        </h3>

        {/* Detailed Description */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Project Overview</h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Metrics Banner */}
        {project.metrics && (
          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-slate-950 border border-emerald-300 dark:border-emerald-500/30 font-mono text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#00ff9d] shrink-0" />
            <span>Impact Benchmark: {project.metrics}</span>
          </div>
        )}

        {/* Key Features List */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Key Technical Features</h4>
          <div className="grid grid-cols-1 gap-2.5">
            {project.keyFeatures.map((feature, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#00ff9d] mt-2 shrink-0"></span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Technologies & Libraries</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-cyan-700 dark:text-cyan-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-mono text-slate-800 dark:text-white transition-colors shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-xs font-mono text-white dark:text-black font-bold transition-colors shadow-md shadow-emerald-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
