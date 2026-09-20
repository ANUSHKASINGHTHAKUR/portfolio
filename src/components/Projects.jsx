import React, { useState } from 'react';
import { Shield, Github, ExternalLink, ArrowRight, Code, Terminal, Sparkles, AlertCircle, Layers, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Cybersecurity', 'Web Applications', 'Lab Practice'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'Cybersecurity') {
      return project.isSecurityProject && !project.isPlaceholder;
    }
    if (activeFilter === 'Web Applications') {
      return !project.isSecurityProject;
    }
    if (activeFilter === 'Lab Practice') {
      return project.isPlaceholder;
    }
    return true;
  });

  return (
    <section id="projects" className="py-20 relative bg-slate-950/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-[#00ff9d]">
            <Code className="w-3.5 h-3.5" />
            <span>Practical Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-[#00ff9d]">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
            A portfolio of custom cybersecurity tooling, full-stack web applications, AI utilities, and ongoing vulnerability assessment labs.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-card glass-card-hover rounded-2xl p-6 border flex flex-col justify-between space-y-5 relative group ${
                project.featured
                  ? 'border-emerald-500/40 shadow-cyber-glow'
                  : project.isPlaceholder
                  ? 'border-slate-800/80 bg-slate-900/40'
                  : 'border-slate-800'
              }`}
            >
              {/* Card Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                    project.isSecurityProject
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                      : 'bg-cyan-950 text-cyan-300 border-cyan-800'
                  }`}>
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-[#00ff9d] border border-emerald-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                  {project.isPlaceholder && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-purple-300 border border-purple-800">
                      Lab Practice
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white font-mono group-hover:text-[#00ff9d] transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 font-sans">
                  {project.description}
                </p>
              </div>

              {/* Technologies Tags */}
              <div className="space-y-4 pt-2 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer Action Links */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-mono text-[#00ff9d] hover:underline flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 hover:text-cyan-300 hover:border-cyan-800 transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Cybersecurity Lab Callout Box */}
        <div className="mt-16 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-bold text-white font-mono flex items-center justify-center md:justify-start gap-2">
              <Shield className="w-5 h-5 text-[#00ff9d]" />
              Expanding Vulnerability Assessment & PenTesting Portfolio
            </h4>
            <p className="text-slate-400 text-xs sm:text-base max-w-2xl">
              I am actively documenting hands-on VAPT findings, OWASP Top 10 exploits, and TryHackMe writeups in my public GitHub repositories.
            </p>
          </div>
          <a
            href="https://github.com/git-ANUSHKASINGHTHAKUR"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-[#00ff9d]/40 text-[#00ff9d] text-xs font-mono flex items-center gap-2 whitespace-nowrap shadow-cyber-glow"
          >
            <Github className="w-4 h-4" />
            <span>Follow GitHub Profile</span>
          </a>
        </div>

      </div>
    </section>
  );
}
