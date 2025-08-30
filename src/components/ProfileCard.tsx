import {
  EnvelopeIcon
} from "@heroicons/react/24/outline";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";

export default function ProfileCard() {
  const goContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", "#contact");
  };

  return (
    <aside
      className=" mt-16 sm:mt-0
        mx-auto w-full max-w-md px-4
        md:fixed md:left-4 md:top-7 md:w-80 md:px-0
        z-40
      "
    >
      <div
        className="
    rounded-3xl border border-white/10
    bg-gradient-to-b from-[#2a2a2d] via-[#1f1f21] to-[#161618]
    backdrop-blur-md
    p-5 
    shadow-[inset_4px_4px_10px_rgba(0,0,0,0.6),inset_-4px_-4px_10px_rgba(255,255,255,0.08)]
    md:h-[560px]
  "
      >
        {/* avatar */}
        <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0d0f12] via-[#16181c] to-[#0d0f12]" />

          <img
            src="public/ppp.png"
            alt="Fatemeh Nikookar portrait"
            className="h-52 w-full object-cover"
          />
        </div>

        {/* name */}
        <h2 className="mt-4 text-center text-3xl font-signature text-white leading-tight">
          Fatemeh Nikookar
        </h2>

        {/* email */}
        <div className="mt-4 space-y-1 text-center text-sm">
          <p className="inline-flex items-center gap-2 text-gray-300">
            <EnvelopeIcon className="h-4 w-4" />
            fatemehnikookar2020@gmail.com
          </p>
        </div>

        {/* socials */}
        <div className="mt-5 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/fatemeh-nikookar-b00a28291/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full 
               bg-black/40 text-gray-200    
               hover:bg-black/80 transition"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>

          <a
            href="https://github.com/nikmahla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full 
               bg-black/40 text-gray-200 
               hover:bg-black/80  transition"
          >
            <FaGithub className="h-6 w-6" />
          </a>

          <a
            href="https://t.me/Fatemeh_Nikookar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full 
               bg-black/40 text-gray-200
               hover:bg-black/80 transition  "
          >
            <FaTelegram className="h-6 w-6" />
          </a>

        </div>

        {/* action */}
        <div className="mt-6">
          <a
            href="#contact"
            onClick={goContact}
            className="
      group relative flex items-center justify-between
      w-full rounded-2xl border border-white/15
      bg-black/40 px-4 py-3
      text-sm text-white
      shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]
      transition
      hover:bg-black/55 hover:border-white/25
      focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
    "
            aria-label="Go to contact section"
          >
            <span className="pl-1">Get Started</span>
            <span
              className="
        ml-3 grid h-10 w-10 place-items-center rounded-full
        bg-white text-black
        shadow-[0_6px_18px_-6px_rgba(255,255,255,0.35)]
        transition-transform duration-200
        group-hover:translate-x-0.5
      "
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}