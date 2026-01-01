import SkillCard from '../components/UI/SkillCard';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaAws,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend',
      icon: FaReact,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'TypeScript', level: 75 },
      ],
    },
    {
      category: 'Backend',
      icon: FaNodeJs,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'REST APIs', level: 88 },
        { name: 'Authentication', level: 80 },
        { name: 'Middleware', level: 78 },
      ],
    },
    {
      category: 'Database',
      icon: FaDatabase,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'Redis', level: 65 },
        { name: 'Database Design', level: 78 },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: FaTools,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS Basics', level: 65 },
        { name: 'CI/CD', level: 68 },
        { name: 'VS Code', level: 95 },
      ],
    },
  ];

  const learning = [
    { name: 'Next.js', status: 'In Progress' },
    { name: 'GraphQL', status: 'Learning' },
    { name: 'Python/Django', status: 'Planned' },
    { name: 'Kubernetes', status: 'Exploring' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-primary-50 to-white">
        <div className="section-padding">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Technical skills I've acquired through coursework, projects, and self-study.
            Continuously learning and expanding my toolkit.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((skillCategory, index) => (
              <SkillCard key={index} {...skillCategory} />
            ))}
          </div>
        </div>
      </section>

      {/* Currently Learning */}
      <section className="py-16 bg-gray-50">
        <div className="section-padding">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Currently Learning
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {learning.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 card-hover"
                >
                  <div className="text-2xl font-bold text-primary-600 mb-2">{item.name}</div>
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Development Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Clean Code',
                  description: 'Writing readable, maintainable code with proper documentation'
                },
                {
                  title: 'Responsive Design',
                  description: 'Mobile-first approach ensuring optimal experience across devices'
                },
                {
                  title: 'Best Practices',
                  description: 'Following industry standards and security guidelines'
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl">🏆</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;