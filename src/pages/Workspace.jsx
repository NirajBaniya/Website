import { Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Workspace = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const tabs = [
        { path: '/workspace/projects', label: 'Projects' },
        { path: '/workspace/achievements', label: 'Achievements' },
    ];

    return (
        <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container-custom mx-auto px-4 pt-16">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Workspace</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-yellow mx-auto rounded-full"></div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white rounded-full shadow-lg p-2 inline-flex">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.path}
                                to={tab.path}
                                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${location.pathname === tab.path
                                        ? 'bg-gradient-to-r from-primary-blue to-primary-yellow text-dark'
                                        : 'text-gray-600 hover:text-dark'
                                    }`}
                            >
                                {tab.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="animate-slide-up">
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default Workspace;
