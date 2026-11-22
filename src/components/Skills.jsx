import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Database, 
  Wrench,
  Sparkles,
  Trophy,
  Zap,
  Target,
  TrendingUp,
  ChevronRight,
  Star
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const skillCategories = [
  {
    title: "Languages",
    subtitle: "Core Programming",
    icon: Code2,
    skills: [
      { name: "Java", level: "Advanced", years: 3, projects: 8 },
      { name: "JavaScript", level: "Advanced", years: 3, projects: 12 },
      { name: "TypeScript", level: "Intermediate", years: 2, projects: 6 },
      { name: "Python", level: "Intermediate", years: 2, projects: 4 },
      { name: "C", level: "Intermediate", years: 2, projects: 3 }
    ],
    color: "blue",
    bgGradient: "from-blue-500/5 via-blue-400/5 to-cyan-400/5",
    borderColor: "border-blue-400/30",
    glowColor: "group-hover:shadow-blue-500/20",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    iconColor: "text-white"
  },
  {
    title: "Frontend",
    subtitle: "User Interface",
    icon: Layout,
    skills: [
      { name: "React.js", level: "Advanced", years: 2, projects: 10 },
      { name: "Angular", level: "Intermediate", years: 1, projects: 3 },
      { name: "HTML5", level: "Advanced", years: 3, projects: 15 },
      { name: "CSS3", level: "Advanced", years: 3, projects: 15 },
      { name: "Tailwind", level: "Advanced", years: 2, projects: 8 }
    ],
    color: "purple",
    bgGradient: "from-purple-500/5 via-purple-400/5 to-pink-400/5",
    borderColor: "border-purple-400/30",
    glowColor: "group-hover:shadow-purple-500/20",
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
    iconColor: "text-white"
  },
  {
    title: "Backend & Database",
    subtitle: "Server & Data",
    icon: Database,
    skills: [
      { name: "Node.js", level: "Advanced", years: 2, projects: 8 },
      { name: "Spring Boot", level: "Intermediate", years: 2, projects: 5 },
      { name: "Django", level: "Beginner", years: 1, projects: 2 },
      { name: "MongoDB", level: "Intermediate", years: 2, projects: 6 },
      { name: "SQL", level: "Intermediate", years: 2, projects: 7 }
    ],
    color: "emerald",
    bgGradient: "from-emerald-500/5 via-emerald-400/5 to-teal-400/5",
    borderColor: "border-emerald-400/30",
    glowColor: "group-hover:shadow-emerald-500/20",
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    iconColor: "text-white"
  },
  {
    title: "Tools & DevOps",
    subtitle: "Development Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: "Advanced", years: 3, projects: 15 },
      { name: "GitHub", level: "Advanced", years: 3, projects: 15 },
      { name: "Docker", level: "Beginner", years: 1, projects: 3 },
      { name: "AWS", level: "Beginner", years: 1, projects: 2 },
      { name: "Linux", level: "Intermediate", years: 2, projects: 10 }
    ],
    color: "orange",
    bgGradient: "from-orange-500/5 via-orange-400/5 to-amber-400/5",
    borderColor: "border-orange-400/30",
    glowColor: "group-hover:shadow-orange-500/20",
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
    iconColor: "text-white"
  }
];

const getLevelConfig = (level) => {
  switch(level) {
    case "Advanced": 
      return { 
        width: "90%", 
        color: "bg-emerald-500",
        badge: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
        stars: 3
      };
    case "Intermediate": 
      return { 
        width: "70%", 
        color: "bg-amber-500",
        badge: "bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30",
        stars: 2
      };
    case "Beginner": 
      return { 
        width: "50%", 
        color: "bg-slate-400",
        badge: "bg-slate-500/20 text-slate-600 dark:text-slate-400 border-slate-500/30",
        stars: 1
      };
    default: 
      return { 
        width: "50%", 
        color: "bg-slate-400",
        badge: "bg-slate-500/20 text-slate-600 dark:text-slate-400 border-slate-500/30",
        stars: 1
      };
  }
};

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target]);
  
  return <span>{count}{suffix}</span>;
};

