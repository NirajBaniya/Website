import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website built with React.js and Tailwind CSS, featuring smooth animations and SEO optimization.',
            image: 'https://via.placeholder.com/400x250/00D4FF/FFFFFF?text=Portfolio+Website',
            tags: ['React.js', 'Tailwind CSS', 'Vite'],
            github: 'https://github.com/NirajBaniya/Website',
            live: 'https://nirajbaniya.com.np',
        },
        {
            title: 'Task Management App',
            description: 'A full-stack task management application with user authentication, real-time updates, and drag-and-drop functionality.',
            image: 'https://via.placeholder.com/400x250/FFD700/000000?text=Task+Manager',
            tags: ['React', 'Node.js', 'MongoDB'],
            github: 'https://github.com/NirajBaniya',
            live: '#',
        },
        {
            title: 'E-Commerce Platform',
            description: 'A scalable e-commerce platform with shopping cart, payment integration, and admin dashboard for inventory management.',
            image: 'https://via.placeholder.com/400x250/00D4FF/FFFFFF?text=E-Commerce',
            tags: ['React', 'Express', 'PostgreSQL'],
            github: 'https://github.com/NirajBaniya',
            live: '#',
        },
        {
            title: 'Weather Dashboard',
            description: 'A beautiful weather dashboard displaying current weather, forecasts, and historical data using external APIs.',
            image: 'https://via.placeholder.com/400x250/FFD700/000000?text=Weather+App',
            tags: ['JavaScript', 'API', 'CSS'],
            github: 'https://github.com/NirajBaniya',
            live: '#',
        },
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* Project Image */}
                        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-100 to-yellow-100">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>

                        {/* Project Content */}
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-dark mb-3">{project.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-yellow-100 text-dark text-sm font-medium rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-dark hover:text-primary-blue transition-colors"
                                >
                                    <FaGithub className="text-xl" />
                                    <span className="font-medium">Code</span>
                                </a>
                                {project.live !== '#' && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-dark hover:text-primary-blue transition-colors"
                                    >
                                        <FaExternalLinkAlt className="text-lg" />
                                        <span className="font-medium">Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
