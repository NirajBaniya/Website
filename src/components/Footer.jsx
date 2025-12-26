import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: <FaInstagram />,
            url: 'https://www.instagram.com/niraj.baniya.984/',
            label: 'Instagram',
        },
        {
            icon: <FaFacebook />,
            url: 'https://www.facebook.com/niraj.baniya.984',
            label: 'Facebook',
        },
        {
            icon: <FaGithub />,
            url: 'https://github.com/NirajBaniya',
            label: 'GitHub',
        },
        {
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/in/niraj-baniya-84a88529b/',
            label: 'LinkedIn',
        },
    ];

    return (
        <footer className="bg-dark text-light py-8 flex-shrink-0 border-t border-gray-700">
            <div className="container-custom mx-auto px-4">
                {/* Mobile View - Centered (small screens) */}
                <div className="flex lg:hidden flex-col items-center space-y-6">
                    {/* Social Media Links */}
                    <div className="flex items-center space-x-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-cyan-500 transition-colors duration-300"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-gray-400 text-center">
                        © {currentYear} Niraj Baniya.
                    </p>
                </div>

                {/* Desktop View - Text Left, Links Right (large screens) */}
                <div className="hidden lg:flex items-center justify-between">
                    {/* Copyright on Left */}
                    <p className="text-sm text-gray-400">
                        © {currentYear} Niraj Baniya. All rights reserved.
                    </p>

                    {/* Social Media Links on Right */}
                    <div className="flex items-center space-x-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-cyan-500 transition-colors duration-300"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
