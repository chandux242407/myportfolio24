import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useInView } from 'framer-motion';

const educationData = [
  {
    id: 1,
    period: "2023 - 2027",
    degree: "B.Tech in Computer Science",
    institution: "BVC Engineering College",
    location: "Rajahmundry",
    score: { value: "7.3", label: "CGPA" },
    icon: "🎓",
    highlights: ["Coding Club Lead", "Project Lead"],
    badgeColor: "emerald",
    side: "left"
  },
  {
    id: 2,
    period: "2021 - 2023",
    degree: "Intermediate (MPC)",
    institution: "Prathiba Junior College",
    location: "",
    score: { value: "71%", label: "Score" },
    icon: "📚",
    highlights: ["Mathematics Excellence"],
    badgeColor: "blue",
    side: "right"
  },
  {
    id: 3,
    period: "2021",
    degree: "Secondary School (10th)",
    institution: "Bashyam High School",
    location: "",
    score: { value: "9.8", label: "GPA" },
    icon: "🏫",
    highlights: ["School Topper", "🏆 Science Fair Winner"],
    badgeColor: "amber",
    side: "left"
  }
];

// Shimmer animation component for badges
const ShimmerBadge = ({ children, color }) => {
  const colorClasses = {
    emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 dark:border-emerald-500/30",
    blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 dark:border-blue-500/30",
    amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 dark:border-amber-500/30"
  };

  return (
    <div className={`relative overflow-hidden px-3 py-1 rounded-full text-sm font-semibold border ${colorClasses[color]} group`}>
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
      />
    </div>
  );
};

// 3D Tilt Card Component
const TiltCard = ({ children, side }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

// Education Card Component
const EducationCard = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: item.side === "left" ? -80 : 80, y: 30 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        delay: index * 0.15 
      }}
      className={`relative flex items-center ${item.side === "left" ? "md:flex-row-reverse" : ""} w-full`}
    >
      {/* Timeline Node */}
      <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-20">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: "spring", stiffness: 200, delay: 0.3 + index * 0.1 }}
          whileHover={{ scale: 1.3, rotate: 360 }}
          className="relative w-14 h-14 rounded-full bg-white dark:bg-[#0a0a0a] border-2 border-cyan-500/50 flex items-center justify-center text-2xl shadow-[0_0_30px_rgba(6,182,212,0.4)]"
        >
          <motion.div
            animate={isHovered ? { y: [0, -5, 0] } : {}}
            transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
          >
            {item.icon}
          </motion.div>
          {/* Pulse ring */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-cyan-500/30"
          />
        </motion.div>
      </div>

      {/* Card */}
      <div className={`w-full md:w-[42%] pl-24 md:pl-0 ${item.side === "left" ? "md:pr-12" : "md:pl-12"}`}>
        <TiltCard side={item.side}>
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative overflow-hidden rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200 dark:border-white/10 p-5 sm:p-6 shadow-xl shadow-black/20 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 transition-all duration-500"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              {/* Period */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase">
                  {item.period}
                </span>
              </div>

              {/* Degree with gradient text */}
              <h3 className="text-lg sm:text-xl font-bold mb-1 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-cyan-100 dark:to-white bg-clip-text text-transparent">
                {item.degree}
              </h3>

              {/* Institution */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {item.institution}{item.location && `, ${item.location}`}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.highlights.map((highlight, i) => (
                  <span 
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Score Badge with Shimmer */}
              <ShimmerBadge color={item.badgeColor}>
                {item.score.label}: {item.score.value}
              </ShimmerBadge>
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="education" className="py-24 relative bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300" ref={containerRef}>
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
            Academic Journey
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-gray-900 via-cyan-600 to-gray-900 dark:from-white dark:via-cyan-100 dark:to-white bg-clip-text text-transparent">
              Education History
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
          >
            My academic path that shaped my technical foundation
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing Energy Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-300 dark:via-white/10 to-transparent rounded-full md:-translate-x-1/2">
            {/* Animated progress fill */}
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 via-purple-400 to-cyan-400 rounded-full origin-top shadow-[0_0_20px_rgba(6,182,212,0.5)]"
              style={{ scaleY, height: "100%" }}
            />
          </div>

          {/* Education Items */}
          <div className="flex flex-col gap-12 sm:gap-16 py-8">
            {educationData.map((item, index) => (
              <EducationCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
