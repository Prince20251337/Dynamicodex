// src/components/home/TripleCrisis.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Recycle, Heart } from 'lucide-react';

const crises = [
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    stat: '67%',
    label: 'Patients Fail Diets',
    description: 'Within 3 months of prescription',
    impact: '₹45,000 Cr',
    impactLabel: 'Annual healthcare burden',
    color: 'red',
    details: [
      'Overly restrictive food choices',
      'Boring, repetitive meal plans',
      'No cultural food integration'
    ]
  },
  {
    icon: <Recycle className="h-8 w-8 text-orange-500" />,
    stat: '40%',
    label: 'Groceries Wasted',
    description: 'Per household',
    impact: '₹92,000 Cr',
    impactLabel: 'Annual food waste value',
    color: 'orange',
    details: [
      '₹3,200 monthly loss per family',
      '68M tonnes wasted annually',
      '8% of global GHG emissions'
    ]
  },
  {
    icon: <TrendingDown className="h-8 w-8 text-blue-500" />,
    stat: '73%',
    label: 'Culinary Monotony',
    description: 'Cook same 10-15 recipes',
    impact: 'Nutritional Gap',
    impactLabel: 'Due to limited variety',
    color: 'blue',
    details: [
      'Nutritional deficiencies',
      'Language barriers',
      'Missed therapeutic opportunities'
    ]
  }
];

const TripleCrisis = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
            <AlertTriangle className="h-4 w-4 mr-2" />
            The Triple Crisis
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Action is Needed Now
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India faces three compounding crises that no single platform addresses today
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {crises.map((crisis, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300`}
            >
              <div className={`p-8 bg-gradient-to-br from-${crisis.color}-50 to-white`}>
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 bg-${crisis.color}-100 rounded-lg`}>
                    {crisis.icon}
                  </div>
                  <span className={`text-5xl font-bold text-${crisis.color}-600`}>
                    {crisis.stat}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {crisis.label}
                </h3>
                <p className="text-gray-600 mb-4">{crisis.description}</p>
                
                <div className={`border-l-4 border-${crisis.color}-500 pl-4 mb-6`}>
                  <div className="text-2xl font-bold text-gray-900">{crisis.impact}</div>
                  <div className="text-sm text-gray-600">{crisis.impactLabel}</div>
                </div>

                <ul className="space-y-3">
                  {crisis.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full bg-${crisis.color}-500 mt-2 mr-2`}></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Current Solutions Fail
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-4 px-6 text-left text-gray-600 font-semibold">Platform</th>
                    <th className="py-4 px-6 text-left text-gray-600 font-semibold">Primary Focus</th>
                    <th className="py-4 px-6 text-left text-gray-600 font-semibold">Key Limitation</th>
                    <th className="py-4 px-6 text-center text-gray-600 font-semibold">HealthPlate AI</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Diet Apps (MyFitnessPal)', 'Nutrition Tracking', 'Generic meal plans, ignores food waste', '✅'],
                    ['Recipe Apps (Tasty)', 'Recipe Discovery', 'No health restrictions', '✅'],
                    ['Nutrition Trackers', 'Calorie Counting', 'Manual entry, no suggestions', '✅'],
                    ['Grocery Apps', 'Shopping Lists', 'No health integration', '✅']
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium">{row[0]}</td>
                      <td className="py-4 px-6 text-gray-600">{row[1]}</td>
                      <td className="py-4 px-6 text-gray-600">{row[2]}</td>
                      <td className="py-4 px-6 text-center text-green-600 font-bold">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-800 font-semibold">
                Critical Gap: No single platform integrates medical health data, food waste prevention, 
                flavor science, and cultural culinary discovery. This is the gap HealthPlate AI fills.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TripleCrisis;