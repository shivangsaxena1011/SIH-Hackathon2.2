'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Play, CheckCircle2, Shield, 
  FileText, Network, Clock, Brain, ScrollText, RotateCcw,
  SlidersHorizontal, Users, FileKey
} from 'lucide-react';
import { getNodeDegree } from '@/lib/graph/graph-service';

interface DemoStep {
  step: number;
  stageName: string;
  title: string;
  subtitle: string;
  whatIsHappening: string;
  whatSystemShows: string;
  whyItMatters: string;
  link: string;
  icon: React.ReactNode;
  actionText: string;
}

export default function DemoPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const rahulDegree = getNodeDegree('P-1042');

  const demoSteps: DemoStep[] = [
    {
      step: 1,
      stageName: 'CASE',
      title: 'Stage 1 — Primary Case Docket',
      subtitle: 'Case #2026-041 (Operation Trishul)',
      whatIsHappening: 'Authorized investigator opens the central multi-jurisdictional narcotics and fraud docket.',
      whatSystemShows: 'Normalized docket file, active leads, lead officer assignment, and an explainable priority score of 82/100 (Critical Review).',
      whyItMatters: 'Provides unified operational focus and eliminates cross-jurisdictional evidence loss while upholding the PRIORITY ≠ GUILT principle.',
      link: '/cases/C-001',
      icon: <Shield className="w-5 h-5 text-purple-400" />,
      actionText: 'Open Case Docket File',
    },
    {
      step: 2,
      stageName: 'DOCUMENT',
      title: 'Stage 2 — Evidentiary Document Screening',
      subtitle: 'Document DOC-2026-041-009',
      whatIsHappening: 'Forensic officer inspects an evidentiary identity card submitted from transit checkpoint Alpha.',
      whatSystemShows: 'High-precision OCR field extraction (96% accuracy) paired with edge anomaly detection (74% Suspicious / Tamper Flag).',
      whyItMatters: 'Catches counterfeit credentials early in the pipeline before falsified identities pollute the criminal registry.',
      link: '/documents/D-001',
      icon: <FileText className="w-5 h-5 text-amber-400" />,
      actionText: 'Inspect Document Forensics',
    },
    {
      step: 3,
      stageName: 'IDENTITY',
      title: 'Stage 3 — Deterministic Entity Resolution',
      subtitle: 'Candidate Match: Rahul Mehra (P-1042)',
      whatIsHappening: 'System resolves OCR demographic data against recorded persons and alias catalogs.',
      whatSystemShows: 'Deterministic 94% match confidence linking document to suspect Rahul Mehra (Alias "Rocky") with transparent attribute breakdown.',
      whyItMatters: 'Unifies fragmented alias profiles into an investigative lead for authorized human review rather than an automated accusation.',
      link: '/persons/P-1042',
      icon: <Users className="w-5 h-5 text-purple-400" />,
      actionText: 'Inspect Resolved Identity Profile',
    },
    {
      step: 4,
      stageName: 'EVIDENCE',
      title: 'Stage 4 — Cryptographic Evidence Vault',
      subtitle: 'Multi-Source SHA-256 Custody',
      whatIsHappening: 'Investigator verifies authenticity of all 10 case items (documents, surveillance logs, mobile records).',
      whatSystemShows: 'Deterministic 256-bit cryptographic SHA-256 digests with live 1-byte tamper simulation.',
      whyItMatters: 'Guarantees strict electronic chain of custody and enables verifiable 65B-oriented electronic evidence brief generation.',
      link: '/evidence?caseId=C-001',
      icon: <FileKey className="w-5 h-5 text-emerald-400" />,
      actionText: 'Verify Evidence Integrity',
    },
    {
      step: 5,
      stageName: 'NETWORK',
      title: 'Stage 5 — Criminal Knowledge Graph',
      subtitle: 'Hub Detection & Multi-Hop Path Finder',
      whatIsHappening: 'Analyst maps multi-dimensional syndicate connections across persons, vehicles, identifiers, and locations.',
      whatSystemShows: `Rahul Mehra as primary syndicate hub (canonical degree ${rahulDegree}) and a 2-hop BFS shortest path to Harsh Pandey via vehicle MP09-DEMO-4821.`,
      whyItMatters: 'Exposes hidden logistical conduits and syndicate clusters that remain invisible in flat dossier files.',
      link: '/network',
      icon: <Network className="w-5 h-5 text-blue-400" />,
      actionText: 'Launch Knowledge Graph & Path Finder',
    },
    {
      step: 6,
      stageName: 'TIMELINE + MAP',
      title: 'Stage 6 — Chronological Replay & Geospatial Map',
      subtitle: 'Corridor Reconstruction & ANPR Trail',
      whatIsHappening: 'Investigator reconstructs suspect movements and sightings across the Bhopal-Indore transit corridor.',
      whatSystemShows: 'Synchronized chronological playback from 09:40 to 12:10 on a zero-dependency SVG vector intelligence map.',
      whyItMatters: 'Reconciles spatial and temporal evidence into an indisputable event sequence for operational and legal clarity.',
      link: '/cases/C-001/workspace',
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
      actionText: 'Launch Timeline & Map Replay',
    },
    {
      step: 7,
      stageName: 'AI INTELLIGENCE',
      title: 'Stage 7 — Explainable AI Lead ("Why-Chain")',
      subtitle: 'Transparent Reasoning & Non-Guilt Principle',
      whatIsHappening: 'Algorithmic reasoning engine evaluates multi-source graph patterns to generate investigative leads.',
      whatSystemShows: 'Multi-case syndicate overlap alert (87% confidence) with complete step-by-step evidence provenance and cited hash IDs.',
      whyItMatters: 'Eliminates black-box AI risk by delivering explainable, human-in-the-loop leads where algorithmic priority never equals guilt.',
      link: '/insights',
      icon: <Brain className="w-5 h-5 text-pink-400" />,
      actionText: 'Inspect AI Evidence Chains',
    },
    {
      step: 8,
      stageName: 'SECURITY + AUDIT',
      title: 'Stage 8 — Prototype Security & Runtime Audit',
      subtitle: 'Append-Only Runtime Audit & HMAC Controls',
      whatIsHappening: 'Auditor verifies that all user queries, session tokens, and access attempts follow zero-trust principles.',
      whatSystemShows: 'Append-only runtime audit ledger capturing every query, HMAC-SHA256 session integrity, and simulated RBAC denial on Case #2026-999.',
      whyItMatters: 'Proves robust internal accountability and prevents evidence tampering or unauthorized access throughout the inquiry.',
      link: '/audit',
      icon: <ScrollText className="w-5 h-5 text-indigo-400" />,
      actionText: 'Inspect Runtime Audit Ledger',
    },
  ];

  const handleCompleteStep = (stepIdx: number) => {
    if (!completedSteps.includes(stepIdx)) {
      setCompletedSteps(prev => [...prev, stepIdx]);
    }
    setActiveStep(prev => Math.min(prev + 1, demoSteps.length - 1));
  };

  const handleResetDemo = () => {
    setActiveStep(0);
    setCompletedSteps([]);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-purple-500/20 pb-6">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl md:text-3xl font-bold font-space text-white flex items-center gap-2">
              <Play className="w-6 h-6 text-purple-400 fill-purple-400" />
              SIH 2026 INVESTIGATION DEMO
            </h1>
            <span className="text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full font-mono font-bold">
              8-STAGE JUDGE WALKTHROUGH
            </span>
            <span className="text-xs bg-pink-500/10 text-pink-300 border border-pink-500/20 px-2.5 py-1 rounded-full font-mono">
              SYNTHETIC DEMO DATA
            </span>
          </div>
          <p className="text-gray-400 mt-2 text-xs sm:text-sm max-w-2xl font-mono">
            Structured live demonstration flow:
            <span className="text-purple-300 font-semibold"> Case → Document → Identity → Evidence → Network → Timeline/Map → AI Intelligence → Security/Audit.</span>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleResetDemo}
            className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-xs text-gray-300 rounded-lg border border-gray-700 transition flex items-center gap-1.5 font-mono"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Restart Tour
          </button>
          <div className="text-right bg-[#1A0F2E] border border-purple-500/30 px-4 py-2 rounded-xl">
            <div className="text-[10px] text-gray-400 uppercase font-mono">Completed</div>
            <div className="text-base font-bold text-purple-300 font-mono">
              {completedSteps.length} / {demoSteps.length} Stages
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-900 h-2.5 rounded-full overflow-hidden border border-purple-500/30">
        <div 
          className="bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 h-full transition-all duration-300"
          style={{ width: `${(completedSteps.length / demoSteps.length) * 100}%` }}
        />
      </div>

      {/* Stepper */}
      <div className="space-y-4">
        {demoSteps.map((step, idx) => {
          const isActive = activeStep === idx;
          const isDone = completedSteps.includes(idx);

          return (
            <div
              key={step.step}
              className={`p-5 rounded-xl border transition-all ${
                isActive
                  ? 'bg-[#1A0F2E] border-purple-500 shadow-xl shadow-purple-500/10 ring-1 ring-purple-500/40'
                  : isDone
                    ? 'bg-[#1A0F2E]/60 border-purple-500/20'
                    : 'bg-[#1A0F2E]/20 border-gray-800/40 opacity-70'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Step Icon / Number */}
                <div className="shrink-0 mt-0.5">
                  {isDone ? (
                    <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 font-bold text-sm">
                      ✓
                    </div>
                  ) : (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                      isActive ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-800 text-gray-400 border border-gray-700'
                    }`}>
                      {step.step}
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                    <div>
                      <h3 className={`text-base font-bold font-space flex items-center gap-2 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                        {step.title}
                        <span className="text-xs font-mono font-normal text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded border border-purple-500/30">
                          {step.subtitle}
                        </span>
                      </h3>
                    </div>
                    {isDone && (
                      <span className="text-xs text-green-400 font-medium flex items-center gap-1 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Stage Completed
                      </span>
                    )}
                  </div>

                  {/* 3 Core Questions Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-black/40 p-3.5 rounded-xl border border-purple-500/20 text-xs">
                    <div>
                      <span className="text-[10px] font-mono text-purple-400 uppercase font-bold block mb-1">
                        WHAT IS HAPPENING?
                      </span>
                      <p className="text-gray-300 leading-relaxed">{step.whatIsHappening}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block mb-1">
                        WHAT DOES THE SYSTEM SHOW?
                      </span>
                      <p className="text-gray-300 leading-relaxed">{step.whatSystemShows}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-amber-400 uppercase font-bold block mb-1">
                        WHY DOES IT MATTER?
                      </span>
                      <p className="text-gray-300 leading-relaxed">{step.whyItMatters}</p>
                    </div>
                  </div>

                  {/* Action Controls */}
                  <div className="pt-1 flex flex-wrap items-center gap-2.5">
                    <Link
                      href={step.link}
                      onClick={() => handleCompleteStep(idx)}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5 shadow-md shadow-purple-600/25 font-mono"
                    >
                      {step.actionText} &rarr;
                    </Link>

                    {isActive && (
                      <button
                        onClick={() => handleCompleteStep(idx)}
                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-medium rounded-lg border border-gray-700 transition font-mono"
                      >
                        Next Step &rarr;
                      </button>
                    )}

                    <Link
                      href="/cases/C-001/workspace"
                      className="px-3.5 py-2 bg-[#0B0716] hover:bg-white/5 text-purple-300 text-xs font-medium rounded-lg border border-purple-500/30 transition flex items-center gap-1.5 font-mono"
                    >
                      <SlidersHorizontal className="w-3 h-3 text-purple-400" />
                      View in Workspace
                    </Link>

                    <Link
                      href="/cases/C-001"
                      className="px-3.5 py-2 bg-[#0B0716] hover:bg-white/5 text-gray-400 hover:text-white text-xs font-medium rounded-lg border border-gray-800 transition font-mono"
                    >
                      Back to Case
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
