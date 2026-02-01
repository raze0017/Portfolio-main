import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="bg-base-200 px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Selected Work</h2>
          <p className="text-base-content/70">
            Products, production systems, and backend services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.slug}
              className="bg-base-300 p-6 rounded-xl shadow-md space-y-4"
            >
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-accent">{p.type}</p>
              </div>

              <p className="text-base-content/75">{p.shortDescription}</p>

              <div className="text-sm text-base-content/60">
                <strong>Stack:</strong> {p.stack.join(", ")}
              </div>

              <div className="flex gap-3">
                <Link
                  to={`/projects/${p.slug}`}
                  className="btn btn-sm btn-primary"
                >
                  View Project
                </Link>
                <Link
                  to={`/case-studies/${p.slug}`}
                  className="btn btn-sm btn-outline"
                >
                  Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
