import React from "react";

function Skills() {
  return (
    <section id="skills" className="bg-base-200 px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="badge badge-outline text-accent">
            &lt;skills /&gt;
          </span>
          <h2 className="text-4xl font-bold">Technical Expertise</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming */}
          <SkillCard
            title="Programming"
            items={[
              "JavaScript",
              "TypeScript",
              "Java",
              "Python",
              "C",
              "SQL (MySQL)",
            ]}
          />

          {/* Backend & APIs */}
          <SkillCard
            title="Backend & APIs"
            items={[
              "Node.js",
              "Express.js",
              "REST APIs",
              "JWT Authentication",
              "Keycloak (RBAC, SSO)",
              "Async Processing (BullMQ)",
            ]}
          />

          {/* Database */}
          <SkillCard
            title="Database"
            items={[
              "PostgreSQL",
              "Prisma ORM",
              "Schema Design",
              "Query Optimization",
            ]}
          />

          {/* DevOps & Infrastructure */}
          <SkillCard
            title="DevOps & Infrastructure"
            items={[
              "Docker",
              "GitLab CI/CD",
              "DigitalOcean",
              "Containerized Deployments",
            ]}
          />

          {/* Frontend */}
          <SkillCard title="Frontend" items={["React", "Tailwind CSS"]} />

          {/* Tools */}
          <SkillCard
            title="Tools & Platform"
            items={["Git", "Linux", "Swagger / OpenAPI", "Postman"]}
          />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="rounded-xl bg-base-300 p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-base-content/75">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-accent mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
