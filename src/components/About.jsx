import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-tr from-brand-600 to-indigo-600 p-1 rounded-3xl shadow-xl">
              <div className="bg-white dark:bg-dark-900 rounded-[22px] p-7 space-y-4">
                <span className="text-xs font-mono font-bold uppercase text-brand-600 dark:text-brand-400">
                  Content Philosophy
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">
                  "Words that attract humans. Technical structures that satisfy Google algorithms."
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Most writers don't understand search algorithms, and most SEOs can't write compelling copy. I combine high-converting storytelling, keyword clustering, and WordPress technical execution to dominate search results.
                </p>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Based in Islamabad</span>
                  <span className="text-emerald-500 font-bold">&bull; Available Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-3 py-1 rounded-full border border-brand-200 dark:border-brand-800">
              About Rimsha Tanoli
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              The Bridge Between High-Converting Copy & #1 Search Rankings
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              From in-depth keyword analysis and competitor content gap audits to publishing formatted, schema-rich articles directly inside WordPress and Elementor, I deliver end-to-end organic growth campaigns.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700">
                <div className="font-bold text-slate-900 dark:text-white">SEO Content</div>
                <div className="text-slate-500 text-[11px]">Pillars, Blogs & Copy</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700">
                <div className="font-bold text-slate-900 dark:text-white">On-Page SEO</div>
                <div className="text-slate-500 text-[11px]">Schema, Meta & GSC</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700">
                <div className="font-bold text-slate-900 dark:text-white">WordPress Dev</div>
                <div className="text-slate-500 text-[11px]">Speed & Publishing</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
