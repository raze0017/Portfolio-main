import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-base-200 px-6 py-20 flex justify-center "
    >
      <div className="w-full max-w-6xl space-y-10">
        {/* Heading */}
        <motion.h2
          className="text-center text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Who I Am & What I Do
        </motion.h2>

        {/* Intro card */}
        <motion.div
          className="rounded-xl bg-base-300 p-6 text-lg text-base-content/80 shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-accent font-mono mr-2">&lt;/&gt;</span>
          Backend-leaning full-stack developer building production-ready web
          systems with Node.js, PostgreSQL, and React. I’ve worked on real
          backend services involving API design, authentication, async
          processing, and database modeling, while integrating clean React
          frontends.
        </motion.div>

        {/* Philosophy & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="rounded-xl bg-base-300 p-6 shadow-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-accent mb-4">
              Philosophy
            </h3>
            <ul className="space-y-2 text-base-content/75">
              <li>• Write clean, maintainable backend code.</li>
              <li>• Design APIs with validation and failure cases in mind.</li>
              <li>• Strong fundamentals matter more than framework hype.</li>
              <li>• Learn from production behavior, not just local setups.</li>
            </ul>
          </motion.div>

          <motion.div
            className="rounded-xl bg-base-300 p-6 shadow-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-warning mb-4">Mission</h3>
            <ul className="space-y-2 text-base-content/75">
              <li>• Build reliable and secure backend systems.</li>
              <li>• Ship APIs frontend teams can trust.</li>
              <li>• Grow by owning real systems end-to-end.</li>
              <li>• Contribute to teams that value engineering quality.</li>
            </ul>
          </motion.div>
        </div>

        {/* What I Offer */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">What I Offer</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Backend systems & REST APIs",
              "Authentication & authorization",
              "Full-stack web applications",
              "Async processing & background jobs",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg bg-base-300 p-4 text-center text-base-content/80 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Core Stack */}
        <div className="rounded-xl bg-base-300 p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4">Core Stack</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Node.js",
              "Express.js",
              "PostgreSQL",
              "REST APIs",
              "JWT",
              "BullMQ",
              "React",
              "Tailwind CSS",
              "Docker",
              "Git",
              "Linux",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-base-200 px-4 py-1 text-sm text-accent border border-accent/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
