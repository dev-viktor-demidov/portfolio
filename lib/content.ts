/**
 * Portfolio content — edit everything in this one file.
 *
 * Most of the values below are placeholders (marked with TODO). Swap in your
 * real details and the whole site updates. Nothing else needs to change.
 */

export type NavLink = { label: string; href: string };

export type SocialLink = {
  label: string;
  href: string;
  // Icon key — see components/icons.tsx for the available set.
  icon: "github" | "linkedin" | "x" | "mail";
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
  // Optional: mark a project as "featured" to give it a larger card.
  featured?: boolean;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  // Notable things you shipped or owned.
  highlights?: string[];
};

export const profile = {
  name: "Viktor Demidov",
  // Short role shown under your name and in the browser tab.
  role: "Full-Stack Developer",
  // One punchy line for the hero. Keep it to a sentence.
  tagline: "I build fast, accessible web applications — from the database to the last pixel.",
  // A couple of sentences for the About section. TODO: make it yours.
  about: [
    "I'm a full-stack developer who enjoys turning fuzzy ideas into products people actually want to use. I care about clean architecture, thoughtful UX, and shipping things that hold up in production.",
    "Most of my work lives in the TypeScript ecosystem — React and Next.js on the front end, Node.js and Postgres on the back — but I'm happy to reach for whatever tool fits the problem.",
  ],
  // Shown as a small badge in the hero. Set to null to hide.
  availability: "Available for new projects",
  location: "Remote", // TODO: e.g. "Berlin, Germany"
  email: "dev.viktor.demidov@gmail.com",
  // Where the "View work" CTA scrolls to.
  resumeUrl: null as string | null, // TODO: e.g. "/viktor-demidov-cv.pdf"
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
  // TODO: replace the usernames/URLs with your own.
  { label: "GitHub", href: "https://github.com/your-username", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: "linkedin" },
  { label: "Email", href: "mailto:dev.viktor.demidov@gmail.com", icon: "mail" },
];

export const skillGroups: SkillGroup[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "Go"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "React Query", "Zustand"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "Prisma", "REST", "GraphQL"] },
  { category: "Infra & Tools", items: ["Docker", "AWS", "Vercel", "CI/CD", "Git"] },
];

// TODO: replace with your real projects.
export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short, outcome-focused description of what you built and why it mattered. Mention the problem, your role, and the impact.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/your-username/project-one",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "Another project. Keep descriptions concrete — what does it do, who is it for, and what was technically interesting about it?",
    tech: ["React", "Node.js", "GraphQL"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/your-username/project-two",
  },
  {
    title: "Project Three",
    description:
      "A side project, open-source library, or experiment worth showing off. Link the source so people can dig in.",
    tech: ["Go", "Docker", "AWS"],
    sourceUrl: "https://github.com/your-username/project-three",
  },
];

// TODO: replace with your real experience.
export const experience: ExperienceItem[] = [
  {
    role: "Senior Full-Stack Developer",
    company: "Company Name",
    period: "2023 — Present",
    description:
      "One or two sentences on your scope and what you're responsible for here.",
    highlights: [
      "Shipped a key feature that moved a metric you care about.",
      "Led or improved something — architecture, performance, DX, etc.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Earlier Company",
    period: "2021 — 2023",
    description: "What you worked on and the kind of problems you solved.",
    highlights: ["A concrete win.", "Another concrete win."],
  },
];
