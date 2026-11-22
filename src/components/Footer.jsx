import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'About', href: '#about' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/chandux242407', color: 'hover:bg-gray-800' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:bg-blue-600' },
  ];

  return (
    <footer id="contact" className="relative bg-[#0a0a0c] pt-24 pb-12 overflow-hidden">
      {/* Background: Linear gradient base with radial blue glow at top-right */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #0a0a0c 0%, #0f0f14 100%)'
        }}
      />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Left Column - Value Prop & Contact */}
          <div className="space-y-8">
            {/* Headline with blue accent on "together" */}
            <div>
              <h2 className="text-4xl font-extrabold mb-4 text-white leading-tight">
                Let&apos;s build something <span className="text-blue-500">together.</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Looking for a full-stack developer? I am currently available for new projects and opportunities.
              </p>
            </div>
            
            {/* Contact Cards with Glassmorphism */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              {/* Email Card */}
              <a 
                href="mailto:chanduyerra@gmail.com" 
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 ease-in-out"
              >
                <div className="p-3 bg-blue-600/20 text-blue-400 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Send an Email</p>
                  <p className="font-semibold text-white">chanduyerra@gmail.com</p>
                </div>
              </a>
              
              {/* Phone Card */}
              <a 
                href="tel:+919392991412" 
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 ease-in-out"
              >
                <div className="p-3 bg-blue-600/20 text-blue-400 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Give me a Call</p>
                  <p className="font-semibold text-white">+91 9392991412</p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Navigation Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 ease-in-out flex items-center gap-2"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect - Social Icons */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className={`p-3 border border-white/10 rounded-full text-gray-400 hover:text-white ${social.color} transition-all duration-300 ease-in-out`}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
                <a
                  href="https://github.com/chandux242407"
                  aria-label="LeetCode"
                  className="p-3 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-yellow-600 transition-all duration-300 ease-in-out"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Footer Credits with Border Divider */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Yerra Gopichand. All rights reserved.</p>
          <p className="text-blue-500/60">
            Built with <span className="text-blue-400">React</span>, <span className="text-blue-400">Tailwind</span> & <span className="text-blue-400">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
