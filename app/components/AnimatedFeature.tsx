"use client"
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedFeature({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center p-6 bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-pink-400">{title}</h3>
      <p className="text-gray-700 dark:text-gray-200 text-center">{description}</p>
    </motion.div>
  );
}
