import React from 'react';
import testimonialImg from '../../assets/images/Image (3).png';

const Testimonial = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            <div className="rounded-[40px] relative overflow-hidden flex items-center justify-center border-t border-l border-white shadow-sm md:w-1/2">
                <span className="text-gray-400 font-medium">
                    <img src={testimonialImg} alt="John Smith" className="w-full h-full object-cover" />
                </span>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="serif text-3xl md:text-[20px] leading-[1.3] text-gray-900 mb-10 text-left">
                    “I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are
                    so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.”
                </p>

                <div className="flex flex-col gap-1 mt-4">
                    <h4 className="font-sans text-[11px] font-semibold text-gray-900">John Smith</h4>
                    <p className="font-mono text-[11px] uppercase tracking-wide">Head of Data</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
