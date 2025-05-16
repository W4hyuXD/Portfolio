import { motion } from 'framer-motion';

export default function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'Framer Motion', 'Git'];

  return (
    <motion.section
      id="Skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="px-8 py-20 max-w-7xl mx-auto text-black dark:text-white"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-center">SKILLS</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="px-5 py-2 rounded-full border border-gray-400 dark:border-zinc-600 bg-gray-100 dark:bg-zinc-800 text-sm font-medium"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}