# 🛍️ Mettā Muse – Product Listing Page (Appscrip Frontend Task)

A production-ready, responsive product listing page built using **Next.js** that demonstrates clean UI architecture, SEO best practices, server-side/static data fetching, and modular component design.

This project fulfills all requirements of the Appscrip frontend assignment, including SSR/SSG awareness, responsive UI, minimal dependencies, SEO optimization, and public deployment compatibility.

---

## 🚀 Live Demo

🔗 **Deployed on Netlify**  
https://appscrip-task-muqhtadeer.netlify.app/

---

## 📌 Features

- ⚡ Fast, SEO-friendly product listing
- 🧩 Modular, reusable component architecture
- 🔍 Filters & sorting (Recommended, Price, Popular, etc.)
- ❤️ Wishlist (favorite) toggle
- 📱 Fully responsive (Desktop, Tablet, Mobile)
- 🧠 Custom React hook for product logic
- 🌐 API data fetching with fallback handling
- ♻️ Incremental Static Regeneration (ISR)
- 🛡️ Production-safe deployment on Netlify

---

## 🧠 Tech Stack

- **Framework:** Next.js (Pages Router)
- **Language:** JavaScript (ES6+)
- **Styling:** CSS Modules
- **State Management:** React Hooks
- **Data Source:** Fake Store API
- **Deployment:** Netlify

> ⚠️ No unnecessary third-party libraries used (as per assignment constraints)

---

## 🗂️ Project Structure

```bash
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── product/
│   │   ├── Filters.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductGrid.jsx
│   └── sections/
│       ├── HeroSection.jsx
│       └── ControlsBar.jsx
│
├── hooks/
│   └── useProducts.js
│
├── pages/
│   ├── index.js
│   └── _app.js
│
├── styles/
│   ├── globals.css
│   ├── header.module.css
│   ├── footer.module.css
│   └── product.module.css
│
└── public/
    └── images/
        └── logo.png



""
git clone https://github.com/muqhtadeerM/appscrip-task-muqhtadeer.git
cd appscrip-task-muqhtadeer
""

npm install

npm run dev

Open:
👉 http://localhost:3000

🧪 Production Readiness Checklist

 - Minimal DOM structure
 - Clean naming conventions
 - No unnecessary libraries
 - Responsive across screen sizes
 - SEO compliant
 - Netlify compatible
 - API fallback handling

👤 Author
Muhammed Muqhtadeer
Frontend Developer | React | Next.js
