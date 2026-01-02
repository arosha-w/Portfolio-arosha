import ProjectCard from '../components/UI/ProjectCard';
import { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'Full-featured online store with user authentication, product management, and payment integration.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      githubLink: 'https://github.com/username/ecommerce',
      demoLink: 'https://ecommerce-demo.com',
      category: 'Full Stack',
      date: 'Dec 2023'
    },
    {
      name: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      techStack: ['React', 'Express', 'Socket.io', 'PostgreSQL', 'Tailwind'],
      githubLink: 'https://github.com/username/taskapp',
      demoLink: 'https://taskapp-demo.com',
      category: 'Full Stack',
      date: 'Nov 2023'
    },
    {
      name: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      techStack: ['React', 'Weather API', 'Chart.js', 'Geolocation API'],
      githubLink: 'https://github.com/username/weather',
      demoLink: 'https://weather-demo.com',
      category: 'Frontend',
      date: 'Oct 2023'
    },
    {
      name: 'Blog API',
      description: 'RESTful API for a blogging platform with user roles, comments, and file uploads.',
      techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Multer'],
      githubLink: 'https://github.com/username/blog-api',
      demoLink: null,
      category: 'Backend',
      date: 'Sep 2023'
    },
    {
      name: 'Portfolio Website',
      description: 'Responsive portfolio website showcasing projects and skills with contact form.',
      techStack: ['React', 'Tailwind CSS', 'EmailJS', 'React Router'],
      githubLink: 'https://github.com/username/portfolio',
      demoLink: 'https://portfolio-demo.com',
      category: 'Frontend',
      date: 'Aug 2023'
    },
    {
      name: 'Chat Application',
      description: 'Real-time chat application with rooms, private messaging, and message history.',
      techStack: ['React', 'Socket.io', 'Node.js', 'Redis', 'Bootstrap'],
      githubLink: 'https://github.com/username/chat-app',
      demoLink: 'https://chat-demo.com',
      category: 'Full Stack',
      date: 'Jul 2023'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-primary-50 to-white">
        <div className="section-padding">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            A collection of my work demonstrating practical application of skills.
            Each project includes live demos and source code.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="section-padding">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="section-padding">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* GitHub Stats */}
      <section className="py-16 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              More on GitHub
            </h2>
            <p className="text-gray-600 mb-8">
              Check out my GitHub for more projects, contributions, and code samples.
            </p>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <span>Visit GitHub Profile</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;