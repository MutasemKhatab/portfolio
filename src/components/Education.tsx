import { motion } from "framer-motion";
import fortyTwo from "../assets/42.png";
import just from "../assets/just.png";
import { fadeInUp, staggerContainer } from "../utils/animations";
import FlipCard from "./FlipCard";
import Section from "./common/Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      {/* Vim command line */}
      <div className="font-mono text-green-400/60 text-xs sm:text-sm mb-6 sm:mb-8 text-center">
        :buffers | :ls education/*.md
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center justify-center"
      >
        {/* JUST Card */}
        <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
          <div className="relative group">
            {/* Expanded hover area */}
            <div className="absolute -inset-8 z-0"></div>

            {/* Vim buffer indicator - centered */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 font-mono text-xs text-slate-500 whitespace-nowrap">
              %a 1 "just.md" line 1
            </div>

            <div className="relative z-10">
              <FlipCard
                frontImage={just}
                frontImageAlt="JUST Logo"
                description="Pursuing a B.Sc. in Software Engineering, graduating in 2025. Focused on software development, design patterns, and system architecture, with hands-on experience through academic and personal projects."
                isCompleted={true}
              />
            </div>
          </div>
        </motion.div>

        {/* 42 School Card */}
        <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
          <div className="relative group">
            {/* Expanded hover area */}
            <div className="absolute -inset-8 z-0"></div>

            {/* Vim buffer indicator - centered */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 font-mono text-xs text-slate-500 whitespace-nowrap">
              # 2 "42.md" line 1
            </div>

            <div className="relative z-10">
              <FlipCard
                frontImage={fortyTwo}
                frontImageAlt="42 School Logo"
                description="Completed an intensive, peer-to-peer software engineering program emphasizing problem-solving, algorithms, and teamwork. Learned through project-based challenges without formal classes, fostering self-driven learning and adaptability."
                isCompleted={false}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Vim status bar */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm text-slate-400 mt-8 sm:mt-12 max-w-4xl mx-auto">
        <span className="text-blue-400">2 buffers</span>
        <span className="ml-2 sm:ml-4">JUST: completed</span>
        <span className="ml-2 sm:ml-4">42: in progress</span>
        <span className="ml-2 sm:ml-4 text-green-400">:w education</span>
      </div>
    </Section>
  );
}
