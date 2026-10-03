import React from 'react';
import { stats } from '../data/portfolioData';

export default function Stats() {
  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-dark-800/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-600 dark:text-brand-400">
                {item.value}{item.suffix}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
