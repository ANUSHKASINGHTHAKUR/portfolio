import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Copy, Check, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00ff9d', '#06b6d4', '#10b981']
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-[#070a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-[#00ff9d]">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact <span className="text-[#00ff9d]">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
            Open for Cybersecurity Internships, VAPT opportunity discussions, and technical collaborations. Feel free to reach out directly.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Availability Banner */}
            <div className="glass-card rounded-2xl p-6 border border-emerald-500/30 space-y-3 shadow-cyber-glow">
              <div className="flex items-center gap-2.5 text-emerald-400 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>STATUS: AVAILABLE FOR INTERNSHIPS</span>
              </div>
              <h3 className="text-xl font-bold text-white font-mono">Let's Connect</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                Whether you are a recruiter hiring for a Cybersecurity / PenTesting role or a fellow security enthusiast, I'd love to hear from you.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3">
              {/* Email Box */}
              <div className="glass-card rounded-xl p-4 border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-[#00ff9d]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Email Address</span>
                    <a href={`mailto:${personalInfo.contact.email}`} className="text-xs sm:text-sm font-bold text-white font-mono hover:text-[#00ff9d] transition-colors">
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.contact.email, 'email')}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#00ff9d]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Box */}
              <div className="glass-card rounded-xl p-4 border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Phone Number</span>
                    <a href={`tel:${personalInfo.contact.phone}`} className="text-xs sm:text-sm font-bold text-white font-mono hover:text-cyan-400 transition-colors">
                      {personalInfo.contact.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.contact.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Box */}
              <div className="glass-card rounded-xl p-4 border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Location</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-mono">
                    {personalInfo.contact.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Profiles Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl glass-card border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-2.5 transition-all"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl glass-card border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-2.5 transition-all"
              >
                <Github className="w-4 h-4 text-[#00ff9d]" />
                <span>GitHub Profile</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 relative">
            <h3 className="text-xl font-bold text-white font-mono mb-6 flex items-center gap-2">
              <Send className="w-4 h-4 text-[#00ff9d]" />
              Send a Message
            </h3>

            {submitted ? (
              <div className="p-8 rounded-xl bg-slate-950 border border-emerald-500/50 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500 text-[#00ff9d] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-mono">Message Sent Successfully!</h4>
                <p className="text-slate-300 text-xs sm:text-sm font-sans max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. I will review your message and reply back promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-[#00ff9d]/60 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-[#00ff9d]/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Cybersecurity Internship Opportunity / VAPT Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-[#00ff9d]/60 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-[#00ff9d]/60 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
