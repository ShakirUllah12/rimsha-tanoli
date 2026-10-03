import React from 'react';
import { Search, PenTool, Globe, CheckCircle2 } from 'lucide-react';
import { specializations } from '../data/portfolioData';

export default function Specialization() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-brand-600 dark:text-brand-300" />;
      case 'Search':
        return <Search className="w-6 h-6 text-teal-600 dark:text-teal-300" />;
      case 'Globe':
      default:
        return <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />;
    }
  };

  return (
    <section id="specialization" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-dark-800/40 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-3 py-1 rounded-full border border-brand-200 dark:border-brand-800">
            The Content & Search Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Most Writers Ignore SEO.<br className="hidden sm:inline" /> Most SEOs Cannot Write. <span className="text-brand-600 dark:text-brand-400">I Master Both.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Hiring Rimsha gives your team high-converting, E-E-A-T compliant content written with strategic keyword intent, backed by full on-page SEO and live WordPress publishing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specializations.map((spec, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-900 flex items-center justify-center mb-6">
                {getIcon(spec.icon)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{spec.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {spec.description}
              </p>
              <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-2 border-t border-slate-100 dark:border-slate-700/60 pt-4">
                {spec.bulletPoints.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
