import React from 'react';
import imagePlaceholder from '../../assets/images/Image.png';

const BigPicture = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
            <div className="w-full lg:w-1/2 flex flex-col">
                <h2 className="serif text-[40px] md:text-[56px] text-gray-900 leading-[1.1] mb-6">See the Big Picture</h2>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-12 max-w-[420px]">
                    Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.
                </p>

                <div className="flex flex-col border-t border-gray-200">
                    <div className="flex items-start gap-6 py-5 border-b border-gray-100">
                        <span className="font-sans text-[13px] font-semibold text-gray-800 tracking-wide mt-0.5 w-6">01</span>
                        <p className="text-[13px] text-gray-700 leading-relaxed font-sans">
                            <span className="font-medium text-gray-900">Spot Trends in Seconds:</span> No more digging through numbers.
                        </p>
                    </div>

                    <div className="flex items-start gap-6 py-5 border-b border-gray-100">
                        <span className="font-sans text-[13px] font-semibold text-gray-800 tracking-wide mt-0.5 w-6">02</span>
                        <p className="text-[13px] text-gray-700 leading-relaxed font-sans">
                            <span className="font-medium text-gray-900">Get Everyone on the Same Page:</span> Share easy-to-understand reports with your team.
                        </p>
                    </div>

                    <div className="flex items-start gap-6 py-5 border-b border-gray-100">
                        <span className="font-sans text-[13px] font-semibold text-gray-800 tracking-wide mt-0.5 w-6">03</span>
                        <p className="text-[13px] text-gray-700 leading-relaxed font-sans">
                            <span className="font-medium text-gray-900">Make Presentations Pop:</span> Interactive maps and dashboards keep your audience engaged.
                        </p>
                    </div>

                    <div className="flex items-start gap-6 py-5 border-b border-gray-100">
                        <span className="font-sans text-[13px] font-semibold text-gray-800 tracking-wide mt-0.5 w-6">04</span>
                        <p className="text-[13px] text-gray-700 leading-relaxed font-sans">
                            <span className="font-medium text-gray-900">Your Global Snapshot:</span> Get a quick, clear overview of your entire operation.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <button className="bg-[#e4ebce] text-[#1B2921] px-8 py-3 rounded-full font-bold text-[13px] tracking-wide hover:bg-[#d6dea4] transition">
                        Discover More
                    </button>
                </div>
            </div>

            <div className="w-full lg:w-1/2 md:rounded-[40px] aspect-square lg:aspect-[4/4.5] relative overflow-hidden flex items-center justify-center shadow-sm">
                <span className="text-[#8c826e] font-serif italic text-lg opacity-70">
                    <img src={imagePlaceholder} alt="Big Picture" className="w-full h-full object-cover" />
                </span>
            </div>
        </section>
    );
};

export default BigPicture;
