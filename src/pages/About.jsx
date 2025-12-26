import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaFigma, FaJs, FaDatabase, FaCode, FaTerminal } from 'react-icons/fa';

const About = () => {
    const skills = [
        { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-500' },
        { name: 'React.js', icon: <FaReact />, color: 'text-blue-500' },
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
        { name: 'Python', icon: <FaPython />, color: 'text-blue-400' },
        { name: 'CSS/Tailwind', icon: <FaCode />, color: 'text-cyan-500' },
        { name: 'MongoDB', icon: <FaDatabase />, color: 'text-green-500' },
        { name: 'PostgreSQL', icon: <FaDatabase />, color: 'text-blue-600' },
        { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600' },
    ];

    const tools = [
        { name: 'VS Code', icon: <FaCode />, color: 'text-blue-500' },
        { name: 'Docker', icon: <FaDocker />, color: 'text-blue-400' },
        { name: 'Terminal', icon: <FaTerminal />, color: 'text-gray-700' },
        { name: 'Figma', icon: <FaFigma />, color: 'text-purple-500' },
    ];

    return (
        <section className="min-h-screen py-20 bg-white">
            <div className="container-custom mx-auto px-4 pt-16">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-cyan-500">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </div>

                {/* About Content */}
                <div className="max-w-4xl mx-auto mb-20 animate-slide-up">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            I'm a passionate software developer with a love for creating innovative and
                            user-friendly applications. My journey in software development has equipped me
                            with a diverse skill set and a problem-solving mindset.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            I specialize in building modern web applications using cutting-edge technologies.
                            Whether it's frontend development with React.js or backend solutions with Node.js,
                            I'm always excited to take on new challenges and learn emerging technologies.
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-center mb-12">
                        My <span className="text-cyan-500">Skills</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 card-hover text-center group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`text-5xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                                    {skill.icon}
                                </div>
                                <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dev Tools Section */}
                <div>
                    <h3 className="text-3xl font-bold text-center mb-12">
                        Dev <span className="text-cyan-500">Tools</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {tools.map((tool, index) => (
                            <div
                                key={tool.name}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 card-hover text-center group border border-gray-200"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`text-5xl mb-4 ${tool.color} group-hover:scale-110 transition-transform duration-300`}>
                                    {tool.icon}
                                </div>
                                <h4 className="font-semibold text-gray-800">{tool.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
