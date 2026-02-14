// src/components/home/USP.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  FlaskConical, 
  Link, 
  Sparkles, 
  Eye, 
  TrendingUp,
  Shield,
  Globe,
  Zap,
  Brain,
  Cpu,
  Network
} from 'lucide-react';

const usps = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "World's First Triple Integration",
    description: 'Combines Medical Health + Food Waste + Cultural Discovery in one platform',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <FlaskConical className="h-8 w-8" />,
    title: 'Scientific Flavor Matching',
    description: 'Molecular gastronomy with 85-90% taste similarity for health-safe substitutions',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: <Link className="h-8 w-8" />,
    title: 'Blockchain Food Traceability',
    description: 'Polygon-based supply chain tracking with NFT organic certificates',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Self-Learning AI',
    description: 'Thompson Sampling RL continuously improves recommendations',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: 'Computer Vision Assistance',
    description: 'EfficientNet-B0 for ingredient ID, freshness, and portion estimation',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Predictive Analytics',
    description: 'Facebook Prophet forecasts health metrics 90 days ahead',
    color: 'from-indigo-500 to-blue-500'
  }
];

const USP = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Makes Us Unique
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six revolutionary innovations that set HealthPlate AI apart
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${usp.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`inline-flex p-3 bg-gradient-to-r ${usp.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {usp.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {usp.title}
                </h3>
                
                <p className="text-gray-600">
                  {usp.description}
                </p>

                <div className="mt-4 flex items-center text-sm">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${usp.color} font-semibold`}>
                    Learn more →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Powered by Enterprise-Grade Technology
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Brain />, label: 'BioBERT NLP', tech: 'Medical Report Analysis' },
              { icon: <Cpu />, label: 'EfficientNet-B0', tech: 'Computer Vision' },
              { icon: <Network />, label: 'Thompson Sampling', tech: 'Reinforcement Learning' },
              { icon: <TrendingUp />, label: 'Facebook Prophet', tech: 'Time-Series Forecasting' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-3 bg-white rounded-xl shadow-md mb-3">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900">{item.label}</h4>
                <p className="text-sm text-gray-600">{item.tech}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default USP;