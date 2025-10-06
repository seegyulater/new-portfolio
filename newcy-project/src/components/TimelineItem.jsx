// components/TimelineSection.jsx
import { GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const timelineItemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const TimelineItem = ({ title, subtitle, description, delay = 0 }) => (
  <motion.div
    variants={timelineItemVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    className="relative pl-8 pb-10"
  >
    <div className="absolute left-0 top-1 w-4 h-4 bg-pink-500 rounded-full border-2 border-white shadow-md" />
    <div className="text-gray-300">
      <h4 className="font-bold text-white text-base">{title}</h4>
      <p className="text-sm italic text-pink-400 mb-1">{subtitle}</p>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export const TimelineSection = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-10"
      >
        {/* Education */}
        <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 rounded-2xl hover:scale-[1.01] transition-all backdrop-blur-md">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
            <GraduationCap size={20} /> Education
          </h3>
          <TimelineItem
            title="Bachelor of Science in Computer Science"
            subtitle="Pamantasan ng Lungsod ng Maynila | 2021 - 2025"
            description="Focused on full-stack development, databases, and algorithms."
            delay={0.1}
          />
        </div>

        {/* Work Experience */}
        <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 rounded-2xl hover:scale-[1.01] transition-all backdrop-blur-md">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
            <Briefcase size={20} /> Work Experience
          </h3>
          <TimelineItem
            title="Data Management Intern"
            subtitle="Pinnacle Inc. | Mar 2025 - June 2025"
            description="Assisted with UAT & user revalidation for the PLM ERP System."
            delay={0.2}
          />
          <TimelineItem
            title="ICTO Intern"
            subtitle="Pamantasan ng Lungsod ng Maynila | Jul - Aug 2024"
            description="Developed a Laravel + Filament system for document tracking."
            delay={0.3}
          />
        </div>
      </motion.div>
    </section>
  );
};