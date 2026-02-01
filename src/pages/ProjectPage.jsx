import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-base-200 px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link
          to="/"
          onClick={() =>
            setTimeout(() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 50)
          }
          className="btn btn-ghost mb-4"
        >
          {" "}
          ← Back to Projects
        </Link>

        <div>
          <h1 className="text-5xl font-bold mb-2">{project.title}</h1>
          <p className="text-accent text-lg">{project.type}</p>
        </div>

        <p className="text-xl text-base-content/80">
          {project.view.description}
        </p>

        <div className="bg-base-300 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
          <ul className="space-y-2">
            {project.view.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-base-300 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="badge badge-primary badge-lg">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {project.view.github && project.view.github !== "#" && (
            <a
              href={project.view.github}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          )}
          {project.view.demo && project.view.demo !== "#" && (
            <a
              href={project.view.demo}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>

        <Link
          to={`/case-studies/${project.slug}`}
          className="btn btn-outline btn-block"
        >
          Read Full Case Study →
        </Link>
      </div>
    </section>
  );
}

export default ProjectPage;
