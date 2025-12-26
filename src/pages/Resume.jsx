import { FaDownload } from 'react-icons/fa';

const Resume = () => {
    const resumePath = '/niraj-baniya-resume.pdf';

    return (
        <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container-custom mx-auto px-4 pt-16">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Resume</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-yellow mx-auto rounded-full mb-8"></div>

                    {/* Download Button */}
                    <a
                        href={resumePath}
                        download="Niraj_Baniya_Resume.pdf"
                        className="btn-primary inline-flex items-center gap-2 px-8 py-3 hover:scale-105 transition-transform"
                    >
                        <FaDownload />
                        Download Resume
                    </a>
                </div>

                {/* PDF Viewer */}
                <div className="max-w-5xl mx-auto animate-slide-up">
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                        <iframe
                            src={resumePath}
                            className="w-full h-[800px]"
                            title="Niraj Baniya Resume"
                            onError={() => {
                                document.getElementById('pdf-fallback').classList.remove('hidden');
                            }}
                        />

                        {/* Fallback for devices that can't display PDF */}
                        <div id="pdf-fallback" className="hidden p-12 text-center">
                            <div className="mb-6">
                                <p className="text-xl text-gray-700 mb-4">
                                    Unable to display the PDF in your browser.
                                </p>
                                <p className="text-gray-600">
                                    Please click the button above to download the resume.
                                </p>
                            </div>
                            <a
                                href={resumePath}
                                download="Niraj_Baniya_Resume.pdf"
                                className="btn-primary inline-flex items-center gap-2 px-8 py-3"
                            >
                                <FaDownload />
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
