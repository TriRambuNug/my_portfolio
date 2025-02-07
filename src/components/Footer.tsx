"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Hak Cipta */}
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          © {new Date().getFullYear()} Tri Rambu Nugroho Prasetyo Portfolio. All rights reserved.
        </p>

        {/* Ikon Sosial Media */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <motion.a
            href="https://github.com/TriRambuNug"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <Github className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/tri-rambu-nugroho-prasetyo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="mailto:your.trnugrohoprasetyo@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
