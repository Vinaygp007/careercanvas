"use client"
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-gray-900 flex flex-col items-center overflow-hidden">
      {/* Animated floating shape */}
      <motion.div
        className="absolute left-10 top-1/2 w-40 h-40 bg-gradient-to-tr from-blue-200 to-pink-200 rounded-full blur-2xl opacity-30 z-0"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x"
      >
        About CareerCanvas
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="max-w-3xl text-lg sm:text-xl text-gray-700 dark:text-gray-200 mb-6 text-center"
      >
        CareerCanvas is dedicated to helping you discover your ideal career path. Our platform combines science-backed assessments, modern design, and interactive tools to match your unique strengths with the best-fit careers. With 25+ years of expertise, we empower millions to make confident, informed career decisions.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="max-w-3xl text-lg sm:text-xl text-gray-700 dark:text-gray-200 text-center"
      >
        Trusted by students, professionals, and organizations worldwide, CareerCanvas is your partner in career discovery, growth, and success.
      </motion.p>
    </section>
  );
}
