"use client";

import React, { useEffect, useState } from "react";

const projects = [
  {
    name: "CiMon Project",
    description:
      "CiMON is a machine learning-based application designed to help chili farmers tackle increasingly complex challenges in agriculture, such as pest infestations, diseases, and climate change. With the growing demand for chili in Indonesia, this application provides an innovative solution to enhance productivity and efficiency in chili farming. In this project, I play a role as the machine learning model developer.",
    image: "/project/cimon.png",
    link: "https://github.com/CiMon-Capstone-Project",
  },
  {
    name: "SPI PDAM Tirtamarta dashboard",
    description: "This project aims to assist the SPI division of PT PDAM TIRTAMARTA in efficiently monitoring and analyzing operational pipeline network data. The dashboard website presents data visualizations in the form of interactive charts and tables. It is built using the Laravel framework, and my role includes backend development, system analysis, and quality control..",
    image: "/project/spi_pdam.png",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full py-16 bg-white dark:bg-gray-900 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Projects
      </h2>
      <div className="w-full max-w-4xl flex flex-col gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-100 object-cover rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              {project.link && project.link.trim() !== "" && (
                <a
                  href={project.link}
                  className="mt-4 inline-block px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md 
               hover:bg-white hover:text-blue-600 focus:ring-4 focus:ring-white 
               dark:bg-blue-500 dark:hover:bg-white dark:hover:text-blue-500 dark:focus:ring-white 
               transition-all duration-300 ease-in-out border border-transparent hover:border-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
