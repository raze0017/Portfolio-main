import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div className="hero min-h-screen bg-base-200" id="home">
      <div className="hero-content flex flex-col items-center text-primary">
        {/* Static intro text */}
        <div className="text-3xl mb-4">Hi, I'm</div>

        {/* Animated name row */}
        <div className="flex flex-row gap-2 text-5xl font-bold">
          <motion.div
            className="abdul"
            initial={{ x: -100, y: -50, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            Abdul
          </motion.div>

          <motion.div
            className="rahman"
            initial={{ x: -50, y: 50, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Rahman
          </motion.div>

          <motion.div
            className="razeem"
            initial={{ x: -150, opacity: 1 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Razeem
          </motion.div>
        </div>
        <div className="mt-4 text-2xl text-accent ">
          <Typewriter
            words={["Developer", "Designer", "Engineer"]}
            loop={0} // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
