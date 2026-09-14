'use client';

import React, { useState } from 'react';
import { 
  Video, 
  Radio, 
  MapPin, 
  Compass, 
  Layers, 
  Copy, 
  Check, 
  Car, 
  Building2, 
  Eye, 
  ArrowUpRight,
  ShieldCheck,
  Activity
} from 'lucide-react';

interface CameraFeed {
  id: string;
  title: string;
  category: 'GEOSPATIAL' | 'URBAN' | 'TRAFFIC' | 'DIRECTORY';
  source: string;
  location: string;
  coordinates?: string;
  description: string;
  url: string;
  isPrimary?: boolean;
  status: 'LIVE' | 'ACTIVE_3D' | 'STREAMING';
  tags: string[];
}

const CAMERA_FEEDS: CameraFeed[] = [
  {
    id: 'CAM-01',
    title: 'EarthCam Live Urban Camera Stream',
    category: 'URBAN',
    source: 'MyEarthCam Global Network',
    location: 'Public Metropolitan Surveillance Corridor',
    coordinates: 'Live HD Stream',
    description: 'Real-time urban surveillance webcam streaming public street-level activity, pedestrian density, and vehicle movement.',
    url: 'https://www.myearthcam.com/manuels?_gl=1*rgznhq*_up*MQ..*_ga*Nzk4MTQyOTM1LjE3ODkzMTQzMDk.*_ga_090EYW9131*czE3ODkzMTQzMDgkbzEkZzEkdDE3ODkzMTQzMzUkajMzJGwwJGgw',
    isPrimary: true,
    status: 'LIVE',
    tags: ['Live Feed', 'Urban Stream', 'MyEarthCam', 'Public CCTV']
  },
  {
    id: 'CAM-02',
    title: 'Google Earth 3D — Bhopal / Madhya Pradesh Tactical Sector',
    category: 'GEOSPATIAL',
    source: 'Google Earth 3D Geospatial Engine',
    location: 'Bhopal, Madhya Pradesh (Operation Trishul Primary Sector)',
    coordinates: '23.2494° N, 77.5009° E (Alt: 496m)',
    description: 'Direct 3D satellite surveillance over Bhopal, MP — the operational command perimeter and key vehicle transit corridor (MP09) for Operation Trishul (Case #2026-041).',
    url: 'https://earth.google.com/web/@23.24944904,77.50089898,496.44100952a,0d,60y,246.38215089h,75.56613683t,0r/data=CgRCAggBIhoKFmRVRVVCUGZvbXdYd2Fxd0pFN0xOS1EQAjoDCgEwQgIIAEoNCP___________wEQAA',
    isPrimary: true,
    status: 'ACTIVE_3D',
    tags: ['Google Earth 3D', 'Bhopal Sector', 'Case #2026-041', 'Geospatial Intelligence']
  },
  {
    id: 'CAM-03',
    title: 'TrafficVision Live India — National Highways & Expressways',
    category: 'TRAFFIC',
    source: 'TrafficVision.Live Indian Camera Network',
    location: 'Pan-India National Highways & Urban Expressways',
    coordinates: '12,000+ Highway CCTVs',
    description: 'Comprehensive live traffic camera aggregation across Indian national highways, toll plazas, junction points, and arterial city expressways.',
    url: 'https://www.trafficvision.live',
    status: 'STREAMING',
    tags: ['Highway Surveillance', 'Expressway CCTVs', 'ANPR Corridor', 'Pan-India']
  },
  {
    id: 'CAM-04',
    title: 'Windy Real-Time India City & Weather Webcams',
    category: 'URBAN',
    source: 'Windy Meteorological & Webcam Grid',
    location: 'Major Indian Metros (Delhi, Mumbai, Bengaluru, Bhopal)',
    coordinates: 'Metropolitan Grid View',
    description: 'Interactive map-based live webcam directory tracking meteorological conditions, skyline visibility, and metropolitan transit points across India.',
    url: 'https://www.windy.com/-Webcams/India/webcams/IN',
    status: 'LIVE',
    tags: ['Live Webcams', 'City Skylines', 'Weather Radar', 'Pan-India Grid']
  },
  {
    id: 'CAM-05',
    title: 'WorldCam India Public Webcams Directory',
    category: 'DIRECTORY',
    source: 'WorldCam Public Surveillance Directory',
    location: 'Indian Cities, Transit Stations & Public Hubs',
    coordinates: 'Verified Public Cams',
    description: 'Directory of public observation webcams and civic video feeds across Indian commercial centers, tourist landmarks, and transit interchanges.',
    url: 'https://worldcam.eu/webcams/asia/india',
    status: 'STREAMING',
    tags: ['Public Webcams', 'Transit Hubs', 'City Views', 'Live Streams']
  },
  {
    id: 'CAM-06',
    title: 'Mappls Real-Time Traffic & Junction Surveillance',
    category: 'TRAFFIC',
    source: 'MapmyIndia Mappls Intelligence',
    location: 'Pan-India Urban Traffic Corridors',
    coordinates: 'Live Traffic Intelligence',
    description: 'High-resolution real-time traffic condition analytics, congestion monitoring, and junction surveillance map across Indian urban networks.',
    url: 'https://mappls.com',
    status: 'LIVE',
    tags: ['Traffic Intelligence', 'Junction Monitoring', 'Mappls India', 'Urban Mobility']
  }
];

