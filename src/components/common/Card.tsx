import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp } from "../../utils/animations";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = "",
  hover = true,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`
        bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 
        rounded-xl p-6 shadow-lg
        ${
          hover
            ? "hover:bg-slate-700/50 hover:scale-105 hover:shadow-xl transition-all duration-300"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
