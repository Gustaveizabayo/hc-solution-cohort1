import React from 'react';
import arrowIcon from '../../assets/images/Arrow.png';


const Navbar = () => {
    const navLinks = [
        { name: 'Benefits', href: '#benefits' },
        { name: 'Specifications', href: '#specs' },
        { name: 'How-to' ,  href: '#howto' },
        { name: 'Contact Us', href: '#contact' },
    ];

    return (
        <nav className="max-w-8xl mx-auto px-8 py-6 flex items-center justify-between relative z-40">
            <div className="text-3xl font-bold text-[#1B2921] tracking-tight">Area</div>
            <div className="hidden md:flex items-center gap-10 text-base font-medium  absolute left-1/2 -translate-x-1/2 ">
            {navLinks.map((Link) => (
                <a key={Link.name} href={Link.href} className="text-gray-600 hover:text-[#1B2921] transition">
                    {Link.name}
                </a>
            ))}
            </div>
            <div className="hidden md:block">
                <button className="bg-[#1B2921] text-white px-7 py-3 rounded-full items-center gap-2 hover:bg-green-900 transition font-medium">
                    Learn More
                      <img src={arrowIcon} alt="arrow" className=" invert" />
                </button>
            </div>

        </nav>
    );
};

export default Navbar;