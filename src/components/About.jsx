import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fullText = `Hi, I'm Abdul Rahman Razeem V. S — a full-stack web developer from Thrissur, Kerala.

I recently graduated with a B.Tech in Computer Science and have hands-on experience building web apps with React, Node.js, and PostgreSQL.

From social platforms like Vast-Connect to movie apps like Cine-Tracker, I enjoy creating useful and engaging products.

I’ve also been part of Google DSC, organizing events and workshops for 250+ students.

Outside of coding, I explore new tools, contribute to open source, and tinker with Git and Linux.`;

function About() {
  const [displayedText, setDisplayedText] = useState("");
  const speed = 15; // milliseconds between characters

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(i));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="about"
      className="h-screen flex items-center justify-center flex-col px-4"
    >
      <motion.div
        className="text-4xl mb-6"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.div>

      <div className="info text-left w-full max-w-2xl whitespace-pre-line leading-relaxed text-lg">
        {displayedText}
        <span className="animate-pulse">_</span>
      </div>
    </div>
  );
}

export default About;
