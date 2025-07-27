import { useState } from 'react';
import { ExternalLink, Calendar, MapPin, Eye } from 'lucide-react';
import ProjectDetail from './ProjectDetail';
import projectsData from '../data/projectsData';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'interior', label: 'Interior' },
    { id: 'exterior', label: 'Exterior' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="portfolio" className="py-20 lg:py-32 bg-gray-900">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 lg:mb-24">
              <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-3 mb-6">
                <Eye className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-gray-300">Our Portfolio</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
                Architectural
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Masterpieces
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Explore our latest projects showcasing innovation, sustainability, and design excellence
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12 lg:mb-16">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600/50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map(project => (
                <div
                  key={project.id}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                  onClick={() => openProjectDetail(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 font-space-grotesk">{project.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={closeProjectDetail}
        />
      )}
    </>
  );
};

export default Portfolio;