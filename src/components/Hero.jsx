import React from 'react';
import { ArrowRight, FileText, Check, PenTool, Search, Sparkles, MapPin, Mail, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="min-h-[88vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3"></span>
              <span>Available for SEO, Content Writing & Remote Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Crafting <span className="bg-gradient-to-r from-brand-600 via-teal-500 to-indigo-600 bg-clip-text text-transparent">SEO Content & Strategies</span> That Drive #1 Google Rankings.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              I am <strong className="text-slate-900 dark:text-white">{personalInfo.name}</strong>, an SEO Specialist and Content Strategist. I write search-intent-matched content, optimize on-page structures, and leverage my technical WordPress background to turn search queries into qualified organic traffic.
            </p>

            {/* Value Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                <PenTool className="w-3.5 h-3.5 text-brand-500" /> SEO Content & Blogs
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-indigo-500" /> Keyword & Search Intent
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-500" /> On-Page & Schema SEO
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-teal-600 hover:from-brand-700 hover:to-teal-700 text-white font-semibold text-base shadow-lg shadow-brand-500/25 transition-all text-center flex items-center justify-center gap-2 group"
              >
                <span>View SEO Case Studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-base transition-all text-center flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-rose-500" />
                <span>Get Official CV</span>
              </button>
            </div>

            {/* Quick Contact Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Direct Links:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono font-medium hover:bg-slate-900 hover:text-white transition-all"
              >
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono font-medium hover:bg-blue-600 hover:text-white transition-all"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono font-medium hover:bg-rose-600 hover:text-white transition-all flex items-center gap-1"
              >
                <Mail className="w-3 h-3" />
                Email
              </a>
              <span className="text-xs font-mono text-slate-400 ml-1">{personalInfo.phone}</span>
            </div>

          </div>

          {/* Hero Right Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-500 via-indigo-500 to-teal-400 rounded-3xl blur-xl opacity-40"></div>

              <div className="relative bg-white dark:bg-dark-800 border border-slate-200/80 dark:border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                
                {/* Identity Header */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={personalInfo.avatarUrl}
                      alt={personalInfo.name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-500 shadow-md"
                      onError={(e) => {
                        e.target.src = 'https://ui-avatars.com/api/?name=Rimsha+Tanoli&background=0d9488&color=fff&size=128';
                      }}
                    />
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white dark:border-dark-800 rounded-full" title="Available for Interview"></span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{personalInfo.name}</h3>
                    <p className="text-sm text-brand-600 dark:text-brand-400 font-semibold">{personalInfo.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-rose-500" /> {personalInfo.location}
                    </p>
                  </div>
                </div>

                {/* Performance Badge - Content & Search Focus */}
                <div className="bg-slate-50 dark:bg-dark-900/90 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 font-bold">SEO & CONTENT PERFORMANCE</span>
                    <span className="text-emerald-500 font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> TOP 3 RANK
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white dark:bg-dark-800 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                      <div className="text-emerald-500 font-extrabold text-xl">+140%</div>
                      <div className="text-[10px] text-slate-400 font-medium">Traffic Boost</div>
                    </div>
                    <div className="bg-white dark:bg-dark-800 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                      <div className="text-brand-500 font-extrabold text-xl">100%</div>
                      <div className="text-[10px] text-slate-400 font-medium">Search Intent</div>
                    </div>
                    <div className="bg-white dark:bg-dark-800 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                      <div className="text-indigo-500 font-extrabold text-xl">0</div>
                      <div className="text-[10px] text-slate-400 font-medium">Crawl Errors</div>
                    </div>
                  </div>
                </div>

                {/* Career Credentials */}
                <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>SEO Content & Dev at <strong>OperationsPro Marketing</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Keyword Strategy & GSC at <strong>Eydma Digital</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>BS ICT Graduate &bull; <strong>National Skills University</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>NSU Literary Society &bull; <strong>Creative Writer</strong></span>
                  </div>
                </div>

                {/* Card CTA */}
                <a
                  href="#contact"
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow transition-all"
                >
                  <span>Request Writing Samples / Strategy Call &rarr;</span>
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
