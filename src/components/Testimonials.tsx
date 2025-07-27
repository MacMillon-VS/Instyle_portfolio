import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Users } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

const testimonials = [
  {
    id: 1,
    name: 'Karthik Subramanian',
    role: 'IT Professional',
    company: 'Chennai',
    image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 5,
    text: 'We approached them to build our dream home in Tambaram, and they exceeded our expectations. The team was professional, transparent with costs, and always on time. Our 3BHK house came out exactly as we envisioned.',
    project: 'New House Construction in Tambaram'
  },
  {
    id: 2,
    name: 'Revathi Rajan',
    role: 'Boutique Owner',
    company: 'Coimbatore',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 5,
    text: 'I had an old shop in Gandhipuram that needed a full renovation. The team handled everything from design to execution with great care. The new interiors attract more customers and I’ve seen a real boost in business.',
    project: 'Shop Renovation Gandhipuram, Coimbatore'
  },
  {
    id: 3,
    name: 'Manoj Kumar',
    role: 'Bank Manager',
    company: 'Madurai',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 5,
    text: 'We wanted to add an extra floor to our existing house for my son’s family. The team gave us smart structural solutions and completed the project with minimal disturbance. Very happy with the quality of work.',
    project: 'Home Extension Project Madurai'
  },
  {
    id: 4,
    name: 'Priya Balasubramanian',
    role: 'Teacher',
    company: 'Trichy',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 5,
    text: 'I got my ancestral home in Srirangam upgraded with modern fittings and interiors while keeping the old charm intact. The team showed great respect for tradition while giving it a fresh, elegant look.',
    project: 'Heritage Home Upgrade Srirangam, Trichy'
  },
  {
    id: 5,
    name: 'Senthil Murugan',
    role: 'Entrepreneur',
    company: 'Salem',
    image: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    rating: 5,
    text: 'They constructed a small commercial complex for me in Salem. I appreciated their planning, legal guidance, and timely delivery. The building was ready for rent faster than I expected. Highly recommended!',
    project: 'Commercial Building Construction Salem'
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
                {/* <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-gray-600/50 shadow-xl"
                    />
                    <div className="absolute inset-0 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
                  </div>
                </div> */}
                
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
              { number: '50+', label: 'Happy Clients' },
              { number: '99%', label: 'Satisfaction Rate' },
              { number: '5+', label: 'Awards Won' },
              { number: '5+', label: 'Years Experience' }
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