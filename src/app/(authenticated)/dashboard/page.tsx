'use client';

import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { 
  FileSearch, AlertTriangle, GitMerge, FileKey, 
  ShieldAlert, ShieldCheck, Cpu, Map, ArrowRight, Network, CheckCircle2, X,
  FileText, Clock, Users, Car, SlidersHorizontal, Sparkles, ChevronRight
} from 'lucide-react';
import { 
  seedAlerts, seedInsights, seedEvidence, seedCases, 
  seedPersons, seedVehicles, seedRelationships 
} from '@/data/seed';
import { getNodeDegree } from '@/lib/graph/graph-service';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [showResetBanner, setShowResetBanner] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('reset=true')) {
      setShowResetBanner(true);
      const timer = setTimeout(() => setShowResetBanner(false), 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const topAlerts = seedAlerts.slice(0, 5);
  const primaryInsight = seedInsights[0];
  const primaryCase = seedCases[0]; // Case #2026-041 Operation Trishul
  const rahulDegree = getNodeDegree('P-1042');

  const pipelineStages = [
    {
      step: '01',
      name: 'DOCUMENT',
      label: 'DOC-2026-041-009',
      meta: 'OCR 96% • Forensic Flag',
      href: '/documents/D-001',
      icon: FileText,
      color: 'text-amber-400',
      border: 'border-amber-500/30'
    },
    {
      step: '02',
      name: 'IDENTITY',
      label: 'Rahul Mehra (P-1042)',
      meta: '94% Entity Resolution',
      href: '/persons/P-1042',
      icon: Users,
      color: 'text-purple-400',
      border: 'border-purple-500/30'
    },
    {
      step: '03',
      name: 'EVIDENCE',
      label: 'Multi-Source Vault',
      meta: '10 Items • SHA-256 Verified',
      href: '/evidence',
      icon: FileKey,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30'
    },
    {
      step: '04',
      name: 'NETWORK',
      label: 'Knowledge Graph Hub',
      meta: `${rahulDegree} Direct Links Correlated`,
      href: '/network',
      icon: Network,
      color: 'text-blue-400',
      border: 'border-blue-500/30'
    },
    {
      step: '05',
      name: 'TIMELINE',
      label: 'Chronological Replay',
      meta: '32 Cross-Case Events',
      href: '/timeline',
      icon: Clock,
      color: 'text-cyan-400',
      border: 'border-cyan-500/30'
    },
    {
      step: '06',
      name: 'INTELLIGENCE',
      label: 'Explainable AI Leads',
      meta: 'Why-Chain • Priority ≠ Guilt',
      href: '/insights',
      icon: Cpu,
      color: 'text-pink-400',
      border: 'border-pink-500/30'
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {showResetBanner && (
        <div className="p-4 bg-emerald-500/15 border border-emerald-500/40 rounded-xl flex items-center justify-between text-emerald-300 text-sm shadow-lg">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold uppercase tracking-wider">DEMO ENVIRONMENT RESTORED:</span> All synthetic cases, document forensics, and network relationships reset to canonical state.
            </div>
          </div>
          <button 
            onClick={() => setShowResetBanner(false)}
            className="p-1 hover:bg-emerald-500/20 rounded-md text-emerald-400 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* SIH Prototype Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-purple-500/20 pb-5 bg-gradient-to-r from-[#1A0F2E]/80 via-[#1A0F2E]/40 to-transparent p-5 rounded-2xl border border-purple-500/25">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase bg-purple-600/30 text-purple-300 border border-purple-500/40">
              SIH 2026 • FUNCTIONAL PROTOTYPE
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase bg-pink-500/15 text-pink-300 border border-pink-500/30">
              TEAM TRISHUL • PS189
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase bg-gray-800 text-gray-400 border border-gray-700">
              SYNTHETIC DEMONSTRATION DATA
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-space font-bold text-white flex items-center gap-2.5">
            <ShieldAlert className="text-purple-400 w-7 h-7 shrink-0" />
            TRISHUL — CRIMINAL NETWORK ANALYSIS SYSTEM
          </h1>
          <p className="text-gray-300 text-xs md:text-sm mt-1.5 flex items-center gap-2 font-mono flex-wrap">
            <span className="text-gray-400">Core Narrative:</span>
            <strong className="text-purple-300">Document → Identity → Evidence → Network → Timeline → Intelligence</strong>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/cases/C-001/workspace"
            className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-purple-600/30 flex items-center gap-2 transition"
          >
            <ShieldAlert className="w-4 h-4" />
            OPEN INVESTIGATION (Case #2026-041) &rarr;
          </Link>
          <Link
            href="/demo"
            className="px-4 py-2.5 bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 border border-pink-500/40 font-semibold text-xs rounded-xl flex items-center gap-2 transition shadow-sm font-mono"
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
            START SIH DEMO (8 Stages)
          </Link>
        </div>
      </div>

      {/* Investigation Pipeline Visualizer */}
      <div className="bg-[#130B24] border border-purple-500/25 rounded-2xl p-4 shadow-xl">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-purple-400" />
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-200">
              Investigation Demonstration Pipeline
            </h2>
          </div>
          <span className="text-[10px] font-mono text-gray-400">
            Click any stage to inspect live prototype module
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {pipelineStages.map((stage) => {
            const Icon = stage.icon;
            return (
              <Link
                key={stage.name}
                href={stage.href}
                className={`bg-[#1A0F2E]/90 hover:bg-[#251542] p-3 rounded-xl border ${stage.border} transition-all hover:scale-[1.02] group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-gray-500 group-hover:text-purple-300">
                      STEP {stage.step}
                    </span>
                    <Icon className={`w-4 h-4 ${stage.color}`} />
                  </div>
                  <div className="text-xs font-bold text-white tracking-wide group-hover:text-purple-200">
                    {stage.name}
                  </div>
                  <div className="text-[11px] text-gray-300 truncate mt-0.5" title={stage.label}>
                    {stage.label}
                  </div>
                </div>
                <div className="text-[9px] font-mono text-gray-400 mt-2 border-t border-white/5 pt-1.5 flex items-center justify-between">
                  <span className="truncate">{stage.meta}</span>
                  <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-white shrink-0 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Compact Prototype Status Area (Dynamic Real Counts) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-[#1A0F2E] p-3.5 rounded-xl border border-purple-500/20">
          <div className="text-[10px] font-mono uppercase text-gray-400 flex items-center justify-between">
            <span>Persons</span>
            <Users className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="text-xl font-bold font-mono text-white mt-1">{seedPersons.length}</div>
          <div className="text-[10px] text-gray-500 font-mono">Resolved Entities</div>
        </div>

        <div className="bg-[#1A0F2E] p-3.5 rounded-xl border border-purple-500/20">
          <div className="text-[10px] font-mono uppercase text-gray-400 flex items-center justify-between">
            <span>Vehicles</span>
            <Car className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="text-xl font-bold font-mono text-white mt-1">{seedVehicles.length}</div>
          <div className="text-[10px] text-gray-500 font-mono">ANPR Tracked</div>
        </div>

        <div className="bg-[#1A0F2E] p-3.5 rounded-xl border border-purple-500/20">
          <div className="text-[10px] font-mono uppercase text-gray-400 flex items-center justify-between">
            <span>Cases</span>
            <FileSearch className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-xl font-bold font-mono text-white mt-1">{seedCases.length}</div>
          <div className="text-[10px] text-gray-500 font-mono">Dockets Tracked</div>
        </div>

        <div className="bg-[#1A0F2E] p-3.5 rounded-xl border border-purple-500/20">
          <div className="text-[10px] font-mono uppercase text-gray-400 flex items-center justify-between">
            <span>Relationships</span>
            <GitMerge className="w-3.5 h-3.5 text-pink-400" />
          </div>
          <div className="text-xl font-bold font-mono text-white mt-1">{seedRelationships.length}</div>
          <div className="text-[10px] text-gray-500 font-mono">Graph Edges</div>
        </div>

        <div className="bg-[#1A0F2E] p-3.5 rounded-xl border border-purple-500/20">
          <div className="text-[10px] font-mono uppercase text-gray-400 flex items-center justify-between">
            <span>Evidence</span>
            <FileKey className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-xl font-bold font-mono text-white mt-1">{seedEvidence.length}</div>
          <div className="text-[10px] text-gray-500 font-mono">SHA-256 Verified</div>
        </div>

        <div className="bg-[#1A0F2E] p-3.5 rounded-xl border border-purple-500/20">
          <div className="text-[10px] font-mono uppercase text-gray-400 flex items-center justify-between">
            <span>AI Insights</span>
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <div className="text-xl font-bold font-mono text-white mt-1">{seedInsights.length}</div>
          <div className="text-[10px] text-gray-500 font-mono">Why-Chains</div>
        </div>
      </div>

      {/* Main Grid: Dominant Primary Case Investigation (2 Cols) + Intelligence Leads & Stream (1 Col) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* DOMINANT CENTER: Primary Active Investigation Docket (2 Columns) */}
        <div className="lg:col-span-2 bg-[#1A0F2E] rounded-2xl border border-purple-500/30 p-6 flex flex-col justify-between relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900/25 via-[#1A0F2E] to-[#1A0F2E] pointer-events-none"></div>

          <div className="z-10 space-y-5">
            {/* Docket Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-500/20 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-[10px] font-mono uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded font-bold">
                    PRIMARY DEMONSTRATION CASE
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded font-bold">
                    ACTIVE INVESTIGATION
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded font-bold">
                    PRIORITY 82/100
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-space font-bold text-white">
                  Case #2026-041 — Operation Trishul
                </h3>
                <p className="text-xs text-gray-400 mt-1 max-w-2xl">
                  Multi-entity criminal network inquiry correlating counterfeit documents, transit vehicle sightings, and narcotics syndicates across Bhopal and Indore.
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs font-mono text-gray-400">Lead Investigator:</span>
                <div className="text-xs font-bold text-white font-mono">{primaryCase.leadOfficerName}</div>
              </div>
            </div>

            {/* Two-Column Subject Profile & Network Center */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
              {/* Hub Graphic */}
              <div className="p-4 bg-black/40 rounded-xl border border-purple-500/20 flex flex-col items-center justify-center text-center relative">
                <div className="text-[10px] font-mono uppercase text-purple-400 tracking-wider font-bold mb-2">
                  CORRELATED NETWORK HUB
                </div>
                <div className="relative w-36 h-36 flex items-center justify-center border-2 border-purple-500/40 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.15)] bg-purple-950/20">
                  <div className="absolute inset-2 border border-pink-400/20 rounded-full"></div>
                  <div className="text-center z-10">
                    <div className="text-2xl font-bold text-white font-mono">P-1042</div>
                    <div className="text-[11px] text-purple-300 font-bold uppercase mt-0.5">Rahul Mehra</div>
                    <div className="text-xs text-amber-300 font-mono font-bold mt-1 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 inline-block">
                      {rahulDegree} Direct Links
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-[10px] font-mono text-amber-300/90 flex items-center gap-1">
                  <span>Investigation Lead • Priority ≠ Guilt</span>
                </div>
              </div>

              {/* Subject Details & Linked Assets */}
              <div className="space-y-3">
                <div className="p-3 bg-black/40 rounded-xl border border-purple-500/20 space-y-1.5 text-xs">
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 uppercase border-b border-gray-800 pb-1">
                    <span>Key Correlated Identifiers</span>
                    <span className="text-purple-400 font-bold">VERIFIED LINKS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-mono">Alias / Street Name:</span>
                    <span className="text-white font-medium">Rocky</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-mono">Conduit Vehicle:</span>
                    <span className="text-amber-300 font-mono font-bold">MP09-DEMO-4821</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-mono">Mobile Identifier:</span>
                    <span className="text-cyan-300 font-mono">ID-DEMO-88421</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-mono">Evidentiary Document:</span>
                    <span className="text-emerald-300 font-mono">DOC-2026-041-009</span>
                  </div>
                </div>

                {/* Quick Stats Banner */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs py-2.5 bg-black/50 rounded-xl border border-purple-500/20">
                  <div>
                    <div className="text-lg font-bold text-purple-400 font-mono">{primaryCase.entityCount}</div>
                    <div className="text-gray-500 text-[10px] uppercase font-mono">Entities</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-pink-400 font-mono">{primaryCase.crossCaseLinks}</div>
                    <div className="text-gray-500 text-[10px] uppercase font-mono">Cross-Case</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-emerald-400 font-mono">94%</div>
                    <div className="text-gray-500 text-[10px] uppercase font-mono">Match Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Action Controls */}
          <div className="z-10 pt-5 border-t border-purple-500/20 mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <Link
              href="/cases/C-001/workspace"
              className="py-2.5 px-3 text-center bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold rounded-xl transition flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/25 font-mono"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" /> OPEN WORKSPACE
            </Link>
            <Link
              href="/network"
              className="py-2.5 px-3 text-center bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-medium rounded-xl border border-gray-700 transition flex items-center justify-center gap-1.5 font-mono"
            >
              <Network className="w-3.5 h-3.5 text-purple-400" /> INSPECT GRAPH
            </Link>
            <Link
              href="/documents/D-001"
              className="py-2.5 px-3 text-center bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-medium rounded-xl border border-gray-700 transition flex items-center justify-center gap-1.5 font-mono"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" /> DOC FORENSICS
            </Link>
            <Link
              href="/evidence?caseId=C-001"
              className="py-2.5 px-3 text-center bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-medium rounded-xl border border-gray-700 transition flex items-center justify-center gap-1.5 font-mono"
            >
              <FileKey className="w-3.5 h-3.5 text-emerald-400" /> VIEW EVIDENCE
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: Priority Leads & Live Activity Stream (1 Column) */}
        <div className="lg:col-span-1 space-y-6">
          {/* Priority Alerts */}
          <div className="bg-[#1A0F2E] rounded-2xl border border-purple-500/25 p-5 shadow-lg space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-space font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Investigation Priority Leads
              </h3>
              <Link href="/alerts" className="text-xs text-purple-400 hover:underline font-mono">
                All ({seedAlerts.length}) &rarr;
              </Link>
            </div>
            <div className="text-[10px] text-amber-300/90 bg-amber-500/10 border border-amber-500/20 p-2 rounded-lg font-mono">
              <strong>SAFETY PRINCIPLE:</strong> Urgency indicator for authorized review, NOT proof of guilt.
            </div>

            <div className="space-y-2">
              {topAlerts.slice(0, 3).map(alert => (
                <Link
                  key={alert.id}
                  href={alert.caseId ? `/cases/${alert.caseId}` : '/alerts'}
                  className="block bg-black/30 p-2.5 rounded-lg border border-red-500/20 hover:border-purple-500/40 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-0.5">
                    <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                      {alert.severity}
                    </span>
                    <span className="text-[9px] text-gray-500 font-mono">{alert.category}</span>
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                    {alert.title}
                  </h4>
                  <p className="text-[10px] text-gray-400 line-clamp-1 mt-0.5">{alert.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="h-[280px]">
            <ActivityFeed />
          </div>
        </div>
      </div>

      {/* Bottom Row: Core Functional Prototype Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Map */}
        <Link href="/map" className="bg-[#1A0F2E] p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition group block shadow-md">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-white font-medium text-sm flex items-center gap-2">
              <Map className="w-4 h-4 text-purple-400"/> Surveillance Map
            </h4>
            <span className="text-[10px] font-mono text-gray-500">12 LOCATIONS</span>
          </div>
          <p className="text-xs text-gray-400 mb-2">Interactive geospatial vector trail across transit checkpoints.</p>
          <div className="text-xs text-purple-400 group-hover:underline flex items-center gap-1 font-medium font-mono">
            Open Map View <ArrowRight className="w-3 h-3" />
          </div>
        </Link>
        
        {/* Evidence */}
        <Link href="/evidence" className="bg-[#1A0F2E] p-4 rounded-xl border border-purple-500/20 hover:border-emerald-500/50 transition group block shadow-md">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-white font-medium text-sm flex items-center gap-2">
              <FileKey className="w-4 h-4 text-emerald-400"/> Evidence Vault
            </h4>
            <span className="text-[10px] font-mono text-emerald-400 font-bold">SHA-256 OK</span>
          </div>
          <p className="text-xs text-gray-400 mb-2">{seedEvidence.length} verified evidence items stored with cryptographic hashes.</p>
          <div className="text-xs text-emerald-400 group-hover:underline flex items-center gap-1 font-medium font-mono">
            Verify Integrity <ArrowRight className="w-3 h-3" />
          </div>
        </Link>

        {/* AI Insights */}
        <Link href="/insights" className="bg-[#1A0F2E] p-4 rounded-xl border border-purple-500/20 hover:border-pink-500/50 transition group block shadow-md">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-white font-medium text-sm flex items-center gap-2">
              <Cpu className="w-4 h-4 text-pink-400"/> Explainable AI
            </h4>
            <span className="text-[10px] font-mono text-pink-400">{seedInsights.length} INSIGHTS</span>
          </div>
          <p className="text-xs text-gray-400 mb-2 truncate" title={primaryInsight?.summary}>
            {primaryInsight?.summary || 'Multi-case entity association detected.'}
          </p>
          <div className="text-xs text-pink-400 group-hover:underline flex items-center gap-1 font-medium font-mono">
            Why-Chain Reasoning <ArrowRight className="w-3 h-3" />
          </div>
        </Link>

        {/* Security & Audit */}
        <Link href="/security" className="bg-[#1A0F2E] p-4 rounded-xl border border-purple-500/20 hover:border-blue-500/50 transition group block shadow-md">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-white font-medium text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400"/> Security & Trust
            </h4>
            <span className="text-[10px] font-mono text-green-400 font-bold">CONTROLS: ACTIVE</span>
          </div>
          <p className="text-xs text-gray-400 mb-2">HMAC session integrity, strict RBAC, and append-only runtime audit ledger.</p>
          <div className="text-xs text-blue-400 group-hover:underline flex items-center gap-1 font-medium font-mono">
            Security Controls <ArrowRight className="w-3 h-3" />
          </div>
        </Link>
      </div>
    </div>
  );
}
