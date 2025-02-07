"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 bg-white dark:bg-gray-900 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Me</h2>
      <div className="w-full max-w-3xl bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <Mail className="text-blue-600 mr-3" />
          <p className="text-gray-900 dark:text-white">trnugrohoprasetyo@gmail.com</p>
        </div>
        <div className="flex items-center mb-4">
          <Phone className="text-blue-600 mr-3" />
          <p className="text-gray-900 dark:text-white">+62851-5612-6703</p>
        </div>
        <div className="flex items-center">
          <MapPin className="text-blue-600 mr-3" />
          <p className="text-gray-900 dark:text-white">Sleman, Daerah Istimewa Yogyakarta</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
