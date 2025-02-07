"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedWave from "./AnimatedWave";

export default function HeroSection() {
  const { ref } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center dark:bg-gray-900"
    >
      {/* Animasi fade-in dan slide-up hanya untuk teks */}
      <div className="max-w-2xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hello World! 🌍
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I&apos;m{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
          Tri Rambu Nugroho Prasetyo
          </span  >
          . Let&apos;s explore and collaborate!
        </motion.p>
      </div>

      {/* Animasi teks bergantian */}
      <motion.div
        className="mt-6 text-xl font-medium text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <motion.span
          className="inline-block"
          animate={{ x: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🚀 Passionate Developer | 💡 Creative Thinker | 🤝 Team Player
        </motion.span>
      </motion.div>

      {/* Animasi tombol dengan efek hover */}
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-white hover:border-blue-600  transition"
      >
        Explore My Projects
      </motion.a>

      {/* Menghindari jeda dengan margin negatif */}
      <div className="mt-1 w-full">
        <AnimatedWave />
      </div>
    </section>
  );
}
