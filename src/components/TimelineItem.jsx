import React from 'react';

const TimelineItem = ({ item, index, inView }) => {
  const getTypeColor = (type) => {
    const colors = {
      milestone: 'from-yellow-600 to-orange-600',
      career: 'from-purple-600 to-indigo-600',
      education: 'from-green-600 to-teal-600',
      growth: 'from-blue-600 to-purple-600',
      birth: 'from-pink-600 to-red-600'
    };
    return colors[type] || 'from-purple-600 to-indigo-600';
  };

  return (
    <div
      className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'}`}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
        <div className={`bg-gradient-to-br ${getTypeColor(item.type)} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
          <h3 className="text-2xl font-bold text-white mb-2">{item.year}</h3>
          <h4 className="text-xl font-semibold mb-3 text-white/90">{item.event}</h4>
          <p className="text-white/80 leading-relaxed">{item.description}</p>
        </div>
      </div>
      
      <div className={`absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full border-4 border-gray-900 transform md:-translate-x-2 hover:scale-125 transition-transform duration-300 z-10`}></div>
    </div>
  );
};

export default TimelineItem;