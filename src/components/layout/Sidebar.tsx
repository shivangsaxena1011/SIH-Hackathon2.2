'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { hasPermission } from '@/lib/auth/rbac';
import type { UserRole } from '@/types';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Car,
  Fingerprint,
  FileText,
  Share2,
  Clock,
  MapPin,
  Bell,
  Brain,
  ShieldCheck,
  ScrollText,
  Settings,
  ChevronLeft,
  ChevronRight,
  GitMerge,
  Bot,
  Shield,
  Play,
  SlidersHorizontal
} from 'lucide-react';

interface SidebarProps {
  userRole: UserRole;
}

interface NavItem {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  resource: string;
  highlight?: boolean;
}

const PRIMARY_INVESTIGATION_NAV: NavItem[] = [
  { label: 'Command Center', icon: LayoutDashboard, href: '/dashboard', resource: 'dashboard' },
  { label: 'Investigation Cases', icon: Briefcase, href: '/cases', resource: 'cases' },
  { label: 'Document Forensics', icon: FileText, href: '/documents', resource: 'documents' },
  { label: 'Evidence Vault', icon: ShieldCheck, href: '/evidence', resource: 'evidence' },
  { label: 'Knowledge Graph', icon: Share2, href: '/network', resource: 'network' },
  { label: 'Timeline & Replay', icon: Clock, href: '/timeline', resource: 'timeline' },
  { label: 'Intelligence Map', icon: MapPin, href: '/map', resource: 'map' },
  { label: 'AI Insights Engine', icon: Brain, href: '/insights', resource: 'insights' },
];

const ADVANCED_SUPPORTING_NAV: NavItem[] = [
  { label: 'Start SIH Demo', icon: Play, href: '/demo', resource: 'dashboard', highlight: true },
  { label: 'Cross-Case Analysis', icon: GitMerge, href: '/cross-case', resource: 'insights' },
  { label: 'Path Finder & Query', icon: SlidersHorizontal, href: '/query', resource: 'cases' },
  { label: 'Persons Registry', icon: Users, href: '/persons', resource: 'persons' },
  { label: 'ANPR Vehicles', icon: Car, href: '/vehicles', resource: 'vehicles' },
  { label: 'Identifiers', icon: Fingerprint, href: '/identifiers', resource: 'identifiers' },
  { label: 'Priority Alerts', icon: Bell, href: '/alerts', resource: 'alerts' },
  { label: 'NOVA Assistant', icon: Bot, href: '/assistant', resource: 'assistant' },
  { label: 'Runtime Audit Ledger', icon: ScrollText, href: '/audit', resource: 'audit' },
  { label: 'Prototype Security', icon: Shield, href: '/security', resource: 'security' },
  { label: 'Settings', icon: Settings, href: '/settings', resource: 'settings' },
];

export default function Sidebar({ userRole }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderNavGroup = (items: NavItem[], groupTitle?: string) => (
    <div className="space-y-1">
      {groupTitle && !isCollapsed && (
        <div className="px-3 pt-3 pb-1 text-[10px] font-mono uppercase tracking-wider text-purple-400/80 font-bold border-t border-purple-500/10 first:border-t-0">
          {groupTitle}
        </div>
      )}
      {items.map((item) => {
        const isAccessible = hasPermission(userRole, item.resource, 'read');
        const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));

        if (!isAccessible) {
          return (
            <li key={item.label} className="list-none">
              <div
                className={cn(
                  "flex items-center px-3 py-1.5 rounded-lg opacity-35 cursor-not-allowed",
                  isCollapsed && "justify-center"
                )}
                title={`${item.label} (Access Restricted for ${userRole})`}
              >
                <item.icon size={16} className="shrink-0 text-gray-500" />
                {!isCollapsed && (
                  <span className="ml-3 text-xs font-medium text-gray-500 truncate">
                    {item.label}
                  </span>
                )}
              </div>
            </li>
          );
        }

        return (
          <li key={item.label} className="list-none">
            <Link
              href={item.href}
              className={cn(
                "flex items-center px-3 py-1.5 rounded-lg transition-all group relative",
                isActive
                  ? "bg-purple-600/30 text-purple-200 font-semibold border border-purple-500/40 shadow-sm"
                  : item.highlight
                    ? "bg-gradient-to-r from-purple-600/25 to-pink-600/25 text-pink-300 border border-pink-500/40 hover:border-pink-500/70 font-bold"
                    : "text-gray-400 hover:bg-white/5 hover:text-gray-200",
                isCollapsed && "justify-center"
              )}
              title={isCollapsed ? item.label : undefined}
            >
              <item.icon
                size={16}
                className={cn(
                  "shrink-0 transition-colors",
                  isActive ? "text-purple-300" : item.highlight ? "text-pink-400" : "text-gray-400 group-hover:text-gray-200"
                )}
              />
              {!isCollapsed && (
                <span className="ml-3 text-xs font-medium truncate">
                  {item.label}
                </span>
              )}
              {item.highlight && !isCollapsed && (
                <span className="ml-auto text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30 font-bold">
                  TOUR
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </div>
  );

  return (
    <aside
      className={cn(
        "flex flex-col bg-[#1A0F2E] border-r border-purple-500/20 transition-all duration-300 relative z-20",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-purple-500/20">
        {!isCollapsed ? (
          <Link href="/dashboard" className="flex items-center space-x-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-purple-500/40 shrink-0 shadow-md shadow-purple-600/30 bg-black">
              <img src="/trishul-logo.jpg" alt="TRISHUL" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-space font-bold text-white tracking-wider block text-sm leading-tight">
                TRISHUL
              </span>
              <span className="text-[9px] text-purple-400 font-mono tracking-tight block">
                SIH 2026 • PS189 PROTOTYPE
              </span>
            </div>
          </Link>
        ) : (
          <Link href="/dashboard" className="flex justify-center w-full">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-purple-500/40 shrink-0 shadow-md shadow-purple-600/30 bg-black">
              <img src="/trishul-logo.jpg" alt="TRISHUL" className="w-full h-full object-cover" />
            </div>
          </Link>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-2 px-2 scrollbar-thin scrollbar-thumb-purple-900 scrollbar-track-transparent space-y-2">
        {renderNavGroup(PRIMARY_INVESTIGATION_NAV, 'Primary Investigation')}
        {renderNavGroup(ADVANCED_SUPPORTING_NAV, 'Advanced & Supporting')}
      </nav>

      <div className="p-3 border-t border-purple-500/20 flex justify-end">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg text-gray-400 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center w-full text-xs font-medium gap-2"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={16} /> : (
            <>
              <ChevronLeft size={16} />
              <span>Collapse Menu</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
