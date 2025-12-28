import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Code, Rocket, Lightbulb, Mail } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    'React', 'Spring Boot', 'Java', 'JavaScript', 
    'Tailwind CSS', 'Node.js', 'MongoDB', 'MySQL'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-6">
                <span className="text-purple-300 text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available for opportunities
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Arosha Wijekoon
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl text-purple-200 mb-6 font-light">
                Aspiring Full-Stack Developer
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                Passionate Computer Science Undergraduate crafting modern web experiences. 
                Specialized in building scalable applications with React, Spring Boot, and cloud technologies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/60 flex items-center gap-2">
                  <span>View Projects</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>Contact Me</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="https://github.com" className="group p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:scale-110">
                  <Github className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors" />
                </a>
                <a href="https://linkedin.com" className="group p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors" />
                </a>
              </div>
            </div>

            {/* Right Content - 3D Card */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative group">
                {/* Glowing effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-12 border border-white/10 overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full filter blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/20 rounded-full filter blur-3xl"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-8xl mb-8 animate-bounce">👨‍💻</div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Let's Build Something Amazing
                    </h3>
                    <p className="text-gray-300 text-lg mb-8">
                      Transforming ideas into powerful digital solutions
                    </p>
                    
                    {/* Feature icons */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="flex flex-col items-center">
                        <div className="p-4 bg-purple-500/20 rounded-xl mb-3">
                          <Code className="w-8 h-8 text-purple-400" />
                        </div>
                        <span className="text-sm text-gray-300">Clean Code</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="p-4 bg-pink-500/20 rounded-xl mb-3">
                          <Rocket className="w-8 h-8 text-pink-400" />
                        </div>
                        <span className="text-sm text-gray-300">Fast Deploy</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="p-4 bg-blue-500/20 rounded-xl mb-3">
                          <Lightbulb className="w-8 h-8 text-blue-400" />
                        </div>
                        <span className="text-sm text-gray-300">Innovation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '5+', label: 'Projects Built', color: 'from-purple-500 to-pink-500' },
              { value: '8+', label: 'Technologies', color: 'from-pink-500 to-red-500' },
              { value: '100%', label: 'Responsive', color: 'from-blue-500 to-cyan-500' },
              { value: 'Open', label: 'To Opportunities', color: 'from-green-500 to-emerald-500' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative text-center">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Tech <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Stack</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-gray-300 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;