import React, { useState } from 'react';

export default function AuditSimulator() {
  const [state, setState] = useState('after');

  const isAfter = state === 'after';

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-dark-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-700 shadow-2xl relative overflow-hidden">
        
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-2xl space-y-3 mb-8">
          <span className="text-xs font-mono font-bold uppercase text-brand-400 bg-brand-950/80 px-3 py-1 rounded-full border border-brand-800">
            Interactive SEO & Content Diagnostic
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            How Rimsha Transforms Client Content into #1 Google Rankings
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Toggle between "Before Strategy" and "After Rimsha's SEO Content" to see the algorithmic and engagement difference.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => setState('before')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              !isAfter
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-500/25'
                : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-white'
            }`}
          >
            Before: Thin / Unoptimized Content
          </button>
          <button
            onClick={() => setState('after')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              isAfter
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25'
                : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-white'
            }`}
          >
            After: Rimsha's SEO Content Strategy &check;
          </button>
        </div>

        {/* Dynamic Audit Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-dark-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <span className="text-[11px] font-mono text-slate-400 uppercase">Google Search Position</span>
            <div className={`text-3xl font-extrabold ${isAfter ? 'text-emerald-400' : 'text-rose-500'}`}>
              {isAfter ? 'Rank #1–#3' : 'Page 6+ (Lost)'}
            </div>
            <div className="text-xs text-slate-300">
              {isAfter ? 'Matched search intent & comprehensive coverage' : 'Thin content, zero keyword intent alignment'}
            </div>
          </div>

          <div className="bg-dark-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <span className="text-[11px] font-mono text-slate-400 uppercase">Average Reading Time</span>
            <div className={`text-3xl font-extrabold ${isAfter ? 'text-brand-400' : 'text-rose-500'}`}>
              {isAfter ? '4m 15s' : '0m 28s (High Bounce)'}
            </div>
            <div className="text-xs text-slate-300">
              {isAfter ? 'Engaging storytelling, scannable H2/H3s & hooks' : 'Boring wall of text, reader exits immediately'}
            </div>
          </div>

          <div className="bg-dark-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <span className="text-[11px] font-mono text-slate-400 uppercase">Click-Through Rate (CTR)</span>
            <div className={`text-3xl font-extrabold ${isAfter ? 'text-teal-400' : 'text-amber-500'}`}>
              {isAfter ? '8.4% (High CTR)' : '0.9% (Low CTR)'}
            </div>
            <div className="text-xs text-slate-300">
              {isAfter ? 'Optimized meta title, description & schema snippet' : 'Generic snippet, ignored by searchers'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
