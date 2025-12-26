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
        <footer className="bg-dark text-light py-8 mt-auto">
            <div className="container-custom mx-auto px-4">
                <div className="flex flex-col items-center space-y-6">
                    {/* Social Media Links */}
                    <div className="flex items-center space-x-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl hover:text-primary-blue transition-colors duration-300"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-gray-400">
                        © {currentYear} Niraj Baniya. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
