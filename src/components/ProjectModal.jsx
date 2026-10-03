import React from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-dark-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-2.5 py-1 rounded-md">
              {project.category.replace('-', ' ')}
            </span>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-xl sm:text-2xl mt-2">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-500 flex items-center justify-center hover:text-slate-900 dark:hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs mb-1">
              Executive Summary:
            </h4>
            <p className="leading-relaxed">{project.summary}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 dark:bg-dark-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 space-y-1">
              <h5 className="font-bold text-rose-500 text-xs">The Problem & Bottleneck:</h5>
              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {project.challenge}
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-dark-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 space-y-1">
              <h5 className="font-bold text-emerald-500 text-xs">Rimsha's Technical Solution:</h5>
              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-dark-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 space-y-1">
            <h5 className="font-bold text-brand-600 dark:text-brand-400 text-xs">
              Measurable Business Impact:
            </h5>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              {project.impact}
            </p>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 dark:text-white uppercase text-xs mb-2">
              Technologies Used:
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs rounded-lg font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex gap-3 pt-3 border-t border-slate-100 dark:border-slate-700">
          <a
            href="#contact"
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5"
          >
            <span>Inquire About Similar Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
