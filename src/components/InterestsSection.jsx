import React, { useState, useEffect } from 'react';
import { Waves, MapPin, Zap, Code2, Camera, Mountain, Compass, Heart } from 'lucide-react';
import yourPhoto from '../assets/DivePicture.jpg';

const InterestsSection = () => {
    const [inView, setInView] = useState(false);
    const [hoveredInterest, setHoveredInterest] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.3 }
        );

        const element = document.getElementById('interests-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const interests = [
        {
            title: "Certified Diver",
            subtitle: "Exploring underwater worlds",
            icon: Waves,
            color: "from-blue-500 to-cyan-600",
            bgColor: "from-blue-50 to-cyan-50",
            description: "Licensed scuba diver discovering marine life and underwater landscapes",
            emoji: "🤿"
        },
        {
            title: "Traveller",
            subtitle: "Collecting experiences",
            icon: MapPin,
            color: "from-green-500 to-emerald-600",
            bgColor: "from-green-50 to-emerald-50",
            description: "Exploring cultures, cuisines, and hidden gems across the globe",
            emoji: "✈️"
        },
        {
            title: "Running",
            subtitle: "Chasing endorphins",
            icon: Zap,
            color: "from-orange-500 to-red-600",
            bgColor: "from-orange-50 to-red-50",
            description: "Early morning runs and weekend marathons for mental clarity",
            emoji: "🏃‍♂️"
        },
        {
            title: "Self-taught Coder",
            subtitle: "Building digital dreams",
            icon: Code2,
            color: "from-purple-500 to-indigo-600",
            bgColor: "from-purple-50 to-indigo-50",
            description: "From curiosity to creation - building platforms that solve real problems",
            emoji: "💻"
        }
    ];

    const floatingElements = [
        { icon: Camera, position: "top-10 left-10", delay: "0s" },
        { icon: Mountain, position: "top-20 right-20", delay: "1s" },
        { icon: Compass, position: "bottom-20 left-20", delay: "2s" },
        { icon: Heart, position: "bottom-10 right-10", delay: "1.5s" }
    ];

    return (
        <section id="interests-section" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50 relative overflow-hidden">
            {/* Floating Background Elements */}
            <div className="absolute inset-0">
                {floatingElements.map((element, idx) => (
                    <div
                        key={idx}
                        className={`absolute ${element.position} w-16 h-16 text-purple-200 animate-float opacity-30`}
                        style={{ animationDelay: element.delay, animationDuration: '4s' }}
                    >
                        <element.icon className="w-full h-full" />
                    </div>
                ))}
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Plot Twist: <span className="text-purple-600">There's More!</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        When I'm not scaling products, you'll find me...
                    </p>
                    <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Image Section */}
                    <div className={`relative transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="relative">
                            {/* Image Placeholder with Creative Border */}
                            <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-1 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="w-full h-full bg-gray-300 rounded-3xl flex items-center justify-center text-gray-600 font-medium text-lg relative overflow-hidden">
                                    {/* Placeholder for actual image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                                        <span className="text-4xl">📸</span>
                                    </div>
                                    <span className="relative z-10 bg-white/80 px-4 py-2 rounded-lg backdrop-blur-sm">
                                        <img
                                            src={yourPhoto}
                                            alt="Your Name"
                                            className="w-full h-full object-cover rounded-3xl"
                                        />
                                    </span>
                                </div>
                            </div>

                            {/* Floating Interest Icons around Image */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                                🤿
                            </div>
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl animate-bounce" style={{ animationDelay: '1s' }}>
                                ✈️
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl animate-bounce" style={{ animationDelay: '1.5s' }}>
                                🏃‍♂️
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl animate-bounce" style={{ animationDelay: '2s' }}>
                                💻
                            </div>
                        </div>
                    </div>

                    {/* Interests Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {interests.map((interest, idx) => (
                            <div
                                key={idx}
                                className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 cursor-pointer ${hoveredInterest === idx ? 'scale-105' : ''} ${inView ? 'animate-fade-in' : 'opacity-0'}`}
                                style={{ animationDelay: `${(idx + 2) * 200}ms` }}
                                onMouseEnter={() => setHoveredInterest(idx)}
                                onMouseLeave={() => setHoveredInterest(null)}
                            >
                                {/* Interest Header */}
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className={`relative p-3 bg-gradient-to-r ${interest.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <interest.icon className="w-6 h-6" />
                                        <div className="absolute -top-1 -right-1 text-lg">
                                            {interest.emoji}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{interest.title}</h3>
                                        <p className="text-sm text-purple-600 font-medium">{interest.subtitle}</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 text-sm leading-relaxed mb-4">{interest.description}</p>

                                {/* Animated Progress Bar */}
                                <div className="relative">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-medium text-gray-600">Passion Level</span>
                                        <span className="text-xs font-bold text-purple-600">Expert</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`h-2 bg-gradient-to-r ${interest.color} rounded-full transition-all duration-1000 ease-out`}
                                            style={{
                                                width: inView ? '95%' : '0%',
                                                transitionDelay: `${(idx + 4) * 300}ms`
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Hover Effect Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${interest.bgColor} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Quote */}
                <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <blockquote className="text-2xl font-medium text-gray-800 mb-4">
                        "Life is either a daring adventure or nothing at all"
                    </blockquote>
                    <p className="text-purple-600 font-semibold">- Helen Keller (and my life motto)</p>
                </div>
            </div>
        </section>
    );
};

export default InterestsSection;