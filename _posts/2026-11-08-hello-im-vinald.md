---
layout: post
title: "Hello, I'm Vinald"
date: 2026-11-08
tags: [general, introduction]
---

I'm Okiror Samuel Vinald - a Computer Engineer and Software Developer based in Uganda, currently working as a Junior Software Developer at the **Infectious Diseases Institute**, where I build production digital health systems.

## What I actually do day to day

My core stack is **Python** (Django, FastAPI), **Java/Kotlin** (Spring Boot, Android), and **TypeScript/React**, deployed on Linux servers with Docker and GitHub Actions CI/CD. But the thing that sets my work apart from most backend/mobile developers is a hands-on specialty in **IVR and PBX systems built on Asterisk** - a domain most developers never touch.

Over the past year on the VxNAID project (a vaccine and immunization management system), I've gone from supporting features to owning pieces of the system end-to-end:

- Led the production deployment of the **Call for Life (CFL) Visit Reminder call flow**, including Luganda-language support - patients get automated, local-language reminders about upcoming vaccination visits.
- Shipped **15+ reports** across a national reporting suite - vaccine tracking, visit history, missed visits, HMIS105, district and facility-level reporting - while fixing production bugs in sync and data accuracy along the way.
- Released **VxNAID v4** (the Android app), adding landscape/portrait support, call language preference, and child health registration.
- Migrated our staging environment to on-premise infrastructure and built a production-replica environment, specifically to de-risk future deployments.
- Built IVR/AGI call flows and worked on PBX setup for an internal conversational AI agent.
- Designed and built a GitHub Pages documentation platform that's now the team's reference point for SOPs and deployment guides.

## Why this matters to me

What drives me isn't the tech for its own sake - it's turning messy, real-world requirements (vaccine tracking, patient communication in multiple languages, offline-first mobile workflows in places without reliable internet) into systems that hold up *in the field*, not just in a demo. A call flow that works perfectly in a staging test but breaks when a health worker's tablet loses connectivity mid-sync isn't done yet.

## What I'm learning right now

Beyond day-to-day feature work, I'm actively picking up skills in a few directions right now:

- **Performance and load testing for telephony infrastructure** - simulating concurrent call traffic against a PBX/IVR stack to find where it buckles under load, and reading through the database and cache layers underneath it to understand why.
- **Conversational AI and voice interfaces** - NLU-based bot design, and wiring self-hosted speech-to-text/text-to-speech pipelines into voice-driven applications so people can get answers by just talking.
- **Observability for production health platforms** - building small dashboards that monitor live and staging instances so problems get caught before they're reported.
- **AI-agent-assisted systems exploration** - using agentic tooling to understand app and binary behavior I didn't write, which has been a surprisingly good way to get better at reading unfamiliar codebases fast.
- **Productized, white-label front-end templates** - building reusable Next.js/Tailwind sites backed by a headless CMS, so a new client site is a re-skin instead of a rebuild.
- **Security-conscious offline-first mobile patterns** - local encryption, biometric/PIN-gated storage, and designing mobile apps that work fully without a network connection.

None of this is finished learning - it's what's currently on my plate, and some of it will probably turn into its own post once I have something concrete to say.

## What I'll write about here

This blog is where I'll go deeper than my [portfolio](/) allows - the actual debugging stories, the IVR/Asterisk quirks nobody documents well, lessons from shipping to real health facilities, and notes on the backend and mobile work I'm doing. Expect posts on:

- Asterisk/IVR call flow design and the gotchas that don't show up until production
- Backend and API work in Django, FastAPI, and Spring Boot
- Android development and offline-first mobile patterns
- Whatever else I'm learning that's worth writing down

If you want the full history, check my [experience](/#experience) and [projects](/#projects), or just keep reading here.
