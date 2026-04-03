import { motion } from 'framer-motion';
import { Download, MessageCircle } from 'lucide-react';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

const Hero = () => {
  const name = "YERRA GOPICHAND".split(" ");

  return (
    <section id="about" className="min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Side: Staggered Text */}
        <div className="flex flex-col items-start text-center lg:text-left order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 border border-blue-500/30 dark:border-blue-400/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-6 shadow-sm inline-block"
          >
            Software Engineer
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 flex flex-wrap justify-center lg:justify-start gap-3">
            {name.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
          >
            Building high-performance, scalable full-stack applications with an emphasis on modern architecture and beautiful user experiences.
          </motion.p>
          
          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start"
          >
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="/cv.pdf"
              onClick={(e) => {
                if (process.env.NODE_ENV === 'development') {
                  e.preventDefault();
                  alert("CV file not found. Please add a 'cv.pdf' file to the public/ directory.");
                }
              }}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/30"
            >
              <Download size={20} />
              Download CV
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-navy-900 dark:text-white rounded-xl font-medium transition-colors"
            >
              <MessageCircle size={20} />
              Let&apos;s Talk
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side: Glowing Profile */}
        <div className="flex justify-center items-center relative order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
            
            {/* Profile Image Wrap */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/20 dark:border-white/10 p-2 overflow-hidden bg-gradient-to-tr from-blue-500/20 to-purple-500/20 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] glow-pulse">
              <div className="w-full h-full rounded-full bg-black/10 backdrop-blur-md overflow-hidden flex items-center justify-center">
                <span className="text-gray-400">Profile Image</span>
                {/* <img src="/profile.jpg" alt="Yerra Gopichand" className="w-full h-full object-cover" /> */}
              </div>
            </div>

            {/* Status Pulse */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-4 -right-4 md:right-0 bg-white dark:bg-[#1a1a24] py-3 px-5 rounded-2xl shadow-xl flex items-center gap-3 border border-black/5 dark:border-white/10"
            >
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold dark:text-gray-200">Available for Projects</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
