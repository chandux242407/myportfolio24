import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
       newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
       newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <footer id="contact" className="relative border-t border-black/5 dark:border-white/10 bg-white dark:bg-[#0a0a0c] pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 justify-between items-start">
          
          {/* Digital Business Card (Left) */}
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl font-extrabold mb-4 dark:text-white">Let&apos;s build something <span className="text-blue-500">together.</span></h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">Looking for a full-stack developer? I am currently available for new projects and opportunities.</p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <a href="mailto:chanduyerra@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-blue-500/50 transition-all">
                <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Send an Email</p>
                  <p className="font-semibold dark:text-gray-200">chanduyerra@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+919392991412" className="group flex items-center gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-blue-500/50 transition-all">
                <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Give me a Call</p>
                  <p className="font-semibold dark:text-gray-200">+91 9392991412</p>
                </div>
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 pt-4"
            >
              <motion.a 
                href="#" 
                aria-label="LinkedIn" 
                whileHover={{ scale: 1.2, rotate: 5, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-black/5 dark:bg-white/5 hover:bg-blue-500/10 hover:text-blue-500 dark:hover:text-blue-400 text-gray-600 dark:text-gray-400 rounded-2xl transition-all"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="GitHub" 
                whileHover={{ scale: 1.2, rotate: -5, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 hover:text-black dark:hover:bg-white/10 dark:hover:text-white text-gray-600 dark:text-gray-400 rounded-2xl transition-all"
              >
                <Github size={24} />
              </motion.a>
            </motion.div>
          </div>

          {/* Contact Form (Right) */}
          <div className="w-full md:w-1/2">
            <motion.div 
              className="p-8 rounded-3xl bg-white dark:bg-[#12121e] border border-gray-100 dark:border-white/10 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 dark:text-white">Send me a message</h3>
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center h-[360px]"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h4 className="text-2xl font-bold dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full p-4 rounded-xl bg-gray-50 dark:bg-white/5 border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-white/10 focus:border-blue-500'} text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1 ml-2">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full p-4 rounded-xl bg-gray-50 dark:bg-white/5 border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-white/10 focus:border-blue-500'} text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1 ml-2">{errors.email}</p>}
                  </div>

                  <div>
                    <textarea 
                      placeholder="Your Message..." 
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className={`w-full p-4 rounded-xl bg-gray-50 dark:bg-white/5 border ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-white/10 focus:border-blue-500'} text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1 ml-2">{errors.message}</p>}
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
          
        </div>
        
        <div className="mt-20 pt-8 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Yerra Gopichand. All rights reserved.</p>
          <p>Designed  built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
