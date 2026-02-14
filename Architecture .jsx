// src/components/technology/Architecture.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Server, 
  Database, 
  Shield, 
  Cpu, 
  Network,
  ArrowDown,
  Globe,
  Lock,
  Zap
} from 'lucide-react';

const Architecture = () => {
  const layers = [
    {
      name: 'Presentation Layer',
      icon: <Globe className="h-6 w-6" />,
      tech: ['React Native 0.73', 'Next.js 14', 'Tailwind CSS', 'TypeScript 5.x'],
      color: 'blue'
    },
    {
      name: 'API Gateway',
      icon: <Network className="h-6 w-6" />,
      tech: ['Kong Gateway', 'JWT Auth', 'Rate Limiting', 'Load Balancing'],
      color: 'purple'
    },
    {
      name: 'API Layer',
      icon: <Server className="h-6 w-6" />,
      tech: ['Express.js', 'Apollo Server', 'Socket.io', 'REST/GraphQL'],
      color: 'green'
    },
    {
      name: 'Application Services',
      icon: <Cpu className="h-6 w-6" />,
      tech: ['Medical Intel', 'Recipe Engine', 'Waste Manager', 'Analytics'],
      color: 'orange'
    },
    {
      name: 'AI/ML Microservices',
      icon: <Zap className="h-6 w-6" />,
      tech: ['BioBERT', 'EfficientNet', 'Prophet', 'Thompson Sampling'],
      color: 'red'
    },
    {
      name: 'Data Layer',
      icon: <Database className="h-6 w-6" />,
      tech: ['MongoDB Atlas', 'Redis', 'InfluxDB', 'Elasticsearch'],
      color: 'indigo'
    },
    {
      name: 'External Integrations',
      icon: <Globe className="h-6 w-6" />,
      tech: ['RecipeDB', 'FlavorDB', 'Polygon', 'Google Vision'],
      color: 'pink'
    },
    {
      name: 'Infrastructure',
      icon: <Shield className="h-6 w-6" />,
      tech: ['AWS ECS', 'Kubernetes', 'GitHub Actions', 'CloudFront'],
      color: 'gray'
    }
  ];

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
            System Architecture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cloud-native, microservices-based architecture with 8 independent layers
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="relative">
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center mb-4"
            >
              <div className={`w-16 h-16 rounded-xl bg-${layer.color}-100 flex items-center justify-center text-${layer.color}-600 mr-4`}>
                {layer.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-900 mr-3">{layer.name}</h3>
                  <div className="flex space-x-2">
                    {layer.tech.slice(0, 2).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                    {layer.tech.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{layer.tech.length - 2}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-${layer.color}-500 rounded-full`}
                  ></motion.div>
                </div>
              </div>
              
              {index < layers.length - 1 && (
                <ArrowDown className="absolute left-8 text-gray-400" style={{ top: `${index * 80 + 70}px` }} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Technology Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Complete Technology Stack
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Frontend Stack */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Globe className="h-5 w-5 text-blue-600 mr-2" />
                Frontend
              </h4>
              <ul className="space-y-2">
                {['React Native 0.73', 'Next.js 14', 'TypeScript 5.x', 'Tailwind CSS', 'Redux Toolkit', 'Framer Motion'].map((tech, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Backend Stack */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Server className="h-5 w-5 text-green-600 mr-2" />
                Backend
              </h4>
              <ul className="space-y-2">
                {['Node.js 20', 'Express.js', 'Apollo Server', 'Socket.io', 'Kong Gateway', 'Python 3.10'].map((tech, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Database Stack */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Database className="h-5 w-5 text-purple-600 mr-2" />
                Database
              </h4>
              <ul className="space-y-2">
                {['MongoDB Atlas', 'Redis 7.2', 'InfluxDB 2.7', 'Elasticsearch 8', 'AWS S3', 'IPFS'].map((tech, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;