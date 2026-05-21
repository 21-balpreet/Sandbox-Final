import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Sparkles, Search, KanbanIcon, BarChart3, FileText, GraduationCap, ArrowUpRight, ShieldCheck, Layers, Cpu } from "lucide-react";

export default function Home() {
  const stats = [
    { value: "45,000+", label: "Jobs Aggregated", detail: "Scraped daily" },
    { value: "12,400+", label: "Active Profiles", detail: "Indian students" },
    { value: "85%", label: "Average ATS Score", detail: "With our builder" },
    { value: "₹0", label: "Absolutely Free", detail: "No credit card" }
  ];

  const features = [
    {
      icon: Search,
      title: "All-in-One Job Finder",
      desc: "Search off-campus SDE postings and internships from all top Indian job boards in one simple dashboard.",
      tag: "JOBS",
      color: "border-indigo-500/10 hover:border-indigo-500/30"
    },
    {
      icon: KanbanIcon,
      title: "Clean Kanban Tracker",
      desc: "Organize your job search and placement stages visually without switching apps or spreadsheets.",
      tag: "TRACKER",
      color: "border-zinc-800 hover:border-emerald-500/20"
    },
    {
      icon: BarChart3,
      title: "Resume Skill Gap Scan",
      desc: "Instantly check which programming libraries or database skills are missing from your resume.",
      tag: "SKILL GAP",
      color: "border-zinc-800 hover:border-purple-500/20"
    },
    {
      icon: FileText,
      title: "Perfect Resume Creator",
      desc: "Create and download flawless 1-page resumes that pass corporate ATS systems and place you first.",
      tag: "RESUME BUILDER",
      color: "border-zinc-800 hover:border-amber-500/20"
    }
  ];

  return (
    <div className="bg-zinc-950 text-zinc-100 flex-grow py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
      
      {/* Mini tag header */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center space-x-2 bg-zinc-900/80 border border-zinc-800 px-4 py-1.5 rounded-full text-zinc-400 text-xs font-semibold tracking-wide"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
          <span>INDIAN COLLEGE PLACEMENTS &amp; SDE CAREER ACCELERATOR</span>
        </motion.div>
      </div>

      {/* Main Bento Matrix Layout */}
      <div className="grid grid-cols-12 gap-4">
        
        {/* Large Prominent Bento Block: Hero & Slogan */}
        <div className="col-span-12 lg:col-span-8 bg-zinc-900/30 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group min-h-[380px]">
          <div className="absolute top-0 right-0 p-8 opacity-5 font-mono text-9xl font-black select-none pointer-events-none">
            JOB
          </div>
          
          <div className="space-y-4 max-w-2xl relative z-10">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-400 font-mono">
              SandBox Aggregator
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Find and track software engineering jobs <span className="italic font-serif text-indigo-300">in one clean place</span>.
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-xl">
              Tired of jumping between dozens of browser tabs? Search Indian tech openings, track applications on a visual Kanban board, audit your resume for missing skills, and build a placement-ready CV instantly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8 relative z-10">
            <Link
              to="/jobs"
              className="px-6 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-bold rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 shadow-md cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Explore SDE Roles</span>
            </Link>
            <Link
              to="/tracker"
              className="px-6 py-3 bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <KanbanIcon className="w-4 h-4 text-indigo-400" />
              <span>Track Placements</span>
            </Link>
          </div>
        </div>

        {/* Right side: 2 smaller bento blocks on lg screens */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {/* Elegant Accent Bento Block: Always Zero Credits */}
          <div className="bg-indigo-650 rounded-3xl p-6 flex flex-col justify-between text-white relative overflow-hidden min-h-[180px]">
            <div className="absolute top-0 right-0 p-4 opacity-15">
              <ShieldCheck className="w-24 h-24 stroke-1" />
            </div>
            <div className="space-y-1 relative z-10">
              <p className="text-indigo-200 text-[10px] font-bold uppercase tracking-widest font-mono">Platform Integrity</p>
              <p className="text-3xl font-bold font-serif italic">₹0.00 / Free</p>
            </div>
            <div className="flex items-center gap-2 mt-4 relative z-10">
              <div className="bg-indigo-750/50 px-3 py-1.5 rounded-lg border border-indigo-400/20 text-xs text-indigo-100 font-mono">
                ★ Unlimited Parsing
              </div>
              <span className="text-[10px] text-indigo-250">No API Keys Required</span>
            </div>
          </div>

          {/* Dynamic Mono Telemetry Bento Box: Realtime Status */}
          <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-3xl p-6 flex flex-col justify-between min-h-[180px]">
            <div className="flex items-center justify-between">
              <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest font-mono">Platform Uptime</span>
              <span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-mono px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">Operational</span>
            </div>
            <div className="my-2">
              <div className="text-4xl font-mono tracking-tighter text-white">99.98%</div>
              <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest mt-1">Global Pipeline Health</p>
            </div>
            <div className="text-[10px] font-mono text-zinc-400 bg-zinc-950/40 p-2 rounded-lg border border-zinc-800/50 flex items-center gap-1.5 mt-2">
              <Cpu className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
              <span>Scanning Naukri &amp; LinkedIn feeds...</span>
            </div>
          </div>
        </div>

      </div>

      {/* Structured Stats Grid (Asymmetrical Design) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="bg-zinc-900/20 border border-zinc-800/60 p-5 rounded-2xl text-center space-y-1 relative"
          >
            <div className="text-xl sm:text-2xl font-black text-white font-mono">
              {stat.value}
            </div>
            <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
              {stat.label}
            </div>
            <div className="text-[9px] text-zinc-650 font-mono">
              {stat.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Core Suite Section structured into Bento Blocks */}
      <div className="space-y-4 pt-10">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Designed Specifically for Engineering Careers
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm max-w-xl mx-auto">
            A secure terminal designed for India's competitive SDE job marketplace — from off-campus drives to CGPA threshold analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className={`bg-zinc-900/30 border p-6 rounded-3xl flex flex-col justify-between space-y-6 transition-all duration-300 ${feat.color}`}
              >
                <div className="space-y-40-optional flex-grow">
                  <div className="flex items-center justify-between">
                    <div className="bg-zinc-800/50 border border-zinc-800 p-2.5 rounded-xl">
                      <Icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">{feat.tag}</span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-bold text-white tracking-tight">{feat.title}</h3>
                    <p className="mt-1.5 text-xs text-zinc-400 leading-normal">{feat.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Placement Callout Banner */}
      <div className="bg-zinc-900/10 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden mt-6">
        <div className="flex items-center space-x-4">
          <div className="bg-indigo-950/50 p-3 rounded-2xl border border-indigo-505/10 hidden sm:inline-block">
            <GraduationCap className="w-8 h-8 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-md font-bold text-white flex items-center gap-1.5">
              <span>Placement Rounds &amp; Alumni Referrals</span>
              <span className="bg-indigo-900/50 text-indigo-300 text-[8px] font-mono px-2 py-0.5 rounded uppercase">Simple Tracker</span>
            </h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-xl leading-normal">
              Keep track of college-specific hiring rounds, record alumni referrals, and track off-campus application dates. Stay organized so you never miss another test or interview deadline.
            </p>
          </div>
        </div>
        <Link
          to="/register"
          className="bg-zinc-100 hover:bg-zinc-200 text-zinc-950 text-xs font-bold px-5 py-3 rounded-xl transition-colors whitespace-nowrap inline-flex items-center space-x-1 cursor-pointer"
        >
          <span>Get SDE Sandbox Free</span>
          <span>✦</span>
        </Link>
      </div>

    </div>
  );
}
