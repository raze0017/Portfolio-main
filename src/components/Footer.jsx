import React from "react";

function Footer() {
  return (
    <footer className="bg-base-300 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        {/* Left */}
        <div>
          <h3 className="text-lg font-semibold">Abdul Rahman Razeem</h3>
          <p className="text-sm text-base-content/60">
            Backend-leaning Full-Stack Developer
          </p>
        </div>

        {/* Center */}
        <div className="text-sm text-base-content/60">
          © {new Date().getFullYear()} Abdul Rahman Razeem. All rights reserved.
        </div>

        {/* Right */}
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/raze0017"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abdulrahmanrazeemvs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            LinkedIn
          </a>
          <a
            href="/Abdul_Rahman_Razeem_Resume.pdf"
            target="_blank"
            className="hover:text-accent transition"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
