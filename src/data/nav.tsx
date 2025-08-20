import type { ComponentType, SVGProps } from "react";

export type Item = "home" | "projects" | "skills" | "contact";

export type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

export const HomeIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 3 2 11h2v9h6v-5h4v5h6v-9h2Z" />
  </svg>
);

export const ProjectsIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z" />
  </svg>
);

export const SkillsIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 3a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V5Z" />
  </svg>
);

export const ContactIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
  </svg>
);

export type NavItem = {
  id: Item;
  label: string;
  Icon: SvgIcon;
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home / About me", Icon: HomeIcon },
  { id: "projects", label: "Projects", Icon: ProjectsIcon },
  { id: "skills", label: "Skills", Icon: SkillsIcon },
  { id: "contact", label: "Contact", Icon: ContactIcon },
];
