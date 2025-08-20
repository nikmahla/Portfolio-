type SidebarProps = {
  onLinkClick?: () => void;
};

function IconCircle({
  label,
  href,
  children,
  onClick,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={onClick}
      title={label}
      className="
        inline-flex h-10 w-10 items-center justify-center rounded-full 
        bg-zinc-800 
        transition
        hover:bg-zinc-700 hover:ring-white/20
      "
    >
      {children}
    </a>
  );
}

export default function Sidebar({ onLinkClick }: SidebarProps) {
  return (
    <div
      className="
        w-70 min-h-[500px]
    rounded-2xl bg-zinc-900/60 backdrop-blur p-5 ring-1 ring-white/5    space-y-4  
    shadow-[inset_0_2px_5px_rgba(255,255,255,0.2),inset_0_-20px_40px_rgba(0,0,0,0.9)]"
    >
      {/* Avatar */}
      <div className="h-[240px] w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
        <img
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop"
          alt="Profile"
          className="aspect-square w-full object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="mt-4 text-2xl font-semibold tracking-tight">
        Fatemeh Nikookar
      </h2>

      {/* Email + location */}
      <p className="mt-1 break-all text-sm text-zinc-300">
        Frontend Developer
      </p>

      {/* Socials: CENTERED row (GitHub + LinkedIn) */}
      <div className="mt-5 flex justify-center items-center gap-4">
        <IconCircle
          label="GitHub"
          href="https://github.com/nikmahla"
          onClick={onLinkClick}
        >
          {/* GitHub */}
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.31 3.52 1 .11-.8.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.9 0-1.3.47-2.37 1.24-3.21-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.47 11.47 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.21 0 4.59-2.8 5.6-5.47 5.89.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
          </svg>
        </IconCircle>

        <IconCircle
          label="LinkedIn"
          href="https://www.linkedin.com/feed/"
          onClick={onLinkClick}
        >
          {/* LinkedIn */}
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.6 4.75 6V24h-4v-7.5c0-1.8-.03-4-2.5-4s-2.88 2-2.88 3.9V24h-4V8z" />
          </svg>
        </IconCircle>
      </div>

      {/* BOTTOM CTA: rounded box + arrow bubble (send email style) */}
      <a
        href="mailto:fatemehnikookar2020@gmail.com"
        className="
          group relative mt-6 block overflow-hidden rounded-3xl
          bg-zinc-900 px-4 py-3 text-sm text-zinc-200
          ring-1 ring-white/10 transition
          hover:bg-zinc-800 hover:ring-white/20
        
        "
      >
        <span>Send Email</span>

        {/* Arrow bubble on the right (white circle with arrow) */}
        <span
          className=" 
            absolute right-1 top-1/2 -translate-y-1/2
            inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black
            shadow-[0_6px_14px_rgba(0,0,0,0.35)]
            transition
            group-hover:translate-x-0.5 
          "
          aria-hidden
        >
          
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
            /></svg>
        </span>
      </a>
    </div>
  );
}
