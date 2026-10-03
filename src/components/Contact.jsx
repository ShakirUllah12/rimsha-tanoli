import React, { useState } from 'react';
import { Send, MapPin, Mail, MessageSquare, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      // First attempt to send to the fullstack Express backend API
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const data = await res.json();
        setStatus({
          type: 'success',
          text: data.message || 'Message sent successfully! Rimsha will reply soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setLoading(false);
        return;
      }
    } catch (err) {
      // Fallback for static environments (GitHub Pages, etc.)
    }

    // Direct Mailto Fallback
    const bodyText = `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(bodyText)}`;

    setStatus({
      type: 'success',
      text: 'Opening your email client to dispatch directly to Rimsha...'
    });
    setLoading(false);

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-dark-800/40 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-3 py-1 rounded-full border border-brand-200 dark:border-brand-800">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Ready to Build or Rank Your Next Website?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            I am available for full-time opportunities, technical SEO audits, and custom WordPress development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Direct Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 transition-all shadow-sm group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Direct WhatsApp</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{personalInfo.phone}</div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">Click to chat instantly &rarr;</div>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="block p-5 rounded-2xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700 hover:border-rose-500 transition-all shadow-sm group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Email Address</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{personalInfo.email}</div>
                  <div className="text-[11px] text-rose-600 dark:text-rose-400 font-medium mt-0.5">Send direct email &rarr;</div>
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="p-5 rounded-2xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center text-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Location</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{personalInfo.location}</div>
                <div className="text-[11px] text-slate-400">Open to Remote Global & Hybrid Roles</div>
              </div>
            </div>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700 hover:border-slate-900 dark:hover:border-slate-400 transition-all shadow-sm group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">GitHub Profile</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">@rimsha030</div>
                  <div className="text-[11px] text-brand-600 dark:text-brand-400 font-medium mt-0.5">Explore repositories &rarr;</div>
                </div>
              </div>
            </a>

          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Send an Instant Message</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Recruiters and hiring managers can connect with Rimsha directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe / Tech Recruiter"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="recruiter@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Subject / Role Description</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Job Opportunity: SEO & WordPress Developer"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell Rimsha about your project, team, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Sending...' : 'Send Message Directly'}</span>
              </button>

              {status.text && (
                <div
                  className={`text-xs text-center py-2.5 px-3 rounded-lg font-medium ${
                    status.type === 'success'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                  }`}
                >
                  {status.text}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
