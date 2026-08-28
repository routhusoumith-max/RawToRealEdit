import { motion } from "framer-motion";

const projects = [
  {
    title: "My Best Edit",
    category: "Video Editing",
    video: "/project.mp4",
  },
  {
    title: "Creative Promotional Edit",
    category: "Promotional Video",
    video: "/project2.mp4",
  },
];

export default function Portfolio() {
  return (
    <section className="section portfolio" id="work">
      <div className="section-heading">
        <p className="eyebrow">SELECTED WORK</p>

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
            transition={{ duration: 0.5 }}
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