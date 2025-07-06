import React from 'react';
import { Compass, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Compass className="w-10 h-10 text-cyan-400" />
                  <div className="absolute inset-0 w-10 h-10 bg-cyan-400/20 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-space-grotesk">
                    Instyle
                  </span>
                  <span className="text-2xl font-bold text-white font-space-grotesk ml-1">
                    Architect
                  </span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Pioneering the future of architectural design through innovation, sustainability, 
                and human-centered spaces that inspire and endure.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Youtube, href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 p-3 rounded-xl transition-all duration-300 hover:scale-110 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 font-space-grotesk">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Pricing', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 font-space-grotesk">Services</h3>
              <ul className="space-y-3">
                {[
                  'Residential Architecture',
                  'Commercial Spaces',
                  'Interior Innovation',
                  'Exterior Design',
                  'AI-Powered Planning',
                  'Sustainable Solutions'
                ].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 font-space-grotesk">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-400">hello@instylearchitect.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg mt-1">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-400 leading-relaxed">
                    123 Innovation Drive<br />
                    Los Angeles, CA 90210
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 lg:mt-16 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 Instyle Architect. All rights reserved. Designed for the future.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;