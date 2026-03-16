import React from 'react';
import logo from '../../assets/images/Logo.png';

const Footer = () => (
  <>
    <footer className="max-w-7xl mx-auto px-8 pb-12 pt-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-12 text-sm">
      <div className="flex gap-8 font-semibold text-[13px] text-gray-900">
        <a href="#benefits" className="hover:text-[#8C9A77] transition">Benefits</a>
        <a href="#specs" className="hover:text-[#8C9A77] transition">Specifications</a>
        <a href="#howto" className="hover:text-[#8C9A77] transition">How-to</a>
      </div>
    </footer>

    <div className="px-8 md:px-20 lg:px-60 flex flex-col md:flex-row items-center justify-between gap-6 text-[#A6A238] font-mono text-[1p3x] pb-8">
      <div className="flex items-center gap-6">
        <img src={logo} alt="logo" />
        <p>@ Area. 2025</p>
      </div>
      <div className="uppercase tracking-widest text-[11px] md:text-[14px]">
        All Rights Reserved
      </div>
    </div>
  </>
);

export default Footer;