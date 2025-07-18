import { RevealOnScroll } from "../RevealOnScroll";
import TrueFocus from "../TrueFocus";
import profileImage from "../../assets/PETRAS MARK CRISTOPHER - PLM - CREATIVE (2).JPG";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-16 relative"
    >
      <img
        src={profileImage}
        alt="Mark Petras"
        className="w-52 h-52 object-cover rounded-full border-4 border-pink-500 shadow-lg hover:shadow-[0_0_15px_rgba(245,40,145,0.4)] transition-transform duration-300 transform hover:-translate-y-1"
      />
      <RevealOnScroll>
        <div className="text-center md:text-left z-10 max-w-xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            <TrueFocus
              sentence="Markcy Petras"
              manualMode={false}
              blurAmount={5}
              borderColor="purple"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Full Stack Developer and Computer Science graduate student from
            Pamantasan ng Lungsod ng Maynila
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(245,40,145,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-pink-500/50 text-pink-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(245,40,145,0.2)] hover:bg-pink-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
