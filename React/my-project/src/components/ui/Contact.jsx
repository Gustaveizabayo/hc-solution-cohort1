import React from 'react';
import arrowIcon from '../../assets/images/arrow.png';

const Contact = () => {
    return (
        <section id="contact" className="max-w-8xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 border-b border-gray-200 pb-24">
                <h2 className="serif text-5xl md:text-[64px] text-gray-900">Connect with us</h2>
                <p className="text-[20px] text-gray-500 mb-2">
                    Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
                </p>
                <button className="bg-[#485C11] text-black px-12 md:px-60 py-4 rounded-full font-bold text-[20px] tracking-wide flex items-center gap-2 hover:bg-[#d6dea4] transition shadow-lg shadow-[#3e5218]/20">
                    Learn More
                    <img src={arrowIcon} alt="arrow" className="w-3 h-3 invert" />
                </button>
            </div>
        </section>
    );
};

export default Contact;
