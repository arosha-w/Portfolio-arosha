import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm <span className="text-primary-600">Arosha Wijekoon</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                Aspiring Full-Stack Developer
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Passionate Computer Science Undergraduate seeking opportunities.
                I build modern web applications using React, Spring boot, and cloud technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="btn-primary flex items-center space-x-2"
                >
                  <span>View Projects</span>
                  <FaArrowRight />
                </Link>
                <Link
                  to="/contact"
                  className="btn-secondary"
                >
                  Contact Me
                </Link>
              </div>
              <div className="flex space-x-6 mt-8">
                <a href="https://github.com" className="text-gray-600 hover:text-primary-600">
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-primary-600">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl h-96 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-xl">Open to Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5+', label: 'Projects Built' },
              { value: '5+', label: 'Technologies' },
              { value: '100%', label: 'Responsive' },
              { value: 'Open', label: 'To Opportunities' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;