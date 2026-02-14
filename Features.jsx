// src/components/home/Features.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Camera, 
  Mic, 
  LineChart, 
  Shield, 
  Globe, 
  Leaf, 
  Sparkles,
  Heart,
  Recycle,
  Trophy,
  Languages
} from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-purple-600" />,
    title: 'Medical Intelligence',
    description: 'OCR-based medical report analysis with BioBERT NLP for automatic health restriction extraction',
    details: ['Upload lab reports', 'Auto-extract restrictions', 'Real-time nutrition tracking'],
    color: 'purple'
  },
  {
    icon: <Recycle className="h-8 w-8 text-green-600" />,
    title: 'Zero-Waste Kitchen',
    description: 'Smart inventory tracking with ML-based expiry prediction using Random Forest',
    details: ['Photo recognition', 'Expiry alerts', 'Waste impact dashboard'],
    color: 'green'
  },
  {
    icon: <Sparkles className="h-8 w-8 text-orange-600" />,
    title: 'FlavorFusion AI',
    description: 'Multi-constraint optimization with FlavorDB molecular gastronomy',
    details: ['85-90% taste similarity', 'Ingredient substitutions', 'Health-safe swaps'],
    color: 'orange'
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: 'Cultural Discovery',
    description: 'Gamified cuisine exploration with progressive learning paths',
    details: ['30+ cuisines', 'Unlock achievements', 'Cultural stories'],
    color: 'blue'
  },
  {
    icon: <Mic className="h-8 w-8 text-red-600" />,
    title: 'Voice-First Assistant',
    description: 'Multilingual cooking assistant with hands-free control',
    details: ['5+ Indian languages', 'Natural language', 'Smart timers'],
    color: 'red'
  },
  {
    icon: <LineChart className="h-8 w-8 text-indigo-600" />,
    title: 'Predictive Analytics',
    description: 'Facebook Prophet time-series forecasting for health metrics',
    details: ['90-day predictions', 'Anomaly detection', 'Health trends'],
    color: 'indigo'
  },
  {
    icon: <Shield className="h-8 w-8 text-cyan-600" />,
    title: 'Blockchain Trust',
    description: 'Polygon-based supply chain traceability with NFT certificates',
    details: ['Farm to table', 'Organic verification', 'Immutable records'],
    color: 'cyan'
  },
  {
    icon: <Camera className="h-8 w-8 text-pink-600" />,
    title: 'Computer Vision',
    description: 'EfficientNet-B0 for food recognition and freshness detection',
    details: ['500+ food items', 'Freshness scoring', 'Portion estimation'],
    color: 'pink'
  },
  {
    icon: <Trophy className="h-8 w-8 text-yellow-600" />,
    title: 'RL Personalization',
    description: 'Thompson Sampling algorithm that learns from your ratings',
    details: ['Self-learning AI', 'Personalized picks', 'Continuous improvement'],
    color: 'yellow'
  },
  {
    icon: <Languages className="h-8 w-8 text-emerald-600" />,
    title: 'Multilingual Support',
    description: 'Full platform support for 5 Indian languages',
    details: ['Hindi', 'Tamil', 'Bengali', 'Punjabi', 'English'],
    color: 'emerald'
  },
  {
    icon: <Heart className="h-8 w-8 text-rose-600" />,
    title: 'Medical Integration',
    description: 'WHO + ICMR guidelines integrated for condition-specific diets',
    details: ['Diabetes', 'Hypertension', 'PCOD', 'Heart health'],
    color: 'rose'
  },
  {
    icon: <Leaf className="h-8 w-8 text-lime-600" />,
    title: 'Sustainability Tracking',
    description: 'Real-time CO₂ savings and environmental impact dashboard',
    details: ['Carbon footprint', 'Water conservation', 'Waste reduction'],
    color: 'lime'
  }
];

const Features = () => {
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
            Powered by Advanced AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            12 integrated AI microservices working together to transform your kitchen into a health & sustainability hub
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${feature.color}-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className={`inline-flex p-3 bg-${feature.color}-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <span className={`inline-block w-1.5 h-1.5 rounded-full bg-${feature.color}-500 mr-2`}></span>
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className={`text-xs font-semibold text-${feature.color}-600 bg-${feature.color}-50 px-2 py-1 rounded-full`}>
                  {feature.title.split(' ')[0]} AI
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;