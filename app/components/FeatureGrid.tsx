"use client"

import AnimatedFeature from "./AnimatedFeature";
import { FaBrain, FaChartLine, FaUserFriends, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FeatureGrid() {
  return (
    <section className="relative w-full py-28 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Enhanced animated floating shape */}
      <motion.div
        className="absolute right-10 top-10 w-44 h-44 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full blur-3xl opacity-40 z-0"
        animate={{ y: [0, -32, 0], x: [0, 32, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10"
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
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
          }}
        >
          <AnimatedFeature
            icon={<FaBrain />}
            title="Science-Backed"
            description="Dual-assessment combines personality, aptitude, and aversion for precise career matches."
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
          }}
        >
          <AnimatedFeature
            icon={<FaChartLine />}
            title="1000+ Careers"
            description="Explore modern careers with detailed research, salary, growth, and 'day in the life' videos."
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
          }}
        >
          <AnimatedFeature
            icon={<FaUserFriends />}
            title="Personalized Reports"
            description="Get a beautiful, shareable strengths report and professional branding tools."
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
          }}
        >
          <AnimatedFeature
            icon={<FaStar />}
            title="Stunning Experience"
            description="Enjoy a modern, animated, and interactive platform built for all devices."
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
