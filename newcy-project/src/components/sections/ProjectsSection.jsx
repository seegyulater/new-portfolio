import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    id: 1,
    title: "PrismViz",
    description:
      "A Next.js-based interactive data visualization web application system with a primary focus on data report generation",
    image: "Projects/PrismViz.jpg",
    tags: ["React", "Next.js", "Node.js", "Artificial Intelligence"],
    demoUrl: "https://prismviz.vercel.app/",
    githubUrl: "https://github.com/HolyShaq/prismviz",
  },
  {
    id: 2,
    title: "PLM Thesis Archive System",
    description:
      "A digital repository for managing, storing, and retrieving academic theses and research papers. Built with Django and MySQL/MariaDB.",
    image: "/Projects/thesisarchive.png",
    tags: ["Python", "Django", "MySQL"],
    demoUrl: "", // empty string = no demo
    githubUrl: "https://github.com/jiejiebureche/PLM-Thesis-Archive-System", // example
  },
  {
    id: 3,
    title: "PLM OUR SYSTEM",
    description:
      "The Office of the University Registrar (OUR) Documentation System is designed to centralise and streamline the process of requesting and managing academic records for the university ",
    image: "/Projects/our.png",
    tags: ["Laravel", "TALL", "Filament", "MySQL"],
    demoUrl: "", // no demo
    githubUrl: "https://github.com/seegyulater/PLMOURSYSTEM",
  },
    {
    id: 4,
    title: "Cosmic Script",
    description:
      "Cosmic Script is a compiler based on the simple syntax of Python and C++",
    image: "/Projects/cosmic.png",
    tags: ["Python", "C++", "Lexical", "Syntax", "Semantic", "Code Generation"],
    demoUrl: "", // no demo
    githubUrl: "https://github.com/dssrts/COSMIC_SCRIPT",
  },
    {
    id: 5,
    title: "Academic Management System (PLM ERP)",
    description:
      "The Academic Management System is one of the feature in our project for Software Engineering 1 & Software Engineering 2 for (PLM ERP System)",
    tags: ["Laravel", "TALL", "Filament", "Team Work"],
    image: "/Projects/se.png",
    demoUrl: "", // no demo
    githubUrl: "https://github.com/dssrts/Academic-Management-System",
  },
    {
    id: 6,
    title: "Enjoyece Travel and Tours",
    description:
      " The Enjoyce Travel and Tour mobile app transforms the travel experience by providing an efficient platform for users to plan, and manage their trips with ease ",
    image: "/Projects/enjoycetravel.png",
    tags: ["Dart", "Flutter", "Flutterflow", "Firebase"],
    demoUrl: "", // no demo
    githubUrl: "https://github.com/HolyShaq/Enjoyce?tab=readme-ov-file",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Section Header */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my latest works — crafted with attention to detail,
            performance, and user experience
          </p>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, key) => (
              <div
                key={key}
                className="p-6 rounded-xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/0 backdrop-blur-md hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(245,40,145,0.2)] transition-all"
              >
                {/* Project Image */}
                <div className="rounded-lg overflow-hidden mb-4 h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-xs hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(245,40,145,0.1)] transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center mt-4">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-pink-400 hover:text-pink-300 flex items-center gap-1 text-sm transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  ) : (
                    <span className="text-gray-500 italic text-sm">
                      No live demo
                    </span>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-pink-400 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/seegyulater"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium hover:scale-105 transition-all"
            >
              Check My GitHub <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};