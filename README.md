# Okiror Samuel Vinald — Portfolio

Personal portfolio site for **Okiror Samuel Vinald**, a Software Developer and Computer Engineer.
Live at: [vinald.github.io](https://vinald.github.io)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Static site generator | Jekyll 4.3 |
| Hosting | GitHub Pages (custom Actions workflow) |
| CSS framework | Bootstrap 5.3.3 |
| Icons | Bootstrap Icons, Font Awesome 6 |
| Contact form | EmailJS (credentials injected via GitHub Actions secrets) |
| CI/CD | `.github/workflows/inject-secrets.yml` |

---

## Project Structure

```
.
├── index.html                  # Root page (Jekyll front matter + includes)
├── _config.yml                 # Jekyll configuration
├── Gemfile                     # Ruby dependencies (jekyll ~> 4.3, webrick)
│
├── _layouts/
│   ├── default.html            # Main portfolio layout (navbar, footer, scripts)
│   └── project.html            # Project detail page layout
│
├── _includes/                  # Page sections (included into index.html)
│   ├── hero.html               # Intro, profile photo, contact cards
│   ├── projects.html           # Project cards with show/hide toggle
│   ├── experience.html         # Work history timeline
│   ├── skills.html             # Technical and soft skills
│   ├── services.html           # Areas of Focus cards
│   ├── education.html          # Degrees and schooling
│   ├── certificates.html       # Professional certificates
│   └── contact.html            # EmailJS contact form
│
├── projects/                   # Project detail pages (use layout: project)
│   ├── irrigation-project.html
│   ├── wheelchair-project.html
│   └── asterisk-audio-generator.html
│
├── assets/
│   ├── css/styles.css          # Custom styles and animations
│   ├── js/
│   │   ├── script.js           # Scroll animations, navbar, copy-to-clipboard, EmailJS handler
│   │   └── emailjs-config.js   # Injected at build time — do not edit manually
│   ├── images/                 # Profile photo, project screenshots, logos
│   ├── certificates/           # PDF certificates
│   └── okiror_samuel_vinald.pdf  # Resume download
│
└── .github/workflows/
    └── inject-secrets.yml      # Injects EmailJS secrets → builds Jekyll → deploys to Pages
```

---

## Sections

| Section | Include file | Notes |
|---|---|---|
| Hero / About | `hero.html` | Intro paragraph, profile photo, contact cards |
| Projects | `projects.html` | 8 cards; first 4 visible, 4 more behind "Show More" toggle |
| Experience | `experience.html` | 7 roles, chronological reverse order |
| Skills | `skills.html` | 9 skill-group cards + soft skills |
| Areas of Focus | `services.html` | 7 specialization cards |
| Education | `education.html` | BSc Computer Engineering, A-Level, O-Level |
| Certificates | `certificates.html` | CISCO, netLabs, PMI, CITI research certs |
| Contact | `contact.html` | EmailJS form with mailto fallback |

---

## Project Detail Pages

Each file in `projects/` uses Jekyll front matter to select the `project` layout and optionally link to GitHub:

```html
---
layout: project
title: "Page Title"
github_url: "https://github.com/Vinald/repo-name"
---
<!-- page content here -->
```

The `project` layout provides the navbar (with logo, Portfolio link, All Projects link, and conditional GitHub button), Bootstrap 5.3.3, Font Awesome, Bootstrap Icons, and footer.

---

## Running Locally

Requires Ruby (Homebrew recommended on macOS — system Ruby 2.6 lacks write permissions).

```bash
# First time
gem install bundler
bundle install

# Every time
bundle exec jekyll serve
# → http://localhost:4000
```

The `emailjs-config.js` file is injected by CI and is not committed. The contact form gracefully falls back to a mailto link when credentials are absent locally.

---

## Deployment

Pushing to `main` triggers `.github/workflows/inject-secrets.yml` which:
1. Injects EmailJS credentials from GitHub repository secrets into `assets/js/emailjs-config.js`
2. Builds the Jekyll site with `bundle exec jekyll build`
3. Uploads `_site/` as the GitHub Pages artifact and deploys

Required repository secrets: `EMAILJS_PUBLIC_KEY`, `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`.

---

## Projects Featured

| Project | Stack | Detail page |
|---|---|---|
| Smart Irrigation System | Python, TensorFlow, Flask, Firebase, ESP32 | `projects/irrigation-project.html` |
| Voice-Controlled Wheelchair | Python, Raspberry Pi, MFCC, Bluetooth | `projects/wheelchair-project.html` |
| VXNAID — Vaccine Management | Kotlin, Android, OpenMRS, Asterisk, Docker | GitHub (fork + upstream) |
| Asterisk Audio Generator | Python, FastAPI, Kokoro TTS, Docker, SSE | `projects/asterisk-audio-generator.html` |
| DRF E-Commerce API | Django, DRF, Celery, Redis, PostgreSQL, Docker | GitHub |
| Travello Django Travel App | Django, PostgreSQL, Celery, Redis, Nginx, Pytest | GitHub |
| ws_charts WebSocket Chat | FastAPI, WebSockets, SQLAlchemy, Alembic, Docker | GitHub |
| FastAPI Product Management | FastAPI, React, PostgreSQL, Docker, Swagger | GitHub |
