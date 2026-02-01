import React from "react";
import { motion as Motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-base-200 flex items-center justify-center px-4"
    >
      <div className="flex flex-col items-center text-center text-primary max-w-5xl">
        {/* Static intro */}
        <div className="mb-3 text-lg sm:text-xl md:text-2xl">Hi, I&apos;m</div>

        {/* Name */}
        <div
          className="
            flex flex-wrap justify-center gap-x-2 gap-y-1
            font-extrabold tracking-wide leading-none
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
          "
        >
          <Motion.div
            className="opacity-80"
            initial={{ x: -80, y: -30, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.6 }}
          >
            Abdul
          </Motion.div>

          <Motion.div
            className="opacity-80"
            initial={{ x: -60, y: 30, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.45 }}
          >
            Rahman
          </Motion.div>

          <Motion.div
            className="text-accent"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Razeem
          </Motion.div>
        </div>

        {/* Role */}
        <div className="mt-4 text-lg sm:text-xl md:text-2xl text-accent">
          <Typewriter
            words={[
              "Backend-leaning Full-Stack Developer",
              "Node.js & PostgreSQL Developer",
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

        {/* Professional summary */}
        <p
          className="
            mt-6 max-w-3xl
            text-sm sm:text-base md:text-lg
            lg:text-2xl
            text-base-content/70
            leading-relaxed
          "
        >
          Backend-leaning full-stack developer with strong experience in API
          design and authentication, PostgreSQL database modeling and querying,
          and building reliable backend systems with proper error handling and
          performance considerations. Also experienced as a React developer,
          comfortable building and integrating clean, responsive frontends with
          backend services.
        </p>
      </div>
    </section>
  );
}

export default Home;
