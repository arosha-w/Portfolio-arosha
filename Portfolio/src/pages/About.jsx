import {
  GraduationCap,
  Building2,
  Calendar,
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
  Users,
  Globe,
  Download,
  Mail,
  Zap,
  Award,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("journey");

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Ruhuna",
      duration: "2023 - 2026",
      gpa: "3.60",
      description: "Focus on Software Engineering and Web Development",
      courses: ["Data Structures", "Algorithms", "Web Development", "Database Systems"],
      type: "Undergraduate",
    },
    {
      degree: "GCE Advanced Level",
      institution: "2021",
      duration: "2021",
      gpa: null,
      description: "Combined Maths (B), Physics (B), Chemistry (B)",
      courses: [],
      type: "A/L",
    },
    {
      degree: "Diploma in Information Technology",
      institution: "SITC Campus",
      duration: "Completed",
      gpa: null,
      description: "Comprehensive IT training and certification",
      courses: [],
      type: "Diploma",
    },
    {
      degree: "Diploma in English",
      institution: "Sabaragamuwa University of Sri Lanka",
      duration: "Completed",
      gpa: null,
      description: "Advanced English language proficiency",
      courses: [],
      type: "Diploma",
    },
  ];

  const experience = {
    title: "Trainee / Management Trainee",
    company: "People's Bank – Regional Office",
    duration: "2023",
    description: "Assisted with regional-level administrative and banking operations, coordinated communication between the regional office and branch officers, and supported management in organizing meetings and preparing presentations.",
    type: "Professional Experience",
  };

  const highlights = ["Full-Stack Development", "Problem Solving", "Team Collaboration", "Quick Learner"];

  const achievements = [
    {
      icon: Code2,
      title: "10+ GitHub Repositories",
      description: "Active open-source contributor with diverse projects",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led collaborative projects and community initiatives",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Maintaining 3.60 GPA in Computer Science",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Microservices Expert",
      description: "Built scalable systems with microservice architecture",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const interests = [
    { icon: Code2, name: "Coding", color: "text-purple-400" },
    { icon: Book, name: "Reading", color: "text-blue-400" },
    { icon: Music, name: "Music", color: "text-pink-400" },
    { icon: Gamepad2, name: "Gaming", color: "text-green-400" },
    { icon: Coffee, name: "Coffee", color: "text-orange-400" },
    { icon: Globe, name: "Travel", color: "text-cyan-400" },
  ];

  const stats = [
    {
      label: "Projects Completed",
      value: "5+",
      icon: Rocket,
      description: "Full-stack applications",
      color: "from-purple-500 to-pink-500",
      trend: "↗ Growing",
    },
    {
      label: "Technologies Mastered",
      value: "20+",
      icon: Code2,
      description: "Frontend & Backend",
      color: "from-blue-500 to-cyan-500",
      trend: "Always learning",
    },
    {
      label: "Current GPA",
      value: "3.60",
      icon: Award,
      description: "Academic Excellence",
      color: "from-green-500 to-emerald-500",
      trend: "Consistent",
    },
  ];

  const extraCurricular = [
    {
      title: "Committee Member",
      organization: "Permission and Feedback Handling - Venture Talks",
      icon: Users,
    },
    {
      title: "Member",
      organization: "Computer Science Students Community",
      icon: Code2,
    },
  ];

  const values = [
    {
      title: "Continuous Learning",
      description: "Always staying updated with the latest technologies and best practices",
      icon: Book,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Quality First",
      description: "Writing clean, maintainable code that stands the test of time",
      icon: Target,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Collaboration",
      description: "Believing in the power of teamwork and open communication",
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const tabs = [
    { id: "journey", label: "Journey" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-40 right-20 w-40 h-40 sm:w-60 sm:h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20 mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm font-medium">About Me</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              A passionate Computer Science undergraduate from Sri Lanka, building scalable full-stack applications
              and continuously expanding my technical horizons.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-10 sm:mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-xs">{stat.description}</div>
                  <div className="text-xs text-gray-500 mt-2">{stat.trend}</div>
                </div>
              );
            })}
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="flex gap-1 sm:gap-2 bg-white/5 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl border border-white/10 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 whitespace-nowrap text-sm sm:text-base ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Journey Tab */}
          {activeTab === "journey" && (
            <div className="animate-fade-in space-y-6 sm:space-y-8">
              {/* Bio + Highlights */}
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                {/* Bio */}
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Who I Am</h2>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                      I'm Arosha Wijekoon, a Computer Science undergraduate at the University of Ruhuna with a 3.60 GPA.
                      I specialize in building full-stack web applications using modern technologies like React, Spring Boot, and PostgreSQL.
                    </p>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      I'm passionate about solving real-world problems through clean, scalable code and
                      continuously exploring new technologies to stay current in the ever-evolving tech landscape.
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Key Strengths</h2>
                    <div className="space-y-3">
                      {highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="max-w-5xl mx-auto">
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Experience</h2>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex-shrink-0">
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white">{experience.title}</h3>
                            <p className="text-purple-400 font-medium text-sm sm:text-base">{experience.company}</p>
                          </div>
                          <span className="flex items-center gap-1.5 text-gray-400 text-xs sm:text-sm px-3 py-1 bg-white/5 rounded-lg border border-white/10 flex-shrink-0">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            {experience.duration}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{experience.description}</p>
                      </div>
                    </div>

                    {/* Extra Curricular */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-4">Extra Curricular Activities</h3>
                      <div className="space-y-3 sm:space-y-4">
                        {extraCurricular.map((activity, index) => {
                          const Icon = activity.icon;
                          return (
                            <div key={index} className="flex items-start gap-3">
                              <div className="p-2 bg-purple-500/20 rounded-lg flex-shrink-0">
                                <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                              </div>
                              <div>
                                <h4 className="text-white font-medium text-sm sm:text-base">{activity.title}</h4>
                                <p className="text-xs sm:text-sm text-gray-400">{activity.organization}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="max-w-4xl mx-auto">
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative text-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 inline-flex items-center gap-3 justify-center">
                      <span className="p-2 bg-purple-500/20 rounded-lg">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                      </span>
                      Interests
                    </h2>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
                      {interests.map((interest, index) => {
                        const Icon = interest.icon;
                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 hover:scale-105 transition-all duration-300"
                          >
                            <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${interest.color}`} />
                            <span className="text-xs sm:text-sm text-gray-300 font-medium">{interest.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="max-w-5xl mx-auto">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div
                        key={index}
                        className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                        <div className="relative">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{value.title}</h3>
                          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="animate-fade-in max-w-5xl mx-auto">
              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="flex items-start justify-between flex-wrap gap-3 sm:gap-4 mb-4">
                        <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                          <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex-shrink-0">
                            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight">{edu.degree}</h3>
                            <p className="text-purple-400 font-medium flex items-center gap-1.5 mt-1 text-sm sm:text-base">
                              <Building2 className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 flex-shrink-0">
                          <span className="flex items-center gap-1.5 text-gray-400 text-xs sm:text-sm px-2.5 sm:px-3 py-1 bg-white/5 rounded-lg border border-white/10">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            {edu.duration}
                          </span>
                          {edu.gpa && (
                            <div className="px-2.5 sm:px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-lg">
                              <span className="text-xs sm:text-sm text-green-400 font-medium">GPA: {edu.gpa}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm sm:text-lg mb-3 sm:mb-4">{edu.description}</p>

                      {edu.courses.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, idx) => (
                            <span key={idx} className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm bg-purple-500/10 text-purple-300 rounded-lg border border-purple-500/20">
                              {course}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === "achievements" && (
            <div className="animate-fade-in">
              <div className="max-w-5xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div
                        key={index}
                        className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                        <div className="relative">
                          <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">{achievement.title}</h3>
                          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
      `}</style>
    </div>
  );
};

export default About;