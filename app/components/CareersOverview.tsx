"use client"
import { motion } from "framer-motion";
import { FaBriefcase, FaChartBar, FaGraduationCap, FaVideo } from "react-icons/fa";

const careers = [
  {
    icon: <FaBriefcase className="text-blue-600 dark:text-pink-400 text-3xl mb-2" />,
    title: "1000+ Modern Careers",
    description: "Explore a vast library of up-to-date career paths, from tech to healthcare, business, and more.",
  },
  {
    icon: <FaChartBar className="text-blue-600 dark:text-pink-400 text-3xl mb-2" />,
    title: "Salary & Growth Data",
    description: "Access detailed salary ranges, growth projections, and job market trends for every career.",
  },
  {
    icon: <FaGraduationCap className="text-blue-600 dark:text-pink-400 text-3xl mb-2" />,
    title: "Education Requirements",
    description: "See what degrees, certifications, or skills are needed to succeed in your chosen field.",
  },
  {
    icon: <FaVideo className="text-blue-600 dark:text-pink-400 text-3xl mb-2" />,
    title: "Day in the Life Videos",
    description: "Get a real feel for each career with immersive, authentic video stories from professionals.",
  },
];

const CareersOverview = () => {
  return (
  <section id="careers" className="relative w-full py-28 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black flex flex-col items-center overflow-hidden">
      {/* Animated floating shape */}
      <motion.div
        className="absolute right-10 bottom-10 w-52 h-52 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full blur-3xl opacity-40 z-0"
        animate={{ y: [0, -32, 0], x: [0, -32, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x tracking-tight"
      >
        Explore Careers
      </motion.h2>
      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
      >
        {careers.map((c, i) => (
          <motion.div
            key={c.title}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
            }}
            className="bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-12 flex flex-col items-center text-center border border-white/50 dark:border-gray-800/70 hover:scale-105 hover:shadow-[0_12px_40px_0_rgba(99,102,241,0.18)] transition-all duration-300 backdrop-blur-2xl"
          >
            {c.icon}
            <div className="font-bold text-blue-600 dark:text-pink-400 text-xl mb-2 animate-gradient-x bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {c.title}
            </div>
            <div className="text-gray-700 dark:text-gray-200 text-lg">{c.description}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CareersOverview;

