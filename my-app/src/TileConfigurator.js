import React, { useState } from 'react';

export default function TileConfigurator({ onStart }) {
  const [input, setInput] = useState(36);

  const start = (e) => {
    e.preventDefault();
    const n = parseInt(input, 10);
    if (isNaN(n) || n < 0) return;
    onStart(n);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 p-6">
      <div className="w-[640px] rounded-[28px] bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 border-[8px] border-slate-700 shadow-[0_28px_80px_rgba(15,23,42,0.9)] p-8">
        <div className="text-center">
          <div className="text-4xl font-black text-sky-900 tracking-[0.12em] uppercase">Academic Monopoly</div>
          <p className="mt-4 text-slate-600">Configure your board</p>
        </div>

        <form onSubmit={start} className="mt-8 flex items-center justify-center gap-6">
          <label className="flex items-center gap-4 text-sm font-medium text-slate-700">
            <span>Total number of tasks:</span>
            <input
              type="number"
              min={0}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-40 px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </label>

          <div className="flex items-center">
            <button type="submit" className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow hover:brightness-105">Start Board</button>
          </div>
        </form>
      </div>
    </div>
  );
}
