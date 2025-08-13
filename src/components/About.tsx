import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      id="about"
      className="p-10 flex-col items-center"
    >
      <h1 className="text-5xl font-bold text-center">About Me</h1>
      <p className="mt-10 text-xl text-center m-auto max-w-5xl">
        Software Engineering graduate from Jordan University of Science and
        Technology, quick to master new technologies and concepts. Skilled in
        software design patterns and passionate about clean, abstracted
        architectures. Experienced with Agile and Scrum methodologies, with a
        strong foundation in building maintainable, scalable solutions through
        both academic and hands-on projects.
      </p>
    </motion.div>
  );
}
