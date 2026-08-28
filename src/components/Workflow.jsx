import { motion } from "framer-motion";
import {
  Send,
  Scissors,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Send,
    title: "Send Your Footage",
    text: "Share your raw footage, references, script and project requirements with me.",
  },
  {
    number: "02",
    icon: Scissors,
    title: "I Edit",
    text: "I handle the cuts, pacing, captions, motion graphics, sound design and color.",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Review & Revisions",
    text: "You review the first version and send feedback for the agreed revisions.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Final Delivery",
    text: "Once approved, you receive the final high-quality video ready to publish.",
  },
];

export default function Workflow() {
  return (
    <section className="workflow-section" id="workflow">
      <div className="workflow-heading">
        <p className="eyebrow">HOW IT WORKS</p>

        <h2>
          SIMPLE <span>PROCESS.</span>
        </h2>

        <p className="workflow-intro">
          A clear workflow keeps every project organized,
          efficient and easy to manage.
        </p>
      </div>

      <div className="workflow-grid">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              className="workflow-card"
              key={step.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="workflow-top">
                <span className="workflow-number">{step.number}</span>

                <div className="workflow-icon">
                  <Icon size={21} />
                </div>
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

              {index < steps.length - 1 && (
                <div className="workflow-line"></div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}