// components/StatsCounter.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { UtensilsCrossed, Apple, Coffee, Wine } from 'lucide-react';

const stats = [
  { icon: UtensilsCrossed, value: 118000, label: 'Recipes', suffix: '+' },
  { icon: Apple, value: 24000, label: 'Ingredients', suffix: '+' },
  { icon: Coffee, value: 500, label: 'Food Items', suffix: '+' },
  { icon: Wine, value: 8600, label: 'Cocktails', suffix: '+' },
];

const StatsCounter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex p-4 bg-white rounded-2xl shadow-lg mb-4">
                <stat.icon className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                {inView ? <CountUp end={stat.value} duration={2.5} separator="," /> : 0}
                {stat.suffix}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;