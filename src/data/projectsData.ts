export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
  date: string;
  description: string;
  client: string;
  area: string;
  duration: string;
  budget: string;
  gallery: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  technologies: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Neo Residence',
    category: 'residential',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    location: 'Beverly Hills, CA',
    date: '2024',
    description: 'AI-integrated smart home with adaptive living spaces and sustainable energy systems.',
    client: 'Private Client',
    area: '4,500 sq ft',
    duration: '18 months',
    budget: '$2.5M - $3M',
    gallery: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    features: [
      'AI-powered climate control system',
      'Adaptive lighting that responds to circadian rhythms',
      'Smart glass windows with privacy control',
      'Integrated renewable energy systems',
      'Biophilic design elements throughout',
      'Voice-controlled home automation',
      'Advanced security with facial recognition',
      'Sustainable water management system'
    ],
    challenges: [
      'Integrating cutting-edge AI technology seamlessly',
      'Maintaining aesthetic appeal while maximizing functionality',
      'Ensuring energy efficiency without compromising comfort',
      'Creating adaptive spaces that evolve with user needs'
    ],
    solutions: [
      'Custom AI algorithms for personalized home automation',
      'Modular design allowing for future technology upgrades',
      'Triple-glazed smart windows for optimal energy performance',
      'Flexible room configurations using movable partitions'
    ],
    technologies: [
      'IoT sensors and smart home integration',
      'Solar panels with battery storage',
      'Geothermal heating and cooling',
      'Smart glass technology',
      'AI-powered home management system'
    ]
  },
  {
    id: 2,
    title: 'Quantum Tower',
    category: 'commercial',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    location: 'Downtown LA',
    date: '2023',
    description: 'Revolutionary 40-story office complex with carbon-neutral design and smart building systems.',
    client: 'Quantum Corp',
    area: '850,000 sq ft',
    duration: '36 months',
    budget: '$150M - $200M',
    gallery: [
      'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    features: [
      'Carbon-neutral building operations',
      'Smart elevator systems with AI optimization',
      'Flexible workspace configurations',
      'Rooftop gardens and green spaces',
      'Advanced air filtration systems',
      'Energy-efficient LED lighting throughout',
      'Smart parking with EV charging stations',
      'Integrated wellness and fitness facilities'
    ],
    challenges: [
      'Achieving carbon neutrality in a high-rise structure',
      'Optimizing vertical transportation for 40 floors',
      'Creating collaborative spaces in a post-pandemic world',
      'Integrating sustainable systems without compromising design'
    ],
    solutions: [
      'Innovative carbon capture and offset programs',
      'AI-powered elevator scheduling and traffic management',
      'Modular office spaces with movable walls',
      'Integrated renewable energy and smart grid systems'
    ],
    technologies: [
      'Building Information Modeling (BIM)',
      'Smart building management systems',
      'Renewable energy integration',
      'Advanced HVAC with air purification',
      'IoT sensors for space optimization'
    ]
  },
  {
    id: 3,
    title: 'Infinity Lounge',
    category: 'interior',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    location: 'Malibu, CA',
    date: '2024',
    description: 'Immersive interior space with dynamic lighting and adaptive furniture systems.',
    client: 'Luxury Resort Chain',
    area: '12,000 sq ft',
    duration: '12 months',
    budget: '$1.8M - $2.2M',
    gallery: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    features: [
      'Dynamic LED lighting systems',
      'Adaptive furniture with motorized adjustments',
      'Immersive sound and visual experiences',
      'Temperature-controlled seating areas',
      'Interactive digital art installations',
      'Biometric access control',
      'Automated service systems',
      'Panoramic ocean views with smart glass'
    ],
    challenges: [
      'Creating an immersive experience without overwhelming guests',
      'Integrating technology seamlessly into luxury design',
      'Maintaining comfort across diverse user preferences',
      'Ensuring system reliability in a high-traffic environment'
    ],
    solutions: [
      'Personalized environment profiles for each guest',
      'Hidden technology integration with manual overrides',
      'Zoned climate and lighting control systems',
      'Redundant systems with automatic failover'
    ],
    technologies: [
      'Dynamic LED lighting systems',
      'Motorized furniture and fixtures',
      'Immersive audio-visual technology',
      'Smart glass and privacy controls',
      'Biometric and RFID access systems'
    ]
  },
  {
    id: 4,
    title: 'Nexus Retail Hub',
    category: 'commercial',
    image: 'https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    location: 'West Hollywood',
    date: '2023',
    description: 'Next-generation retail space with AR integration and sustainable materials.',
    client: 'Nexus Retail Group',
    area: '75,000 sq ft',
    duration: '24 months',
    budget: '$25M - $30M',
    gallery: [
      'https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    features: [
      'Augmented reality shopping experiences',
      'Sustainable and recycled building materials',
      'Flexible retail spaces with modular design',
      'Smart inventory management systems',
      'Interactive digital displays and kiosks',
      'Energy-efficient lighting and HVAC',
      'Contactless payment and checkout systems',
      'Green roof with urban farming'
    ],
    challenges: [
      'Integrating AR technology without disrupting shopping flow',
      'Creating flexible spaces for diverse retail needs',
      'Achieving sustainability goals within budget constraints',
      'Designing for both current and future retail trends'
    ],
    solutions: [
      'Seamless AR integration through mobile apps and smart mirrors',
      'Modular store layouts with reconfigurable elements',
      'Locally sourced and recycled materials program',
      'Future-proof infrastructure for emerging technologies'
    ],
    technologies: [
      'Augmented reality systems',
      'Smart inventory and POS systems',
      'Interactive digital signage',
      'Sustainable building materials',
      'Energy management systems'
    ]
  },
  {
    id: 5,
    title: 'Eden Gardens',
    category: 'exterior',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    location: 'Pasadena, CA',
    date: '2024',
    description: 'Biophilic landscape design with smart irrigation and native plant ecosystems.',
    client: 'City of Pasadena',
    area: '25 acres',
    duration: '18 months',
    budget: '$8M - $10M',
    gallery: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1457845/pexels-photo-1457845.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    features: [
      'Native California plant ecosystems',
      'Smart irrigation with weather monitoring',
      'Sustainable water management systems',
      'Interactive educational installations',
      'Solar-powered lighting throughout',
      'Accessible pathways and seating areas',
      'Wildlife habitat preservation',
      'Community gathering spaces'
    ],
    challenges: [
      'Preserving existing ecosystems during development',
      'Creating sustainable water management in drought conditions',
      'Designing for diverse community needs and accessibility',
      'Balancing conservation with public access'
    ],
    solutions: [
      'Phased construction to minimize ecosystem disruption',
      'Rainwater harvesting and greywater recycling systems',
      'Universal design principles for all pathways and facilities',
      'Designated conservation zones with controlled access'
    ],
    technologies: [
      'Smart irrigation and monitoring systems',
      'Solar lighting and power systems',
      'Water recycling and filtration',
      'Environmental monitoring sensors',
      'Sustainable landscape materials'
    ]
  },
  {
    id: 6,
    title: 'Skyline Penthouse',
    category: 'interior',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    location: 'Century City',
    date: '2023',
    description: 'Luxury penthouse with panoramic views and integrated smart home technology.',
    client: 'Private Client',
    area: '6,800 sq ft',
    duration: '14 months',
    budget: '$3.5M - $4M',
    gallery: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
    ],
    features: [
      'Floor-to-ceiling windows with city views',
      'Integrated smart home automation',
      'Luxury materials and finishes',
      'Private elevator access',
      'Rooftop terrace with outdoor kitchen',
      'Home theater with immersive sound',
      'Wine cellar with climate control',
      'Spa-like master bathroom suite'
    ],
    challenges: [
      'Maximizing views while maintaining privacy',
      'Integrating technology without compromising luxury aesthetics',
      'Creating intimate spaces within a large open floor plan',
      'Managing acoustics in an open-concept design'
    ],
    solutions: [
      'Smart glass technology for privacy control',
      'Hidden technology integration with premium finishes',
      'Strategic furniture placement and room dividers',
      'Advanced acoustic treatments and sound masking'
    ],
    technologies: [
      'Smart home automation systems',
      'Automated window treatments',
      'Climate control and air purification',
      'Integrated audio-visual systems',
      'Security and access control'
    ]
  }
];

export default projectsData;