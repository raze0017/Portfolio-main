export const projects = [
  {
    slug: "vast-connect",
    title: "Vast-Connect",
    type: "Full-Stack Application",
    shortDescription:
      "Role-based REST API with JWT authentication and PostgreSQL, integrated with a React frontend.",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT", "React"],
    view: {
      description:
        "Vast-Connect is a full-stack social platform for students, faculty, and employers.",
      features: [
        "Role-based authentication (JWT)",
        "Post creation and discussions",
        "Job listings and moderation workflows",
        "REST API backend consumed by React frontend",
      ],
      github: "https://github.com/raze0017/Vast-Connect",
      demo: "https://vast-connect.vercel.app/",
    },
    caseStudy: {
      problem:
        "Students needed a unified platform for discussions, opportunities, and communication with clear role separation.",
      architecture:
        "Modular monolithic backend with service boundaries exposing REST APIs to a React frontend.",
      auth: "JWT-based authentication with role checks enforced at middleware level.",
      dataModel:
        "Relational PostgreSQL schema designed around users, posts, roles, and relationships.",
      apiDesign:
        "RESTful endpoints with predictable resource-based routes and consistent error handling.",
      tradeoffs:
        "Chose JWT over sessions for simplicity. Monolith over microservices for development speed. Normalized schema for data integrity.",
      improvements:
        "Add caching layer, implement background job processing, improve observability with structured logging.",
    },
  },
  {
    slug: "learning-platform",
    title: "Learning Platform Backend",
    type: "Production Backend System",
    shortDescription:
      "Production backend with Keycloak-based RBAC, async media processing, and secure REST APIs.",
    stack: ["Node.js", "PostgreSQL", "Keycloak", "BullMQ", "Docker"],
    view: {
      description:
        "Backend systems powering a content delivery and learning platform used in production.",
      features: [
        "Keycloak-based RBAC implementation",
        "JWT integration for authentication",
        "Video compression queue using BullMQ",
        "PDF conversion pipeline",
        "Secure REST APIs for content delivery",
      ],
    },
    caseStudy: {
      problem:
        "Educational platform required secure access control and non-blocking media processing for video compression and PDF conversion.",
      architecture:
        "Backend services with async worker queues for CPU-intensive tasks. Keycloak for centralized identity management.",
      auth: "Keycloak-based RBAC with JWT validation at API gateway layer. Role-based permissions for content access.",
      dataModel:
        "PostgreSQL schemas for users, roles, content metadata, and processing job queues.",
      apiDesign:
        "REST APIs consumed by frontend and internal services. Event-driven architecture for media processing.",
      tradeoffs:
        "Used Keycloak for centralized auth despite added complexity. BullMQ chosen for reliability over custom async handling.",
      improvements:
        "Add monitoring dashboards, improve retry strategies, implement horizontal scaling for workers.",
    },
  },
  {
    slug: "question-paper-builder",
    title: "Question Paper Builder",
    type: "Backend Service",
    shortDescription:
      "Independent backend service for deterministic question paper generation using rule-based logic.",
    stack: ["Node.js", "PostgreSQL", "REST APIs"],
    view: {
      description:
        "Standalone backend service built from scratch to generate academic question papers based on configurable rules.",
      features: [
        "Rule-based paper generation logic",
        "Subject and difficulty-aware question selection",
        "PostgreSQL-backed data model",
        "REST APIs for internal service consumption",
      ],
    },
    caseStudy: {
      problem:
        "Manual question paper creation was time-consuming and error-prone. Needed automated, rule-based generation.",
      architecture:
        "Independent microservice with clear API boundaries. Deterministic generation algorithm.",
      auth: "Service-level authentication for internal API consumers. Token-based access control.",
      dataModel:
        "PostgreSQL schemas for questions, subjects, difficulty levels, constraints, and paper templates.",
      apiDesign:
        "Deterministic REST APIs for draft generation, validation, and reordering. Idempotent operations.",
      tradeoffs:
        "Focused on correctness and determinism over performance initially. Synchronous generation for predictability.",
      improvements:
        "Implement async generation for large papers, add audit logging, improve constraint resolution algorithm.",
    },
  },
];
