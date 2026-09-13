# 🔱 TRISHUL — AI-Powered Secure Criminal Network, Identity & Evidence Intelligence Platform

> **Smart India Hackathon (SIH) 2026 — Functional Prototype & Investigation Demonstrator**  
> **Problem Statement:** PS189 — AI-Powered Criminal Network Analysis System  
> **Team:** TRISHUL  
> **Core Narrative:** *Document → Identity → Evidence → Network → Timeline → Intelligence → Security*

---

## ⚠️ Important Prototype Disclaimer & Ethical Notice
This platform is a **functional prototype designed exclusively for demonstration during the Smart India Hackathon 2026**.
- **Synthetic Demonstration Data**: All persons, vehicles, documents, phone identifiers, locations, and cases are 100% fictional, synthetic, and deterministic. The platform does not connect to real-world citizen databases, telecom switches, live surveillance networks, or government repositories.
- **Investigative Leads Only (Priority ≠ Guilt)**: All analytical outputs, priority scores, and entity resolution matches represent computer-assisted investigative leads for human officer verification. They do not constitute legal findings, conclusions of fact, or proof of guilt.

---

## 🎯 Executive Overview (PS189)
Modern law enforcement and investigative agencies face massive fragmentation across physical evidence, digital identity documents, multi-hop criminal syndicates, and siloed case files.

**TRISHUL** solves this challenge by unifying multi-source investigative data into an explainable, cryptographically verifiable intelligence graph:
1. **Document Forensics & Identity**: Scans evidentiary identity cards, extracts text via OCR (96%), validates MRZ structures, and flags tampered photo boundaries.
2. **Deterministic Entity Resolution**: Correlates aliases, identifiers, and demographic signals into unified profiles with transparent confidence scoring.
3. **Interactive Criminal Knowledge Graph**: Visualizes multi-dimensional relationships across Persons, Vehicles, Identifiers, Locations, and Cases using interactive force-radial layouts.
4. **Shortest-Path & Conduit Analysis**: BFS path tracing discovering hidden multi-hop connections through shared vehicles, identifiers, or meeting points.
5. **Cross-Case Intelligence**: Surfaces hidden overlap across disconnected FIRs and multi-jurisdictional dockets.
6. **Chronological & Geospatial Reconstruction**: Synchronized timeline playback and vector map visualization across transit checkpoints and corridors.
7. **Explainable AI Intelligence ("Why-Chain")**: Deterministic, rule-based syndicate role inferences with cited evidence hashes and zero hallucination risk.
8. **Section 65B-Oriented Brief & Cryptographic Audit Ledger**: Pre-formatted electronic evidence briefs aligned with Section 65B requirements, paired with an append-only runtime audit ledger.

---

