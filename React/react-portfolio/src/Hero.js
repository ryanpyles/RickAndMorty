import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const descriptions = [
    "Web Developer", "Designer", "Creative Thinker", 
    "Tech Enthusiast", "Problem Solver", "Artist"
];

const fonts = [
    "'Cormorant', serif",
    "'Kaushan Script', cursive",
    "'Oxygen', sans-serif",
    "'Pacifico', cursive",
    "'Quattrocento', serif",
    "'Reddit Mono', monospace",
    "'Rock Salt', cursive",
    "'Space Grotesk', sans-serif",
    "'VT323', monospace"
];

const getRandomFont = () => {
    const randomIndex = Math.floor(Math.random() * fonts.length);
    return fonts[randomIndex];
};

const photos = [
    'ryanPhoto1.jpeg',
    'ryanPhoto2.jpeg',
    'ryanPhoto3.jpeg'
];

const getRandomStyle = () => {
    const randomX = Math.random() * 80;
    const randomY = Math.random() * 80;
    const randomFontSize = 16 + Math.random() * 24;
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

    return {
        position: 'absolute',
        top: `${randomY}%`,
        left: `${randomX}%`,
        fontSize: `${randomFontSize}px`,
        color: randomColor,
        transform: 'translate(-50%, -50%)'
    };
};

const Hero = () => {
    return (
        <div className="hero">
            {descriptions.map((desc, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.5, duration: 0.5 }}
                    style={{ fontFamily: getRandomFont() }}
                >
                    {desc}
                </motion.div>
            ))}
            {/* Rest of your component */}
        </div>
    );
};

export default Hero;
