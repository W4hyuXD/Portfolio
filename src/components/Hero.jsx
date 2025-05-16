import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 py-40 items-center max-w-7xl mx-auto min-h-screen text-black dark:text-white">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold leading-tight space-y-2"
      >
        <h1>Hello,</h1>
        <h1>My Name Is</h1>
        <h1 className="text-blue-600">WahyuDin Ambia</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-right font-semibold text-gray-700 dark:text-gray-300"
      >
        Background
      </motion.div>
    </section>
  );
}