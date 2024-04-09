import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const descriptions = [
    "Web Developer", "Designer", "Creative Thinker", 
    "Tech Enthusiast", "Problem Solver", "Artist"
];

const photos = [
    'assets/ryanPhoto1.jpeg',
    'assets/ryanPhoto2.jpeg',
    'assets/ryanPhoto3.jpeg'
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
    const [currentPhoto, setCurrentPhoto] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
        }, 2000); // Change photo every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero">
            {descriptions.map((desc, index) => (
                <motion.div
                    key={index}
                    style={getRandomStyle()}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.5, duration: 0.5 }}
                >
                    {desc}
                </motion.div>
            ))}

            {photos.map((photo, index) => (
                <motion.img
                    key={photo}
                    src={photo}
                    alt={`Ryan Pyles ${index + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentPhoto === index ? 1 : 0 }}
                    transition={{ duration: 1 }}
                    className="ryan-photo"
                />
            ))}

            <motion.div
                className="name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6, duration: 1 }}
            >
                Ryan Pyles
            </motion.div>

            <motion.button
                className="cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6.5, duration: 1 }}
            >
                View My Work
            </motion.button>
        </div>
    );
};

export default Hero;
