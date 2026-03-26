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
  Hospital,
  Scissors,
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
      type: "Team Project",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Smart Appointment & Capacity Prediction System",
      description: "AI-Powered Salon Scheduling & Resource Management Platform",
      fullDescription:
        "Developed a smart appointment booking and capacity prediction system for salons to optimize scheduling and resource management. The system leverages historical booking data to predict peak hours, manage real-time availability, and suggest optimal booking times — reducing overbooking, improving staff utilization, and enhancing overall client satisfaction.",
      techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Spring Boot",
        "PostgreSQL",
        "JWT",
        "REST API",
      ],
      features: [
        "Predictive peak hour detection using historical booking data",
        "Dynamic slot management with real-time availability checks",
        "Overload detection and automatic alerts for scheduling conflicts",
        "Smart rescheduling with alternative slot suggestions on cancellations",
        "Role-based dashboards for Admin, Stylist, and Client",
        "Admin analytics dashboard for booking trends and staff performance",
        "Client portal for booking, rescheduling, and appointment history",
      ],
      githubLink: "https://github.com/arosha-w",
      demoLink: null,
      category: "Full Stack",
      date: "Individual Project",
      type: "Individual Project",
      icon: Scissors,
      color: "from-rose-500 to-orange-500",
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
      type: "Team Project",
      icon: Hospital,
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
      type: "Academic Project",
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
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500 blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-pink-500 blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
            <span className="text-purple-300 text-xs sm:text-sm font-medium">My Work Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto px-2">
            A collection of projects showcasing real-world problem solving and technical expertise.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8">
        <div className="flex justify-center gap-2 sm:gap-4 flex-wrap px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold transition-all text-sm sm:text-base ${
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
      <section className="py-10 sm:py-16 pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            const isExpanded = expandedProject === index;

            return (
              <div
                key={index}
                className="bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className="p-5 sm:p-6 md:p-8">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <div className={`p-3 sm:p-4 bg-gradient-to-br ${project.color} rounded-xl flex-shrink-0`}>
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start sm:items-center gap-2 sm:gap-3 mb-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">{project.name}</h3>
                        {project.type === "Individual Project" && (
                          <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold bg-rose-500/20 border border-rose-500/40 text-rose-300 rounded-full flex-shrink-0">
                            Individual Project
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base">{project.description}</p>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 mt-1.5 sm:mt-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        {project.date}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{project.fullDescription}</p>

                  <button
                    onClick={() => setExpandedProject(isExpanded ? null : index)}
                    className="mt-4 sm:mt-6 px-4 sm:px-5 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white text-xs sm:text-sm font-semibold transition-all"
                  >
                    {isExpanded ? "Show Less" : "Learn More"}
                  </button>

                  {isExpanded && (
                    <div className="mt-5 sm:mt-6 space-y-5 sm:space-y-6">
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 sm:px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((f, i) => (
                            <li key={i} className="text-gray-400 flex gap-2 text-sm sm:text-base">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-3 pt-2">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white text-xs sm:text-sm font-medium transition-all"
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                          </a>
                        )}
                        {project.demoLink && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl text-white text-xs sm:text-sm font-medium transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
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