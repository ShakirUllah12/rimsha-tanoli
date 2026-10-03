import React from 'react';
import { MessageSquare, Mail, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function FloatingDock({ onOpenResume }) {
  return (
    <aside
      id="floating-dock"
      aria-label="Quick Action Floating Bar"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-full px-5 py-2.5 shadow-2xl flex items-center gap-4"
    >
      <a
        href={personalInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-600 hover:scale-110 transition-transform"
        title="WhatsApp Message"
      >
        <MessageSquare className="w-5 h-5" />
      </a>
      <span className="w-px h-4 bg-slate-200 dark:bg-slate-700"></span>
      <a
        href={`mailto:${personalInfo.email}`}
        className="text-rose-500 hover:scale-110 transition-transform"
        title="Send Email"
      >
        <Mail className="w-5 h-5" />
      </a>
      <span className="w-px h-4 bg-slate-200 dark:bg-slate-700"></span>
      <button
        onClick={onOpenResume}
        className="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1 hover:text-brand-500 transition-colors"
      >
        <FileText className="w-4 h-4 text-rose-500" />
        <span>Resume</span>
      </button>
    </aside>
  );
}
