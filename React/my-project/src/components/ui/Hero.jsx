import React from 'react'
import innerScreen from '../../assets/images/Inner-screen.png'

const Hero = () => {
    return (
        <section className="relative z-0 max-w-7xl mx-auto mt-16 px-8 flex justify-center mb-16">
            
            
            {/* green background shape */}
            <div className="absolute bottom-0 left-8 right-8 h-[280px] md:h-[420px] olive-bg rounded-[40px] -z-10"/>

            {/* image container */}
            <div className="relative w-[85%] md:w-[70%] h-[320px] md:h-[620px] rounded-t-[30px] rounded-b-none overflow-hidden shadow-2xl border-[15px] border-black border-b-0">
                <img src={innerScreen} className="w-full h-full object-cover object-top bg-white" alt="App Ui"/>

            </div>
        </section>
    );
};

export default Hero