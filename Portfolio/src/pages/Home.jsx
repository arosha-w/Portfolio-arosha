import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Code, Rocket, Lightbulb, Mail, Briefcase, Bug, Users, Bot, TrendingUp, Brain } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    'Java', 'Spring Boot', 'Angular', 'React', 'TypeScript', 'REST APIs',
    'SOAP', 'PostgreSQL', 'MySQL', 'Docker', 'Maven', 'Tailwind CSS',
    'Python', 'FastAPI', 'JUnit', 'Kibana', 'Grafana'
  ];

  const trainingHighlights = [
    {
      icon: Code,
      color: "bg-purple-500/20",
      iconColor: "text-purple-400",
      title: "Enterprise Java",
      text: "Built and enhanced features in a large Java codebase using Spring Boot, Maven and REST APIs.",
    },
    {
      icon: Users,
      color: "bg-pink-500/20",
      iconColor: "text-pink-400",
      title: "Scrum Delivery",
      text: "Two-week sprints with Solution Design documents, code reviews and sprint demos.",
    },
    {
      icon: Bug,
      color: "bg-blue-500/20",
      iconColor: "text-blue-400",
      title: "Java 21 Migration",
      text: "Resolved missing dependencies across REST modules using Kibana logs and Grafana.",
    },
  ];

  const aiFocus = [
    {
      icon: Bot,
      color: "bg-purple-500/20",
      iconColor: "text-purple-400",
      title: "Prompt Engineering",
      text: "My CodeGen training began with designing clear, structured prompts for large language models, used for documentation, requirement analysis and code assistance.",
    },
    {
      icon: TrendingUp,
      color: "bg-pink-500/20",
      iconColor: "text-pink-400",
      title: "Predictive Scheduling",
      text: "My salon booking system predicts peak hours and capacity from historical booking data to prevent overbooking.",
    },
    {
      icon: Code,
      color: "bg-blue-500/20",
      iconColor: "text-blue-400",
      title: "Python Foundation",
      text: "I already build Python services with FastAPI, a natural base for data pipelines and serving models.",
    },
  ];

  const learningNext = [
    'Machine Learning fundamentals',
    'pandas & NumPy',
    'scikit-learn',
    'Neural networks',
    'LLM-powered apps',
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
                  <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                  Trainee Software Engineer at CodeGen International
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
                Full-Stack Developer
              </h2>

              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-xl">
                Computer Science undergraduate at the University of Ruhuna with hands-on enterprise experience
                from Industrial training at CodeGen International. I build reliable, scalable software with
                Java, Spring Boot, Angular and React and I'm now focusing on AI and machine learning.
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
                <a
                  href="https://github.com/arosha-w"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group p-3 sm:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-purple-300 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/arosha-wijekoon-206223312/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group p-3 sm:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:scale-110"
                >
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
                        { icon: Rocket, color: "bg-pink-500/20", iconColor: "text-pink-400", label: "Scrum Delivery" },
                        { icon: Lightbulb, color: "bg-blue-500/20", iconColor: "text-blue-400", label: "Problem Solving" },
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
              { value: '5', label: 'Projects Built', color: 'from-purple-500 to-pink-500' },
              { value: '6 mo', label: 'Industry Training', color: 'from-pink-500 to-red-500' },
              { value: '3.64', label: 'GPA / 4.00', color: 'from-green-500 to-emerald-500' },
              { value: '20+', label: 'Technologies', color: 'from-blue-500 to-cyan-500' },
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

      {/* Industrial Training Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-3 sm:mb-4">
            Industrial <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Training</span>
          </h3>
          <p className="text-gray-400 text-center text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-12">
            TraineeSoftware Engineer at CodeGen International, Colombo · Apr 2026 – Oct 2026
          </p>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {trainingHighlights.map(({ icon: Icon, color, iconColor, title, text }) => (
              <div
                key={title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 ${color} rounded-xl mb-3 sm:mb-4`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h4>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate("/about")}
              className="group px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Read my full experience</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* AI & ML Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-3 sm:mb-4">
            AI & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Machine Learning</span>
          </h3>
          <p className="text-gray-400 text-center text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-12">
            My next focus. Here is where I already work with it, and what I'm learning next.
          </p>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {aiFocus.map(({ icon: Icon, color, iconColor, title, text }) => (
              <div
                key={title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 ${color} rounded-xl mb-3 sm:mb-4`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h4>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <div className="inline-flex items-center gap-2 text-gray-300 text-sm sm:text-base font-medium mb-4">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              Learning next
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {learningNext.map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 text-xs sm:text-sm bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                >
                  {topic}
                </span>
              ))}
            </div>
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