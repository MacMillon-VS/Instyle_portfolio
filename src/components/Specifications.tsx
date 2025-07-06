import { useState } from 'react';
import { Settings, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import detailCardData from '../data/detailCardData';

const Specifications = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getGradientClass = (index: number) => {
    const gradients = [
      'from-cyan-500 to-blue-500',
      'from-purple-500 to-pink-500',
      'from-orange-500 to-red-500',
      'from-green-500 to-emerald-500',
      'from-indigo-500 to-purple-500',
      'from-teal-500 to-cyan-500',
      'from-yellow-500 to-orange-500',
      'from-pink-500 to-rose-500',
      'from-blue-500 to-indigo-500'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="specifications" className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-3 mb-6">
              <Settings className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Detailed Specifications</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
              Construction
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Specifications
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive breakdown of materials, standards, and quality levels for every aspect of construction
            </p>
          </div>

          <div className="space-y-6">
            {detailCardData.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleCard(index)}
                  className="w-full p-6 lg:p-8 flex items-center justify-between hover:bg-gray-800/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`bg-gradient-to-r ${getGradientClass(index)} w-12 h-12 rounded-xl flex items-center justify-center`}>
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white font-space-grotesk text-left">
                      {category.title}
                    </h3>
                  </div>
                  {expandedCard === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                {expandedCard === index && (
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8 mt-12">
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                      {/* Basic Column */}
                      <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm border border-gray-600/50 rounded-xl p-6">
                        <div className="text-center mb-6">
                          <h4 className="text-xl lg:text-2xl font-bold text-white mb-2 font-space-grotesk">
                            {category.col1Heading}
                          </h4>
                          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
                        </div>
                        <ul className="space-y-3">
                          {category.col1Features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Standard Column */}
                      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 relative">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Popular
                        </div>
                        <div className="text-center mb-6">
                          <h4 className="text-xl lg:text-2xl font-bold text-white mb-2 font-space-grotesk">
                            {category.col2Heading}
                          </h4>
                          <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
                        </div>
                        <ul className="space-y-3">
                          {category.col2Features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Premium Column */}
                      <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm border border-gray-600/50 rounded-xl p-6">
                        <div className="text-center mb-6">
                          <h4 className="text-xl lg:text-2xl font-bold text-white mb-2 font-space-grotesk">
                            {category.col3Heading}
                          </h4>
                          <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
                        </div>
                        <ul className="space-y-3">
                          {category.col3Features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16 lg:mt-20">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-space-grotesk">
                Need Custom Specifications?
              </h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Our team can customize specifications based on your specific requirements, budget, and preferences.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Discuss Custom Requirements
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;