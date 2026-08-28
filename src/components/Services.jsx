import { motion } from "framer-motion";
import {
  Film,
  Sparkles,
  Music,
  Palette,
  Smartphone,
  Megaphone,
} from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Reels & Shorts",
    text: "Fast-paced short-form edits designed for social media.",
  },
  {
    icon: Sparkles,
    title: "Ai editing",
    text: " animations and visual effects.",
  },
 
  {
    icon: Palette,
    title: "Color",
    text: "Professional color correction and cinematic looks.",
  },
  {
    icon: Smartphone,
    title: "Poster degin",
    text: "Content optimized for Instagram and YouTube.",
  },
 
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-heading">
        <p className="eyebrow">WHAT I DO</p>
        <h2>
          MY <span>SERVICES.</span>
        </h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              className="service-card"
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Icon size={30} />

              <h3>{service.title}</h3>

              <p>{service.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}