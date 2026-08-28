import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    project: "Instagram Reel",
    budget: "",
    deadline: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = `
New Video Editing Project

Name: ${formData.name}
Contact: ${formData.contact}
Project: ${formData.project}
Budget: ${formData.budget || "Not specified"}
Deadline: ${formData.deadline || "Not specified"}

Project details:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/8185893443?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
  };

  return (
    <section className="inquiry-section" id="inquiry">
      <div className="inquiry-container">
        <motion.div
          className="inquiry-info"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">START A PROJECT</p>

          <h2>
            TELL ME ABOUT
            <br />
            YOUR <span>PROJECT.</span>
          </h2>

          <p>
            Tell me what you're creating, what you need edited,
            and when you need it. I'll get back to you with the
            next steps.
          </p>
        </motion.div>

        <motion.form
          className="inquiry-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Email / WhatsApp</label>
              <input
                id="contact"
                name="contact"
                type="text"
                placeholder="How can I contact you?"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="project">Project Type</label>
              <select
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
              >
                <option>Instagram Reel</option>
                <option>YouTube Short</option>
                <option>YouTube Video</option>
                <option>Promotional Video</option>
                <option>photos editing</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="budget">Budget</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select budget</option>
                <option>Under ₹1,000</option>
                <option>₹1,000 – ₹3,000</option>
                <option>₹3,000 – ₹5,000</option>
                <option>₹5,000 – ₹10,000</option>
                <option>₹10,000+</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="deadline">Deadline</label>

            <input
              id="deadline"
              name="deadline"
              type="date"
              value={formData.deadline}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Details</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me about your footage, editing style, number of videos, references, etc."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="inquiry-button">
            <Send size={18} />
            Send Project Request
          </button>

          {submitted && (
            <p className="form-success">
              Your request is ready in WhatsApp. Send the message to complete the inquiry.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}