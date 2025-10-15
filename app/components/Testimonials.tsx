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
  <section className="relative w-full py-28 px-4 flex flex-col items-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black overflow-hidden" id="testimonials">
      {/* Animated floating gradient shape */}
      <motion.div
        className="absolute left-10 top-10 w-52 h-52 bg-gradient-to-tr from-blue-300 to-pink-200 rounded-full blur-3xl opacity-40 z-0"
        animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x tracking-tight"
      >
        Success Stories & Testimonials
      </motion.h2>
  <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-14 relative z-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.9, type: "spring", bounce: 0.3 }}
            className="bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-12 flex flex-col items-center text-center border border-white/50 dark:border-gray-800/70 hover:scale-105 hover:shadow-[0_12px_40px_0_rgba(99,102,241,0.18)] transition-all duration-300 backdrop-blur-2xl"
          >
            <motion.img
              src={t.image}
              alt={t.name}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.7, type: "spring" }}
              className="w-28 h-28 rounded-full mb-6 object-cover border-4 border-blue-200 dark:border-pink-400 shadow-xl"
            />
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-200 mb-6 animate-gradient-x bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              “{t.quote}”
            </blockquote>
            <div className="font-bold text-blue-600 dark:text-pink-400 text-xl mb-2 animate-gradient-x bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t.name}
            </div>
            <div className="text-base text-gray-500 dark:text-gray-400">{t.title}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
