// src/components/api/ApiOverview.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FlaskConical, 
  Pill, 
  GlassWater, 
  Leaf, 
  Heart,
  Code,
  Lock,
  Zap,
  BarChart
} from 'lucide-react';
import Button from '../common/Button';

const apis = [
  {
    name: 'RecipeDB',
    icon: <BookOpen className="h-8 w-8" />,
    description: '118,000+ recipes from across the globe',
    endpoints: 12,
    docs: '/docs/recipedb',
    color: 'green',
    features: ['Multi-cuisine search', 'Nutritional data', 'Cooking instructions']
  },
  {
    name: 'FlavorDB',
    icon: <FlaskConical className="h-8 w-8" />,
    description: 'Flavors of 24,000+ natural ingredients',
    endpoints: 8,
    docs: '/docs/flavordb',
    color: 'purple',
    features: ['Molecular compounds', 'Similarity scoring', 'Substitution engine']
  },
  {
    name: 'SpiceRx',
    icon: <Pill className="h-8 w-8" />,
    description: 'Phytochemical-disease associations for spices',
    endpoints: 6,
    docs: '/docs/spicerx',
    color: 'orange',
    features: ['Disease associations', 'Compound analysis', 'Therapeutic insights']
  },
  {
    name: 'CocktailDB',
    icon: <GlassWater className="h-8 w-8" />,
    description: '8,600+ cocktail recipes with nutrition',
    endpoints: 8,
    docs: '/docs/cocktaildb',
    color: 'blue',
    features: ['Mixology recipes', 'Nutrition facts', 'Ingredient substitutes']
  },
  {
    name: 'SustainableFoodDB',
    icon: <Leaf className="h-8 w-8" />,
    description: 'Environmental impact of 500+ foods',
    endpoints: 5,
    docs: '/docs/sustainable',
    color: 'emerald',
    comingSoon: true,
    features: ['Carbon footprint', 'Water usage', 'Sustainability scores']
  },
  {
    name: 'DietRxDB',
    icon: <Heart className="h-8 w-8" />,
    description: 'Food recommendations for 100+ diseases',
    endpoints: 5,
    docs: '/docs/dietrx',
    color: 'red',
    comingSoon: true,
    features: ['Disease-specific diets', 'Medical guidelines', 'Restriction mapping']
  }
];

const ApiOverview = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Computational Gastronomy APIs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade APIs for recipes, flavors, nutrition, health, and sustainability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apis.map((api, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {api.comingSoon && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                    Coming Soon
                  </span>
                </div>
              )}
              
              <div className={`inline-flex p-3 bg-${api.color}-100 rounded-xl mb-4`}>
                <div className={`text-${api.color}-600`}>{api.icon}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{api.name}</h3>
              <p className="text-gray-600 mb-4">{api.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Code className="h-4 w-4 mr-1" />
                  {api.endpoints} REST Endpoints
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {api.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className={`inline-block w-1.5 h-1.5 rounded-full bg-${api.color}-500 mr-2`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={api.comingSoon ? "outline" : "primary"} 
                size="sm" 
                fullWidth
                to={api.docs}
                disabled={api.comingSoon}
              >
                {api.comingSoon ? 'Preview Docs' : 'View Documentation'}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* API Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid md:grid-cols-4 gap-6"
        >
          {[
            { icon: <Lock />, stat: '99.9%', label: 'Uptime SLA', desc: 'Enterprise reliability' },
            { icon: <Zap />, stat: '<200ms', label: 'Response Time', desc: 'P95 latency' },
            { icon: <BarChart />, stat: '10K+', label: 'Req/Min', desc: 'Auto-scaling' },
            { icon: <Code />, stat: 'REST/GraphQL', label: 'Both Supported', desc: 'Flexible integration' }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="inline-flex p-3 bg-green-100 rounded-full text-green-600 mb-3">
                {item.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900">{item.stat}</div>
              <div className="font-semibold text-gray-700">{item.label}</div>
              <div className="text-sm text-gray-500">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ApiOverview;