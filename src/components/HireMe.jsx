import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const benefits = [
  "Professional Reels & Shorts editing",
  "Sound design and music syncing",
  "Fast and reliable delivery",
];

export default function HireMe() {
  return (
    <section className="hire-section" id="hire">
      <div className="hire-container">
        <motion.div
          className="hire-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">WORK WITH ME</p>

          <h2>
            NEED A
            <br />
            <span>VIDEO EDITOR?</span>
          </h2>

          <p className="hire-description">
            Send me your footage and project idea.
            I'll turn it into polished content ready
            for your audience.
          </p>

          <a
            href="https://wa.me/8185893443"
            target="_blank"
            rel="noreferrer"
            className="hire-button"
          >
            <MessageCircle size={20} />
            Let's Work Together
          </a>
        </motion.div>

        <motion.div
          className="benefits-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="benefits-title">WHAT YOU GET</p>

          {benefits.map((benefit) => (
            <div className="benefit" key={benefit}>
              <span className="check">
                <Check size={15} />
              </span>

              <p>{benefit}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}