import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { fadeInUp } from "../utils/animations";
import Section from "./common/Section";

export default function Contact() {
  const contactMethods = [
    {
      icon: <MdEmail className="text-4xl" />,
      label: "Email",
      href: "mailto:sgtm3tasem@gmail.com",
      description: "sgtm3tasem@gmail.com",
      vimCommand: ":!mail",
    },
    {
      icon: <FaGithub className="text-4xl" />,
      label: "GitHub",
      href: "https://github.com/MutasemKhatab",
      description: "View my projects",
      vimCommand: ":!git push",
    },
    {
      icon: <FaLinkedin className="text-4xl" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mutassembelah-abokhattab-88515624b/",
      description: "Connect with me",
      vimCommand: ":connect",
    },
  ];

  return (
    <Section id="contact" title="Get In Touch">
      <div className="text-center mb-8 sm:mb-12">
        {/* Vim command line */}
        <div className="font-mono text-green-400/60 text-xs sm:text-sm mb-4 sm:mb-6">
          :contact --social --professional | :set autoread
        </div>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or
          just having a chat about technology.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
      >
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.label}
            href={method.href}
            target={method.href.startsWith("mailto:") ? "_self" : "_blank"}
            rel={method.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
            variants={fadeInUp}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group block"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl">
              {/* Vim tab header */}
              <div className="bg-slate-900/80 border-b border-slate-700/50 px-3 sm:px-4 py-2 font-mono text-xs text-slate-400">
                <span className="text-green-400">●</span> {method.vimCommand}
              </div>

              <div className="p-6 sm:p-8 text-center">
                <div className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300 mb-4 flex justify-center">
                  {method.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-2">
                  {method.label}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {method.description}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Vim status bar */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm text-slate-400 mt-6 sm:mt-8 max-w-4xl mx-auto">
        <span className="text-green-400">-- NORMAL --</span>
        <span className="ml-2 sm:ml-4">3 contacts available</span>
        <span className="ml-2 sm:ml-4 text-blue-400">ready for connection</span>
      </div>
    </Section>
  );
}
