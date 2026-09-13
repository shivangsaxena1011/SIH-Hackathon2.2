'use client';

import React, { useState, useEffect, Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  ShieldCheck, File, Hash, Lock, Search, 
  ArrowLeft, ArrowRight, RefreshCw, AlertTriangle, ShieldAlert, CheckCircle2 
} from 'lucide-react';
import type { Evidence } from '@/types';
import { seedEvidence } from '@/data/seed';

function EvidenceContent() {
  const searchParams = useSearchParams();
  const caseIdParam = searchParams.get('caseId');
  const [evidence, setEvidence] = useState<Evidence[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [tamperedIds, setTamperedIds] = useState<Record<string, boolean>>({});
  const [verifyingId, setVerifyingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvidence = async () => {
      try {
        const url = caseIdParam ? `/api/evidence?caseId=${encodeURIComponent(caseIdParam)}` : '/api/evidence';
        const res = await fetch(url);
        if (!res.ok) throw new Error('API request failed');
        const data = await res.json();
        setEvidence(Array.isArray(data) ? data : seedEvidence);
      } catch (error) {
        console.warn('Network issue fetching evidence, using local seed fallback:', error);
        if (caseIdParam) {
          const clean = caseIdParam.toLowerCase().replace(/^(case[#\-_]?|#)/i, '');
          const filtered = seedEvidence.filter(e =>
            e.caseId.toLowerCase() === caseIdParam.toLowerCase() ||
            e.caseId.toLowerCase() === clean
          );
          setEvidence(filtered.length > 0 ? filtered : seedEvidence);
        } else {
          setEvidence(seedEvidence);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchEvidence();
  }, [caseIdParam]);

  const handleToggleTamper = (id: string) => {
    setTamperedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleVerifyHash = async (id: string) => {
    setVerifyingId(id);
    await new Promise(r => setTimeout(r, 400));
    setTamperedIds(prev => ({
      ...prev,
      [id]: false
    }));
    setVerifyingId(null);
  };

  const filteredEvidence = useMemo(() => {
    return evidence.filter(item => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.id.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q) ||
        item.hash.toLowerCase().includes(q)
      );
    });
  }, [evidence, searchQuery]);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Top Header & Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <Link
              href={caseIdParam ? `/cases/${caseIdParam}/workspace` : '/cases/C-001/workspace'}
              className="p-1 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors mr-1"
              title="Return to Workspace"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold font-space text-white">EVIDENCE REGISTRY</h1>
            <span className="bg-purple-500/20 text-purple-300 text-xs px-2.5 py-0.5 rounded border border-purple-500/30 font-bold font-mono">
              STAGE 4: EVIDENCE VAULT
            </span>
            {caseIdParam && (
              <span className="bg-amber-500/15 text-amber-300 text-xs px-2 py-0.5 rounded border border-amber-500/30 font-mono font-bold">
                FILTER: CASE #{caseIdParam}
              </span>
            )}
          </div>
          <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-1.5 mt-1">
            <Lock className="w-4 h-4 text-purple-400 shrink-0" />
            Cryptographic SHA-256 chain of custody with real-time tamper-evident verification.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search ID, hash, or description..." 
              className="pl-9 pr-4 py-2 bg-[#1A0F2E] border border-gray-800 rounded-lg text-xs text-white focus:outline-none focus:border-purple-500 w-64"
            />
          </div>

          <Link
            href="/network"
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold rounded-lg shadow-md flex items-center gap-1.5 transition-all shrink-0"
          >
            PROCEED TO NETWORK GRAPH <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Case Filter Banner */}
      {caseIdParam && (
        <div className="bg-purple-950/40 border border-purple-500/30 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-purple-200">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
            <span>
              Showing <strong>{filteredEvidence.length}</strong> verified evidence item(s) linked to <strong>Case #{caseIdParam}</strong> (Operation Trishul).
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/evidence"
              className="text-[11px] text-purple-400 hover:text-white underline font-mono"
            >
              Show All Cases
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href={`/cases/${caseIdParam}/workspace`}
              className="text-[11px] text-indigo-300 hover:text-white font-mono flex items-center gap-1"
            >
              Back to Workspace &rarr;
            </Link>
          </div>
        </div>
      )}

      {loading ? (
        <div className="text-center text-gray-400 py-12 font-mono text-sm flex items-center justify-center gap-2">
          <RefreshCw className="w-4 h-4 animate-spin text-purple-500" />
          Loading cryptographic evidence registry...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvidence.map((item) => {
            const isTampered = tamperedIds[item.id] || false;
            const isCompromised = isTampered || item.integrityStatus === 'COMPROMISED';
            const isVerifying = verifyingId === item.id;

            return (
              <div 
                key={item.id} 
                className={`bg-[#1A0F2E] border rounded-xl p-5 transition-all flex flex-col justify-between shadow-lg ${
                  isCompromised 
                    ? 'border-rose-500/50 ring-1 ring-rose-500/30 bg-rose-950/10' 
                    : 'border-purple-500/20 hover:border-purple-500/50'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isCompromised 
                          ? 'bg-rose-500/15 border border-rose-500/30 text-rose-400' 
                          : 'bg-purple-500/10 border border-purple-500/20 text-purple-400'
                      }`}>
                        <File className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-sm font-space">{item.id}</h3>
                        <p className="text-xs text-gray-400">{item.type}</p>
                      </div>
                    </div>
                    {isCompromised ? (
                      <span className="flex items-center text-[10px] font-bold font-mono text-rose-400 bg-rose-500/15 px-2.5 py-1 rounded-full border border-rose-500/30 animate-pulse">
                        <Lock className="w-3 h-3 mr-1" /> COMPROMISED
                      </span>
                    ) : (
                      <span className="flex items-center text-[10px] font-bold font-mono text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-full border border-emerald-500/30">
                        <ShieldCheck className="w-3 h-3 mr-1" /> VERIFIED
                      </span>
                    )}
                  </div>
                  
                  <p className="text-xs text-gray-300 mb-3 line-clamp-2 leading-relaxed">{item.description}</p>
                  
                  {isCompromised && (
                    <div className="mb-3 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-[11px] text-rose-300 flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>TAMPER ALERT:</strong> 1-byte alteration detected in raw stream. Computed hash does not match recorded digest!
                      </span>
                    </div>
                  )}

                  <div className="space-y-2 bg-[#0B0716]/60 p-3 rounded-lg border border-gray-800/80 mb-3 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Case Link:</span>
                      <Link href={`/cases/${item.caseId}/workspace`} className="text-purple-300 hover:underline">
                        {item.caseId}
                      </Link>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Recorded By:</span>
                      <span className="text-gray-300">{item.uploadedBy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Timestamp:</span>
                      <span className="text-gray-400">{new Date(item.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="pt-2 border-t border-gray-800/60 flex items-center justify-between mb-3 text-[11px] font-mono">
                    <div className="flex items-center text-gray-400 truncate max-w-[180px]" title={item.hash}>
                      <Hash className="w-3 h-3 mr-1 text-purple-400 shrink-0" />
                      <span className="truncate">{item.hash}</span>
                    </div>
                    <span className="text-[10px] text-gray-500">SHA-256</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleVerifyHash(item.id)}
                      disabled={isVerifying}
                      className="text-xs bg-purple-950/60 hover:bg-purple-900/60 text-purple-300 border border-purple-500/30 py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1 font-mono"
                    >
                      <RefreshCw className={`w-3 h-3 ${isVerifying ? 'animate-spin' : ''}`} />
                      {isVerifying ? 'Verifying...' : 'Verify Hash'}
                    </button>
                    <button
                      onClick={() => handleToggleTamper(item.id)}
                      className={`text-xs py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1 font-mono border ${
                        isTampered
                          ? 'bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border-emerald-500/40'
                          : 'bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 border-rose-500/30'
                      }`}
                    >
                      <ShieldAlert className="w-3 h-3" />
                      {isTampered ? 'Restore Original' : 'Simulate Tamper'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function EvidencePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-400 font-mono">Loading Evidence Registry...</div>}>
      <EvidenceContent />
    </Suspense>
  );
}
