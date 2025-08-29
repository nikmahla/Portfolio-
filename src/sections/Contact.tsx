import { useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";

const TO = "fatemehnikookar2020@gmail.com";

export default function Contact() {
  const subject = useMemo(
    () => encodeURIComponent("Portfolio contact — Front-End / React"),
    []
  );

  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;

    const body = encodeURIComponent(
      `Hi Fatemeh,\n\n${message}\n\n— ${name || "Anonymous"}${fromEmail ? ` (${fromEmail})` : ""}`
    );
    // opens the default email app with prefilled content
    window.location.href = `mailto:${TO}?subject=${subject}&body=${body}`;
  }

  return (
   <section
  id="contact"
  aria-label="Contact"
  className="relative z-0 scroll-mt-0 px-4 md:pr-24 lg:pr-32 py-16 md:py-24"
>
      <div className="mx-auto w-full max-w-[50rem]">
        <SectionHeading
          title="Contact"
          showDivider
          dividerThickness={2}
          titleClassName="text-4xl sm:text-5xl md:text-6xl"
        />

        {/* Card */}
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur p-5 sm:p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]">

          {/* form */}
          <form onSubmit={onSubmit} className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm text-white/80">
                Your name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/60"
                placeholder="Your name"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="fromEmail" className="block text-sm text-white/80">
                Your email
              </label>
              <input
                id="fromEmail"
                type="email"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/60"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm text-white/80">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                required
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/60"
                placeholder="Tell me about the role or project…"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.07] px-5 py-2.5 text-white hover:bg-white/[0.12] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Send
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 8l8 5 8-5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                  <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
