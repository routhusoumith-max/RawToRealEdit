import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Animated background */}
      <div className="hero-animation">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>

        <div className="circle-animation">
          <div className="circle-ring ring-1"></div>
          <div className="circle-ring ring-2"></div>
          <div className="circle-ring ring-3"></div>
        </div>

        <div className="grid-animation"></div>

        <div className="particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          VIDEO EDITOR •
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          I TURN RAW FOOTAGE
          <br />
          INTO <span>VISUAL STORIES.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Reels, Shorts, promotional videos and cinematic edits
          designed to capture attention.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#work" className="primary-button">
            <Play size={18} />
            View My Work
          </a>

          <a href="#contact" className="secondary-button">
            Hire Me
          </a>
        </motion.div>
      </div>

   <div className="availability">
     <span className="availability-dot"></span>
     Available for freelance projects
        </div>

      <motion.a
        href="#work"
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown size={20} />
        Scroll
      </motion.a>
    </section>
  );
}