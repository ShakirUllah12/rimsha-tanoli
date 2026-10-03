import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/portfolioData';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-dark-800/40 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-3 py-1 rounded-full border border-brand-200 dark:border-brand-800">
            Hiring FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked by Recruiters
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Quick answers regarding availability, tech stack, and timezone flexibility.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => toggle(idx)}
                className="bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 cursor-pointer hover:border-brand-500 transition-all"
              >
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {isOpen && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 pt-3 border-t border-slate-100 dark:border-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
