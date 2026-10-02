export default function Features() {
  const features = [
    { id: "email", title: "Sorts your email", desc: "Muse handles your inbox and keeps you organized." },
    { id: "calendar", title: "Books reservations & manages calendars", desc: "Schedules meetings and plans your time automatically." },
    { id: "shop", title: "Shops for you & saves you money", desc: "Finds deals and completes purchases with your approval." },
  ];

  return (
    <div id="features" className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f: any) => (
          <div key={f.id} className="p-8 border border-zinc-800 bg-zinc-900 rounded-2xl hover:bg-zinc-800 hover:shadow-sm transition-all duration-200">
            <div className="font-semibold text-xl tracking-tight mb-3 text-white">{f.title}</div>
            <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Features;
