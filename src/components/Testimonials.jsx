import React from 'react';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-3 py-1 rounded-full border border-brand-200 dark:border-brand-800">
            Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Colleague & Agency Feedback
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            What digital marketing leaders say about Rimsha's technical execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between space-y-4"
            >
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-700">
                <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-600 font-bold flex items-center justify-center text-sm">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{item.author}</div>
                  <div className="text-[11px] text-slate-500">{item.organization}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
