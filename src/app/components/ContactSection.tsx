import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { SectionLabel } from "./AboutSection";

// Replace these with your actual EmailJS credentials from https://www.emailjs.com
const EMAILJS_SERVICE_ID = "service_3jdlqwo";
const EMAILJS_TEMPLATE_ID = "template_vtqavlz";
const EMAILJS_PUBLIC_KEY = "aV5_d46C7tuWvE2Lf";

type Status = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    // If EmailJS is not configured, fall back to mailto
    if (
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      const mailtoUrl = `mailto:shupraja2006@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      window.open(mailtoUrl, "_blank");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "var(--input-background)",
    border: "1px solid var(--border)",
    color: "var(--foreground)",
    borderRadius: "2px",
    fontSize: "0.9rem",
    width: "100%",
    padding: "0.7rem 0.9rem",
    outline: "none",
    fontFamily: "'Outfit', sans-serif",
    transition: "border-color 0.2s",
  } as React.CSSProperties;

  return (
    <section id="contact" className="py-28" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="04. Contact" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Left info */}
          <div>
            <h2
              className="mb-5 leading-tight"
              style={{ fontSize: "2.4rem", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.02em" }}
            >
              Let's build something{" "}
              <span style={{ color: "var(--primary)" }}>together</span>
            </h2>

            <p className="mb-10 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
I'm always open to connecting about internships, software projects, collaborations, or interesting ideas in technology. Whether you'd like to discuss an opportunity or simply say hello, feel free to reach out.
            </p>
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "shupraja2006@gmail.com", href: "mailto:shupraja2006@gmail.com" },
                { icon: MapPin, label: "Location", value: "Nagercoil / Vellore, Tamil Nadu", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)" }}
                  >
                    <Icon size={16} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: "var(--muted-foreground)" }}>{label}</div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm transition-colors hover:text-primary"
                        style={{ color: "var(--foreground)" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm" style={{ color: "var(--foreground)" }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-10 p-5 rounded-sm"
              style={{ background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.12)" }}
            >
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}>
                <b>Open to opportunities</b><br></br>
Currently exploring software development internships and opportunities to work on meaningful, real-world projects.
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className="p-8 rounded-sm"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle size={48} style={{ color: "var(--primary)" }} className="mb-4" />
                <h3 className="mb-2" style={{ color: "var(--foreground)", fontWeight: 600, fontSize: "1.2rem" }}>
                  Message sent!
                </h3>
                <p style={{ color: "var(--muted-foreground)" }}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm underline"
                  style={{ color: "var(--primary)" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs mb-1.5" style={{ color: "var(--muted-foreground)" }}>
                      Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs mb-1.5" style={{ color: "var(--muted-foreground)" }}>
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--muted-foreground)" }}>
                    Subject *
                  </label>
                  <input
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--muted-foreground)" }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me how you'd like to connect..."
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                {status === "error" && (
                  <div
                    className="flex items-center gap-2 p-3 rounded-sm text-sm"
                    style={{ background: "rgba(212,24,61,0.08)", border: "1px solid rgba(212,24,61,0.2)", color: "#f87171" }}
                  >
                    <AlertCircle size={14} />
                    Failed to send. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 flex items-center justify-center gap-2 rounded-sm transition-all duration-200 active:scale-95"
                  style={{
                    background: status === "sending" ? "rgba(0,212,255,0.5)" : "var(--primary)",
                    color: "var(--primary-foreground)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    boxShadow: "0 0 20px rgba(0,212,255,0.2)",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <Loader size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
