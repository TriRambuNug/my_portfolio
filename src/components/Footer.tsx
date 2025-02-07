"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-inner p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Kontak dan Ikon Sosial Media */}
        <section className="w-full max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

          {/* Informasi Kontak */}
          <div className="p-6 rounded-lg shadow-lg space-y-4 mb-8">
            <div className="flex items-center justify-center">
              <Mail className="text-blue-400 mr-3" />
              <p className="text-white">trnugrohoprasetyo@gmail.com</p>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="text-blue-400 mr-3" />
              <p className="text-white">+62851-5612-6703</p>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="text-blue-400 mr-3" />
              <p className="text-white">Sleman, Daerah Istimewa Yogyakarta</p>
            </div>
          </div>

          {/* Ikon Sosial Media */}
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/TriRambuNug"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-blue-400 transition"
            >
              <Github className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/tri-rambu-nugroho-prasetyo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-blue-400 transition"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="mailto:trnugrohoprasetyo@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-blue-400 transition"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </section>

        {/* Hak Cipta */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Tri Rambu Nugroho Prasetyo Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
