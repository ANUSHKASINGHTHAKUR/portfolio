import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CyberLab from './components/CyberLab';
import Certifications from './components/Certifications';
import LearningJourney from './components/LearningJourney';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import { personalInfo } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return 'dark'; // Default theme
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
      body.style.backgroundColor = '#070a0f';
      body.style.color = '#e2e8f0';
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      body.style.backgroundColor = '#f8fafc';
      body.style.color = '#0f172a';
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleDownloadResume = () => {
    // Trigger confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00ff9d', '#06b6d4', '#3b82f6']
    });

    // Create a temporary anchor to trigger browser download
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Anushka_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070a0f] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-[#00ff9d] selection:text-black transition-colors duration-300">
      {/* Sticky Navigation */}
      <Navbar
        onOpenResumeModal={() => setResumeModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onDownloadResume={handleDownloadResume}
        />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <CyberLab />
        <Certifications />
        <LearningJourney />
        <ResumeSection
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onDownloadResume={handleDownloadResume}
        />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Resume View/Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onDownload={handleDownloadResume}
      />
    </div>
  );
}
