import React from 'react';

const steps = [
  { id: "01", title: "Get Started", desc: "With our intuitive setup, you're up and running in minutes." },
  { id: "02", title: "Customize", desc: "Adapt Area to your specific requirements and preferences." },
  { id: "03", title: "Grow", desc: "Make informed decisions to exceed your goals." },
];

const HowTo = () => (
  <section id="howto" className="max-w-8xl mx-auto px-6 md:px-8 py-24">
    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20 border-b border-gray-200 pb-16">
      <h2 className="font-serif text-5xl md:text-[64px] text-gray-900">Map Your Success</h2>
      <button className="bg-[#e4ebce] text-[#1B2921] px-8 py-3 rounded-full font-bold text-[13px] hover:bg-[#d6dea4] transition">
        Discover More
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
      {steps.map((step) => (
        <div key={step.id} className="flex flex-col gap-6">
          <div className="text-[80px] font-light text-gray-400/80 leading-none tracking-tighter">
            {step.id}
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-[18px] text-gray-900">{step.title}</h4>
            <p className="text-[13px] text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default HowTo;