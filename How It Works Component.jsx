// src/components/home/HowItWorks.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  Scan, 
  ChefHat, 
  Mic, 
  LineChart, 
  Heart,
  ArrowRight,
  Sparkles,
  Clock,
  Award
} from 'lucide-react';

const steps = [
  {
    phase: 'Input Phase',
    icon: <Upload className="h-6 w-6" />,
    steps: [
      { icon: <Upload />, title: 'Upload Medical Report', description: 'OCR extracts health data with BioBERT NLP' },
      { icon: <Scan />, title: 'Scan Fridge', description: 'Computer vision identifies ingredients & expiry' },
      { icon: <Heart />, title: 'Set Health Goals', description: 'Personalize for diabetes, PCOD, hypertension' }
    ]
  },
  {
    phase: 'AI Analysis',
    icon: <Sparkles className="h-6 w-6" />,
    steps: [
      { icon: <Brain />, title: 'Medical NLP', description: 'BioBERT parses health restrictions' },
      { icon: <Clock />, title: 'Expiry Prediction', description: 'Random Forest predicts days to expiry' },
      { icon: <ChefHat />, title: 'Flavor Analysis', description: 'FlavorDB molecular taste matching' }
    ]
  },
  {
    phase: 'Cooking',
    icon: <ChefHat className="h-6 w-6" />,
    steps: [
      { icon: <Sparkles />, title: 'Recipe Selection', description: 'Top 5 personalized recommendations' },
      { icon: <Mic />, title: 'Voice Assistant', description: 'Hands-free cooking with timers' },
      { icon: <Award />, title: 'Rate & Learn', description: 'RL model updates with your feedback' }
    ]
  },
  {
    phase: 'Impact',
    icon: <LineChart className="h-6 w-6" />,
    steps: [
      { icon: <LineChart />, title: 'Health Tracking', description: 'Prophet forecasts 90-day trends' },
      { icon: <Leaf />, title: 'Waste Dashboard', description: 'Track money saved, CO₂ prevented' },
      { icon: <Shield />, title: 'Blockchain Record', description: 'Immutable health & food journey' }
    ]
  }
];

const HowItWorks = () => {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How HealthPlate AI Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From medical report to personalized meal in 20 intelligent steps
          </p>
        </motion.div>

        {/* Phase Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            {steps.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activePhase === index
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{phase.icon}</span>
                {phase.phase}
              </button>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps[activePhase].steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center text-white mr-4">
                    {step.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-500">Step {index + 1}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Progress indicator */}
                <div className="mt-4 flex items-center">
                  <div className="flex-1 h-1 bg-gray-200 rounded-full">
                    <div 
                      className="h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full"
                      style={{ width: `${(index + 1) * 33}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">{index + 1}/3</span>
                </div>
              </div>
              
              {index < 2 && (
                <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Algorithm Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Multi-Constraint Recipe Optimizer
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              { label: 'Waste Prevention', weight: 35, color: 'green' },
              { label: 'Flavor Match', weight: 35, color: 'orange' },
              { label: 'Time Efficiency', weight: 20, color: 'blue' },
              { label: 'Novelty', weight: 10, color: 'purple' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke={`${item.color === 'green' ? '#10b981' : 
                                item.color === 'orange' ? '#f97316' :
                                item.color === 'blue' ? '#3b82f6' : '#8b5cf6'}`}
                      strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 56 * item.weight / 100} ${2 * Math.PI * 56}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">{item.weight}%</span>
                  </div>
                </div>
                <p className="mt-2 font-semibold text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-600 mt-6">
            Total Score = 0.35 × Waste Prevention + 0.35 × Flavor Match + 0.20 × Time Efficiency + 0.10 × Novelty
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;