// Star Rating Component
const StarRating = ({ count }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(3)].map((_, i) => (
        <Star 
          key={i} 
          size={12} 
          className={i < count ? "fill-yellow-400 text-yellow-400" : "text-gray-300 dark:text-gray-600"} 
        />
      ))}
    </div>
  );
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const stats = [
    { 
      label: "Years of Coding", 
      value: 3, 
      suffix: "+",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500"
    },
    { 
      label: "Projects Completed", 
      value: 15, 
      suffix: "+",
      icon: Zap,
      color: "from-blue-400 to-purple-500"
    },
    { 
      label: "Technologies", 
      value: 20, 
      suffix: "+",
      icon: Target,
      color: "from-emerald-400 to-teal-500"
    },
    { 
      label: "Code Commits", 
      value: 500, 
      suffix: "+",
      icon: TrendingUp,
      color: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent dark:via-white/[0.01]" />
        {/* Floating orbs */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -100, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400 mb-6"
          >
            <Sparkles size={18} className="text-yellow-500" />
            <span>My Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Hover over skills to reveal my journey with each technology
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === catIdx;
            
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedCategory(isSelected ? null : catIdx)}
                className={`group relative overflow-hidden rounded-3xl border-2 ${category.borderColor} bg-gradient-to-br ${category.bgGradient} backdrop-blur-xl cursor-pointer transition-all duration-500 hover:shadow-2xl ${category.glowColor}`}
              >
                {/* Animated border gradient */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.iconBg} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative p-8">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`p-4 rounded-2xl ${category.iconBg} ${category.iconColor} shadow-lg`}
                      >
                        <Icon size={32} strokeWidth={1.5} />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <motion.div 
                      animate={isSelected ? { rotate: 90 } : { rotate: 0 }}
                      className="p-2 rounded-full bg-white/50 dark:bg-white/10"
                    >
                      <ChevronRight size={24} className="text-gray-600 dark:text-gray-400" />
                    </motion.div>
                  </div>

                  {/* Skills with Interactive Details */}
                  <div className="space-y-5">
                    {category.skills.map((skill, idx) => {
                      const levelConfig = getLevelConfig(skill.level);
                      const isHovered = hoveredSkill === `${catIdx}-${idx}`;
                      
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + idx * 0.08 }}
                          onMouseEnter={() => setHoveredSkill(`${catIdx}-${idx}`)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className="relative"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <span className="font-semibold text-gray-800 dark:text-gray-200">
                                {skill.name}
                              </span>
                              <StarRating count={levelConfig.stars} />
                            </div>
                            <motion.span 
                              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                              className={`text-xs font-bold px-3 py-1 rounded-full border ${levelConfig.badge}`}
                            >
                              {skill.level}
                            </motion.span>
                          </div>
                          
                          {/* Progress Bar with Glow */}
                          <div className="h-2.5 bg-gray-200/50 dark:bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: levelConfig.width }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 1.2, 
                                delay: 0.3 + idx * 0.1, 
                                ease: [0.25, 0.4, 0.25, 1]
                              }}
                              className={`h-full rounded-full ${levelConfig.color} relative`}
                            >
                              {/* Shimmer effect */}
                              <motion.div
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              />
                            </motion.div>
                          </div>
                          
                          {/* Expanded Details on Hover */}
                          <AnimatePresence>
                            {isHovered && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-3 flex items-center gap-6 text-sm"
                              >
                                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                                  <TrendingUp size={14} />
                                  <span>{skill.years} years</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                                  <Zap size={14} />
                                  <span>{skill.projects} projects</span>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full ${category.iconBg} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Animated Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + idx * 0.1, type: "spring" }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-6 text-center hover:border-transparent transition-all duration-300"
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <motion.div
                  animate={floatingAnimation}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg`}
                >
                  <Icon size={24} />
                </motion.div>
                
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
