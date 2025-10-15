"use client"

import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export default function AssessmentIntro() {
  return (
    <section
      id="assessment"
      className="relative w-full py-32 px-4 flex flex-col items-center overflow-hidden"
    >
      {/* Floating animated glass background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.7, y: 80 }}
        whileInView={{ opacity: 0.8, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, type: "spring" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-gradient-to-tr from-blue-400/30 via-pink-400/20 to-purple-400/30 rounded-3xl blur-3xl pointer-events-none z-0"
        style={{ filter: "blur(80px)" }}
      />
      <div className="relative z-10 flex flex-col items-center w-full">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x tracking-tight"
        >
          Start Your Free Career Assessment
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-2xl text-xl sm:text-2xl text-gray-700 dark:text-gray-200 mb-12 text-center"
        >
          Our science-backed assessment analyzes your personality, strengths, and preferences to match you with the best-fit careers. It’s fast, fun, and completely free to try!
        </motion.p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.14, boxShadow: "0 0 40px #2563eb99, 0 0 80px #ec489999" }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 320, damping: 14 }}
          className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold text-xl shadow-2xl hover:shadow-[0_0_40px_#2563eb99,0_0_80px_#ec489999] transition-all duration-300 border-2 border-white/40 dark:border-gray-800/50 backdrop-blur-2xl animate-glow"
        >
          <motion.span
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="inline-block"
          >
            <FaRocket className="text-3xl drop-shadow-lg" />
          </motion.span>
          Begin Assessment
        </motion.a>
      </div>
    </section>
  );
}
