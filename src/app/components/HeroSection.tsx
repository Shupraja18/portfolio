import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const roles = ["Full Stack Developer", "Software Developer", "DSA & Problem Solver", "UI/UX Designer"];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <p
          className="mb-4 tracking-widest uppercase text-xs"
          style={{ color: "var(--primary)", fontFamily: "'JetBrains Mono', monospace" }}
        >
          Hello, World! I'm
        </p>

        <h1
          className="mb-4 leading-none tracking-tight"
          style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: 800,
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
          }}
        >
          Shupraja N
        </h1>

        <div className="mb-8 h-10 flex items-center gap-2">
          <span
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
              color: "var(--primary)",
              fontWeight: 600,
            }}
          >
            {displayed}
          </span>
          <span
            className="animate-pulse"
            style={{ width: 3, height: "1.6rem", background: "var(--primary)", borderRadius: 1 }}
          />
        </div>

        <p
          className="mb-10 max-w-xl leading-relaxed"
          style={{ color: "var(--muted-foreground)", fontSize: "1.05rem" }}
        >
          I craft clean, functional web experiences and solve problems with strong CS fundamentals — from React interfaces to backend logic and algorithmic thinking.
        </p>

        <div className="flex flex-wrap gap-4 mb-14">
          <button
            onClick={scrollToProjects}
            className="px-7 py-3 rounded-sm transition-all duration-200 hover:shadow-lg active:scale-95"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.04em",
              boxShadow: "0 0 20px rgba(0,212,255,0.25)",
            }}
          >
            View My Work
          </button>
          <button
            onClick={scrollToContact}
            className="px-7 py-3 rounded-sm transition-all duration-200 hover:border-primary active:scale-95"
            style={{
              border: "1px solid rgba(0,212,255,0.3)",
              color: "var(--foreground)",
              fontWeight: 500,
              fontSize: "0.9rem",
              background: "transparent",
            }}
          >
            Get In Touch
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          {[
            { icon: Github, href: "https://github.com/Shupraja18", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/shupraja-n", label: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors duration-200 hover:text-primary"
              style={{ color: "var(--muted-foreground)" }}
            >
              <Icon size={20} />
            </a>
          ))}
          <div className="h-px w-16 ml-2" style={{ background: "var(--border)" }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ArrowDown size={16} style={{ color: "var(--muted-foreground)" }} />
      </div>
    </section>
  );
}
