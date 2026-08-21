import { ExternalLink, Github } from "lucide-react";
import { SectionLabel } from "./AboutSection";

const projects = [
  {
    title: "Hostel Complaint Management System",
    description: "Full-stack complaint system with CRUD operations, status workflows, and priority queuing. MongoDB schema with filtering by room/category/status.",
    tags: ["JavaScript", "Node.js", "MongoDB", "HTML", "CSS"],
    github: "https://github.com/Shupraja18",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
  },
  {
    title: "Personal Portfolio Website",
    description: "Designed and built a personal portfolio to showcase development and design work, including project case studies and skills. Structured as a single-page application with smooth navigation.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Shupraja18",
    featured: true,
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&h=500&fit=crop&auto=format",
  },
  {
    title: "Student Management System",
    description: "Full-stack application with relational data modeling for students, faculty, courses, and attendance records. Backend logic and API routes built with Flask, PostgreSQL via SQLAlchemy ORM.",
    tags: ["Python", "Flask", "PostgreSQL", "SQLAlchemy"],
    github: "https://github.com/Shupraja18",
    featured: false,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop&auto=format",
  },
  {
    title: "NOVI – AI Exam Preparation Platform",
    description: "Full-stack application with relational data modeling for students, faculty, courses, and attendance records. Backend logic and API routes built with Flask, PostgreSQL via SQLAlchemy ORM.",
    tags: ["Python", "Flask", "PostgreSQL", "SQLAlchemy"],
    github: "https://github.com/Shupraja18",
    featured: false,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&auto=format",
  },
 
  
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="02. Projects" />

        <div className="flex items-end justify-between mb-12 mt-2">
          <h2
            className="leading-tight"
            style={{ fontSize: "2.4rem", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.02em" }}
          >
            Things I've built
          </h2>
          <a
            href="https://github.com/Shupraja18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-200 hover:text-primary hidden md:flex items-center gap-2"
            style={{ color: "var(--muted-foreground)" }}
          >
            View all on GitHub <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div
      className="group rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        boxShadow: "0 0 0 0 rgba(0,212,255,0)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.3)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,212,255,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 rgba(0,212,255,0)";
      }}
    >
      <div className="relative overflow-hidden h-44 bg-secondary">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: "rgba(8,12,20,0.4)" }} />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="mb-2" style={{ color: "var(--foreground)", fontWeight: 600, fontSize: "1rem" }}>
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-sm"
              style={{
                background: "rgba(0,212,255,0.07)",
                color: "var(--primary)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition-colors hover:text-primary"
            style={{ color: "var(--muted-foreground)" }}
          >
            <Github size={13} /> Code
          </a>
          
        </div>
      </div>
    </div>
  );
}