export default function LiveCamerasPage() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredFeeds = activeCategory === 'ALL'
    ? CAMERA_FEEDS
    : CAMERA_FEEDS.filter(f => f.category === activeCategory);

  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0B0716] text-gray-200 p-4 sm:p-6 md:p-8 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Banner */}
        <div className="bg-[#1A0F2E] border border-purple-500/20 rounded-2xl p-6 relative overflow-hidden shadow-xl">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  SURVEILLANCE NETWORK ONLINE
                </span>
                <span className="text-xs font-mono text-purple-300 bg-purple-500/20 border border-purple-500/30 px-2.5 py-1 rounded-full">
                  SIH 2026 • PS189 TACTICAL FEEDS
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-space-grotesk font-bold text-white flex items-center gap-3">
                <Video className="w-8 h-8 text-purple-400" />
                LIVE VIEW / CAMERA FEEDS
              </h1>
              <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-3xl">
                Real-time public urban cameras, 3D geospatial Earth surveillance, and Indian traffic observation networks integrated into the TRISHUL operational intelligence framework.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="px-4 py-2.5 bg-black/40 border border-purple-500/30 rounded-xl text-center">
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Active Streams</div>
                <div className="text-xl font-bold font-mono text-purple-300">{CAMERA_FEEDS.length} Feeds</div>
              </div>
              <div className="px-4 py-2.5 bg-black/40 border border-emerald-500/30 rounded-xl text-center">
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Status</div>
                <div className="text-xl font-bold font-mono text-emerald-400 flex items-center gap-1 justify-center">
                  <Activity className="w-4 h-4" /> 100%
                </div>
              </div>
            </div>
          </div>

          {/* Operational Context Alert */}
          <div className="mt-5 p-3.5 bg-purple-950/40 border border-purple-500/30 rounded-xl flex items-start gap-3 text-xs text-purple-200">
            <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white">TACTICAL CORRELATION NOTICE: </span>
              External camera feeds and 3D geospatial views open securely in a separate browser tab to provide real-time situational awareness. The Google Earth feed is pre-calibrated to the <strong>Bhopal / MP-09 Operational Sector</strong> matching Case #2026-041 (Operation Trishul).
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-purple-900">
          {[
            { key: 'ALL', label: 'All Feeds', count: CAMERA_FEEDS.length },
            { key: 'GEOSPATIAL', label: '3D Geospatial & Satellite', count: CAMERA_FEEDS.filter(f => f.category === 'GEOSPATIAL').length },
            { key: 'URBAN', label: 'Urban & City Streams', count: CAMERA_FEEDS.filter(f => f.category === 'URBAN').length },
            { key: 'TRAFFIC', label: 'Traffic & Highways', count: CAMERA_FEEDS.filter(f => f.category === 'TRAFFIC').length },
            { key: 'DIRECTORY', label: 'Surveillance Directory', count: CAMERA_FEEDS.filter(f => f.category === 'DIRECTORY').length },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 border ${
                activeCategory === tab.key
                  ? 'bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-600/30 font-bold'
                  : 'bg-[#1A0F2E]/60 text-gray-400 hover:text-gray-200 border-purple-500/20 hover:border-purple-500/40'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                activeCategory === tab.key ? 'bg-white/20 text-white' : 'bg-black/30 text-gray-400'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Feeds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeeds.map((feed) => (
            <div
              key={feed.id}
              className={`bg-[#1A0F2E]/80 backdrop-blur-md rounded-2xl border transition-all flex flex-col justify-between overflow-hidden group hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] ${
                feed.isPrimary 
                  ? 'border-purple-500/50 ring-1 ring-purple-500/30' 
                  : 'border-purple-500/20 hover:border-purple-500/40'
              }`}
            >
              {/* Card Header Visual / HUD Frame */}
              <div className="p-5 pb-3 border-b border-purple-500/15 relative bg-gradient-to-b from-[#23153D]/70 to-transparent">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      {feed.status === 'ACTIVE_3D' ? '3D SATELLITE' : 'LIVE STREAM'}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      {feed.id}
                    </span>
                  </div>

                  {feed.isPrimary && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300">
                      PRIMARY SURVEILLANCE
                    </span>
                  )}
                </div>

                {/* Simulated Tactical HUD Canvas */}
                <div className="h-36 rounded-xl bg-black/60 border border-purple-500/30 relative flex flex-col justify-between p-3 overflow-hidden group-hover:border-purple-500/60 transition-colors">
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                  
                  {/* Reticle / Crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                    <div className="w-12 h-12 border border-dashed border-purple-400/50 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-400/60 rounded-full" />
                    </div>
                  </div>

                  {/* HUD Top Info */}
                  <div className="flex justify-between items-start text-[10px] font-mono text-purple-300/80 relative z-10">
                    <div className="flex items-center gap-1">
                      <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                      <span>{feed.source}</span>
                    </div>
                    <span className="text-gray-400">REC • 1080p</span>
                  </div>

                  {/* HUD Center Graphic */}
                  <div className="flex items-center justify-center relative z-10">
                    {feed.category === 'GEOSPATIAL' && <Compass className="w-10 h-10 text-purple-400/70 group-hover:scale-110 transition-transform" />}
                    {feed.category === 'URBAN' && <Building2 className="w-10 h-10 text-purple-400/70 group-hover:scale-110 transition-transform" />}
                    {feed.category === 'TRAFFIC' && <Car className="w-10 h-10 text-purple-400/70 group-hover:scale-110 transition-transform" />}
                    {feed.category === 'DIRECTORY' && <Layers className="w-10 h-10 text-purple-400/70 group-hover:scale-110 transition-transform" />}
                  </div>

                  {/* HUD Bottom Info */}
                  <div className="flex justify-between items-end text-[10px] font-mono text-gray-400 relative z-10">
                    <span className="truncate max-w-[170px] text-amber-300 font-semibold">{feed.coordinates || 'COORDINATES LOCKED'}</span>
                    <span className="text-emerald-400">FPS: 30.0</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-space-grotesk text-white group-hover:text-purple-300 transition-colors">
                    {feed.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">{feed.location}</span>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {feed.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {feed.tags.map(t => (
                      <span 
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-purple-300/80 border border-purple-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* URL Snippet */}
                  <div className="p-2 rounded-lg bg-black/50 border border-gray-800 text-[11px] font-mono text-gray-400 flex items-center justify-between gap-2 overflow-hidden">
                    <span className="truncate text-gray-400">{feed.url}</span>
                    <button
                      onClick={() => handleCopy(feed.id, feed.url)}
                      className="text-gray-400 hover:text-white shrink-0 transition-colors p-1"
                      title="Copy URL"
                    >
                      {copiedId === feed.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-4 pt-0 border-t border-purple-500/10 bg-[#130B24]/40 mt-auto">
                <a
                  href={feed.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wider transition-all bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 group/btn"
                >
                  <Eye className="w-4 h-4" />
                  <span>OPEN LIVE FEED IN NEW TAB</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Technical Note */}
        <div className="bg-[#1A0F2E]/60 border border-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>Surveillance feed links open in external high-security browser windows to comply with cross-origin sandboxing.</span>
          </div>
          <div className="font-mono text-[11px] text-purple-400/80">
            TRISHUL PS189 • LIVE VIDEO PROTOCOL
          </div>
        </div>

      </div>
    </div>
  );
}
