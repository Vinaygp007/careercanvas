"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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
        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 items-center text-base font-medium">
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
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-2xl text-blue-600 dark:text-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Mobile nav dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800 flex flex-col items-center py-4 gap-2 z-50 md:hidden"
            >
              <Link href="#features" className="w-full text-center py-3 text-lg font-medium hover:bg-blue-50 dark:hover:bg-pink-900/30 transition" onClick={() => setMenuOpen(false)}>
                Features
              </Link>
              <Link href="#assessment" className="w-full text-center py-3 text-lg font-medium hover:bg-blue-50 dark:hover:bg-pink-900/30 transition" onClick={() => setMenuOpen(false)}>
                Assessment
              </Link>
              <Link href="#careers" className="w-full text-center py-3 text-lg font-medium hover:bg-blue-50 dark:hover:bg-pink-900/30 transition" onClick={() => setMenuOpen(false)}>
                Careers
              </Link>
              <Link href="#about" className="w-full text-center py-3 text-lg font-medium hover:bg-blue-50 dark:hover:bg-pink-900/30 transition" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link href="#contact" className="w-full text-center py-3 text-lg font-medium hover:bg-blue-50 dark:hover:bg-pink-900/30 transition" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
              <Link
                href="/career-test"
                className="w-full text-center py-3 text-lg font-bold bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-xl mt-2 shadow animate-glow"
                onClick={() => setMenuOpen(false)}
              >
                Start Free Test
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Desktop CTA */}
        <Link
          href="/career-test"
          className="hidden md:inline-block ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white shadow-lg font-semibold text-base relative overflow-hidden transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-pink-400 transform-gpu hover:scale-110"
        >
          <span className="relative z-10">Start Free Test</span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-lg animate-gradient-x" />
        </Link>
      </nav>
    </motion.header>
  );
}
