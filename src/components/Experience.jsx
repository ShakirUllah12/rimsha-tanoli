import React from 'react';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-3 py-1 rounded-full border border-brand-200 dark:border-brand-800">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Detailed responsibilities and accomplishments from Rimsha's career timeline.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-brand-500/30 dark:border-brand-500/20 ml-4 sm:ml-8 space-y-12">
          {experience.map((job, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10">
              
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs shadow-md border-4 border-slate-50 dark:border-dark-900">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              <div className="bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {job.role}
                  </h3>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 w-fit">
                    {job.period}
                  </span>
                </div>
                
                <div className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4 flex items-center gap-2">
                  <span>{job.company}</span>
                  <span>&bull;</span>
                  <span className="text-slate-400 text-xs font-normal">{job.location}</span>
                </div>

                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2.5 list-disc list-outside ml-4">
                  {job.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
