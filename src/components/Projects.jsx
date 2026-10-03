import React, { useState } from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { caseStudies } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = caseStudies.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-dark-800/40 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-3 py-1 rounded-full border border-brand-200 dark:border-brand-800">
              Content & SEO Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
              Proven Content Campaigns & Case Studies
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-1">
              Click any project card to review the in-depth keyword strategy, content architecture, and ranking results.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 text-xs font-medium">
            {[
              { id: 'all', label: 'All Work' },
              { id: 'content-seo', label: 'SEO Content & Strategy' },
              { id: 'onpage', label: 'On-Page & Schema' },
              { id: 'wordpress-content', label: 'WordPress Publishing' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-xl border transition-all ${
                  filter === btn.id
                    ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white border-transparent shadow-md'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-brand-500'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              <div className="relative bg-gradient-to-tr from-brand-700 via-teal-800 to-indigo-900 h-48 p-6 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md">
                    {project.category.replace('-', ' ')}
                  </span>
                  <span className="text-xs bg-emerald-500 text-white font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <TrendingUp className="w-3 h-3" /> {project.badge}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold group-hover:text-brand-200 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-200 mt-1">{project.subtitle}</p>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="bg-slate-50 dark:bg-dark-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                    <div><strong>Focus:</strong> {project.challenge}</div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px] rounded-md font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700">
                    <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                      Verified Case Study
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-brand-500 flex items-center gap-1">
                      Read Strategy <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
