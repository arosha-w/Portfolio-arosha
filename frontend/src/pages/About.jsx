import { FaGraduationCap, FaUniversity, FaCalendarAlt } from 'react-icons/fa';

const About = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Ruhuna',
      duration: '2023 - 2026',
      gpa: '3.5/4.0',
      description: 'Focus on Software Engineering and Web Development'
    },
    
  ];

  const experiences = [
    
    {
      role: 'Freelance Developer',
      company: 'Self-Employed',
      duration: '2022 - Present',
      description: 'Built websites for small businesses and personal projects'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* About Header */}
      <section className="py-12 bg-gradient-to-r from-primary-50 to-white">
        <div className="section-padding">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Passionate developer with hands-on experience in building full-stack applications.
            Eager to contribute to innovative projects and grow professionally.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="section-padding">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Intro */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    I'm a Computer Science student passionate about creating impactful web applications.
                    My journey began with simple HTML/CSS websites and evolved into full-stack development.
                  </p>
                  <p>
                    I enjoy solving real-world problems through code and continuously learning new technologies.
                    My goal is to secure an internship where I can contribute meaningfully while expanding my skills.
                  </p>
                  <p>
                    When I'm not coding, you can find me contributing to open-source projects,
                    learning about cloud technologies, or exploring new frameworks.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaGraduationCap className="mr-3 text-primary-600" />
                  Education
                </h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-6 py-2">
                      <div className="flex justify-between items-start flex-wrap">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                          <p className="text-primary-600 font-medium">{edu.institution}</p>
                        </div>
                        <span className="flex items-center text-gray-500">
                          <FaCalendarAlt className="mr-2" />
                          {edu.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 mt-2">{edu.description}</p>
                      {edu.gpa && (
                        <p className="text-sm text-gray-500 mt-2">GPA: {edu.gpa}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Experience */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="pb-6 border-b border-gray-100 last:border-0">
                      <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                      <p className="text-primary-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500 mt-1">{exp.duration}</p>
                      <p className="text-gray-600 mt-3">{exp.description}</p>
                    </div>
                  ))}
                </div>

                {/* Availability */}
                <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Availability</h3>
                  <p className="text-gray-600 mb-4">
                    Seeking internship opportunities for Summer/Fall 2024
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Full-time or Part-time</li>
                    <li>• Remote or On-site</li>
                    <li>• Immediate start available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;