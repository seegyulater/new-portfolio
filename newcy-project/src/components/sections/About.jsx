export const About = () => {
  const frontendSkills = ["React", "Vue", "Typescript", "TailwindCSS"];
  const backendSkills = ["Node.js", "Python", "PHP", "MySQL"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions. With a background in
            leadership.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Frontend </h3>
              <div className="flex flex-wrap grap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20
                               hover:shadow-[0_2px_8px_rgba(245, 40, 145, 0.2)] transition
                   "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend </h3>
              <div className="flex flex-wrap grap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20
                               hover:shadow-[0_2px_8px_rgba(245, 40, 145, 0.2)] transition
                   "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y ">
              <li>
                <strong> Bachelor of Science in Computer Science</strong> -
                Pamantasan ng Lungsod ng Maynila (2021-2025)
              </li>
              <li>
                <strong> Relevant Coursework: </strong> Data Structures, Web
                Development, Cloud Computing, Mobile Development...
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💻 Work Experience </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  {" "}
                  Data Management Intern at Pinnacle Inc. (March 2025 - Present){" "}
                </h4>
                <p>
                  Conducted User Revalidation and User Acceptance Testing (UAT)
                  for the Pamantasan ng Lungsod ng Maynila (PLM) ERP System,
                  ensuring proper user access levels and validating system
                  functionality across multiple modules
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  {" "}
                  ICTO Intern at Pamantasan ng Lungsod ng Maynila. (July 2024 -
                  Aug 2024){" "}
                </h4>
                <p>
                  Designed and implemented a document request and status
                  tracking system for the PLM Office of the University Registrar
                  (OUR) using PHP, MySQL, Laravel, and Filament.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
