import { useEffect, useState } from "react";
import {
  Github,
  ExternalLink,
  Sparkles,
  Code2,
  Calendar,
  Shield,
  FileText,
  ShoppingCart,
  Layers,
  Hospital, // ✅ added for Medicare
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "CrimeLink Analyzer",
      description: "Centralized Digital Investigation Platform",
      fullDescription:
        "Developed a centralized digital investigation platform for law enforcement to analyze call records, visualize suspect communication networks, manage officer duties and weapons, and support field operations via a mobile application. The system enables data-driven investigations and improves operational efficiency through real-time analytics and role-based access control.",
      techStack: [
        "React",
        "TypeScript",
        "Spring Boot",
        "PostgreSQL",
        "FastAPI",
        "React Native",
        "Tailwind CSS",
        "NativeWind",
        "Docker",
      ],
      features: [
        "Call data analysis and suspect network visualization",
        "Role-based dashboards for administrators, investigators, and field officers",
        "Mobile application support for field operations",
        "Microservice-based architecture for scalability and maintainability",
        "Secure authentication and protected data handling",
      ],
      githubLink: "https://github.com/arosha-w",
      demoLink: null,
      category: "Full Stack",
      date: "Final Year Project",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
    },

    {
      name: "Medicare",
      description: "Web-based Healthcare Administration Platform",
      fullDescription:
        "Developed a web-based system to centralize patient records, appointment scheduling, prescription management, and billing operations for a healthcare clinic. Built as a team project with strong focus on data accuracy, security, and improving administrative efficiency through a smooth digital workflow.",
      techStack: ["PHP", "Laravel", "Blade Templates", "MySQL", "Eloquent ORM"],
      features: [
        "Patient record management and appointment scheduling",
        "Prescription and billing modules",
        "Role-based authentication and authorization",
        "Input validation and secure data handling",
        "Responsive UI for administrative users",
      ],
      githubLink: "https://github.com/arosha-w",
      demoLink: null,
      category: "Full Stack",
      date: "Academic Team Project",
      icon: Hospital, // ✅ Hospital icon used here
      color: "from-green-500 to-emerald-500",
    },

    {
      name: "Point of Sale (POS) System",
      description: "Desktop Retail Management Application",
      fullDescription:
        "Developed a secure, role-based Point of Sale (POS) desktop application to manage retail sales transactions and inventory operations. The system supports Admin and Cashier roles, enabling real-time stock updates, automated billing and invoice generation, and sales reporting with transaction history tracking.",
      techStack: ["C#", "Windows Forms", "Microsoft SQL Server", "SSMS"],
      features: [
        "Secure login with Admin and Cashier roles",
        "Product and category management",
        "Real-time inventory tracking and stock updates",
        "Automated billing and invoice generation",
        "Sales reports and transaction history",
      ],
      githubLink: "https://github.com/arosha-w",
      demoLink: null,
      category: "Desktop",
      date: "Academic Project",
      icon: ShoppingCart,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const categories = ["All", "Full Stack", "Desktop"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    setExpandedProject(null);
  }, [activeCategory]);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">My Work Portfolio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            A collection of projects showcasing real-world problem solving and technical expertise.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="flex justify-center gap-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 pb-20">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            const isExpanded = expandedProject === index;

            return (
              <div
                key={index}
                className="bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-4 bg-gradient-to-br ${project.color} rounded-xl`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-white">{project.name}</h3>
                      <p className="text-gray-300">{project.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400">{project.fullDescription}</p>

                  <button
                    onClick={() => setExpandedProject(isExpanded ? null : index)}
                    className="mt-6 px-5 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm font-semibold"
                  >
                    {isExpanded ? "Show Less" : "Learn More"}
                  </button>

                  {isExpanded && (
                    <div className="mt-6 space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((f, i) => (
                            <li key={i} className="text-gray-400 flex gap-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
