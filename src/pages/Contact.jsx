import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        error: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitted: false, submitting: true, error: false });

        // Simulate form submission (replace with actual backend integration)
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setStatus({ submitted: true, submitting: false, error: false });
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setStatus({ submitted: false, submitting: false, error: false });
            }, 5000);
        }, 1500);
    };

    return (
        <section className="min-h-screen py-20 bg-white">
            <div className="container-custom mx-auto px-4 pt-16">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-cyan-500">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </div>

                {/* Contact Form */}
                <div className="max-w-3xl mx-auto animate-slide-up">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Subject Input */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors"
                                    placeholder="Enter the subject"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors resize-none"
                                    placeholder="Write your message here..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status.submitting}
                                className="w-full btn-primary flex items-center justify-center gap-2 px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status.submitting ? (
                                    <>
                                        <span className="animate-spin">⏳</span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {/* Status Messages */}
                            {status.submitted && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                                    ✓ Thank you! Your message has been sent successfully.
                                </div>
                            )}
                            {status.error && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
                                    ✗ Oops! Something went wrong. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
