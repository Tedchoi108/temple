# Implementation Plan - Gyeongju Heritage AR Guide

## Project Overview
An AR and GPS-based audio guide application for Bulguksa Temple and Seokguram Grotto in Gyeongju.

## Tech Stack
- **Frontend**: Next.js (App Router), React, Vanilla CSS
- **AR**: A-Frame / Three.js
- **Maps**: Mapbox GL JS / Leaflet
- **Backend**: Next.js API Routes
- **Database**: Neo4J (Graph Database for cultural relations), PostgreSQL (via Prisma for user/log data)
- **AI**: Google Gemini API (for chatbot and content generation)
- **Audio**: Web Speech API (TTS) / Pre-recorded audio

## Phase 1: Setup & Design System
- [x] Initialize Next.js project
- [ ] Establish "Gyeongju Premium" design system (Traditional colors + Modern UI)
- [ ] Set up basic folder structure

## Phase 2: Location & Mapping
- [ ] Integrate Mapbox/Leaflet
- [ ] Define Bulguksa/Seokguram POIs (Points of Interest)
- [ ] Implement Geolocation tracking

## Phase 3: AR & Multimedia
- [ ] Set up WebAR environment (A-Frame)
- [ ] Create 3D assets/placeholders for cultural heritages
- [ ] Implement Audio Guide player with multi-language support

## Phase 4: AI Chatbot & Knowledge Base
- [ ] Set up Neo4J instance (or local mock for development)
- [ ] Integrate Gemini API for "Cultural Heritage Expert" persona
- [ ] Implement storytelling logic

## Phase 5: Admin & Management
- [ ] CMS Dashboard for POI management
- [ ] Analytics visualization for visitor flow

## Phase 6: Polish & Launch
- [ ] Responsive design optimization
- [ ] Accessibility features (Barrier-free)
- [ ] Final performance tuning
