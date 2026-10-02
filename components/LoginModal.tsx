"use client";
import React, { useState } from "react";
export default function LoginModal({ isOpen, onClose }: Record<string, any>) {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState('idle');

  if (!isOpen) return null;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6" onClick={onClose} role="dialog" aria-modal="true">
      <div className="bg-zinc-900 w-full max-w-sm rounded-2xl p-8 border border-zinc-800" onClick={(e: any) => e.stopPropagation()}>
        <div className="flex justify-between mb-6">
          <div className="font-semibold tracking-tight text-xl text-white">Log in to Muse</div>
          <button onClick={onClose} aria-label="Close login modal" className="text-zinc-500 hover:text-white transition-colors">×</button>
        </div>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="text-emerald-500 text-3xl mb-3">✓</div>
            <p className="font-medium text-white">Check your email to continue.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1.5">Mobile number or email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              className="w-full border border-zinc-700 bg-zinc-950 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 mb-4 transition-all duration-200 text-white"
              required
              aria-label="Mobile number or email address"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 bg-amber-500 text-zinc-950 rounded-xl font-medium disabled:opacity-70 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
            >
              {status === 'loading' ? 'Continuing…' : 'Continue'}
            </button>
            <p className="text-xs text-zinc-500 mt-3 text-center">You may receive SMS notifications from us by using your mobile number.</p>
          </form>
        )}
      </div>
    </div>
  );
}

LoginModal;
