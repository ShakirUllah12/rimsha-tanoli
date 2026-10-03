import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-900 py-12 px-4 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-500"></span>
          <strong className="text-slate-900 dark:text-white">{personalInfo.name}</strong>
          <span>&bull; SEO Specialist & Professional Content Writer</span>
        </div>
        <div>
          Engineered for High-Ranking SEO Content, E-E-A-T Excellence & Google Page 1 Visibility.
        </div>
        <div>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
