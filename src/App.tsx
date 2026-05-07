import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Dashboard from './components/Dashboard';
import Architecture from './components/Architecture';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-brand-500/30 selection:text-brand-500">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-500 z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Dashboard />
        <Architecture />
        <Contact />
      </main>

      {/* Decorative Blur Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-brand-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[140px]" />
      </div>
    </div>
  );
}
