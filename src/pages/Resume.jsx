import { useState, useRef } from 'react';
import { FaDownload, FaEye, FaFileAlt } from 'react-icons/fa';

const Resume = () => {
    const [pdfLoading, setPdfLoading] = useState(false);
    const pdfIframeRef = useRef(null);
    const resumePath = '/niraj-baniya-resume.pdf';

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'Niraj_Baniya_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleViewOnline = () => {
        setPdfLoading(true);
        window.open(resumePath, '_blank');
        setTimeout(() => setPdfLoading(false), 500);
    };

    return (
        <section className="min-h-screen py-20 bg-white">
            <div className="container-custom mx-auto px-4 pt-16 flex items-center justify-center">
                <div className="w-full max-w-4xl animate-fade-in">
                    {/* Header Section */}
                    {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-cyan-500">Resume</span>
                    </h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 mb-16 animate-slide-up">
                        {/* Left Side - Title and Description */}
                        <div className="text-center lg:text-left">
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-lg lg:mx-0 mx-auto leading-relaxed">
                                View or Download my <strong className="text-dark">Resume</strong> to learn more about my skills, education, and experience.
                            </p>
                        </div>

                        {/* Right Side - Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                            <button
                                onClick={handleDownload}
                                className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 btn-primary text-white rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg shadow-lg w-full sm:w-auto hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                            >
                                <FaDownload className="animate-bounce" style={{ animationDelay: '0s' }} />
                                Download PDF
                            </button>

                            <button
                                onClick={handleViewOnline}
                                disabled={pdfLoading}
                                className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 btn-primary text-white rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg shadow-lg w-full sm:w-auto hover:scale-105 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50"
                            >
                                <FaEye className={pdfLoading ? 'animate-spin' : ''} />
                                {pdfLoading ? 'Loading...' : 'View Online'}
                            </button>
                        </div>
                    </div>

                    {/* Resume Content Section */}
                    <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12 animate-slide-up">
                        <div className="text-center py-12">
                            <FaFileAlt className="text-6xl text-cyan-500 mx-auto mb-6" />
                            <p className="text-lg text-gray-600 mb-4">
                                Resume preview not available in embedded view
                            </p>
                            <p className="text-sm text-gray-500">
                                Click "View Online" to open your resume in a new tab, or use "Download PDF" to save it locally.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
