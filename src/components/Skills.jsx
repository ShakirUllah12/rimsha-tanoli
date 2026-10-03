import React from 'react';
import { PenTool, Search, Globe, Users } from 'lucide-react';
import { skillsData, educationData, certificationsData, languagesData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-dark-800/40 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-3 py-1 rounded-full border border-brand-200 dark:border-brand-800">
            Skills & Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            SEO & Content Writing Competencies
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            From search algorithm optimization and keyword research to creative storytelling and WordPress publishing.
          </p>
        </div>

        {/* 4 Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Content Writing */}
          <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                <PenTool className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">SEO & Content Writing</h3>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skillsData.content.map((s, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-500 hover:text-brand-600 transition-all"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* On-Page & Technical SEO */}
          <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">On-Page & Technical SEO</h3>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skillsData.seo.map((s, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-500 hover:text-brand-600 transition-all"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* WordPress & CMS */}
          <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">WordPress Publishing</h3>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skillsData.cms.map((s, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-500 hover:text-brand-600 transition-all"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Strategy & Communication */}
          <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">Strategy & Reporting</h3>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skillsData.communication.map((s, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-500 hover:text-brand-600 transition-all"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Education, Certifications & Languages Bottom Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          
          {/* Education */}
          <div className="bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 space-y-4">
            <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase font-mono tracking-wider text-xs">
              Academic Background
            </h4>
            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-brand-500 pl-4 space-y-1">
                  <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400">{edu.period}</span>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{edu.degree}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 space-y-4">
            <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase font-mono tracking-wider text-xs">
              Writing & Leadership Recognition
            </h4>
            <div className="space-y-2">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <span className="text-[11px] uppercase font-mono font-bold text-slate-400 block mb-2">Multilingual Writing Competency:</span>
              <div className="flex flex-wrap gap-2 text-xs">
                {languagesData.map((lang, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-300">
                    {lang.name} ({lang.level})
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
