export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-right">
          Hi, I'm Markcy Petras
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Full Stack Developer and Computer Science graduate student from
          Pamantasan ng Lungsod ng Maynila
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(245, 40, 145, 0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-pink-500/50 text-pink-500 py-3 px-6 rounded font-medium transition-all duration-200 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(245, 40, 145, 0.2)] hover:bg-pink-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
