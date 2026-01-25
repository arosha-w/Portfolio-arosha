import {
  Code2,
  Database,
  Wrench,
  Sparkles,
  TrendingUp,
  Zap,
  Shield,
  BookOpen,
  Rocket,
  Layout,
  Server,
  Layers,
  Smartphone,
} from "lucide-react";

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 85 },
         { name: "C", level: 80 },
        { name: "Python", level: 75 },
        { name: "PHP", level: 70 },
        { name: "C#", level: 70 },
       
      ],
    },
    {
      category: "Frontend Technologies",
      icon: Layout,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 92 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Responsive Design", level: 85 },
      ],
    },
    {
      category: "Mobile Application Development",
      icon: Smartphone,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "React Native", level: 85 },
        { name: "NativeWind", level: 85 },
        { name: "Mobile UI Design", level: 80 },
        { name: "Cross-Platform Development", level: 82 },
      ],
    },
    {
      category: "Backend Technologies",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Spring Boot (Java)", level: 92 },
        { name: "FastAPI (Python)", level: 80 },
        { name: "Laravel (PHP)", level: 70 },
        { name: ".NET", level: 75 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      category: "Databases",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 88 },
        { name: "SQL Server (SSMS)", level: 80 },
        { name: "MongoDB", level: 70 },
        { name: "Database Design", level: 87 },
      ],
    },
    {
      category: "Tools & DevOps",
      icon: Wrench,
      color: "from-pink-500 to-purple-500",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 92 },
        { name: "Docker", level: 75 },
        { name: "Linux", level: 80 },
        { name: "VS Code", level: 95 },
      ],
    },
  ];

  const learning = [
    { name: "Kubernetes", status: "Learning", icon: Zap, color: "text-purple-400" },
    { name: "AWS Services", status: "Exploring", icon: Rocket, color: "text-blue-400" },
    { name: "GraphQL", status: "In Progress", icon: TrendingUp, color: "text-pink-400" },
    { name: "Next.js", status: "Planned", icon: BookOpen, color: "text-green-400" },
  ];

  const methodology = [
    {
      title: "Clean Code",
      description: "Writing readable, maintainable, and well-structured code",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Microservices Architecture",
      description: "Designing scalable systems using microservice principles",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Security First",
      description: "Applying secure authentication, authorization, and validation",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 blur-3xl opacity-20 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 blur-3xl opacity-20 rounded-full animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">
              My Technical Skillset
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            A structured overview of technologies and tools I use to build
            scalable, secure, and user-friendly applications.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Learning */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Currently Learning
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {learning.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition"
                >
                  <Icon className={`w-10 h-10 mx-auto mb-3 ${item.color}`} />
                  <h3 className="text-white font-semibold">{item.name}</h3>
                  <span className="text-xs text-gray-400">{item.status}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="relative py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {methodology.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Skills;
