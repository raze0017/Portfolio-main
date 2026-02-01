import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function CaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const cs = project.caseStudy;

  return (
    <section className="min-h-screen bg-base-200 px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-10">
        <Link to={`/projects/${project.slug}`} className="btn btn-ghost mb-4">
          ← Back to Project
        </Link>

        <div>
          <h1 className="text-5xl font-bold mb-2">{project.title}</h1>
          <p className="text-2xl text-accent">Case Study</p>
        </div>

        <Section title="Problem" content={cs.problem} />
        <Section title="Architecture" content={cs.architecture} />
        <Section title="Authentication & Authorization" content={cs.auth} />
        <Section title="Data Model" content={cs.dataModel} />
        <Section title="API Design" content={cs.apiDesign} />
        <Section title="Tradeoffs & Decisions" content={cs.tradeoffs} />
        <Section title="What I'd Improve Next" content={cs.improvements} />

        <div className="pt-8 border-t border-base-300">
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
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

function Section({ title, content }) {
  return (
    <div className="bg-base-300 p-8 rounded-xl">
      <h2 className="text-3xl font-bold mb-4 text-primary">{title}</h2>
      <p className="text-lg leading-relaxed text-base-content/80">{content}</p>
    </div>
  );
}

export default CaseStudyPage;
