import React from 'react';

const FloatingNav = ({ visible }) => {
    return (
        <div
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 hidden md:block ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'
                }`}
        >
            <div className="bg-gray-300/40 backdrop-blur-md px-8 py-3 rounded-[30px] border border-white/40 shadow-sm">
                <div className="flex items-center gap-8 text-[13px] font-semibold text-gray-800">
                    <a href="#benefits" className="hover:text-black transition">Benefits</a>
                    <a href="#specs" className="hover:text-black transition">Specifications</a>
                    <a href="#howto" className="hover:text-black transition">How-to</a>
                    <a href="#contact" className="hover:text-black transition">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default FloatingNav;
