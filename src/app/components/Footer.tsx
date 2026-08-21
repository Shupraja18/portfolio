import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-8 mt-8"
      style={{
        borderTop: "1px solid var(--border)",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          © 2026 Shupraja N. Designed & built with{" "}
          <span style={{ color: "var(--primary)" }}>♥</span>
        </p>

        <div className="flex items-center gap-5">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
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
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
