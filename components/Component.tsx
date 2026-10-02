"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import LoginModal from "./LoginModal";

export default function Component() {
  const [showLogin, setShowLogin] = React.useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans" style={{backgroundImage: 'linear-gradient(#27251f 1px, transparent 1px), linear-gradient(90deg, #27251f 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
      <Navbar onLoginClick={() => setShowLogin(true)} />
      <Hero onLoginClick={() => setShowLogin(true)} />
      <Features />
      
      <div className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-800 text-center text-sm text-zinc-500">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
        <div>© Muse</div>
      </div>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}

Component;
