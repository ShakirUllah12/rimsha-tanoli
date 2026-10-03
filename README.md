# Rimsha Tanoli - Full-Stack React & Node.js Portfolio

A professional, high-performance **MERN Stack** portfolio designed specifically for job hunting in **SEO-Focused WordPress Development** and **Full-Stack Software Engineering**.

---

## 🏗️ Architecture & Tech Stack

* **Frontend:** React 18, Vite, Tailwind CSS, Lucide React Icons
* **Backend:** Node.js, Express.js REST API (`/api/contact`, `/api/health`)
* **State & Design:** Dark/Light mode with local persistence, responsive glassmorphism
* **SEO Engine:** JSON-LD Schema.org structured data, OpenGraph tags, Core Web Vitals optimization

---

## 🚀 Quick Start (Development)

### 1. Install Dependencies
In your terminal or PowerShell within this folder:
```bash
npm install
```

### 2. Start the Frontend (Vite)
```bash
npm run dev
```
Open **`http://localhost:3000`** in your browser to explore the live React application with Hot Module Reloading (HMR).

### 3. Start the Backend API (Optional)
To test the Node/Express backend on port 5000:
```bash
npm run server
```

### 4. Run Both Concurrently (Full-Stack Mode)
```bash
npm run fullstack
```

---

## 📦 Project Structure

```text
├── package.json              # Full MERN scripts & dependencies
├── vite.config.js            # Vite bundler configuration & API proxy
├── tailwind.config.js        # Tailwind styling & dark theme system
├── index.html                # Vite React HTML root with JSON-LD Schema
├── server/
│   └── server.js             # Node.js + Express backend API
└── src/
    ├── main.jsx              # React DOM mounting
    ├── App.jsx               # Main state & layout
    ├── index.css             # Tailwind base & print utilities
    ├── data/
    │   └── portfolioData.js  # Centralized resume & project data
    └── components/
        ├── Navbar.jsx        # Navigation & dark mode toggle
        ├── Hero.jsx          # Live availability badge & direct CTAs
        ├── Stats.jsx         # Count-up metrics
        ├── About.jsx         # Professional summary narrative
        ├── Specialization.jsx# Technical SEO & Full-Stack pillars
        ├── AuditSimulator.jsx# Interactive Before/After Performance Tool
        ├── Projects.jsx      # Filterable case study cards
        ├── ProjectModal.jsx  # In-depth case study modal
        ├── Experience.jsx    # Career timeline (OperationsPro, Eydma, IVY)
        ├── Skills.jsx        # Complete skills matrix
        ├── Testimonials.jsx  # Agency endorsements
        ├── FAQ.jsx           # Recruiter screening questions
        ├── Contact.jsx       # Contact form (Express API + mailto fallback)
        ├── ResumeModal.jsx   # Print-ready ATS formatted resume
        ├── FloatingDock.jsx  # Floating quick action bar
        └── Footer.jsx        # Footer & credits
```

---

## 🌐 1-Click Free Deployment

### Deploy to Vercel (Recommended)
1. Push this repository to Rimsha's GitHub: `github.com/rimsha030/portfolio`
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository — Vercel detects Vite automatically.
4. Click **Deploy**. The site will be live worldwide on a custom `*.vercel.app` domain with free SSL.

---

## 📄 ATS Resume Printing

Recruiters can click **"Get Official CV"** or **"Resume"** in the floating dock, then click **"Print / Save as PDF"** (`Ctrl + P`) for a clean, single-page, ATS-optimized resume.
