"use client"
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Tammy G.",
    title: "Teacher",
    quote:
      "It’s where you should go before you start to look… it blew me away! I would recommend your career personality test to anyone that is looking for clear direction.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Patrick",
    title: "Career Changer",
    quote:
      "The best career test and career tool I’ve found… I’m confident it will help take the guesswork out of your job search.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Tyler Forte",
    title: "C.F.O.",
    quote:
      "I’m impressed with the accuracy of my career test results. I recommend CareerCanvas to anyone serious about their future.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-24 px-4 flex flex-col items-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black overflow-hidden" id="testimonials">
      {/* Animated floating gradient shape */}
      <motion.div
        className="absolute left-10 top-10 w-40 h-40 bg-gradient-to-tr from-blue-300 to-pink-200 rounded-full blur-2xl opacity-30 z-0"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x"
      >
        Success Stories & Testimonials
      </motion.h2>
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.9, type: "spring", bounce: 0.3 }}
            className="bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center border border-white/40 dark:border-gray-800/60 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(99,102,241,0.15)] transition-all duration-300 backdrop-blur-lg"
          >
            <motion.img
              src={t.image}
              alt={t.name}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.7, type: "spring" }}
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-200 dark:border-pink-400 shadow-lg"
            />
            <blockquote className="text-lg italic text-gray-700 dark:text-gray-200 mb-4 animate-gradient-x bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              “{t.quote}”
            </blockquote>
            <div className="font-bold text-blue-600 dark:text-pink-400 text-lg mb-1 animate-gradient-x bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t.name}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{t.title}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
