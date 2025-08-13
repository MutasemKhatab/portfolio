import { motion } from "framer-motion";

type LayoutProps = {
  title: string;
  body: React.ReactNode;
  rightDiv?: React.ReactNode;
};
export default function Layout({ title, body, rightDiv }: LayoutProps) {
  return (
    <div className="m-20 grid grid-cols-3 justify-between items-center gap-30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="md:col-span-1"
      >
        <h1 className="text-5xl font-bold text-center">{title}</h1>
        <div className="mt-10 text-xl text-start">{body}</div>
      </motion.div>
      {rightDiv ? (
        <div className="flex justify-end col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {rightDiv}
          </motion.div>
        </div>
      ) : null}
    </div>
  );
}
