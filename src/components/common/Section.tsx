import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { sectionVariants } from "../../utils/animations";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  delay?: number;
  spacing?: "sm" | "md" | "lg" | "xl";
}

export default function Section({
  id,
  title,
  children,
  className = "",
  titleClassName = "",
  delay = 0,
  spacing = "lg",
}: SectionProps) {
  const spacingClasses = {
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-20",
    lg: "py-20 sm:py-24",
    xl: "py-24 sm:py-32",
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={sectionVariants}
      transition={{ delay, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`${spacingClasses[spacing]} px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-28 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {title && (
          <motion.h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-slate-100 ${titleClassName}`}
            variants={sectionVariants}
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </motion.section>
  );
}
