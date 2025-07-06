import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, X, Send } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Quick contact form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsOpen(false);
    // Show success message or redirect
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={toggleWidget}
          className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-cyan-500/25"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Contact Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 max-w-[calc(100vw-3rem)]">
          <div className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4">
              <h3 className="text-white font-bold text-lg font-space-grotesk">Quick Contact</h3>
              <p className="text-cyan-100 text-sm">Get in touch with us instantly</p>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-b border-gray-700/50">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">Call Now</span>
                </a>
                <a
                  href="mailto:hello@instylearchitect.com"
                  className="flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-400 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">Email</span>
                </a>
              </div>
            </div>

            {/* Quick Form */}
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 text-sm"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={3}
                  className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 text-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>

            {/* Footer */}
            <div className="bg-gray-800/50 p-3 text-center">
              <p className="text-gray-400 text-xs">
                We'll respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={toggleWidget}
        ></div>
      )}
    </>
  );
};

export default FloatingContact;