import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <div
        className="p-10 flex-col items-center space-y-10 justify-center"
        id="contact"
      >
        <h1 className="text-5xl font-bold text-center transition-all">
          Contact Me
        </h1>
        <a href="mailto:sgtm3tasem@gmail.com">
          <div className="cursor-pointer  group outline hover:bg-slate-500 transition-colors outline-slate-600 rounded-lg p-6 max-w-52 flex items-center justify-center mt-15 gap-4 mx-auto">
            <MdEmail className="text-4xl group-hover:text-slate-200 text-gray-600" />
            <p className="text-xl font-semibold text-gray-800 group-hover:text-slate-200 transition-colors transition-color duration-300">
              Email
            </p>
          </div>
        </a>
      </div>
    </motion.div>
  );
}
