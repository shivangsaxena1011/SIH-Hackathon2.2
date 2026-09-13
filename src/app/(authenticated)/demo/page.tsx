'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Play, ArrowRight, CheckCircle2, Shield, 
  FileText, Network, Clock, Brain, ScrollText, RotateCcw,
  SlidersHorizontal, Users, FileKey
} from 'lucide-react';
import { getNodeDegree } from '@/lib/graph/graph-service';

interface DemoStep {
  step: number;
  title: string;
  subtitle: string;
  desc: string;
  link: string;
  icon: React.ReactNode;
  actionText: string;
  keyObservation: string;
}

export default function DemoPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const rahulDegree = getNodeDegree('P-1042');

  const demoSteps: DemoStep[] = [
    {
      step: 1,
      title: 'Stage 1 — Investigation Docket',
      subtitle: 'Case #2026-041 (Operation Trishul)',
      desc: 'Authorized investigator opens the central narcotics & document fraud docket. Displays lead officer, priority score (82/100), and correlated entities.',
      link: '/cases/C-001',
      icon: <Shield className="w-5 h-5 text-purple-400" />,
      actionText: 'Open Case #2026-041 File',
      keyObservation: 'High Priority classification with 12 entities and 30 network relationships. Note explicit prototype disclaimer: Priority ≠ Guilt.'
    },
    {
      step: 2,
      title: 'Stage 2 — Suspicious Document Screening',
      subtitle: 'Document DOC-2026-041-009',
      desc: 'Examine evidentiary ID card submitted under Operation Trishul. OCR text extraction (96% accuracy) paired with multi-modal forensic pre-screening.',
      link: '/documents/D-001',
      icon: <FileText className="w-5 h-5 text-amber-400" />,
      actionText: 'Open Document DOC-2026-041-009',
      keyObservation: 'OCR extracts identity fields (Rahul Mehra), but forensic pre-screen flags photo region manipulation (Score: 74% / SUSPICIOUS). Marked as synthetic demonstration data.'
    },
    {
      step: 3,
      title: 'Stage 3 — Entity Resolution & Match Scoring',
      subtitle: 'Candidate Match: Rahul Mehra (P-1042)',
      desc: 'Deterministic entity resolution engine correlates extracted document fields against registry records with transparent match breakdown.',
      link: '/persons/P-1042',
      icon: <Users className="w-5 h-5 text-purple-400" />,
      actionText: 'Inspect Entity Profile (P-1042)',
      keyObservation: 'Resolved with 94% Match Confidence. Displayed strictly as an AI-generated investigation lead for authorized human review, not a declaration of guilt.'
    },
    {
      step: 4,
      title: 'Stage 4 — Multi-Source Evidence Correlation',
      subtitle: 'Cryptographic SHA-256 Vault',
      desc: 'Multi-source evidence fusion linking documents, surveillance records, vehicle sightings, and forensic exhibits with cryptographic hashing.',
      link: '/evidence',
      icon: <FileKey className="w-5 h-5 text-emerald-400" />,
      actionText: 'Open Evidence Vault',
      keyObservation: 'Every item is cryptographically anchored with SHA-256 hashes. Live 1-byte tamper detection simulation proves non-repudiation.'
    },
    {
      step: 5,
      title: 'Stage 5 — Criminal Network Knowledge Graph',
      subtitle: 'Hub Detection & Multi-Hop Path Finder',
      desc: 'Interactive React Flow knowledge graph visualizing multi-entity relationships across persons, vehicles, cases, and locations.',
      link: '/network',
      icon: <Network className="w-5 h-5 text-blue-400" />,
      actionText: 'Launch Knowledge Graph',
      keyObservation: `Rahul Mehra stands out as central network hub with canonical degree ${rahulDegree}. Path Finder reveals 2-hop conduit to associate Harsh Pandey via Vehicle MP09-DEMO-4821.`
    },
    {
      step: 6,
      title: 'Stage 6 — Chronological Replay & Geospatial Map',
      subtitle: 'Transit Movements & ANPR Surveillance',
      desc: 'Synchronized chronological stepper and geospatial map tracking vehicle and subject movements across transit checkpoints.',
      link: '/cases/C-001/workspace',
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
      actionText: 'Launch Investigation Replay & Map',
      keyObservation: 'Timeline reconstructs sequential events between 09:40 and 12:10; map links camera ANPR captures to physical checkpoints with confidence ratings.'
    },
    {
      step: 7,
      title: 'Stage 7 — Explainable AI Lead & Why-Chain',
      subtitle: 'Transparent Reasoning & Non-Guilt Principle',
      desc: 'Deterministic rule-based AI reasoning surfaces high-priority investigative leads with full auditability and provenance.',
      link: '/insights',
      icon: <Brain className="w-5 h-5 text-pink-400" />,
      actionText: 'Inspect AI Evidence Chains',
      keyObservation: "Clicking 'Why This Insight?' displays step-by-step evidence provenance. Mandatory safety principle: PRIORITY ≠ GUILT."
    },
    {
      step: 8,
      title: 'Stage 8 — Prototype Security & Runtime Audit',
      subtitle: 'Append-Only Runtime Audit & Zero-Trust Posture',
      desc: 'Accountability framework verifying server-enforced RBAC, HMAC-signed sessions, and append-only runtime audit logging.',
      link: '/audit',
      icon: <ScrollText className="w-5 h-5 text-indigo-400" />,
      actionText: 'Inspect Runtime Audit Ledger',
      keyObservation: 'Every login, document resolution, and case query is logged in an append-only runtime ledger. Note: In production, persistent WORM storage is deployed.'
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
                <div className="flex-1 space-y-2.5">
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

                  <p className="text-xs text-gray-300 leading-relaxed">{step.desc}</p>

                  {/* Key Observation */}
                  <div className="p-3 bg-black/50 rounded-lg border border-purple-500/20 text-xs text-gray-300">
                    <span className="text-purple-400 font-semibold font-mono">Judge Demonstration Note: </span>
                    {step.keyObservation}
                  </div>

                  {/* Action Controls */}
                  <div className="pt-2 flex flex-wrap items-center gap-2.5">
                    <Link
                      href={step.link}
                      onClick={() => handleCompleteStep(idx)}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5 shadow-md shadow-purple-600/25"
                    >
                      {step.actionText} <ArrowRight className="w-3.5 h-3.5" />
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
