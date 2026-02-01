import React from "react";

function Contact() {
  const track = (eventName) => {
    // Works with Plausible
    if (window.plausible) {
      window.plausible(eventName);
    }

    // Works with Google Analytics (optional)
    if (window.gtag) {
      window.gtag("event", eventName, {
        event_category: "Resume",
        event_label: "Contact Section",
      });
    }
  };

  return (
    <section id="contact" className="bg-base-200 px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">Let’s Build Something Solid</h2>
          <p className="text-base-content/70 text-lg">
            I’m open to backend and full-stack opportunities and engineering
            conversations. If you’re working on systems that value clean design
            and real-world reliability, I’d love to connect.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/Abdul_Rahman_Razeem_Resume.pdf"
            download
            onClick={() => track("Resume Download")}
            className="btn btn-primary btn-lg"
          >
            Download Resume
          </a>

          <a
            href="/Abdul_Rahman_Razeem_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("Resume View")}
            className="btn btn-ghost btn-lg"
          >
            View Resume
          </a>

          <a
            href="mailto:appurazeem2000@gmail.com"
            className="btn btn-outline btn-lg"
          >
            Email Me
          </a>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-base-300 p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-base-content/70">Connect professionally</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-base-300 p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-base-content/70">View my projects and code</p>
          </a>
        </div>

        {/* Footer note */}
        <p className="text-sm text-base-content/50">
          Prefer email for first contact. I usually reply within a day.
        </p>
      </div>
    </section>
  );
}

export default Contact;
