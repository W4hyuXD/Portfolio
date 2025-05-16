import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Portofolio Website',
      description: 'A clean personal site using Next.js + TailwindCSS.',
    },
    {
      title: '3D Gallery',
      description: 'Interactive 3D gallery using React Three Fiber.',
    },
    {
      title: 'Landing Page',
      description: 'Minimal landing page for product showcase.',
    },
  ];

  return (
    <motion.section
      id="Project"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="px-8 py-20 max-w-7xl mx-auto text-black dark:text-white"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-center">PROJECTS</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border border-gray-300 dark:border-zinc-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer bg-white dark:bg-zinc-800"
          >
            <h3 className="font-semibold text-2xl mb-4">{proj.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 group-hover:text-white">
              {proj.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}