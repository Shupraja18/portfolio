import { SectionLabel } from "./AboutSection";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Jurident · Valsco Technology (VIT-TBI)",
    period: "June 2026 — July 2026",
    location: "Student Startup",
    description: "Contributed to a team-based MERN stack e-commerce application by developing the wishlist, header, footer (including contact form), notification system, and UI components. Integrated frontend components with REST APIs and implemented the platform's 2D and 3D virtual try-on feature.",
    highlights: ["React", "MERN Stack", "REST APIs", "Component Architecture"],
  },
  {
    role: "Web Development Intern",
    company: "Wibits Web Solutions",
    period: "June 2026",
    location: "Nagercoil",
    description: "Built hands-on projects using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS and React under structured mentorship. Recreated existing websites as React applications with multi-page routing via React Router.",
    highlights: ["React", "React Router", "Tailwind CSS", "Bootstrap"],
  },
  {
    role: "Python Full-Stack Web Development Intern",
    company: "Combo Square",
    period: "Oct 2025 — Nov 2025",
    location: "Remote",
    description: "Built a Student Management System — a full-stack application with relational data modeling for students, faculty, courses, and attendance records. Implemented backend logic and API routes using Flask, with PostgreSQL via SQLAlchemy ORM.",
    highlights: ["Python", "Flask", "PostgreSQL", "SQLAlchemy"],
  },
  {
    role: "Social Media Design Intern",
    company: "KonnichiWow (VIT-TBI Incubator)",
    period: "Sept 2025 — Dec 2025",
    location: "Student Startup",
    description: "Designed Instagram carousel templates in Figma — two reusable formats allowing flexible content and multiple slides per post. Maintained consistent visual identity across marketing campaigns.",
    highlights: ["Figma", "Design Systems", "Social Media"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-28" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="03. Experience" />

        <h2
          className="mb-14 mt-2 leading-tight"
          style={{ fontSize: "2.4rem", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.02em" }}
        >
          Where I've worked
        </h2>

        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "var(--border)", left: "7px" }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="md:pl-10 relative">
                <div
                  className="absolute hidden md:block w-3.5 h-3.5 rounded-full border-2 -left-0 top-1.5"
                  style={{ background: "var(--background)", borderColor: "var(--primary)", left: "0" }}
                />

                <div
                  className="p-6 rounded-sm transition-all duration-200"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 style={{ color: "var(--foreground)", fontWeight: 600, fontSize: "1.05rem" }}>
                        {exp.role}
                      </h3>
                      <span style={{ color: "var(--primary)", fontWeight: 500, fontSize: "0.9rem" }}>
                        {exp.company}
                      </span>
                    </div>
                    <div className="text-right">
                      <div
                        className="text-xs mb-0.5"
                        style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {exp.period}
                      </div>
                      <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 mb-4 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-sm"
                        style={{
                          background: "rgba(0,212,255,0.07)",
                          color: "var(--primary)",
                          fontFamily: "'JetBrains Mono', monospace",
                          border: "1px solid rgba(0,212,255,0.12)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}