import React from 'react'
import innerScreen from '../../assets/images/Inner-screen.png'

const Hero = () => {
    return (
        
        <section className="relative z-0 max-w-8xl mx-auto mt-16 px-8 flex flex-col items-center mb-16">

            <div className="text-7xl md:text-[130px] font-medium font-serif text-gray-900 w-full text-center tracking-tight mb-20 leading-none">
                Browse everything.
            </div>
            
            {/* green background shape */}
            <div className="absolute bottom-0 left-8 right-8 h-[250px] md:h-[400px] olive-bg rounded-[40px] -z-10"/>

            {/* image container */}
            <div className="relative w-11/12 md:w-8/12 h-[350px] md:h-[650px] flex items-center justify-center rounded-t-[40px] rounded-b-none overflow-hidden shadow-2xl border-[15px] border-black border-b-0 bg-[#352A2D]">
                <img src={innerScreen} className="w-full h-full object-cover object-top" alt="App Ui"/>

            </div>
        </section>
    );
};

export default Hero