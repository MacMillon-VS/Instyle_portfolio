import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Users } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      company: 'Fortune 500 Technology Company',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: 'Instyle Architect transformed our corporate headquarters into a space that truly reflects our innovative culture. The AI-powered design process was revolutionary, and the sustainable features have reduced our energy costs by 40%.',
      project: 'Corporate Headquarters Redesign'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Homeowner',
      company: 'Private Residence',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: 'Our smart home is beyond anything we imagined. The adaptive lighting, climate control, and space optimization make daily life effortless. The design seamlessly blends technology with comfort.',
      project: 'Smart Home Integration'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Creative Director',
      company: 'Design Studio',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: 'The retail space they designed for us has increased foot traffic by 60%. The immersive environment and smart layout create an unforgettable customer experience. Absolutely brilliant work.',
      project: 'Flagship Store Design'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Property Developer',
      company: 'Urban Development Group',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: 'Working with Instyle Architect on our mixed-use development was exceptional. Their sustainable approach and innovative design solutions created a landmark that sets new standards for urban living.',
      project: 'Mixed-Use Development'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gray-800">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-full px-6 py-3 mb-6">
              <Users className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Client Testimonials</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
              What Our Clients
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Say About Us
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover why leading companies and discerning homeowners choose Instyle Architect
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Main Testimonial */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-gray-600/50 shadow-xl"
                    />
                    <div className="absolute inset-0 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <Quote className="w-8 h-8 lg:w-12 lg:h-12 text-cyan-400 mb-4 mx-auto lg:mx-0" />
                  <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl lg:text-2xl font-bold text-white font-space-grotesk">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-cyan-400 font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                    <p className="text-purple-400 text-sm font-medium">
                      Project: {testimonials[currentTestimonial].project}
                    </p>
                    
                    <div className="flex justify-center lg:justify-start gap-1 pt-2">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 text-white p-3 rounded-full transition-all duration-300 hover:bg-gray-700/50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 text-white p-3 rounded-full transition-all duration-300 hover:bg-gray-700/50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16 lg:mt-24">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '50+', label: 'Awards Won' },
              { number: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 font-space-grotesk">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;