## 🏛️ System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       PRESENTATION LAYER (Next.js 16)                       │
│  Dark-First Command Center UI • React Flow Graph • SVG Vector Intel Map    │
│  Framer Motion Micro-interactions • Space Grotesk & DM Sans Design Tokens   │
├─────────────────────────────────────────────────────────────────────────────┤
│                    API & SERVICE ABSTRACTION LAYER                          │
│  Next.js App Route Handlers • Server-Side RBAC Enforcement                  │
│  HMAC Session Authentication • Document Analyzer • Entity Scorer • AI Engine│
├─────────────────────────────────────────────────────────────────────────────┤
│                    CORE REPOSITORY & GRAPH ENGINES                          │
│  Graph Service (Neo4j-Swappable) • Deterministic Centrality Calculations   │
│  Cryptographic Engine (Node.js Crypto SHA-256) • Audit Logging Pipeline    │
├─────────────────────────────────────────────────────────────────────────────┤
│                        DATA LAYER & SEED STORE                              │
│  SQLite (better-sqlite3) / Deterministic Synthetic Seed Repository          │
│  16 Persons • 8 Vehicles • 9 Identifiers • 12 Locations • 9 Cases • 32 Evts│
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 💻 Tech Stack
- **Framework**: Next.js 16 (App Router, Server Actions & Route Handlers)
- **Language**: TypeScript 5 (Strict Typing across all investigation domain models)
- **Styling**: Tailwind CSS with custom investigative design tokens (#0B0716 canvas, #1A0F2E cards, #A855F7 luminous accents)
- **Graph Visualization**: React Flow (reactflow interactive nodes, edges, custom layouts)
- **Icons & Motion**: Lucide React, Framer Motion
- **Cryptography & Security**: Web Crypto API & Node.js crypto (SHA-256 binary verification, HMAC session signing)
- **Database Abstraction**: SQLite (better-sqlite3) with zero-dependency synthetic fallback

---

## ⚡ Quick Start & Live Demonstration Guide

### 1. Installation
```bash
# Navigate to project root
cd SIH-Hackathon2.2

# Install dependencies
npm install
```

### 2. Run Verification Smoke Tests
```bash
npm run test
```
*Expected: 64/64 automated tests passing (100%) covering SHA-256 hashing, magic bytes, case ID normalization, RBAC matrix, entity scoring, graph degree calculation, shortest path BFS, community clusters, priority score safety disclaimers, Section 65B brief generation, change monitor deltas, authentication rejection, cryptographic HMAC token anti-forgery, and path query canonicalization.*

### 3. Launch Application
```bash
npm run dev
# Or production build:
npm run build && npm start
```
Visit: http://localhost:3000

---

## 🔑 Demo Access Credentials

| Demo Role | Officer ID | Password | MFA Code | Accessible Scope |
|---|---|---|---|---|
| **Investigating Officer** | `officer.demo` | `Demo@12345` | `123456` | Active Cases, Workspace, Network Graph, Timeline, Map, Evidence, Upload |
| **Super Admin** | `admin.demo` | `Demo@12345` | `123456` | Full Access (All cases, audit, security center, system controls) |
| **Forensic Officer** | `forensic.demo` | `Demo@12345` | `123456` | Documents, Forensics, Evidence integrity, Lab records |
| **Analyst** | `analyst.demo` | `Demo@12345` | `123456` | Network graph, Path finder, Timeline, Map, AI Insights, Cross-Case analytics |
| **Auditor** | `auditor.demo` | `Demo@12345` | `123456` | Read-only audit logs, Security status, Compliance tracking |

*Tip: On the login page, click **"⚡ ONE-CLICK DEMO ACCESS (OFFICER)"** to instantly authenticate with canonical credentials.*

---

## 🎬 Canonical 8-Stage Judge Demonstration Workflow

Navigate to the dedicated interactive judge console at `/demo` or follow the sequence in the live workspace:

```
[01: CASE DOCKET] ──▶ [02: DOCUMENT] ──▶ [03: IDENTITY] ──▶ [04: EVIDENCE]
        │
        ▼
[05: NETWORK GRAPH] ──▶ [06: TIMELINE & MAP] ──▶ [07: AI INTELLIGENCE] ──▶ [08: SECURITY & AUDIT]
```

1. **Stage 1 — Primary Case Docket (`/cases/C-001` & `/cases/C-001/workspace`)**:
   - Open **Case #2026-041 (Operation Trishul)**.
   - Primary Subject: **Rahul Mehra (P-1042)**, dynamically correlated with degree 7 across 12 linked entities.
   - Change Monitor ("What Changed?"): 4 new intelligence updates detected since last login.
2. **Stage 2 — Evidentiary Document Inspection (`/documents/D-001`)**:
   - Inspect Document **DOC-2026-041-009** (Identity Card).
   - Review automated OCR field extraction (96% accuracy) and MRZ data.
   - Inspect **Forensic Pre-Screen**: photo edge manipulation detected (82% anomaly score).
3. **Stage 3 — Deterministic Entity Resolution (`/documents/D-001`)**:
   - Match candidate **Rahul Mehra (94% confidence)** based on token similarity and historical aliases.
   - Prominent disclaimer displayed: *"Priority ≠ Guilt — Investigative Lead for Human Review"*.
4. **Stage 4 — Cryptographic Evidence Registry (`/evidence`)**:
   - Inspect SHA-256 evidence digests (`a7f3d2e1b9c8...`) with **INTEGRITY: VERIFIED**.
   - Test 1-byte tamper simulation: instant integrity failure detection.
5. **Stage 5 — Criminal Intelligence Knowledge Graph (`/network`)**:
   - Interactive React Flow graph with **Rahul Mehra (P-1042)** at the network hub.
   - Run **Path Finder**: BFS shortest path from Rahul Mehra to Harsh Pandey via conduit vehicle **MP09-DEMO-4821**.
   - Toggle **Community Clusters**: view automated partitioning into 3 distinct syndicates.
6. **Stage 6 — Timeline Replay & Vector Intelligence Map (`/timeline` & `/map`)**:
   - Use playback replay controller to trace events from 09:40 to 12:10 across Bhopal corridors.
   - Zero-dependency SVG vector map showing camera clusters and checkpoints.
7. **Stage 7 — Explainable AI Intelligence & Section 65B Brief (`/insights` & Workspace)**:
   - Open Insight #001: Cross-Case Syndicate Overlap (87% confidence).
   - Click **"Why This Insight?"** to inspect the multi-hop reasoning chain and cited evidence hashes.
   - Click **"GENERATE BRIEF"** to produce Section 65B-oriented electronic evidence brief.
8. **Stage 8 — Append-Only Runtime Audit Ledger (`/audit` & `/security`)**:
   - Inspect append-only ledger recording all officer queries, session validations, and access attempts.
   - Confirm tamper-evident session handling (HMAC-SHA256, HttpOnly, no client-side tokens).

---

## ⚖️ SIH Functional Prototype vs. Future Production Roadmap

| Architectural Layer | SIH 2026 Functional Prototype | Classified Production Roadmap |
|---|---|---|
| **Data Scope & Privacy** | 100% synthetic, deterministic fictional dataset (Madhya Pradesh scenarios). | Classified national data lake (CCTNS, NATGRID, ICJS, Vahan/Sarathi). |
| **Document Processing** | Client/server 9-stage pipeline with Web Crypto / Node.js SHA-256 hashing and rule-based OCR. | Air-gapped on-premise OCR cluster (LayoutLMv3, TrOCR) with Hardware Security Module (HSM) signing. |
| **Forensics Pre-Screen** | Deterministic boundary anomaly & noise inconsistency simulation. | Deep convolutional neural networks & Error Level Analysis (ELA) models. |
| **Entity Resolution** | Levenshtein distance, token overlap, and weighted heuristic scorer. | Graph neural networks (GNN) and probabilistic record linkage (Fellegi-Sunter) with biometric matchers. |
| **Graph Scale** | In-browser React Flow graph with deterministic layout (<500 nodes). | Enterprise Neo4j / Neptune graph cluster running distributed community detection on millions of nodes. |
| **Audit Ledger** | Append-only in-memory runtime audit ledger with real-time UI stream. | Permissioned Hyperledger Fabric / WORM storage with multi-agency non-repudiation. |
| **Geospatial & Timeline** | Offline zero-dependency SVG vector canvas with normalized coordinates. | Defense-grade GIS (ArcGIS / PostGIS) with encrypted real-time telemetry and satellite layers. |
| **AI Insights** | Deterministic heuristic rule engine with explicit "Why-Chain" and zero hallucination. | Air-gapped LLM (Llama 3 / Mistral) with strict RAG guardrails and chain-of-custody citations. |

---

## 🔒 Security Architecture
- **Zero-Trust Role-Based Access Control**: 5 strict permission tiers (`officer`, `admin`, `forensic`, `analyst`, `auditor`).
- **Cryptographic Session Signing**: HMAC-SHA256 authenticated cookies with zero client-side token exposure.
- **Append-Only Runtime Audit**: Every API access, query, export, and denial logged with timestamp and officer ID.
- **Evidence Integrity**: SHA-256 cryptographic verification of raw file contents.
