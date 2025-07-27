import { CheckCircle, Target, Heart, Star, Zap, Shield } from 'lucide-react';
import ceo from '../assests/ceo1.jpeg'

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-3 mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">About Instyle Architect</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
              Pioneering the Future of
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Architectural Design
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              With over 3 years of innovation, we've redefined architectural excellence through 
              cutting-edge technology and visionary design principles
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="space-y-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-white font-space-grotesk">Our Vision</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Founded in 2022, Instyle Architect has evolved from a boutique design studio to a 
                recognized architectural powerhouse. We specialize in creating spaces that 
                seamlessly blend innovation, sustainability, and human-centered design.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle, text: 'Customized Solutions' },
                  { icon: Shield, text: 'Sustainable Solutions' },
                  { icon: Zap, text: 'Smart Integration' },
                  { icon: Target, text: 'Precision Engineering' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/50 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Modern architectural design"
                className="relative rounded-2xl shadow-2xl border border-gray-700/50 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Founder Section */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center font-space-grotesk">Meet Our Visionary</h3>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  {/* https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop */}
                  <img
                    src={ceo}
                    alt="Imran Khan - Founder & Principal Architect"
                    className="w-48 h-48 lg:w-56 lg:h-56 rounded-full mx-auto lg:mx-0 object-cover shadow-2xl border-4 border-gray-700/50"
                  />
                  <div className="absolute inset-0 w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 mx-auto lg:mx-0 animate-pulse"></div>
                </div>
                <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-space-grotesk">Imran Khan</h4>
                <p className="text-cyan-400 font-semibold mb-4 text-lg">Founder & Principal Architect</p>
                <div className="flex justify-center lg:justify-start gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed text-lg">
                  "Architecture is not just about creating buildings; it's about crafting experiences 
                  that elevate human potential. At Instyle Architect, we harness the power of AI and 
                  sustainable design to create spaces that adapt, inspire, and endure."
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/20 rounded-2xl hover:from-cyan-500/20 hover:to-cyan-600/20 transition-all duration-300">
                    <Target className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <p className="font-semibold text-cyan-400 text-lg">Innovation First</p>
                    <p className="text-gray-400 text-sm mt-1">Cutting-edge solutions</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl hover:from-purple-500/20 hover:to-purple-600/20 transition-all duration-300">
                    <Heart className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <p className="font-semibold text-purple-400 text-lg">Human-Centered</p>
                    <p className="text-gray-400 text-sm mt-1">People-first design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;