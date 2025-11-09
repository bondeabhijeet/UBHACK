import React from 'react';

export default function Board() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 p-6">
      <div className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 w-[900px] h-[900px] border-[12px] border-slate-700 rounded-[36px] shadow-[0_28px_80px_rgba(15,23,42,0.9)] overflow-hidden">
        {/* Soft inner glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_0_50px_rgba(15,23,42,0.35)]" />

        {/* Center */}
        <div className="absolute inset-28 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 flex items-center justify-center rounded-[32px] shadow-inner border border-slate-200/70">
          <div className="-rotate-12 text-center drop-shadow-sm">
            <div className="text-6xl font-black tracking-[0.25em] text-sky-900 uppercase">ACADEMIC</div>
            <div className="mt-6 text-6xl font-black tracking-[0.25em] text-sky-900 uppercase">MONOPOLY</div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="absolute bottom-0 left-0 right-0 flex">
          {/* Just Visiting */}
          <div className="w-[120px] h-[120px] border border-slate-400 bg-gradient-to-t from-slate-100 to-slate-50 flex items-center justify-center text-center">
            <div className="font-bold text-base leading-tight tracking-tight text-slate-800">
              (Just<br />Visiting)
            </div>
          </div>

          {/* Middle tiles */}
          <div className="flex-1 grid grid-cols-9">
            {/* Ellicott */}
            <div className="border border-slate-400 h-[120px] flex flex-col bg-white/90">
              <div className="h-6 bg-gradient-to-r from-red-900 via-red-700 to-red-900 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800">
                <div className="font-medium">Ellicott<br />Complex</div>
                <div className="mt-2 font-semibold text-slate-900">$220</div>
              </div>
            </div>
            {/* Greiner */}
            <div className="border border-slate-400 h-[120px] flex flex-col bg-white/90">
              <div className="h-6 bg-gradient-to-r from-red-900 via-red-700 to-red-900 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800">
                <div className="font-medium">Greiner<br />Hall</div>
                <div className="mt-2 font-semibold text-slate-900">$240</div>
              </div>
            </div>
            {/* Dean's List */}
            <div className="border border-slate-400 h-[120px] flex flex-col items-center justify-center text-[11px] text-center bg-slate-50">
              <div className="font-semibold mb-2 tracking-tight text-slate-800">Dean's<br />List</div>
              <div className="text-3xl drop-shadow-sm">⭐</div>
            </div>
            {/* Furnas */}
            <div className="border border-slate-400 h-[120px] flex flex-col bg-white/90">
              <div className="h-6 bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-300 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800">
                <div className="font-medium">Furnas<br />Hall</div>
                <div className="mt-2 font-semibold text-slate-900">$260</div>
              </div>
            </div>
            {/* Ketter Hall */}
            <div className="border border-slate-400 h-[120px] flex flex-col items-center justify-between py-2 text-[11px] text-center bg-slate-50">
              <div className="font-semibold tracking-tight text-slate-800">Ketter Hall</div>
              <div className="text-3xl">🚗</div>
              <div className="font-semibold text-slate-900">$200</div>
            </div>
            {/* Tuition Fee */}
            <div className="border border-slate-400 h-[120px] flex flex-col items-center justify-between py-2 text-[11px] text-center bg-slate-50">
              <div className="font-semibold tracking-tight text-slate-800">Tuition<br />Fee</div>
              <div className="text-3xl">💵</div>
              <div className="text-slate-800">Pay <span className="font-semibold text-slate-900">$200</span></div>
            </div>
            {/* Bonner */}
            <div className="border border-slate-400 h-[120px] flex flex-col bg-white/90">
              <div className="h-6 bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-300 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800">
                <div className="font-medium">Bonner<br />Hall</div>
                <div className="mt-2 font-semibold text-slate-900">$260</div>
              </div>
            </div>
            {/* Cooke */}
            <div className="border border-slate-400 h-[120px] flex flex-col bg-white/90">
              <div className="h-6 bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-300 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800">
                <div className="font-medium">Cooke<br />Hall</div>
                <div className="mt-2 font-semibold text-slate-900">$280</div>
              </div>
            </div>
            {/* Park */}
            <div className="border border-slate-400 h-[120px] flex flex-col bg-white/90">
              <div className="h-6 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800">
                <div className="font-medium">Park Hall</div>
                <div className="mt-2 font-semibold text-slate-900">$300</div>
              </div>
            </div>
          </div>

          {/* Start */}
          <div className="w-[120px] h-[120px] border border-slate-400 bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 flex flex-col items-center justify-center text-center text-white shadow-inner">
            <div className="font-semibold text-[11px] tracking-[0.18em] uppercase">Collect<br />Stipend</div>
            <div className="mt-1 text-3xl font-black tracking-wide">START</div>
            <div className="mt-1 text-2xl animate-pulse">➜</div>
          </div>
        </div>

        {/* Top row */}
        <div className="absolute top-0 left-0 right-0 flex">
          {/* AI Violation */}
          <div className="w-[120px] h-[120px] border border-slate-400 bg-gradient-to-b from-slate-100 to-slate-50 flex items-center justify-center text-center px-2">
            <div className="text-[11px] leading-tight text-slate-800">
              <div className="font-black text-lg mb-1 tracking-tight">AI<br />VIOLATION</div>
              <div className="text-[10px] text-slate-600">(Go to "Crime<br />Committed")</div>
            </div>
          </div>

          {/* Middle tiles */}
          <div className="flex-1 grid grid-cols-9">
            {/* Capen */}
            <div className="border border-slate-400 h-[120px] flex flex-col bg-white/90">
              <div className="h-6 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800">
                <div className="font-medium">Capen<br />Hall</div>
                <div className="mt-2 font-semibold text-slate-900">$60</div>
              </div>
            </div>
            {/* Norton */}
            <div className="border border-slate-400 h-[120px] flex flex-col bg-white/90">
              <div className="h-6 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800">
                <div className="font-medium">Norton<br />Hall</div>
                <div className="mt-2 font-semibold text-slate-900">$60</div>
              </div>
            </div>
            {/* Pop Quiz */}
            <div className="border border-slate-400 h-[120px] flex flex-col items-center justify-center text-[11px] text-center bg-slate-50">
              <div className="font-semibold mb-2 tracking-tight text-slate-800">Pop Quiz</div>
              <div className="text-3xl text-slate-800">?</div>
            </div>
            {/* O'Brian */}
            <div className="border border-slate-400 h-[120px] flex flex-col bg-white/90">
              <div className="h-6 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800">
                <div className="font-medium">O'Brian<br />Hall</div>
                <div className="mt-2 font-semibold text-slate-900">$100</div>
              </div>
            </div>
            {/* Baird */}
            <div className="border border-slate-400 h-[120px] flex flex-col items-center justify-between py-2 text-[11px] text-center bg-slate-50">
              <div className="font-semibold tracking-tight text-slate-800">Baird Hall</div>
              <div className="text-3xl">🚌</div>
              <div className="font-semibold text-slate-900">$200</div>
            </div>
            {/* Lockwood */}
            <div className="border border-slate-400 h-[120px] flex flex-col bg-white/90">
              <div className="h-6 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800">
                <div className="font-medium">Lockwood<br />Library</div>
                <div className="mt-2 font-semibold text-slate-900">$100</div>
              </div>
            </div>
            {/* Dean's List */}
            <div className="border border-slate-400 h-[120px] flex flex-col items-center justify-center text-[11px] text-center bg-slate-50">
              <div className="font-semibold mb-2 tracking-tight text-slate-800">Dean's<br />List</div>
              <div className="text-3xl drop-shadow-sm">⭐</div>
            </div>
            {/* Slee */}
            <div className="border border-slate-400 h-[120px] flex flex-col bg-white/90">
              <div className="h-6 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800">
                <div className="font-medium">Slee Hall</div>
                <div className="mt-2 font-semibold text-slate-900">$120</div>
              </div>
            </div>
            {/* Alumni */}
            <div className="border border-slate-400 h-[120px] flex flex-col bg-white/90">
              <div className="h-6 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800">
                <div className="font-medium">Alumni<br />Arena</div>
                <div className="mt-2 font-semibold text-slate-900">$140</div>
              </div>
            </div>
          </div>
        </div>

        {/* Left side */}
        <div className="absolute left-0 top-[120px] bottom-[120px] flex">
          <div className="w-[120px] h-full grid grid-rows-9">
            {/* Baldy */}
            <div className="border border-slate-400 flex flex-row bg-white/90">
              <div className="w-6 bg-gradient-to-b from-emerald-400 via-green-500 to-emerald-400 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800 rotate-180 [writing-mode:vertical-rl]">
                <div className="font-medium">Baldy Hall</div>
                <div className="mt-2 font-semibold text-slate-900">$300</div>
              </div>
            </div>
            {/* Center for the Arts */}
            <div className="border border-slate-400 flex flex-row bg-white/90">
              <div className="w-6 bg-gradient-to-b from-emerald-400 via-green-500 to-emerald-400 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800 px-1 rotate-180 [writing-mode:vertical-rl]">
                <div className="font-medium">Center for<br />the Arts</div>
                <div className="mt-2 font-semibold text-slate-900">$320</div>
              </div>
            </div>
            {/* Bookstore Fee */}
            <div className="border border-slate-400 flex flex-col items-center justify-between py-2 text-[11px] text-center bg-slate-50 rotate-180 [writing-mode:vertical-rl]">
              <div className="font-semibold tracking-tight text-slate-800">Bookstore<br />Fee</div>
              <div className="text-3xl">💵</div>
              <div className="text-slate-800">Pay <span className="font-semibold text-slate-900">$50</span></div>
            </div>
            {/* One World Café */}
            <div className="border border-slate-400 flex flex-row bg-white/90">
              <div className="w-6 bg-gradient-to-b from-teal-700 via-cyan-700 to-teal-700 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800 px-1 rotate-180 [writing-mode:vertical-rl]">
                <div className="font-medium">One World<br />Café</div>
                <div className="mt-2 font-semibold text-slate-900">$350</div>
              </div>
            </div>
            {/* Silverman Library */}
            <div className="border border-slate-400 flex flex-col items-center justify-between py-2 text-[11px] text-center bg-slate-50 rotate-180 [writing-mode:vertical-rl]">
              <div className="font-semibold tracking-tight text-slate-800">Silverman<br />Library</div>
              <div className="text-3xl">📚</div>
              <div className="font-semibold text-slate-900">$200</div>
            </div>
            {/* Pop Quiz */}
            <div className="border border-slate-400 flex flex-col items-center justify-center text-[11px] text-center bg-slate-50 rotate-180 [writing-mode:vertical-rl]">
              <div className="font-semibold mb-2 tracking-tight text-slate-800">Pop Quiz</div>
              <div className="text-3xl text-slate-800">?</div>
            </div>
            {/* Founders Plaza */}
            <div className="border border-slate-400 flex flex-row bg-white/90">
              <div className="w-6 bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800 px-1 rotate-180 [writing-mode:vertical-rl]">
                <div className="font-medium">Founders<br />Plaza</div>
                <div className="mt-2 font-semibold text-slate-900">$400</div>
              </div>
            </div>
            {/* Clements Hall */}
            <div className="border border-slate-400 flex flex-row bg-white/90">
              <div className="w-6 bg-gradient-to-b from-orange-400 via-amber-400 to-orange-500 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800 rotate-180 [writing-mode:vertical-rl]">
                <div className="font-medium">Clements<br />Hall</div>
                <div className="mt-2 font-semibold text-slate-900">$150</div>
              </div>
            </div>
            {/* Talbert Hall */}
            <div className="border border-slate-400 flex flex-row bg-white/90">
              <div className="w-6 bg-gradient-to-b from-orange-400 via-amber-400 to-orange-500 shadow-inner" />
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800 rotate-180 [writing-mode:vertical-rl]">
                <div className="font-medium">Talbert<br />Hall</div>
                <div className="mt-2 font-semibold text-slate-900">$140</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="absolute right-0 top-[120px] bottom-[120px] flex">
          <div className="w-[120px] h-full grid grid-rows-9">
            {/* The Commons */}
            <div className="border border-slate-400 flex flex-col bg-white/90">
              <div className="flex flex-row h-full">
                <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center leading-tight text-slate-800 rotate-180 [writing-mode:vertical-rl]">
                  <span className="font-medium">The Commons</span>
                  <span className="mt-2 font-semibold text-slate-900">$220</span>
                </div>
                <div className="w-6 bg-gradient-to-b from-red-900 via-red-700 to-red-900 shadow-inner" />
              </div>
            </div>
            {/* Pop Quiz */}
            <div className="border border-slate-400 flex items-center justify-center bg-slate-50">
              <div className="flex flex-col items-center justify-center text-[11px] text-center text-slate-800 rotate-180 [writing-mode:vertical-rl]">
                <span className="font-semibold mb-2 tracking-tight">Pop Quiz</span>
                <span className="text-3xl">?</span>
              </div>
            </div>
            {/* Student Union */}
            <div className="border border-slate-400 flex flex-row bg-white/90">
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center text-slate-800 rotate-180 [writing-mode:vertical-rl] leading-tight">
                <span className="font-medium">Student<br />Union</span>
                <span className="mt-2 font-semibold text-slate-900">$200</span>
              </div>
              <div className="w-6 bg-gradient-to-b from-yellow-300 via-amber-300 to-yellow-300 shadow-inner" />
            </div>
            {/* Natural Sciences */}
            <div className="border border-slate-400 flex flex-row bg-white/90">
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center text-slate-800 rotate-180 [writing-mode:vertical-rl] leading-tight">
                <span className="font-medium">Natural<br />Sciences</span>
                <span className="mt-2 font-semibold text-slate-900">$180</span>
              </div>
              <div className="w-6 bg-gradient-to-b from-yellow-300 via-amber-300 to-yellow-300 shadow-inner" />
            </div>
            {/* Knox Hall */}
            <div className="border border-slate-400 flex flex-row bg-white/90">
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center text-slate-800 rotate-180 [writing-mode:vertical-rl] leading-tight">
                <span className="font-medium">Knox Hall</span>
                <span className="mt-2 font-semibold text-slate-900">$200</span>
              </div>
              <div className="w-6 flex flex-col shadow-inner">
                <div className="flex-1 bg-sky-500" />
                <div className="flex-1 bg-rose-500" />
                <div className="flex-1 bg-amber-300" />
                <div className="flex-1 bg-emerald-500" />
              </div>
            </div>
            {/* Davis Hall */}
            <div className="border border-slate-400 flex flex-row bg-white/90">
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center text-slate-800 rotate-180 [writing-mode:vertical-rl] leading-tight">
                <span className="font-medium">Davis Hall</span>
                <span className="mt-2 font-semibold text-slate-900">$180</span>
              </div>
              <div className="w-6 bg-gradient-to-b from-yellow-300 via-amber-300 to-yellow-300 shadow-inner" />
            </div>
            {/* Bell Hall */}
            <div className="border border-slate-400 flex flex-row bg-white/90">
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center text-slate-800 rotate-180 [writing-mode:vertical-rl] leading-tight">
                <span className="font-medium">Bell Hall</span>
                <span className="mt-2 font-semibold text-slate-900">$150</span>
              </div>
              <div className="w-6 bg-gradient-to-b from-orange-400 via-amber-400 to-orange-500 shadow-inner" />
            </div>
            {/* Jacobs Hall */}
            <div className="border border-slate-400 flex flex-row bg-white/90">
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center text-slate-800 rotate-180 [writing-mode:vertical-rl] leading-tight">
                <span className="font-medium">Jacobs<br />Hall</span>
                <span className="mt-2 font-semibold text-slate-900">$140</span>
              </div>
              <div className="w-6 bg-gradient-to-b from-orange-400 via-amber-400 to-orange-500 shadow-inner" />
            </div>
            {/* Hochstetter Hall */}
            <div className="border border-slate-400 flex flex-row bg-white/90">
              <div className="flex-1 flex flex-col items-center justify-center text-[11px] text-center text-slate-800 rotate-180 [writing-mode:vertical-rl] leading-tight">
                <span className="font-medium">Hochstetter<br />Hall</span>
                <span className="mt-2 font-semibold text-slate-900">$160</span>
              </div>
              <div className="w-6 bg-gradient-to-b from-orange-400 via-amber-400 to-orange-500 shadow-inner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
