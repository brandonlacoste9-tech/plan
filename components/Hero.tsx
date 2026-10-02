"use client";
export default function Hero({ onLoginClick }: Record<string, any>) {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
      <div className="inline-block px-3 py-1 text-xs font-medium tracking-widest text-amber-500 border border-amber-900 rounded-full mb-6">
        PERSONAL AI AGENT
      </div>
      <h1 className="text-6xl md:text-7xl font-bold tracking-[-0.05em] text-white leading-none mb-6">
        Muse, AI that<br />gets it done for you
      </h1>
      <p className="max-w-md mx-auto text-xl text-zinc-400 mb-10">
        Give Muse a goal or an everyday task and it handles the rest, from finances and health to shopping and the people you care about.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onLoginClick}
          aria-label="Log in or create an account"
          className="px-8 py-3.5 bg-amber-500 text-zinc-950 text-sm font-medium rounded-xl hover:bg-amber-400 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          Log in or create an account
        </button>
        <a href="#features" className="px-8 py-3.5 text-sm font-medium border border-zinc-700 hover:bg-zinc-900 text-white rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">
          Learn more
        </a>
      </div>
    </div>
  );
}

Hero;
