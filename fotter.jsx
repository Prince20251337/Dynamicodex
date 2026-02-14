// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  GithubIcon as GitHub,
  LinkedinIcon as LinkedIn,
  TwitterIcon as XTwitter
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
              HealthPlate AI
            </h3>
            <p className="text-gray-400 mb-4">
              The world's first integrated food intelligence platform combining medical nutrition, 
              zero-waste cooking, and cultural gastronomy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <GitHub className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <XTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedIn className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {['Features', 'APIs', 'Pricing', 'Documentation', 'Changelog'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {['For Patients', 'For Hospitals', 'For Enterprises', 'For Developers', 'Partners'].map((item) => (
                <li key={item}>
                  <Link to={`/solutions#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                contact@healthplate.ai
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +91-7793820447
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                New Delhi, India
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-r-lg hover:from-green-700 hover:to-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 HealthPlate AI. All rights reserved. Made with <Heart className="h-4 w-4 inline text-red-500" /> for better health.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
            <Link to="/security" className="text-gray-400 hover:text-white text-sm">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;