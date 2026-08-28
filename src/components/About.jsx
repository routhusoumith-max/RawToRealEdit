import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">ABOUT ME</p>

          <h2>
            EDITING ISN'T
            <br />
            JUST CUTTING.
          </h2>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p>
            I'm a video editor focused on creating engaging,
            modern and cinematic content for creators and brands.
          </p>

          <p>
            I combine photos editing and color to turn raw footage
            into content that gets attention.
          </p>

          <div className="software">
            <span>Premiere Pro</span>
            <span>photoshop</span>
            <span>CapCut</span>
            <span>AI Tools</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}