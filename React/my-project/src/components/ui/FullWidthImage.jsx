import React from 'react';
import imageContainer from '../../assets/images/Image container.png';

const FullWidthImage = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 mb-12">
            <div className="w-full bg-gray-200/50 rounded-[40px] aspect-[21/9] flex items-center justify-center relative overflow-hidden shadow-sm">
                <span className="text-gray-400 font-medium">
                    <img src={imageContainer} alt="Full width" className="w-full h-full object-cover" />
                </span>
            </div>
        </section>
    );
};

export default FullWidthImage;
