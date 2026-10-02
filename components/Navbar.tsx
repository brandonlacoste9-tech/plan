"use client";
export default function Navbar({ onLoginClick }: Record<string, any>) {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-semibold tracking-tight text-xl text-white">Muse</div>
        <button
          onClick={onLoginClick}
          aria-label="Log in to Muse"
          className="px-5 py-2 text-sm font-medium text-white hover:bg-zinc-900 rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          Log in
        </button>
      </div>
    </nav>
  );
}

Navbar;
