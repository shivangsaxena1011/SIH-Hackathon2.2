'use client';

import React, { useState, useEffect } from 'react';
import { formatDateTime } from '@/lib/utils';
import { ShieldCheck, Activity } from 'lucide-react';

export default function StatusBar() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // Initial set
    setTime(formatDateTime(new Date().toISOString()));
    
    // Update every second
    const interval = setInterval(() => {
      setTime(formatDateTime(new Date().toISOString()));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 bg-[#0B0716] border-t border-purple-500/20 flex items-center justify-between px-4 text-[11px] font-mono shrink-0 select-none">
      <div className="flex items-center space-x-4 overflow-hidden">
        <div className="flex items-center space-x-1.5 text-purple-300 font-bold tracking-wider truncate">
          <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
          <span>SIH 2026 Functional Prototype • Synthetic Demonstration Data • Authorized Investigation Workflow</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4 shrink-0 text-gray-400">
        <div className="hidden md:flex items-center space-x-1.5 text-emerald-400">
          <ShieldCheck size={12} />
          <span>PROTOTYPE SECURITY: ACTIVE</span>
        </div>
        <div className="hidden lg:flex items-center space-x-1.5 text-purple-400">
          <Activity size={12} />
          <span>RUNTIME AUDIT: ACTIVE</span>
        </div>
        <span className="text-gray-500">TEAM TRISHUL</span>
        <span className="text-gray-400">{time}</span>
      </div>
    </div>
  );
}
