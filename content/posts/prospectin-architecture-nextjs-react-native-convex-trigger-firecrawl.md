---
title: "ProspectIn Architecture: Next.js + React Native + Convex + trigger.dev + Firecrawl"
date: "2025-08-12"
image: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg"
excerpt: >
  Designing a platform for international, in-person prospecting with scalable workflows and measurable ROI.
---

ProspectIn helps independents and sales teams discover, prepare, and follow up on real‑world meetings globally.

## Core modules

- Discovery: Firecrawl + rotating proxies to monitor Meetup/Eventbrite/expo sites
- Qualification: enrichment, speaker/attendee signals, LinkedIn profiles
- Planning: calendar sync (Google/Outlook) with notes and reminders
- Follow‑up: sequences triggered via CRM integration

## Architecture

- Next.js (web) + React Native (mobile)
- Convex for realtime data + serverless functions
- trigger.dev for orchestrating long‑running jobs
- Workers for scraping and enrichment (isolation + retries)

## ROI dashboard

- Time saved vs. meetings held
- Opportunities generated and conversion rate

The focus is real‑world impact: better meetings, better follow‑ups, better outcomes.


