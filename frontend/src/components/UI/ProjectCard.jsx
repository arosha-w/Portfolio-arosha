import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
          <span className="bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        <p className="text-gray-600 mb-6">{project.description}</p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-300"
            >
              <FaGithub className="mr-2" />
              Code
            </a>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-300"
              >
                <FaExternalLinkAlt className="mr-2" />
                Demo
              </a>
            )}
          </div>
          <span className="text-sm text-gray-500">{project.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;