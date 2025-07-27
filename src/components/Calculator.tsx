import { useState, useEffect } from 'react';
import {  Home, Building2, Paintbrush, Wrench, Cpu, Sparkles } from 'lucide-react';

const Calculator = () => {
  const [formData, setFormData] = useState({
    projectType: 'residential',
    area: '',
    rooms: '1',
    quality: 'professional',
    timeline: 'standard',
    smartFeatures: 'basic',
    sustainability: 'standard'
  });

  const [estimate, setEstimate] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  // Enhanced base rates per square foot
  const baseRates = {
    residential: { essential: 80, professional: 150, visionary: 300 },
    commercial: { essential: 100, professional: 180, visionary: 350 },
    interior: { essential: 60, professional: 120, visionary: 250 },
    exterior: { essential: 40, professional: 80, visionary: 180 }
  };

  // Enhanced multipliers
  const multipliers = {
    timeline: { rush: 1.4, standard: 1.0, flexible: 0.85 },
    smartFeatures: { basic: 1.0, advanced: 1.3, premium: 1.6 },
    sustainability: { standard: 1.0, enhanced: 1.2, carbon_neutral: 1.5 }
  };

  useEffect(() => {
    calculateEstimate();
  }, [formData]);

  const calculateEstimate = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const { projectType, area, rooms, quality, timeline, smartFeatures, sustainability } = formData;
      
      if (!area || parseInt(area) <= 0) {
        setEstimate(0);
        setIsCalculating(false);
        return;
      }

      const sqft = parseInt(area);
      const roomCount = parseInt(rooms);
      const baseRate = baseRates[projectType as keyof typeof baseRates][quality as keyof typeof baseRates.residential];
      const timelineMultiplier = multipliers.timeline[timeline as keyof typeof multipliers.timeline];
      const smartMultiplier = multipliers.smartFeatures[smartFeatures as keyof typeof multipliers.smartFeatures];
      const sustainabilityMultiplier = multipliers.sustainability[sustainability as keyof typeof multipliers.sustainability];

      let total = sqft * baseRate * timelineMultiplier * smartMultiplier * sustainabilityMultiplier;
      
      // Add complexity for multiple rooms
      if (roomCount > 1) {
        total += (roomCount - 1) * 2000;
      }

      // Add AI design premium
      total += sqft * 10;

      setEstimate(Math.round(total));
      setIsCalculating(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // const getProjectIcon = (type: string) => {
  //   const icons = {
  //     residential: Home,
  //     commercial: Building2,
  //     interior: Paintbrush,
  //     exterior: Wrench
  //   };
  //   return icons[type as keyof typeof icons];
  // };

  return (
    <section id="calculator" className="py-20 lg:py-32 bg-gray-800">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-full px-6 py-3 mb-6">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">AI-Powered Calculator</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
              Project Cost
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Calculator
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Get an intelligent estimate powered by AI analysis and market data
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Calculator Form */}
              <div className="space-y-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 font-space-grotesk">Project Details</h3>
                
                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">Project Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'residential', label: 'Residential', icon: Home },
                      { value: 'commercial', label: 'Commercial', icon: Building2 },
                      { value: 'interior', label: 'Interior', icon: Paintbrush },
                      { value: 'exterior', label: 'Exterior', icon: Wrench }
                    ].map(option => {
                      const Icon = option.icon;
                      return (
                        <button
                          key={option.value}
                          onClick={() => handleInputChange('projectType', option.value)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                            formData.projectType === option.value
                              ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                              : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:bg-gray-700/30'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{option.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Area */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Area (Square Feet)
                  </label>
                  <input
                    type="number"
                    value={formData.area}
                    onChange={(e) => handleInputChange('area', e.target.value)}
                    className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter square footage"
                  />
                </div>

                {/* Rooms */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Number of Rooms
                  </label>
                  <select
                    value={formData.rooms}
                    onChange={(e) => handleInputChange('rooms', e.target.value)}
                    className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(num => (
                      <option key={num} value={num.toString()}>{num} Room{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                {/* Quality */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Quality Level
                  </label>
                  <select
                    value={formData.quality}
                    onChange={(e) => handleInputChange('quality', e.target.value)}
                    className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  >
                    <option value="essential">Essential - Modern standards</option>
                    <option value="professional">Professional - Premium quality</option>
                    <option value="visionary">Visionary - Luxury materials</option>
                  </select>
                </div>

                {/* Smart Features */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Smart Features
                  </label>
                  <select
                    value={formData.smartFeatures}
                    onChange={(e) => handleInputChange('smartFeatures', e.target.value)}
                    className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  >
                    <option value="basic">Basic - Essential automation</option>
                    <option value="advanced">Advanced - Full smart home</option>
                    <option value="premium">Premium - AI-powered systems</option>
                  </select>
                </div>

                {/* Sustainability */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Sustainability Level
                  </label>
                  <select
                    value={formData.sustainability}
                    onChange={(e) => handleInputChange('sustainability', e.target.value)}
                    className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  >
                    <option value="standard">Standard - Energy efficient</option>
                    <option value="enhanced">Enhanced - Green building</option>
                    <option value="carbon_neutral">Carbon Neutral - Net zero</option>
                  </select>
                </div>
              </div>

              {/* Estimate Display */}
              <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-white font-space-grotesk">AI Estimate</h3>
                </div>
                
                <div className="text-center mb-8">
                  {isCalculating ? (
                    <div className="space-y-4">
                      <div className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto"></div>
                      <p className="text-gray-400">Calculating with AI...</p>
                    </div>
                  ) : (
                    <>
                      <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3 font-space-grotesk">
                        ${estimate.toLocaleString()}
                      </div>
                      <p className="text-gray-400 text-lg">Estimated project cost</p>
                    </>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-600/30">
                    <span className="text-gray-400">Project Type:</span>
                    <span className="font-semibold text-white capitalize">{formData.projectType}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-600/30">
                    <span className="text-gray-400">Area:</span>
                    <span className="font-semibold text-white">{formData.area || '0'} sq ft</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-600/30">
                    <span className="text-gray-400">Quality:</span>
                    <span className="font-semibold text-white capitalize">{formData.quality}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-600/30">
                    <span className="text-gray-400">Smart Features:</span>
                    <span className="font-semibold text-white capitalize">{formData.smartFeatures}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-400">Sustainability:</span>
                    <span className="font-semibold text-white capitalize">{formData.sustainability.replace('_', ' ')}</span>
                  </div>
                </div>

                <div className="border-t border-gray-600/30 pt-6">
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    * AI-generated estimate based on current market data, material costs, and project complexity. 
                    Final pricing may vary based on specific requirements and site conditions.
                  </p>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                    Get Detailed Proposal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;