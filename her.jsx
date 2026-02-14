// src/components/home/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Sparkles, Shield, Zap, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-8">
              <Sparkles className="h-4 w-4 mr-2" />
              World's First Integrated Food Intelligence Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Eat What You Love,
            </span>
            <br />
            <span className="text-gray-900">Live How You Want,</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Waste Nothing
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            The first AI-powered platform combining medical nutrition science, 
            zero-waste cooking, and cultural gastronomy into one intelligent system.
            Powered by RecipeDB, FlavorDB, and advanced machine learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="primary" size="lg" to="/contact">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" to="/demo">
              Watch Demo
            </Button>
            <Button variant="ghost" size="lg" to="/docs">
              View API Docs →
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-gray-600">HIPAA Compliant</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Zap className="h-5 w-5 text-blue-600" />
              <span className="text-gray-600">Real-time AI Processing</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="text-gray-600">50,000+ Active Users</span>
            </div>
          </motion.div>

          {/* App store badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 flex justify-center space-x-4"
          >
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">4.8★ (App Store)</span>
            </div>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">4.9★ (Play Store)</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;