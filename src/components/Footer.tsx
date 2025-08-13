import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700/50 py-8 sm:py-12 px-4 sm:px-6 mt-16 sm:mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="[font-family:'Cookie'] text-2xl sm:text-3xl text-slate-200 -rotate-6">
            Mo Khattab
          </div>

          <p className="text-sm sm:text-base text-slate-400">
            Built with ❤️ using React, TypeScript, Tailwind CSS, and Framer
            Motion
          </p>

          {/* Vim tribute */}
          <div className="font-mono text-green-400/80 text-xs sm:text-sm">
            written in nvim and kitty terminal ✨
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4">
            <a
              href="#about"
              className="text-slate-500 hover:text-slate-300 transition-colors text-sm sm:text-base"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-slate-500 hover:text-slate-300 transition-colors text-sm sm:text-base"
            >
              Skills
            </a>
            <a
              href="#education"
              className="text-slate-500 hover:text-slate-300 transition-colors text-sm sm:text-base"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-slate-500 hover:text-slate-300 transition-colors text-sm sm:text-base"
            >
              Contact
            </a>
          </div>

          <p className="text-slate-500 text-xs sm:text-sm border-t border-slate-800 pt-4 mt-6 sm:mt-8">
            © 2025 Mo Khattab. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
