"use client"
import { motion } from "framer-motion";
import { FaStar, FaRocket, FaMagic } from "react-icons/fa";

export default function HeroSection() {
  return (
  <section className="relative w-full flex flex-col items-center justify-center min-h-[70vh] pt-2 pb-24 px-4 text-center bg-gradient-to-b from-[#eaf3fc] to-[#f5f8fd] dark:from-[#0a1a2f] dark:to-[#1a2332] overflow-hidden">
      {/* Floating animated shapes for wow effect */}
      <motion.div
        className="absolute left-10 top-10 w-32 h-32 bg-gradient-to-tr from-blue-400 to-purple-300 rounded-full blur-2xl opacity-40 animate-pulse z-0"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-10 bottom-10 w-40 h-40 bg-gradient-to-br from-pink-400 to-blue-300 rounded-full blur-2xl opacity-30 animate-pulse z-0"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      {/* Sparkle and icon wow effects */}
      <motion.div
        className="absolute left-1/4 top-1/3 text-yellow-400 text-3xl z-10"
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <FaStar className="drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute right-1/4 top-1/4 text-pink-400 text-3xl z-10"
        animate={{ y: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      >
        <FaRocket className="drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute left-1/2 bottom-1/4 text-blue-400 text-3xl z-10"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <FaMagic className="drop-shadow-lg" />
      </motion.div>
      {/* Glassmorphism card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full max-w-4xl mx-auto rounded-3xl bg-white/80 dark:bg-gray-900/80 shadow-2xl backdrop-blur-lg px-8 py-16 flex flex-col items-center border border-white/40 dark:border-gray-800/60"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#2563eb] via-[#a21caf] to-[#ec4899] bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(99,102,241,0.25)] animate-gradient-x"
        >
          Discover Your Best Career Fit
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-2xl text-xl sm:text-2xl text-gray-700 dark:text-gray-200 mb-10"
        >
          Take our science-backed assessment and match your unique strengths to modern careers. Experience the most advanced, beautiful, and interactive career test platform.
        </motion.p>
        <motion.a
          href="#assessment"
          whileHover={{ scale: 1.12, boxShadow: "0 0 32px 8px #2563eb55, 0 0 64px 16px #ec489955" }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-12 py-6 rounded-full bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white font-extrabold text-2xl shadow-2xl hover:shadow-[0_0_32px_8px_#2563eb55,0_0_64px_16px_#ec489955] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-pink-400 animate-glow"
          style={{ boxShadow: "0 4px 32px 0 rgba(99,102,241,0.18), 0 0 0 0 #ec489900" }}
        >
          Start Your Free Assessment
        </motion.a>
      </motion.div>
    </section>
  );
}
