"use client";

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function AboutSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hello! I am a <span class='font-semibold text-white dark:text-gray-900'>6th-semester student</span> in Software Engineering, passionate about web development using <span class='font-semibold text-white dark:text-white'>Laravel PHP</span>. I'm also excited about data processing and building machine learning models with <span class='font-semibold text-white dark:text-white'>TensorFlow</span>.",
        "I am always eager to learn new things and challenge myself to grow. Outside of coding, I enjoy reading books, exploring the latest technologies, and collaborating with the developer community."
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => typed.destroy();
  }, []);

  const tools = [
    { image: "./Logos/figma-original.png", name: "Figma" },
    { image: "./Logos/git-plain.png", name: "Git" },
    { image: "./Logos/github-original.png", name: "GitHub" },
    { image: "./Logos/html5-original.png", name: "Html5" },
    { image: "./Logos/css3-original.png", name: "css3" },
    { image: "./Logos/javascript-original.png", name: "Javascript" },
    { image: "./Logos/tailwindcss-plain.png", name: "tailwindcss" },
    { image: "./Logos/laravel-plain.png", name: "laravel" },
    { image: "./Logos/php-plain.png", name: "php" },
    { image: "./Logos/mysql-plain.png", name: "mysql" },
    { image: "./Logos/python-original.png", name: "python" },
    { image: "./Logos/tensorflow-original.png", name: "tensorflow" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    arrows: false, // Menghilangkan tombol navigasi
    centerMode: true, // Membuat item di tengah
    centerPadding: "0", // Menghilangkan padding di tengah
  };

  return (
    <>
      <section
        id="about"
        className="min-h-screen w-full flex flex-col justify-center items-center 
        bg-[#3b82f6] dark:bg-[#1e40af] px-4"
      >
        <div className="text-center max-w-2xl w-full">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About Me
          </motion.h1>

          <motion.p
            ref={typedRef}
            className="text-lg md:text-xl text-white dark:text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 border border-white text-white dark:border-gray-100 dark:text-gray-100 font-semibold rounded-lg hover:bg-white hover:text-[#3b82f6] dark:hover:bg-gray-100 dark:hover:text-[#1e40af] transition duration-300 transform hover:scale-105"
            >
              View My Projects
            </a>
            
          </div>
        </div>
      </section>

      <section
        id="tools"
        className="w-full py-16 bg-white dark:bg-gray-900 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Tools</h2>
        <div className="w-full max-w-7xl  items-center">
          <Slider {...sliderSettings}>
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <motion.div
                  className="relative flex justify-center items-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.img
                    src={tool.image}
                    alt={tool.name}
                    className={`w-30 h-30 object-contain ${tool.name === "GitHub" ? "dark:filter dark:invert" : ""}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-sm py-1 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {tool.name}
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}