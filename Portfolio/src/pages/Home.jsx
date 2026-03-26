import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Code, Rocket, Lightbulb, Mail } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    'React', 'Spring Boot', 'Java', 'JavaScript',
    'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'MySQL'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-4 sm:mb-6">
                <span className="text-purple-300 text-xs sm:text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available for opportunities
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Arosha
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl text-purple-200 mb-4 sm:mb-6 font-light">
                Aspiring Full-Stack Developer
              </h2>

              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-xl">
                Passionate Computer Science Undergraduate Crafting Modern Web Experiences.
                Specialized in Building Scalable Applications with React, Spring Boot, and Cloud Technologies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
                <button
                  onClick={() => navigate("/projects")}
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/60 flex items-center gap-2 text-sm sm:text-base"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Contact Me</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4">
                <a href="https://github.com/arosha-w" className="group p-3 sm:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:scale-110">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-purple-300 transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/arosha-wijekoon-206223312/" className="group p-3 sm:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-purple-300 transition-colors" />
                </a>
              </div>
            </div>

            {/* Right Content - Card */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} mt-8 lg:mt-0`}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-8 sm:p-10 md:p-12 border border-white/10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-purple-500/20 rounded-full filter blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-pink-500/20 rounded-full filter blur-3xl"></div>

                  <div className="relative z-10 text-center">
                    <div className="text-6xl sm:text-8xl mb-6 sm:mb-8 animate-bounce">👨‍💻</div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                      Let's Build Something Amazing
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
                      Transforming ideas into powerful digital solutions
                    </p>

                    <div className="grid grid-cols-3 gap-4 sm:gap-6">
                      {[
                        { icon: Code, color: "bg-purple-500/20", iconColor: "text-purple-400", label: "Clean Code" },
                        { icon: Rocket, color: "bg-pink-500/20", iconColor: "text-pink-400", label: "Fast Deploy" },
                        { icon: Lightbulb, color: "bg-blue-500/20", iconColor: "text-blue-400", label: "Innovation" },
                      ].map(({ icon: Icon, color, iconColor, label }) => (
                        <div key={label} className="flex flex-col items-center">
                          <div className={`p-3 sm:p-4 ${color} rounded-xl mb-2 sm:mb-3`}>
                            <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${iconColor}`} />
                          </div>
                          <span className="text-xs sm:text-sm text-gray-300">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { value: '5+', label: 'Projects Built', color: 'from-purple-500 to-pink-500' },
              { value: '20+', label: 'Technologies', color: 'from-pink-500 to-red-500' },
              { value: '100%', label: 'Responsive', color: 'from-blue-500 to-cyan-500' },
              { value: 'Open', label: 'To Opportunities', color: 'from-green-500 to-emerald-500' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative text-center">
                  <div className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
            Tech <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Stack</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <span className="text-gray-300 font-medium text-sm sm:text-base">{skill}</span>
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