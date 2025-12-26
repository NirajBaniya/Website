import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const fullText = [
        'Student',
        'Web Developer',
        'IoT & Robotics Enthusiast',
    ]

    useEffect(() => {
        const currentText = fullText[textIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const delayBeforeDelete = 2000;

        let timeout;

        if (!isDeleting && charIndex < currentText.length) {
            // Typing
            timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            // Deleting
            timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, typingSpeed);
        } else if (!isDeleting && charIndex === currentText.length) {
            // Pause before deleting
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, delayBeforeDelete);
        } else if (isDeleting && charIndex === 0) {
            // Move to next text
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % fullText.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, textIndex, isDeleting, fullText]);

    return (
        <section className="h-full flex items-center justify-center bg-white overflow-hidden">
            <div className="container-custom mx-auto px-4 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                    {/* Profile Image */}
                    <div className="w-full md:w-1/2 flex justify-center animate-fade-in flex-shrink-0">
                        <div className="relative">
                            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                            <img
                                src="../niraj-profile(main).jpg"
                                alt="Niraj Baniya - Software Developer Profile Picture"
                                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white shadow-2xl bg-cyan-100"
                            />
                        </div>
                    </div>

                    {/* Hero Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left animate-slide-up flex-shrink-0">
                        <h2 className="text-lg md:text-xl font-medium text-gray-600 mb-1 md:mb-2">
                            Hello, I'm
                        </h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 text-cyan-500">
                            Niraj Baniya
                        </h1>
                        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700 mb-3 md:mb-6 h-10 md:h-12">
                            {displayText}
                            <span className="animate-pulse">|</span>
                        </div>
                        <p className="hidden md:block text-sm md:text-base lg:text-lg text-gray-600 mb-4 md:mb-8 max-w-xl leading-relaxed">
                            Passionate about building innovative solutions and creating
                            exceptional digital experiences. Welcome to my portfolio!
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                            <Link
                                to="/workspace"
                                className="btn-primary px-6 md:px-8 py-2 md:py-3 text-sm md:text-base text-center hover:scale-105 transition-transform"
                            >
                                View My Work
                            </Link>
                            <Link
                                to="/contact"
                                className="px-6 md:px-8 py-2 md:py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all text-center text-sm md:text-base"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
