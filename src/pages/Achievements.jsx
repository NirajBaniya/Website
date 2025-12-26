import { FaAward, FaCertificate, FaTrophy } from 'react-icons/fa';

const Achievements = () => {
    const achievements = [
        {
            title: 'React.js Developer Certification',
            issuer: 'Meta',
            date: 'December 2024',
            icon: <FaCertificate />,
            description: 'Advanced React development certification covering hooks, context, and modern patterns.',
            color: 'bg-blue-500',
        },
        {
            title: 'Full Stack Web Development',
            issuer: 'freeCodeCamp',
            date: 'November 2024',
            icon: <FaAward />,
            description: 'Comprehensive certification covering frontend and backend web development.',
            color: 'bg-cyan-500',
        },
        {
            title: 'JavaScript Algorithms',
            issuer: 'HackerRank',
            date: 'October 2024',
            icon: <FaTrophy />,
            description: 'Advanced algorithms and data structures certification with JavaScript.',
            color: 'bg-cyan-500',
        },
        {
            title: 'Node.js Backend Development',
            issuer: 'Udemy',
            date: 'September 2024',
            icon: <FaCertificate />,
            description: 'Backend development with Node.js, Express, and database management.',
            color: 'bg-green-500',
        },
        {
            title: 'Git & GitHub Mastery',
            issuer: 'Coursera',
            date: 'August 2024',
            icon: <FaAward />,
            description: 'Version control, collaboration, and advanced Git workflows.',
            color: 'bg-orange-500',
        },
        {
            title: 'UI/UX Design Fundamentals',
            issuer: 'LinkedIn Learning',
            date: 'July 2024',
            icon: <FaTrophy />,
            description: 'Design principles, user research, and prototyping fundamentals.',
            color: 'bg-purple-500',
        },
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* Icon Header */}
                        <div className={`${achievement.color} p-6 text-white`}>
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {achievement.icon}
                            </div>
                            <h3 className="text-xl font-bold">{achievement.title}</h3>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                                <span className="font-semibold text-dark">{achievement.issuer}</span>
                                <span className="text-sm text-gray-500">{achievement.date}</span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {achievement.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
