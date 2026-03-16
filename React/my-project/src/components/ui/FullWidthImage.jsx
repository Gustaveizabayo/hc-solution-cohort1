import React from 'react';
import imageContainer from '../../assets/images/Image container.png';

const FullWidthImage = () => {
    return (
        <section className="max-w-8xl mx-auto px-8 py-8 mb-12">
            <div className="w-full bg-white rounded-[30px] aspect-[21/9] flex items-center justify-center relative overflow-hidden shadow-2xl">
                <img src={imageContainer} alt="Full width" className="w-full h-full object-cover" />
            </div>
        </section>
    );
};

export default FullWidthImage;
