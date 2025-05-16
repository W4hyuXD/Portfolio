import { useEffect, useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-sm z-50 flex justify-between items-center px-8 py-5 border-b border-gray-300 dark:border-gray-700 font-semibold text-lg text-black dark:text-white">
      <div className="text-2xl font-bold cursor-pointer">WahyuDin</div>
      <ul className="flex gap-6">
        {['Home', 'Project', 'Skills', 'About', 'Contact'].map((item) => (
          <li
            key={item}
            className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors duration-300"
          >
            {item}
          </li>
        ))}
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 border px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
}