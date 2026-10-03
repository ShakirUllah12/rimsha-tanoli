/**
 * Rimsha Tanoli - Portfolio Scripts
 * Complete interactive engine: Theme, Simulator, Modals, Counters, and Form
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initCounters();
});

// ==========================================
// 1. THEME MANAGEMENT (Dark / Light Mode)
// ==========================================
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const lightIcon = document.getElementById('theme-toggle-light-icon');

  const isDarkStored = localStorage.getItem('color-theme') === 'dark';
  const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = localStorage.getItem('color-theme') !== null ? isDarkStored : isSystemDark;

  if (isDark) {
    document.documentElement.classList.add('dark');
    if (lightIcon) lightIcon.classList.remove('hidden');
    if (darkIcon) darkIcon.classList.add('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    if (darkIcon) darkIcon.classList.remove('hidden');
    if (lightIcon) lightIcon.classList.add('hidden');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isCurrentlyDark = document.documentElement.classList.contains('dark');
      
      if (isCurrentlyDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        if (darkIcon) darkIcon.classList.remove('hidden');
        if (lightIcon) lightIcon.classList.add('hidden');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        if (lightIcon) lightIcon.classList.remove('hidden');
        if (darkIcon) darkIcon.classList.add('hidden');
      }
    });
  }
}

// ==========================================
// 2. MOBILE MENU DRAWER
// ==========================================
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// ==========================================
// 3. STATS COUNT-UP ANIMATION
// ==========================================
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const speed = 40;
          const increment = Math.ceil(target / speed);
          let current = 0;

          const updateCount = () => {
            current += increment;
            if (current < target) {
              counter.innerText = current;
              setTimeout(updateCount, 25);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
        });
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// ==========================================
// 4. INTERACTIVE AUDIT SIMULATOR
// ==========================================
function setAuditState(state) {
  const btnBefore = document.getElementById('audit-btn-before');
  const btnAfter = document.getElementById('audit-btn-after');
  
  const scoreEl = document.getElementById('metric-score');
  const scoreDesc = document.getElementById('metric-score-desc');
  const lcpEl = document.getElementById('metric-lcp');
  const lcpDesc = document.getElementById('metric-lcp-desc');
  const errorsEl = document.getElementById('metric-errors');
  const errorsDesc = document.getElementById('metric-errors-desc');

  if (state === 'before') {
    btnBefore.className = 'px-5 py-2 rounded-xl text-xs font-bold transition-all bg-rose-600 text-white shadow-lg shadow-rose-500/25';
    btnAfter.className = 'px-5 py-2 rounded-xl text-xs font-bold transition-all bg-slate-800 text-slate-400 border border-slate-700';

    scoreEl.innerText = '34 / 100';
    scoreEl.className = 'text-3xl font-extrabold text-rose-500';
    scoreDesc.innerText = 'Uncompressed images, bloated DOM & render blocking JS';

    lcpEl.innerText = '4.9s';
    lcpEl.className = 'text-3xl font-extrabold text-rose-500';
    lcpDesc.innerText = 'Failing Google threshold by over 2.4 seconds';

    errorsEl.innerText = '24 Errors';
    errorsEl.className = 'text-3xl font-extrabold text-amber-500';
    errorsDesc.innerText = 'Broken 404 links, duplicate meta & missing schema';
  } else {
    btnAfter.className = 'px-5 py-2 rounded-xl text-xs font-bold transition-all bg-brand-600 text-white shadow-lg shadow-brand-500/25';
    btnBefore.className = 'px-5 py-2 rounded-xl text-xs font-bold transition-all bg-slate-800 text-slate-400 border border-slate-700';

    scoreEl.innerText = '98 / 100';
    scoreEl.className = 'text-3xl font-extrabold text-emerald-400';
    scoreDesc.innerText = 'Fast, optimized assets & clean DOM';

    lcpEl.innerText = '0.8s';
    lcpEl.className = 'text-3xl font-extrabold text-brand-400';
    lcpDesc.innerText = 'Under Google\'s 2.5s good threshold';

    errorsEl.innerText = '0 Errors';
    errorsEl.className = 'text-3xl font-extrabold text-teal-400';
    errorsDesc.innerText = 'Clean XML Sitemap & Schema mapped';
  }
}

// ==========================================
// 5. PROJECT FILTERING
// ==========================================
function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));

  const activeBtn = Array.from(buttons).find(btn => {
    return btn.getAttribute('onclick')?.includes(`'${category}'`);
  });
  if (activeBtn) activeBtn.classList.add('active');

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 50);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(10px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 200);
    }
  });
}

// ==========================================
// 6. DETAILED CASE STUDY MODALS
// ==========================================
const caseStudies = {
  1: {
    title: 'Digital Marketing Agency Client Portal',
    category: 'WordPress + Technical SEO',
    summary: 'Delivered an enterprise-grade client website at OperationsPro Digital Marketing Agency. Focused on rapid mobile rendering, JSON-LD Schema markup, and on-page keyword clustering.',
    problem: 'The client website had an average load time over 5.2 seconds, unoptimized Elementor assets, missing OpenGraph tags, and zero structured data, causing low organic visibility.',
    solution: 'Rebuilt header/footer templates with lightweight DOM, configured Yoast SEO metadata, mapped structured JSON-LD schemas (Organization, Service, FAQ), and implemented browser caching.',
    impact: 'Organic search impressions increased by 65% in 60 days. Average search position moved to Page 1 for 4 primary target keyword clusters.',
    tech: ['WordPress', 'Elementor Pro', 'Yoast SEO', 'JSON-LD Schema', 'Google Search Console', 'GA4']
  },
  2: {
    title: 'E-Commerce Speed & Core Web Vitals Overhaul',
    category: 'PageSpeed & Performance',
    summary: 'Led the performance diagnosis and technical remediation for a high-traffic client at Eydma Digital Marketing.',
    problem: 'Failing all three Google Core Web Vitals metrics (LCP: 4.8s, CLS: 0.28). Customers were bouncing on mobile devices due to slow product page rendering.',
    solution: 'Audited assets via Chrome DevTools and Google Search Console. Converted image library to Next-Gen WebP, deferred non-critical CSS/JS, eliminated render-blocking fonts, and fixed layout shifts.',
    impact: 'Mobile PageSpeed score leaped from 32 to 96. LCP dropped to 0.9s and CLS stabilized to 0.00, resulting in immediate recovery of mobile organic search rankings.',
    tech: ['Google PageSpeed', 'Core Web Vitals', 'WP Rocket', 'WebP Conversion', 'GSC Crawl Audit', 'AssetCleanUp']
  },
  3: {
    title: 'Interactive Full-Stack Web Application',
    category: 'MERN Stack Engineering',
    summary: 'Developed full-stack web applications during internship tenure at IVY Interactive Solutions in Islamabad.',
    problem: 'Need for high-performance interactive web components with real-time state synchronization, clean backend APIs, and responsive UI from Figma prototypes.',
    solution: 'Developed modular React components using modern hooks and Tailwind CSS. Built Express.js and Node.js RESTful endpoints with MongoDB database schemas and validation.',
    impact: 'Delivered a production-ready web application with modular maintainability, responsive mobile rendering, and seamless cross-functional team integration.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs', 'Git']
  }
};

function openProjectModal(id) {
  const data = caseStudies[id];
  if (!data) return;

  document.getElementById('modal-title').innerText = data.title;
  document.getElementById('modal-category').innerText = data.category;
  document.getElementById('modal-summary').innerText = data.summary;
  document.getElementById('modal-problem').innerText = data.problem;
  document.getElementById('modal-solution').innerText = data.solution;
  document.getElementById('modal-impact').innerText = data.impact;

  const techContainer = document.getElementById('modal-tech');
  techContainer.innerHTML = '';
  data.tech.forEach(t => {
    const span = document.createElement('span');
    span.className = 'px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs rounded-lg font-mono';
    span.innerText = t;
    techContainer.appendChild(span);
  });

  document.getElementById('project-modal').classList.remove('hidden');
}

function closeProjectModal() {
  document.getElementById('project-modal').classList.add('hidden');
}

// ==========================================
// 7. RECRUITER FAQ ACCORDION
// ==========================================
function toggleFaq(element) {
  const answer = element.querySelector('.faq-answer');
  const icon = element.querySelector('i');
  const isOpen = !answer.classList.contains('hidden');

  document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
  document.querySelectorAll('.faq-item i').forEach(ic => ic.style.transform = 'rotate(0deg)');

  if (!isOpen) {
    answer.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  }
}

// ==========================================
// 8. RESUME MODAL HANDLING
// ==========================================
function downloadCV() {
  const modal = document.getElementById('resume-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) modal.classList.add('hidden');
}

window.addEventListener('click', (e) => {
  const resModal = document.getElementById('resume-modal');
  const projModal = document.getElementById('project-modal');
  if (e.target === resModal) resModal.classList.add('hidden');
  if (e.target === projModal) projModal.classList.add('hidden');
});

// ==========================================
// 9. CONTACT FORM SUBMISSION
// ==========================================
function handleContactSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('sender-name').value.trim();
  const email = document.getElementById('sender-email').value.trim();
  const subject = document.getElementById('sender-subject').value.trim() || 'Job Inquiry for Rimsha Tanoli';
  const message = document.getElementById('sender-message').value.trim();
  const feedback = document.getElementById('form-feedback');

  if (!name || !email || !message) {
    feedback.className = 'text-xs text-center py-2.5 px-3 rounded-lg font-medium bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 block';
    feedback.innerText = 'Please complete all required fields.';
    return;
  }

  const bodyText = `From: ${name} (${email})\n\nMessage:\n${message}`;
  const mailtoUrl = `mailto:rimshak285@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

  feedback.className = 'text-xs text-center py-2.5 px-3 rounded-lg font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 block';
  feedback.innerText = 'Opening your email client to send your message directly to Rimsha...';

  setTimeout(() => {
    window.location.href = mailtoUrl;
  }, 600);
}
