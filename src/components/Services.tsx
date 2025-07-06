import { Home, Building2, Paintbrush, Wrench, Lightbulb, Cpu, Leaf } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Architecture',
      description: 'Smart homes that adapt to your lifestyle with integrated AI and sustainable technologies.',
      features: ['Smart Home Integration', 'Sustainable Design', 'Custom Architecture', 'Energy Optimization'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Building2,
      title: 'Commercial Spaces',
      description: 'Future-ready commercial buildings designed for productivity and innovation.',
      features: ['Corporate Offices', 'Retail Spaces', 'Co-working Hubs', 'Mixed-Use Developments'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Paintbrush,
      title: 'Interior Innovation',
      description: 'Immersive interior experiences that blend aesthetics with cutting-edge functionality.',
      features: ['3D Visualization', 'Smart Lighting', 'Biophilic Design', 'Adaptive Spaces'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Wrench,
      title: 'Exterior Design',
      description: 'Stunning facades and landscapes that create lasting impressions and sustainable environments.',
      features: ['Facade Engineering', 'Landscape Architecture', 'Outdoor Living', 'Green Infrastructure'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cpu,
      title: 'AI-Powered Planning',
      description: 'Revolutionary design process using artificial intelligence for optimal space utilization.',
      features: ['Generative Design', 'Performance Analysis', 'Predictive Modeling', 'Optimization Algorithms'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Leaf,
      title: 'Sustainable Solutions',
      description: 'Eco-friendly designs that minimize environmental impact while maximizing efficiency.',
      features: ['Carbon Neutral Design', 'Renewable Energy', 'Waste Reduction', 'Circular Economy'],
      gradient: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-800">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-full px-6 py-3 mb-6">
              <Lightbulb className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
              Comprehensive Design
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              From concept to completion, we offer cutting-edge architectural services powered by innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 lg:p-8 hover:border-gray-600/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 font-space-grotesk">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;