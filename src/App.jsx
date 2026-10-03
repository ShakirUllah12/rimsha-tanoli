import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Specialization from './components/Specialization';
import AuditSimulator from './components/AuditSimulator';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import FloatingDock from './components/FloatingDock';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('color-theme');
    if (saved !== null) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-dark-900 dark:text-slate-100 transition-colors duration-300 font-sans antialiased selection:bg-brand-500 selection:text-white relative">
      
      {/* Background Decorative Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl"></div>
      </div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <Stats />
        <About />
        <Specialization />
        <AuditSimulator />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <Experience />
        <Skills />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <FloatingDock onOpenResume={() => setResumeOpen(true)} />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
