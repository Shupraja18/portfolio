const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML", "CSS","Bootstrap"] },
  { category: "Backend", items: ["Node.js", "Python", "Flask","Python","PostgreSQL", "REST APIs", "MERN Stack"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL","SQLAlchemy"] },
  { category: "Core CS", items: ["Data Structures & Algorithms", "OOP", "Design & Analysis of Algorithms"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Canva"] },
  { category: "Other", items: ["ROS2", "Gazebo", "Ubuntu(Robotics)"] },
];

export function AboutSection() {
  return (
    <section id="about" className="py-28" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="01. About" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-12">
          {/* Bio */}
          <div>
            <h2
              className="mb-6 leading-tight"
              style={{ fontSize: "2.4rem", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.02em" }}
            >
              Crafting digital experiences that{" "}
              <span style={{ color: "var(--primary)" }}>matter</span>
            </h2>

            <div className="space-y-4" style={{ color: "var(--muted-foreground)", lineHeight: 1.8 }}>
              <p>
                I'm a third-year Computer Science student at VIT Vellore with a strong foundation in data structures, algorithms, and OOP across Python, Java, C, and C++. I build full-stack web applications using React, Flask, and SQL/NoSQL databases, with a growing interest in distributed systems and scalable software design.
                </p>
              <p>
                When I'm not coding, I'm solving DSA problems, designing UI in Figma, or picking up new tech through hands-on internships.
              </p>
              <p>
                Based in Nagercoil / Vellore, Tamil Nadu. Open to internships and full-time opportunities.
              </p>
            </div>

            <div
              className="mt-8 grid grid-cols-3 gap-4 pt-8"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {[
                { value: "4+", label: "Internships Completed" },
                { value: "5+", label: "Projects Shipped" },
                { value: "2028", label: "Expected Graduation" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div style={{ color: "var(--primary)", fontSize: "1.8rem", fontWeight: 700 }}>{value}</div>
                  <div style={{ color: "var(--muted-foreground)", fontSize: "0.8rem" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-sm"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <h3
                  className="mb-4 text-sm tracking-widest uppercase"
                  style={{ color: "var(--primary)", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded-sm text-xs"
                      style={{
                        background: "rgba(0,212,255,0.07)",
                        color: "var(--foreground)",
                        border: "1px solid rgba(0,212,255,0.12)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ label }: { label: string }) {
  return (
    <p
      className="tracking-widest uppercase text-xs mb-2"
      style={{ color: "var(--primary)", fontFamily: "'JetBrains Mono', monospace" }}
    >
      {label}
    </p>
  );
}
