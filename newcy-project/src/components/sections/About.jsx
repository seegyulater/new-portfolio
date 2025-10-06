import { RevealOnScroll } from "../RevealOnScroll";
import { TimelineSection } from "../TimelineItem";
import CV from "../../assets/PETRAS_CV2025.pdf";
import { motion } from "framer-motion";

export const About = () => {
  const skillSections = [
    {
      title: "Software Skills",
      items: [
        "Leadership",
        "Teamwork",
        "Time Management",
        "Problem Solving",
        "Communication",
        "Analytical Thinking",
      ],
    },
    {
      title: "Technical Skills",
      items: [
        "Java",
        "Python",
        "PHP",
        "Javascript",
        "HTML5/CSS3",
        "Laravel",
        "Dart",
        "Flutter",
        "React/ReactJS",
        "C/C++",
      ],
    },
    {
      title: "Backend Skills",
      items: ["MySQL", "MariaDB", "Node.js", "Django", "Flask"],
    },
    {
      title: "Tools & Platforms",
      items: [
        "Git/Github",
        "Microsoft Office",
        "Figma",
        "Gemini Developer API",
        "Chart.js",
        "Visual Studio Code",
        "Excel",
        "FlutterFlow",
        "React bits",
        "Filament",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <motion.div
            className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-pink-400 text-lg font-semibold mb-4">
              Hi, I'm Mark 👋
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              I’m a passionate developer who enjoys building fast, scalable, and
              user-centric web applications. I love transforming ideas into
              elegant, functional interfaces — whether it's front-end design or
              backend logic. With a foundation in leadership and collaboration,
              I thrive in dynamic teams and take pride in solving real-world
              problems with code.
            </p>
          </motion.div>

          {/* Skills Timeline Style */}
          <div className="relative border-l border-white/10 ml-4 space-y-12">
            {skillSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6"
              >
                <span className="absolute left-[-11px] top-1 w-4 h-4 bg-pink-500 rounded-full border-4 border-gray-900" />
                <h3 className="text-lg font-semibold text-white mb-3">
                  {section.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item, i) => (
                    <span
                      key={i}
                      className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-10">
            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium hover:scale-105 transition text-center"
            >
              Get In Touch
            </a>
            <a
              href={CV}
              download
              className="px-6 py-2 rounded-full border border-pink-500/50 text-white hover:bg-white/10 text-sm font-medium transition text-center"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Existing Timeline Section */}
        <TimelineSection />
      </RevealOnScroll>
    </section>
  );
};