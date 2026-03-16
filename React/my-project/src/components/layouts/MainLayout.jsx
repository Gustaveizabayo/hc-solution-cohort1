import React, { useState, useEffect } from 'react';
import Navbar from '../ui/Navbar';
import FloatingNav from '../ui/FloatingNav';
import Footer from '../ui/Footer';

const MainLayout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 150);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-[#F8F7F3] text-[#1a1a1a] font-sans selection:bg-[#8C9A77] selection:text-white">
           <Navbar />
           <FloatingNav visible={isScrolled} /> 
           <main>{children}</main>
           <Footer />
        </div>
    );
};

export default MainLayout;