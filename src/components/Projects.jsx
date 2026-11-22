import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Layers, 
  Rocket,
  Code2,
  Globe,
  ChevronRight
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

const projects = [
  {
    id: 1,
    title: "AXEROXE",
    tagline: "E-Commerce Platform",
    description: "A full-stack fashion e-commerce platform with seamless product discovery, cart management, and checkout flow. Built with modern architecture for scalability.",
    tech: [
      { name: "React.js", color: "blue" },
      { name: "Node.js", color: "green" },
      { name: "MongoDB", color: "emerald" },
      { name: "Express", color: "gray" },
      { name: "Redux", color: "purple" }
    ],
    gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
    icon: Globe,
    color: "blue",
    hexColor: "#3b82f6",
    hoverColor: "#2563eb",
    shadowColor: "rgba(59,130,246,0.25)",
    stats: { users: "1K+", uptime: "99.9%" },
    featured: true
  },
  {
    id: 2,
    title: "College Management System",
    tagline: "Legacy Modernization",
    description: "Migrated a monolithic JSP application to microservices with Spring Boot and React. Improved performance by 300% and reduced maintenance costs.",
    tech: [
      { name: "React.js", color: "blue" },
      { name: "Spring Boot", color: "green" },
      { name: "REST API", color: "orange" },
      { name: "MySQL", color: "blue" }
    ],
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    icon: Layers,
    color: "emerald",
    hexColor: "#10b981",
    hoverColor: "#059669",
    shadowColor: "rgba(16,185,129,0.25)",
    stats: { improvement: "300%", users: "500+" },
    featured: true
  },
  {
    id: 3,
    title: "AgriShare",
    tagline: "AgriTech Solution",
    description: "Connecting farmers with resources through an intuitive platform. Features real-time market data, equipment sharing, and expert consultations.",
    tech: [
      { name: "Angular", color: "red" },
      { name: "TypeScript", color: "blue" },
      { name: "Node.js", color: "green" },
      { name: "PostgreSQL", color: "blue" }
    ],
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    icon: Rocket,
    color: "orange",
    hexColor: "#f97316",
    hoverColor: "#ea580c",
    shadowColor: "rgba(249,115,22,0.25)",
    stats: { farmers: "2K+", reach: "10+ villages" },
    featured: false
  }
];

const techColorMap = {
  blue: "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800/30",
  green: "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800/30",
  emerald: "bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/30",
  orange: "bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800/30",
  red: "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800/30",
  purple: "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800/30",
  gray: "bg-gray-100 dark:bg-gray-900/20 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-800/30"
};

const textColorMap = {
  blue: "text-blue-600 dark:text-blue-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  orange: "text-orange-600 dark:text-orange-400"
};

const gradientMap = {
  blue: "from-blue-500 to-blue-600",
  emerald: "from-emerald-500 to-emerald-600",
  orange: "from-orange-500 to-orange-600"
};

const topBarMap = {
  blue: "from-blue-500 to-blue-300",
  emerald: "from-emerald-500 to-teal-300",
  orange: "from-orange-500 to-amber-300"
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = project.icon;
  
  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative overflow-hidden rounded-3xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 h-full transition-all duration-500"
      >
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
        
        {/* Top gradient bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${topBarMap[project.color]}`} />
        
        <div className="relative p-8 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <motion.div
              animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`p-4 rounded-2xl bg-gradient-to-br ${gradientMap[project.color]} text-white shadow-lg`}
            >
              <Icon size={28} />
            </motion.div>
            
            {project.featured && (
              <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full">
                Featured
              </span>
            )}
          </div>
          
          {/* Title & Tagline */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {project.title}
            </h3>
            <p className={`text-sm font-medium ${textColorMap[project.color]}`}>
              {project.tagline}
            </p>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
            {project.description}
          </p>
          
          {/* Stats */}
          <div className="flex gap-4 mb-6">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-bold text-gray-900 dark:text-white">{value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{key}</div>
              </div>
            ))}
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span 
                key={tech.name}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border ${techColorMap[tech.color]}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-white/10">
            <motion.a
              whileHover={{ x: 4 }}
              href="#"
              className="flex items-center gap-2 px-5 py-2.5 text-white rounded-xl font-medium transition-colors shadow-lg"
              style={{ 
                backgroundColor: project.hexColor,
                boxShadow: `0 10px 15px -3px ${project.shadowColor}`
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = project.hoverColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = project.hexColor}
            >
              <span>View Project</span>
              <ArrowRight size={16} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/chandux242407"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            >
              <Github size={20} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="p-2.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors ml-auto"
            >
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent dark:via-white/[0.01]" />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-sm font-semibold text-purple-600 dark:text-purple-400 mb-6"
          >
            <Code2 size={18} />
            <span>Portfolio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 dark:from-white dark:via-purple-400 dark:to-white bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A showcase of my best work, built with passion and precision
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-2xl font-semibold shadow-xl shadow-black/20 hover:shadow-2xl transition-shadow"
          >
            <span>View All Projects</span>
            <ChevronRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
