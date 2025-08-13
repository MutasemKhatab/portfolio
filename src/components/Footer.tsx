import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700/50 py-12 px-6 mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="[font-family:'Cookie'] text-3xl text-slate-200 -rotate-6">
            Mo Khattab
          </div>

          <p className="text-slate-400">
            Built with ❤️ using React, TypeScript, Tailwind CSS, and Framer
            Motion
          </p>

          {/* Vim tribute */}
          <div className="font-mono text-green-400/80 text-sm">
            written in nvim and kitty terminal ✨
          </div>

          <div className="flex justify-center space-x-6 pt-4">
            <a
              href="#about"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Skills
            </a>
            <a
              href="#education"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Contact
            </a>
          </div>

          <p className="text-slate-500 text-sm border-t border-slate-800 pt-4 mt-8">
            © 2025 Mo Khattab. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
