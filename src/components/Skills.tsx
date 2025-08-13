import { motion } from "framer-motion";
import { backendIcons, devopsIcons, frontendIcons } from "../data/skillsData";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { FloatingImagesCluster } from "./FloatingImagesCluster";
import Section from "./common/Section";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icons: frontendIcons,
      gradient: "from-blue-500 to-cyan-500",
      color: "text-blue-400",
      delay: 0.2,
      vimCommand: ":e frontend/",
    },
    {
      title: "Backend",
      icons: backendIcons,
      gradient: "from-green-500 to-emerald-500",
      color: "text-green-400",
      delay: 0.4,
      vimCommand: ":e backend/",
    },
    {
      title: "DevOps",
      icons: devopsIcons,
      gradient: "from-purple-500 to-pink-500",
      color: "text-purple-400",
      delay: 0.6,
      vimCommand: ":e devops/",
    },
  ];

  return (
    <Section id="skills" title="Tech Stack & Expertise">
      {/* Vim command line */}
      <div className="font-mono text-green-400/60 text-xs sm:text-sm mb-6 sm:mb-8 text-center">
        :split skills.js | :vsplit | :tabnew technologies
      </div>

      <div className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-slate-700/20 rounded-3xl blur-3xl"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              transition={{ delay: category.delay, duration: 0.6 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {/* Vim tab header */}
                <div className="bg-slate-900/80 border-b border-slate-700/50 px-3 sm:px-4 py-2 font-mono text-xs text-slate-400">
                  <span className="text-green-400">●</span>{" "}
                  {category.vimCommand}
                </div>

                <div className="p-4 sm:p-6">
                  <div
                    className={`h-1 w-12 sm:w-16 bg-gradient-to-r ${category.gradient} rounded-full mb-4 sm:mb-6 mx-auto`}
                  ></div>

                  {/* Vim-style line numbers */}
                  <div className="flex">
                    <div className="font-mono text-xs text-slate-600 mr-3 sm:mr-4 space-y-2">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-slate-100">
                        {category.title}
                      </h3>
                      <div className="relative overflow-visible">
                        <FloatingImagesCluster
                          icons={category.icons}
                          color={category.color}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vim status bar */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm text-slate-400 mt-6 sm:mt-8 max-w-4xl mx-auto">
          <span className="text-green-400">-- VISUAL --</span>
          <span className="ml-2 sm:ml-4">3 files</span>
          <span className="ml-2 sm:ml-4 text-blue-400">
            technologies: Frontend | Backend | DevOps
          </span>
        </div>
      </div>
    </Section>
  );
}
