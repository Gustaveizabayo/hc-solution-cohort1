import React from 'react';

const rows = [
  { label: "Ultra-fast browsing", area: "✓", webSurge: "✓ Fast browsing", hyperView: "✕ Moderate speeds" },
  { label: "Advanced AI insights", area: "✓", webSurge: "✓ Basic AI recommendations", hyperView: "✕ No AI assistance" },
  { label: "Seamless integration", area: "✓", webSurge: "✓ Restricts customization", hyperView: "✕ Steep learning curve" },
  { label: "Advanced AI insights", area: "✓", webSurge: "✕ Basic AI insights", hyperView: "✕ No AI assistance" },
  { label: "Ultra-fast browsing", area: "✓", webSurge: "✓ Fast browsing", hyperView: "✕ Moderate speeds" },
  { label: "Full UTF-8 support", area: "✓", webSurge: "✕ Potential display errors", hyperView: "✕ Partial UTF-8 support" },
];

const SpecsGrid = () => (
  <section id="specs" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
    <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center">
      <h2 className="serif text-5xl md:text-[56px] text-gray-900 mb-6 font-medium">Why Choose Area?</h2>
      <p className="text-[14px] font-medium text-gray-400 mb-8 max-w-[600px] leading-relaxed">
        You need a solution that keeps up. That's why we developed Area. A developer-friendly approach to streamline your business.
      </p>
      <button className="bg-[#e4ebce] text-[#1B2921] px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-[#d6dea4] transition">
        Discover More
      </button>
    </div>

    <div className="relative w-full max-w-[64rem] mx-auto mt-16 text-left">
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-white border border-gray-200/80 rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.03)] z-0" />

      <div className="relative z-10 grid grid-cols-3 w-full items-center">
        {/* Headers */}
        <div className="text-center py-8">
          <span className="text-[26px] font-bold text-gray-900 tracking-tight">Area</span>
        </div>
        <div className="text-center py-8">
          <span className="text-[24px] font-serif text-gray-500 tracking-wide">WebSurge</span>
        </div>
        <div className="text-center py-8">
          <span className="text-[22px] font-light font-sans text-gray-500">HyperView</span>
        </div>

        {rows.map((row, i) => (
          <React.Fragment key={i}>
            <div className="col-span-3 border-t border-gray-100" />
            <div className="py-7 px-6 lg:px-12 text-[12px] font-mono text-gray-800 flex items-center gap-3">
              <span className="text-gray-400/80 text-xs font-sans">✓</span> {row.label}
            </div>
            <div className="py-7 px-6 lg:px-12 text-[12px] font-mono text-gray-600 flex items-center gap-3">
              <span className="text-gray-400/80 text-xs font-sans tracking-wide">{row.webSurge.startsWith('✕') ? '✕' : '✓'}</span> {row.webSurge.substring(2)}
            </div>
            <div className="py-7 px-6 lg:px-12 text-[12px] font-mono text-gray-600 flex items-center gap-3">
              <span className="text-gray-400/80 text-xs font-sans tracking-wide">✕</span> {row.hyperView.substring(2)}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default SpecsGrid;