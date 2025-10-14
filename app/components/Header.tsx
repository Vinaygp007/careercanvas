"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-transparent shadow-[0_4px_32px_0_rgba(99,102,241,0.08)]"
      style={{ boxShadow: "0 4px 32px 0 rgba(99,102,241,0.08)" }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 relative">
        {/* Animated gradient border bottom */}
        <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 opacity-60 blur-sm animate-gradient-x rounded-b-xl pointer-events-none" />
        <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
          CareerCanvas
        </Link>
        <div className="flex gap-6 items-center text-base font-medium">
          <Link href="#features" className="relative group transition-colors">
            <span className="inline-block px-2 py-1 rounded-md group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-pink-100 group-hover:text-blue-700 dark:group-hover:text-pink-400 transition-all duration-200">
              Features
            </span>
            <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-400 rounded-full group-hover:w-full group-hover:h-1 transition-all duration-300 -translate-x-1/2" />
          </Link>
          <Link href="#assessment" className="relative group transition-colors">
            <span className="inline-block px-2 py-1 rounded-md group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-pink-100 group-hover:text-blue-700 dark:group-hover:text-pink-400 transition-all duration-200">
              Assessment
            </span>
            <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-400 rounded-full group-hover:w-full group-hover:h-1 transition-all duration-300 -translate-x-1/2" />
          </Link>
          <Link href="#careers" className="relative group transition-colors">
            <span className="inline-block px-2 py-1 rounded-md group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-pink-100 group-hover:text-blue-700 dark:group-hover:text-pink-400 transition-all duration-200">
              Careers
            </span>
            <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-400 rounded-full group-hover:w-full group-hover:h-1 transition-all duration-300 -translate-x-1/2" />
          </Link>
          <Link href="#about" className="relative group transition-colors">
            <span className="inline-block px-2 py-1 rounded-md group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-pink-100 group-hover:text-blue-700 dark:group-hover:text-pink-400 transition-all duration-200">
              About
            </span>
            <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-400 rounded-full group-hover:w-full group-hover:h-1 transition-all duration-300 -translate-x-1/2" />
          </Link>
          <Link href="#contact" className="relative group transition-colors">
            <span className="inline-block px-2 py-1 rounded-md group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-pink-100 group-hover:text-blue-700 dark:group-hover:text-pink-400 transition-all duration-200">
              Contact
            </span>
            <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-400 rounded-full group-hover:w-full group-hover:h-1 transition-all duration-300 -translate-x-1/2" />
          </Link>
        </div>
        <Link
          href="/career-test"
          className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white shadow-lg font-semibold text-base relative overflow-hidden transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-pink-400 transform-gpu hover:scale-110"
        >
          <span className="relative z-10">Start Free Test</span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-lg animate-gradient-x" />
        </Link>
      </nav>
    </motion.header>
  );
}
