"use client"
import { motion } from "framer-motion";
import { FaAward, FaUserFriends, FaSmile, FaChartLine } from "react-icons/fa";

const stats = [
  { label: "Years Experience", value: 25, suffix: "+", icon: FaAward },
  { label: "Careers Matched", value: 1000, suffix: "+", icon: FaChartLine },
  { label: "Users Helped", value: 7, suffix: "M+", icon: FaUserFriends },
  { label: "Satisfaction", value: 98, suffix: "%", icon: FaSmile },
];

export default function AnimatedStats() {
  return (
    <section
      className="relative w-full py-20 px-4 flex flex-col items-center overflow-hidden"
      id="stats"
    >
      {/* Floating animated glass background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.7, y: 60 }}
        whileInView={{ opacity: 0.7, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, type: "spring" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-gradient-to-tr from-blue-400/30 via-pink-400/20 to-purple-400/30 rounded-3xl blur-2xl pointer-events-none z-0"
        style={{ filter: "blur(60px)" }}
      />
      <div className="relative z-10 max-w-5xl w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.18, duration: 0.8, type: "spring", bounce: 0.4 }}
              className="flex flex-col items-center justify-center bg-white/60 dark:bg-gray-900/60 rounded-2xl shadow-xl backdrop-blur-lg border border-white/30 dark:border-gray-800/40 p-6 sm:p-8 group hover:scale-105 hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.08 }}
            >
              <motion.div
                initial={{ rotate: -10 }}
                whileInView={{ rotate: 0 }}
                whileHover={{ rotate: 8, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="mb-2"
              >
                <Icon className="text-3xl sm:text-4xl text-blue-500 group-hover:animate-pulse drop-shadow-lg" />
              </motion.div>
              <motion.span
                initial={{ textShadow: "none" }}
                whileHover={{
                  textShadow:
                    "0 0 16px #2563eb88, 0 0 32px #ec489988, 0 0 8px #a21caf88",
                }}
                className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-1 animate-gradient-x"
              >
                {stat.value}
                <span className="text-2xl align-top">{stat.suffix}</span>
              </motion.span>
              <span className="text-base sm:text-lg text-gray-700 dark:text-gray-200 font-medium">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
