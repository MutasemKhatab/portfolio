import { motion } from "framer-motion";
import { useState } from "react";
import { backendIcons, devopsIcons, frontendIcons } from "../data/skillsData";
import { FloatingImagesCluster } from "./FloatingImagesCluster";

export default function Skills() {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      onViewportEnter={() => setIsInView(true)}
      className="p-10"
    >
      <section className="py-5 text-center relative">
        <h2 className="text-5xl font-bold text-center">
          Tech Stack & Expertise
        </h2>

        {/* SVG Tree with Animation */}
        <div className="flex flex-col items-center mt-55">
          {/* Tree SVG */}
          <svg
            width="700"
            height="400"
            viewBox="0 0 700 400"
            className="absolute top-24 left-1/2 transform -translate-x-1/2 -z-10 opacity-20"
          >
            <path
              d="M350,0 L350,100 M350,100 C350,100 200,150 150,230 M350,100 C350,100 350,150 350,230 M350,100 C350,100 500,150 550,230"
              stroke="#333"
              strokeWidth="8"
              fill="none"
              className={`tree-trunk ${isInView ? "animate" : ""}`}
            />
            <circle
              cx="350"
              cy="0"
              r="10"
              fill="#333"
              className="pulse-animation"
            />
          </svg>

          {/* Branches with Hover Effects and Floating Images */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 relative z-10">
            {/* Frontend Branch */}
            <div
              className={`branch-card frontend-branch ${
                isInView ? "animate" : ""
              } w-64 transition-all duration-300 ease-in-out`}
            >
              <div className="bg-black bg-opacity-50 hover:bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                <div className="h-2 w-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Frontend
                </h3>
                <div className="relative overflow-visible">
                  <FloatingImagesCluster
                    icons={frontendIcons}
                    color="text-blue-300"
                  />
                </div>
              </div>
            </div>

            {/* Backend Branch */}
            <div
              className={`branch-card backend-branch ${
                isInView ? "animate" : ""
              } w-64 transition-all duration-300 ease-in-out`}
            >
              <div className="bg-black bg-opacity-50 hover:bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                <div className="h-2 w-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Backend
                </h3>
                <div className="relative overflow-visible">
                  <FloatingImagesCluster
                    icons={backendIcons}
                    color="text-green-300"
                  />
                </div>
              </div>
            </div>

            {/* DevOps Branch */}
            <div
              className={`branch-card devops-branch ${
                isInView ? "animate" : ""
              } w-64 transition-all duration-300 ease-in-out`}
            >
              <div className="bg-black bg-opacity-50 hover:bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                <div className="h-2 w-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  DevOps
                </h3>
                <div className="relative overflow-visible">
                  <FloatingImagesCluster
                    icons={devopsIcons}
                    color="text-purple-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
