import { 
  GraduationCap, 
  Building2, 
  Calendar, 
  Briefcase, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  Code2,
  Rocket,
  Target,
  Heart,
  Coffee,
  Music,
  Book,
  Gamepad2,
  Award,
  TrendingUp,
  Users,
  Globe,
  Download,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('journey');

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Ruhuna',
      duration: '2023 - 2026',
      gpa: '3.5/4.0',
      description: 'Focus on Software Engineering and Web Development',
      courses: ['Data Structures', 'Algorithms', 'Web Development', 'Database Systems']
    },
  ];

  const experiences = [
    {
      role: 'Freelance Developer',
      company: 'Self-Employed',
      duration: '2022 - Present',
      description: 'Built websites for small businesses and personal projects',
      achievements: [
        'Delivered 10+ successful projects',
        'Maintained 5-star client rating',
        'Reduced load time by 40% on average'
      ]
    }
  ];

  const highlights = [
    'Full-Stack Development',
    'Problem Solving',
    'Team Collaboration',
    'Quick Learner'
  ];

  const skills = [
    { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Spring Boot', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'Java', level: 82, color: 'from-red-500 to-pink-500' },
    { name: 'Tailwind CSS', level: 92, color: 'from-purple-500 to-pink-500' },
    { name: 'Node.js', level: 80, color: 'from-green-600 to-lime-500' },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Dean\'s List',
      description: 'Academic excellence recognition',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Code2,
      title: '50+ GitHub Repos',
      description: 'Active open-source contributor',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Team Projects',
      description: 'Led multiple collaborative projects',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Fast Learner',
      description: 'Mastered 3 frameworks in 6 months',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const interests = [
    { icon: Code2, name: 'Coding', color: 'text-purple-400' },
    { icon: Book, name: 'Reading', color: 'text-blue-400' },
    { icon: Music, name: 'Music', color: 'text-pink-400' },
    { icon: Gamepad2, name: 'Gaming', color: 'text-green-400' },
    { icon: Coffee, name: 'Coffee', color: 'text-orange-400' },
    { icon: Globe, name: 'Travel', color: 'text-cyan-400' }
  ];

  const stats = [
    { label: 'Projects Completed', value: '15+', icon: Rocket },
    { label: 'Lines of Code', value: '50K+', icon: Code2 },
    { label: 'Happy Clients', value: '10+', icon: Heart },
    { label: 'Coffee Consumed', value: '∞', icon: Coffee }
  ];

  const values = [
    {
      title: 'Continuous Learning',
      description: 'Always staying updated with the latest technologies and best practices',
      icon: Book,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quality First',
      description: 'Writing clean, maintainable code that stands the test of time',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Collaboration',
      description: 'Believing in the power of teamwork and open communication',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-40 right-20 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20 mb-6 animate-bounce">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Get to know me better</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Passionate developer with hands-on experience in building full-stack applications.
              Eager to contribute to innovative projects and grow professionally.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-center">
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['journey', 'skills', 'achievements'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Based on Active Tab */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Journey Tab */}
          {activeTab === 'journey' && (
            <div className="grid lg:grid-cols-3 gap-8 animate-fade-in">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* My Journey Card */}
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <Sparkles className="w-6 h-6 text-purple-400" />
                      </div>
                      My Journey
                    </h2>
                    
                    <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
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

                    {/* Highlights */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                          <span className="text-sm text-gray-300 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Education Card */}
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-purple-400" />
                      </div>
                      Education
                    </h2>
                    
                    <div className="space-y-6">
                      {education.map((edu, index) => (
                        <div key={index} className="relative pl-8 pb-8 last:pb-0">
                          {/* Timeline line */}
                          <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
                          
                          {/* Timeline dot */}
                          <div className="absolute left-0 top-2 w-4 h-4 -ml-[7px] bg-purple-500 rounded-full border-4 border-slate-900 shadow-lg shadow-purple-500/50"></div>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between items-start flex-wrap gap-4">
                              <div>
                                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                                <p className="text-purple-400 font-medium flex items-center gap-2 mt-1">
                                  <Building2 className="w-4 h-4" />
                                  {edu.institution}
                                </p>
                              </div>
                              <span className="flex items-center gap-2 text-gray-400 px-3 py-1 bg-white/5 rounded-lg border border-white/10">
                                <Calendar className="w-4 h-4" />
                                {edu.duration}
                              </span>
                            </div>
                            
                            <p className="text-gray-300 text-lg">{edu.description}</p>
                            
                            {edu.gpa && (
                              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-lg">
                                <span className="text-sm text-green-400 font-medium">GPA: {edu.gpa}</span>
                              </div>
                            )}

                            {/* Courses */}
                            <div className="flex flex-wrap gap-2 mt-4">
                              {edu.courses.map((course, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 text-xs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/30"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Values Section */}
                <div className="grid md:grid-cols-3 gap-6">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                      <div className="relative">
                        <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                        <p className="text-gray-400 text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Experience Card */}
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 sticky top-24">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <Briefcase className="w-5 h-5 text-purple-400" />
                      </div>
                      Experience
                    </h2>
                    
                    <div className="space-y-6">
                      {experiences.map((exp, index) => (
                        <div key={index} className="pb-6 border-b border-white/10 last:border-0">
                          <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                          <p className="text-purple-400 font-medium flex items-center gap-2 mt-1">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-400 flex items-center gap-2 mt-2">
                            <Clock className="w-4 h-4" />
                            {exp.duration}
                          </p>
                          <p className="text-gray-300 mt-3 leading-relaxed">{exp.description}</p>

                          {/* Achievements */}
                          <ul className="mt-4 space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Availability Section */}
                    <div className="mt-8 p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/30">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <h3 className="text-lg font-semibold text-white">Available for Work</h3>
                      </div>
                      
                      <p className="text-gray-300 mb-4">
                        Seeking internship opportunities for Summer/Fall 2024
                      </p>
                      
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          Full-time or Part-time
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          Remote or On-site
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          Immediate start available
                        </li>
                      </ul>

                      <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg font-medium shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105">
                        Get in Touch
                      </button>
                    </div>
                  </div>
                </div>

                {/* Interests Card */}
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <Heart className="w-5 h-5 text-purple-400" />
                      </div>
                      Interests
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {interests.map((interest, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 hover:scale-105 transition-all duration-300"
                        >
                          <interest.icon className={`w-8 h-8 ${interest.color}`} />
                          <span className="text-sm text-gray-300 font-medium">{interest.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="animate-fade-in">
              <div className="max-w-4xl mx-auto">
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
                    
                    <div className="space-y-6">
                      {skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">{skill.name}</span>
                            <span className="text-gray-400">{skill.level}%</span>
                          </div>
                          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{achievement.title}</h3>
                    <p className="text-gray-400 text-lg">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;