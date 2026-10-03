import React from 'react';
import { X, FileText, Printer, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div id="resume-modal-container" className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div id="resume-modal-content" className="bg-white dark:bg-dark-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700 no-print">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
            <FileText className="w-5 h-5 text-rose-500" />
            <span>Rimsha Tanoli — SEO & Content Writing Resume</span>
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-500 flex items-center justify-center hover:text-slate-900 dark:hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ATS Resume Body */}
        <div className="bg-white dark:bg-dark-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs space-y-4 text-slate-700 dark:text-slate-300">
          <div className="text-center border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">RIMSHA TANOLI</h2>
            <p className="font-semibold text-brand-600 dark:text-brand-400">SEO SPECIALIST & PROFESSIONAL CONTENT WRITER</p>
            <p className="text-slate-500 mt-1">Islamabad, Pakistan | (+92) 327-5875449 | rimshak285@gmail.com</p>
            <p className="text-slate-400 text-[11px]">GitHub: github.com/rimsha030</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-1">PROFESSIONAL SUMMARY</h4>
            <p className="leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-1">CORE SKILLS</h4>
            <p><strong>Content & Copywriting:</strong> SEO Content Writing, Blog Posts, Search Intent Analysis, Keyword Clustering, E-E-A-T Strategy, Website Copy, Editorial Calendars</p>
            <p className="mt-1"><strong>SEO & Analytics:</strong> On-Page SEO, Technical SEO, Google Search Console, Google Analytics (GA4), Schema Markup, Yoast SEO, Core Web Vitals</p>
            <p className="mt-1"><strong>Publishing & Web:</strong> WordPress, Elementor, HTML/CSS, JavaScript, React, Client Communication, Reporting</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-1">WORK EXPERIENCE</h4>
            <div className="space-y-2 mt-1">
              <div>
                <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                  <span>SEO Content & WordPress Specialist — OperationsPro Digital Marketing</span>
                  <span>Apr 2026 – Present</span>
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-slate-600 dark:text-slate-400">
                  <li>Spearhead SEO content creation, keyword research, meta tag optimization, and schema markup for client domains.</li>
                  <li>Write high-converting pillar articles and service page copy aligned with search algorithms and user intent.</li>
                  <li>Monitor keyword positions and site health using Google Search Console and GA4.</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                  <span>SEO-Driven Content Writer & Dev — Eydma Digital Marketing</span>
                  <span>Sep 2025 – Jan 2026</span>
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-slate-600 dark:text-slate-400">
                  <li>Authored SEO blog content, eliminated indexing errors, and optimized meta descriptions to boost organic CTR.</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                  <span>Web & Content Developer (Internship) — IVY Interactive Solutions</span>
                  <span>Oct 2024 – Jul 2025</span>
                </div>
                <ul className="list-disc ml-4 space-y-0.5 text-slate-600 dark:text-slate-400">
                  <li>Structured semantic HTML5 and clean content hierarchies for web applications.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-1">EDUCATION</h4>
            <p><strong>BS in Information and Communication Technologies</strong> | National Skills University, Islamabad (2021 – 2025)</p>
            <p><strong>Intermediate in Computer Science (ICS)</strong> | IMCG I-8/3, Islamabad (2019 – 2021)</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-1">RECOGNITION & LANGUAGES</h4>
            <p>Women Leadership and Networking &bull; NSU Literary Society Member (Creative Writing)</p>
            <p>Languages: English (Fluent Writing), Urdu (Fluent), Pashto (Native), Punjabi (Fluent)</p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex gap-3 pt-2 no-print">
          <button
            onClick={() => window.print()}
            className="flex-1 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
          <a
            href={`mailto:${personalInfo.email}?subject=SEO%20&%20Content%20Opportunity%20-%20Rimsha%20Tanoli`}
            className="flex-1 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>Email Rimsha</span>
          </a>
        </div>

      </div>
    </div>
  );
}
