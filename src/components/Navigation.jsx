import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // We change the state to add a blurred dynamic background on scroll
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 px-6 md:px-12 mx-auto max-w-5xl mt-4 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-lg'
          : 'py-6 px-6 md:px-12 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity"
        >
          YG
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="relative hover:text-blue-500 transition-colors group"
              whileHover={{ y: -2 }}
            >
              {item}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-4 pb-2">
              {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleLinkClick}
                  className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
