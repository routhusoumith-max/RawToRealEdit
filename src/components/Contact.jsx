import { motion } from "framer-motion";
import {
  Instagram,
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <motion.div
        className="contact-box"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">HAVE A PROJECT?</p>

        <h2>
          LET'S CREATE
          <br />
          SOMETHING <span>GREAT.</span>
        </h2>

        <p className="contact-description">
          Looking for a video editor for your next project?
          Let's talk.
        </p>

        <div className="contact-buttons">
          <a
            href="https://instagram.com/raw_to_real_edits"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            <Instagram size={20} />
            Instagram
            <ArrowUpRight size={18} />
          </a>

          <a
            href="https://wa.me/8185893443"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            <MessageCircle size={20} />
            WhatsApp
            <ArrowUpRight size={18} />
          </a>

          <a
            href="mailto:routhusoumith@gmail.com"
            className="contact-button"
          >
            <Mail size={20} />
            Email
            <ArrowUpRight size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}