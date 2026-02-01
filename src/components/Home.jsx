import React from "react";
import { motion as Motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div className="hero min-h-screen bg-base-200" id="home">
      <div className="hero-content flex flex-col items-center text-primary">
        {/* Static intro */}
        <div className="mb-4 text-2xl">Hi, I&apos;m</div>

        {/* Name */}
        <div
          className="
            flex flex-row gap-2 font-extrabold tracking-wide leading-none
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl
          "
        >
          <Motion.div
            className="opacity-80"
            initial={{ x: -100, y: -40, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            Abdul
          </Motion.div>

          <Motion.div
            className="opacity-80"
            initial={{ x: -60, y: 40, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            Rahman
          </Motion.div>

          <Motion.div
            className="text-accent"
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Razeem
          </Motion.div>
        </div>

        {/* Role */}
        <div className="mt-4 text-xl sm:text-2xl text-accent">
          <Typewriter
            words={[
              "Backend-leaning Full-Stack Developer",
              "Node.js, PostgreSQL Developer",
              "React Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={65}
            deleteSpeed={45}
            delaySpeed={1200}
          />
        </div>

        {/* Clear backend focus */}
        <div className="mt-6 text-center text-base sm:text-lg text-base-content/70">
          {/* Professional summary */}
          <p className="mt-6 max-w-3xl text-center text-base lg:text-2xl  sm:text-lg text-base-content/70 leading-relaxed">
            Backend-leaning full-stack developer with strong experience in API
            design and authentication, PostgreSQL database modeling and
            querying, and building reliable backend systems with proper error
            handling and performance considerations. Also experienced as a React
            developer, comfortable building and integrating clean, responsive
            frontends with backend services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
