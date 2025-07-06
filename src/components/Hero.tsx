import { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Preload video
    const video = document.createElement('video');
    video.src = 'https://www.shutterstock.com/shutterstock/videos/1067878640/preview/stock-footage-hyperlapse-time-lapse-of-construction-city-construction-of-a-large-area-with-skyscrapers-process.webm';
    video.onloadeddata = () => setVideoLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videoLoaded ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          >
            <source src="https://www.shutterstock.com/shutterstock/videos/1067878640/preview/stock-footage-hyperlapse-time-lapse-of-construction-city-construction-of-a-large-area-with-skyscrapers-process.webm" type="video/webm" />
          </video>
        ) : (
          <img
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Modern architecture"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20"></div>
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-5">
        <div className="grid-pattern opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">Innovative Architecture Studio</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-space-grotesk">
            Designing the
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future of Space
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Where cutting-edge technology meets timeless design. We create architectural masterpieces 
            that redefine how people live, work, and connect with their environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group border-2 border-gray-600 hover:border-cyan-400 text-white hover:bg-cyan-400/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3"
            >
              <Play className="w-5 h-5" />
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 lg:gap-8 text-center text-white">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 lg:p-6 hover:bg-gray-800/50 transition-all duration-300">
              <Award className="w-6 h-6 lg:w-8 lg:h-8 mb-2 text-cyan-400 mx-auto" />
              <span className="text-xl lg:text-3xl font-bold block">15+</span>
              <span className="text-xs lg:text-sm text-gray-300">Years Experience</span>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 lg:p-6 hover:bg-gray-800/50 transition-all duration-300">
              <Building className="w-6 h-6 lg:w-8 lg:h-8 mb-2 text-purple-400 mx-auto" />
              <span className="text-xl lg:text-3xl font-bold block">500+</span>
              <span className="text-xs lg:text-sm text-gray-300">Projects Completed</span>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 lg:p-6 hover:bg-gray-800/50 transition-all duration-300">
              <Users className="w-6 h-6 lg:w-8 lg:h-8 mb-2 text-pink-400 mx-auto" />
              <span className="text-xl lg:text-3xl font-bold block">100%</span>
              <span className="text-xs lg:text-sm text-gray-300">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;