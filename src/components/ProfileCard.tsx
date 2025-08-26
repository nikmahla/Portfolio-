import {
  EnvelopeIcon,
  MapPinIcon,
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
      className="
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
        <div className="rounded-xl p-2">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=640&auto=format&fit=crop"
            alt="Fatemeh Nikookar portrait"
            className="h-52 w-full rounded-xl object-cover"
          />
        </div>

        {/* name */}
        <h2 className="mt-4 text-center text-3xl font-signature text-white leading-tight">
          Fatemeh Nikookar
        </h2>

        {/* role */}
        <p className="mt-1 text-center text-sm text-gray-400">
          Frontend Developer (React)
        </p>

        {/* contact details */}
        <div className="mt-4 space-y-1 text-center text-sm">
          <p className="inline-flex items-center gap-2 text-gray-300">
            <EnvelopeIcon className="h-4 w-4" />
            fatemehnikookar@gmail.com
          </p>
          <p className="inline-flex items-center gap-2 text-gray-500">
            <MapPinIcon className="h-4 w-4" />
            Based in Tehran, IR
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
    <FaLinkedin  />
  </a>

  <a
    href="https://github.com/nikmahla"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex h-10 w-10 items-center justify-center rounded-full 
               bg-black/40 text-gray-200 
               hover:bg-black/80 transition"
  >
    <FaGithub  />
  </a>

  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex h-10 w-10 items-center justify-center rounded-full 
               bg-black/40 text-gray-200
               hover:bg-black/80 transition"
  >
    <FaTelegram  />
  </a>
</div>


        {/* action */}
        <div className="mt-6">
          <a
            href="#contact"
            onClick={goContact}
            className="block rounded-2xl bg-white px-4 py-3 text-center text-sm font-medium text-black hover:bg-white/90"
          >
            Contact Me
          </a>
        </div>
      </div>
    </aside>
  );
}
