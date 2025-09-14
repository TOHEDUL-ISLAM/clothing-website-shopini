# Shopini – Clothing E-commerce UI (React, Firebase, Tailwind)

A responsive clothing storefront with product browsing, a “Trending Products” grid powered by a GitHub-hosted JSON API, and Firebase Authentication (email/password + Google + GitHub). Global layout uses a top **Navbar** and bottom **Footer**, with routing handled via React Router.&#x20;

---

## ✨ Features

* **Product feed from a fake API** (hosted on GitHub Pages) with incremental “Show More” loading and detail navigation. The feed is fetched from
  `https://TOHEDUL-ISLAM.github.io/clothing-api/api.json`.&#x20;
* **Product Detail page** receives data via `location.state` and includes a simple order form (name, email, size) + back navigation.&#x20;
* **Authentication**

  * Email/password **login** with friendly toast errors/success + redirect.&#x20;
  * Email/password **register** creates a Firestore user document (`Users/{uid}`).&#x20;
  * **Google sign-in** (stores basic profile to Firestore).&#x20;
  * **GitHub sign-in** (stores profile & optional token; handles account-exists conflicts).&#x20;
  * Central Firebase app + `auth` + `db` exports.&#x20;
* **Pages & routing**: `/`, `/trending-products`, `/product-detail`, `/login`, `/register`.&#x20;
* **Home sections**: Hero, Logos, New Arrivals, Trending, Customer Feedback.&#x20;
* **Layout**: `Navbar` → routes → `Footer`.&#x20;

> The UI uses Tailwind-style utility classes throughout the components.

---

## 🗂️ Project Structure

```
src/
├─ assets/                         # static images & icons
│  ├─ footer/                      # footer illustrations/assets
│  ├─ hero/                        # hero-section images
│  ├─ logo/                        # brand/logo files
│  ├─ products/                    # product thumbnails
│  └─ react.svg
│
├─ components/                     # reusable UI blocks
│  ├─ ApiCall.jsx                  # helper to fetch from fake API (GitHub-hosted JSON)
│  ├─ BackgroundStars.jsx          # decorative background stars
│  ├─ CustomerFeedBack.jsx         # testimonials / reviews section
│  ├─ Footer.jsx                   # site footer
│  ├─ Hero.jsx                     # landing hero section
│  ├─ Logos.jsx                    # partner/brand logos strip
│  ├─ Navbar.jsx                   # top navigation bar
│  ├─ NavbarItem.jsx               # single nav item
│  ├─ NewArivals.jsx               # “new arrivals” grid (note: typo in name)
│  ├─ SearchBar.jsx                # search input component
│  ├─ routes.jsx                   # route definitions (react-router)
│  └─ pp.py                        # stray Python script (safe to remove from repo)
│
├─ firebase/                       # auth & config
│  ├─ firebase.jsx                 # initializeApp + config
│  ├─ login.jsx                    # login page (email/password)
│  ├─ register.jsx                 # sign-up page
│  ├─ signinWithGithub.jsx         # GitHub OAuth
│  └─ signinWithGoogle.jsx         # Google OAuth
│
├─ pages/                          # top-level route pages
│  ├─ Home.jsx                     # homepage: hero, listings, etc.
│  ├─ ProductDetail.jsx            # single product detail view
│  └─ TrendingProducts.jsx         # trending products listing
│
├─ App.jsx                         # app shell & router mount
├─ App.css                         # component-level styles
├─ index.css                       # global styles (e.g., Tailwind base if used)
└─ main.jsx                        # React entry (createRoot) + <App />

```

---

## 🚀 Getting Started

### Prerequisites

* Node.js 18+ and npm

### 1) Clone & Install

```bash
git clone https://github.com/TOHEDUL-ISLAM/Disney-clone
cd Disney-clone
npm install
```

### 2) Development

```bash
# Vite-style (most common for this layout)
npm run dev

# or if your package.json uses CRA-style
npm start
```

### 3) Build & Preview

```bash
npm run build
# optional:
npm run preview
```

---

## 🔑 Firebase Setup

This repo already initializes Firebase and exports `auth` and `db`. You can run it as-is with the included config, or move the keys to environment variables and import them in `firebase.jsx`.&#x20;

> **Security note:** Lock down Firestore/Storage security rules for your project before production.

---

## 🌐 Fake API (GitHub-Hosted JSON)

Trending products are loaded from a public JSON file on GitHub Pages:

* Endpoint: `https://TOHEDUL-ISLAM.github.io/clothing-api/api.json`
* Consumed in `TrendingProducts.jsx` and paginated with a “Show More” button.&#x20;

To switch data sources, update the URL in that file.

---

## 🧭 Routes

| Path                 | Screen           | Notes                                                                 |
| -------------------- | ---------------- | --------------------------------------------------------------------- |
| `/`                  | Home             | Hero, Logos, New Arrivals, Trending, Feedback.                        |
| `/trending-products` | TrendingProducts | Fetches from GitHub JSON feed.                                        |
| `/product-detail`    | ProductDetail    | Receives `{ url, description, price }` via `navigate(..., {state})`.  |
| `/login`             | Login            | Email/password + buttons for Google/GitHub.                           |
| `/register`          | Register         | Creates Firestore user doc.                                           |

Routes are declared in `src/components/routes.jsx`.&#x20;

---

## 🧩 Notable Components

* **App.jsx** – Mounts `Navbar`, `<AppRoutes />`, and `Footer`.&#x20;
* **Home.jsx** – Renders landing sections (Hero, Logos, New Arrivals, Trending, Feedback).&#x20;
* **TrendingProducts.jsx** – Grid of products, click to open detail, “Show More.”&#x20;
* **ProductDetail.jsx** – Detail view + simple order form + back navigation.&#x20;
* **Auth screens** – Email/password login & register, Google & GitHub OAuth.

---

## 🛠️ Scripts (typical)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

> If your `package.json` differs, use those script names instead.

---

## ✅ Roadmap / Ideas

* Move Firebase keys to `.env` and document them.
* Add cart & checkout flow; persist cart in Firestore/localStorage.
* Add categories, filters, and search suggestions.
* Unit tests for API calls and auth flows.

---

## 🙏 Acknowledgements

* Product feed inspired by demo/fake storefronts.
* Built with React, Firebase Auth/Firestore, and Tailwind-style utilities.

---
