import { motion } from "framer-motion";

const projects = [
  {
    title: "GYM Reel",
    category: "Instagram Reel",
    video: "/project.mp4",
  },
  {
    title: "Ganesh reel Edit",
    category: "Brand Promotion",
    video: "/project2.mp4",
  },
  {
    title: "Orientation day reel",
    category: "Instagram reel",
    video: "/project3.mp4",
  },
  {
    title: "Ai Edit",
    category: "Short Form",
    video: "/project4.mp4",
  },
];

export default function Portfolio() {
  return (
    <section className="section portfolio" id="work">
      <div className="section-heading">
        <p className="eyebrow"></p>

        <h2>
          MY <span>PROJECTS.</span>
        </h2>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.video}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="video-wrapper">
              <video
                src={project.video}
                controls
                muted
                playsInline
                preload="metadata"
              >
                Your browser does not support video playback.
              </video>
            </div>

            <div className="project-info">
              <div>
                <p>{project.category}</p>
                <h3>{project.title}</h3>
              </div>

              <span>0{index + 1}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}