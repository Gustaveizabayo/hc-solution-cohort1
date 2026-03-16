import React from 'react';
import logoRowImg from '../../assets/images/Logo Row.png';
import heroImg from '../../assets/images/Hero Image.png';

const features = [
    {
        title: "Amplify Insights",
        desc: "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.",
        icon: (
            <>
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </>
        )
    },
    {
        title: "Control Your Global Presence",
        desc: "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.",
        icon: (
            <>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
            </>
        )
    },
    {
        title: "Remove Language Barriers",
        desc: "Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.",
        icon: (
            <>
                <path d="M16 8a4 4 0 0 1 0 8" />
                <path d="M19 5a9 9 0 0 1 0 14" />
                <path d="M8 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                <path d="M2 20a6 6 0 0 1 12 0H2z" />
            </>
        )
    },
    {
        title: "Visualize Growth",
        desc: "Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.",
        icon: (
            <>
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </>
        )
    }
];

const Benefits = () => (
    <section className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-20">
        {/* Trusted By */}
        <p className="text-[13px] font-medium text-gray-400 mb-8 text-left">Trusted by:</p>
        <div className="w-full mb-16">
            <img src={logoRowImg} alt="Trusted by logos" className="w-full h-auto object-contain opacity-70 grayscale mix-blend-multiply" />
        </div>

        <hr className="w-full border-gray-200 mb-16" />

        <div id="benefits" className="w-full">
            <h3 className="text-[11px] tracking-[0.15em] font-semibold text-[#8C9A77] uppercase mb-8">Benefits</h3>
            <h2 className="serif text-5xl md:text-[64px] text-gray-900 leading-[1.05] mb-8">
                We've cracked the code.
            </h2>
            <p className="text-[#757575] text-[15px] leading-relaxed max-w-lg mb-16">
                Area provides real insights, without the data overload.
            </p>

            <hr className="w-full border-gray-200 mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-14">
                {features.map((f, i) => (
                    <div key={i} className="flex flex-col">
                        <div className="mb-6 text-gray-900">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                {f.icon}
                            </svg>
                        </div>
                        <h4 className="serif text-[20px] font-medium text-gray-900 mb-4 leading-tight">{f.title}</h4>
                        <p className="text-[#757575] text-[14px] leading-[1.7]">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        <img className="w-full h-auto object-contain rounded-[20px] mt-10 mb-10" src={heroImg} alt="Hero" />
    </section>
);

export default Benefits;
