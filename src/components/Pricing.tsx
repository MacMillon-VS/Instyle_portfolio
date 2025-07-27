import { Check, Star, Crown, Zap, Sparkles } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Essential',
      icon: Zap,
      price: '₹1799',
      period: 'per aq ft',
      description: 'Perfect for modern renovations with smart features',
      features: [
        'AI-Assisted Design',
        'Smart Material Selection',
        'Project Management',
        'Quality Assurance',
        '6-Month Warranty',
        "RCC framed structure", 
        " Basic materials", "RCC foundation & roof"
      ],
      popular: false,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Professional',
      icon: Star,
      price: '₹2099',
      period: 'per room',
      description: 'Complete transformation with advanced technology',
      features: [
        'Full AI Design Suite',
        'Premium Sustainable Materials',
        'Dedicated Project Manager',
        'Quality Assurance',
        '2-Year Warranty',
        'Advanced Smart Home',
        'Free Organic Terrace Gardening',
        '24/7 Priority Support'
      ],
      popular: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Visionary',
      icon: Crown,
      price: '₹2299',
      period: 'per room',
      description: 'Ultimate luxury with cutting-edge innovation',
      features: [
        'Custom AI Architecture',
        'Luxury Sustainable Materials',
        'Dedicated Design Team',
        'Quality Assurance',
        '5-Year Warranty',
        'Full Smart Ecosystem',
        'Adaptive Living Systems',
        'Lifetime Maintenance',
        'Future-Proof Technology'
      ],
      popular: false,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Transparent Pricing</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
              Investment in
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect package for your architectural vision and budget
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              
              return (
                <div
                  key={index}
                  className={`relative group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:transform hover:-translate-y-2 flex flex-col justify-around ${
                    plan.popular 
                      ? 'border-purple-500/50 shadow-2xl shadow-purple-500/10 scale-105' 
                      : 'border-gray-700/50 hover:border-gray-600/50 hover:shadow-2xl'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`bg-gradient-to-r ${plan.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 font-space-grotesk">{plan.name}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{plan.description}</p>
                    <div className="mb-6">
                      <span className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-2 text-lg">{plan.period}</span>
                    </div>
                  

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          <Check className="w-5 h-5 text-green-400" />
                        </div>
                        <span className="text-gray-300 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  </div>
<div className='flex justify-between flex-col'>
                  <button className={`w-full py-4 rounded-2xl font-semibold text-white transition-all duration-300 bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:scale-105`}>
                    Get Started
                  </button>
                </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16 lg:mt-20">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-space-grotesk">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Our AI-powered pricing calculator can provide accurate estimates for your unique project requirements.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('calculator');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Use AI Calculator
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;