import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="px-8 py-20 max-w-3xl mx-auto text-black dark:text-white"
    >
      <h2 className="text-4xl font-extrabold mb-8 text-center">CONTACT</h2>
      <form className="grid gap-4">
        <input
          type="text"
          placeholder="WahyuDin Ambia"
          className="p-3 rounded-md bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700"
        />
        <input
          type="email"
          placeholder="wahyudinambiaxd@gmail.com"
          className="p-3 rounded-md bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700"
        />
        <textarea
          placeholder="Stay Learning guys"
          rows="5"
          className="p-3 rounded-md bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </motion.section>
  );
}
