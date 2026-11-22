import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode class to html element and save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#fbfbfd] dark:bg-[#0a0a0c] text-navy-900 dark:text-gray-100 transition-colors duration-300">
      <Navigation darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <Hero />
        <Skills />
        <Projects />
        <Education />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
