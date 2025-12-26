import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Software Developer';

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-yellow-50 pt-20">
            <div className="container-custom mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Profile Image */}
                    <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-yellow rounded-full blur-2xl opacity-30 animate-pulse"></div>
                            <img
                                src="/niraj-profile.jpg"
                                alt="Niraj Baniya - Software Developer Profile Picture"
                                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white shadow-2xl bg-gradient-to-br from-blue-200 to-yellow-200"
                            />
                        </div>
                    </div>

                    {/* Hero Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left animate-slide-up">
                        <h2 className="text-lg md:text-xl font-medium text-gray-600 mb-2">
                            Hello, I'm
                        </h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="gradient-text">Niraj Baniya</span>
                        </h1>
                        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-dark mb-6 h-12">
                            {displayText}
                            <span className="animate-pulse">|</span>
                        </div>
                        <p className="text-lg text-gray-600 mb-8 max-w-xl">
                            Passionate about building innovative solutions and creating
                            exceptional digital experiences. Welcome to my portfolio!
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                to="/workspace"
                                className="btn-primary px-8 py-3 text-center hover:scale-105 transition-transform"
                            >
                                View My Work
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-3 border-2 border-primary-blue text-primary-blue font-semibold rounded-full hover:bg-primary-blue hover:text-white transition-all text-center"
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
