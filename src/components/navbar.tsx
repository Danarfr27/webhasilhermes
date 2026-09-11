"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-6"
      }`}
      onScroll={() => setScrolled(window.scrollY > 50)}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
            H
          </div>
          <span className="text-xl font-semibold tracking-tight">
            Hermes<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Protocol</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">Features</a>
          <a href="#stats" className="text-sm text-zinc-400 hover:text-white transition-colors">Docs</a>
          <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</a>
          <button className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
            Get Started
          </button>
        </div>
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
