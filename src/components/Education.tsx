import { motion } from "framer-motion";
import fortyTwo from "../assets/42.png";
import just from "../assets/just.png";
import FlipCard from "./FlipCard";
export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <div className="p-10 mb-5">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center">Education</h1>

          <div className="pt-20 grid md:grid-cols-2 gap-12 items-center justify-center">
            {/* JUST Card */}
            <FlipCard
              frontImage={just}
              frontImageAlt="JUST Logo"
              description="Pursuing a B.Sc. in Software Engineering, graduating in 2025. Focused on software development, design patterns, and system architecture, with hands-on experience through academic and personal projects."
              isCompleted={true}
            />

            {/* 42 School Card */}
            <FlipCard
              frontImage={fortyTwo}
              frontImageAlt="42 School Logo"
              description="Completed an intensive, peer-to-peer software engineering program emphasizing problem-solving, algorithms, and teamwork. Learned through project-based challenges without formal classes, fostering self-driven learning and adaptability."
              isCompleted={false}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
