import React, { useState } from 'react';
import { X, Calendar, MapPin, User, Ruler, Clock, DollarSign, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { Project } from '../data/projectsData';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-lg overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onClose}
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </button>
            <button
              onClick={onClose}
              className="bg-gray-800/50 hover:bg-gray-700/50 p-3 rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Project Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 font-space-grotesk">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              <img
                src={project.gallery[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              
              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 p-3 rounded-full transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white text-sm">
                  {currentImageIndex + 1} / {project.gallery.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'border-cyan-400 scale-105'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Project Info Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Project Details */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-space-grotesk">Project Details</h3>
              <div className="space-y-6">
                {[
                  { icon: User, label: 'Client', value: project.client },
                  { icon: MapPin, label: 'Location', value: project.location },
                  { icon: Calendar, label: 'Completion', value: project.date },
                  { icon: Ruler, label: 'Area', value: project.area },
                  { icon: Clock, label: 'Duration', value: project.duration },
                  { icon: DollarSign, label: 'Budget Range', value: project.budget }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-xl">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-space-grotesk">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-space-grotesk">Challenges</h3>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-space-grotesk">Solutions</h3>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 leading-relaxed">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-space-grotesk">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-space-grotesk">
                Inspired by This Project?
              </h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Let's discuss how we can create something equally remarkable for your space.
              </p>
              <button
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;