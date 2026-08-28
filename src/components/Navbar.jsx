import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <a href="#home" className="logo">
        RawToRealEdits 
      </a>

      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#workflow">Process</a>
        <a href="#inquiry">Start Project</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#hire" className="nav-button">
        Hire Me
      </a>
    </motion.nav>
  );
}