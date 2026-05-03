export type Project = {
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    title: "Project Atlas",
    problem: "Teams lost context while switching between research and builds.",
    solution: "A visual knowledge map that keeps decisions and code in sync.",
    techStack: ["Next.js", "TypeScript", "GSAP"],
    github: "https://github.com/your-handle/project-atlas",
    demo: "https://project-atlas.demo",
  },
  {
    title: "Echo Grid",
    problem: "IoT telemetry was noisy and hard to explore in real time.",
    solution: "A dashboard that streams, filters, and annotates sensor data.",
    techStack: ["React", "Node.js", "WebSockets"],
    github: "https://github.com/your-handle/echo-grid",
    demo: "https://echo-grid.demo",
  },
  {
    title: "Lumen Story",
    problem: "Personal brand assets felt scattered and inconsistent.",
    solution: "A cinematic portfolio system with reusable story blocks.",
    techStack: ["Next.js", "Framer Motion", "CSS"],
    github: "https://github.com/your-handle/lumen-story",
    demo: "https://lumen-story.demo",
  },
];

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "C++"],
  frameworks: ["Next.js", "React", "Node.js", "Express"],
  tools: ["Git", "Figma", "Docker", "Firebase"],
};

export type ExperienceItem = {
  date: string;
  title: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    date: "2025",
    title: "Creative Systems Intern",
    description: "Built interactive data stories for a product launch with GSAP and React.",
  },
  {
    date: "2024",
    title: "Hackathon Finalist",
    description: "Led a team that shipped a climate visualizer in 36 hours.",
  },
  {
    date: "2023",
    title: "Student Researcher",
    description: "Prototyped wearable sensors and realtime dashboards for the lab.",
  },
];

export const contact = {
  github: "https://github.com/your-handle",
  linkedin: "https://linkedin.com/in/your-handle",
  email: "mailto:you@example.com",
};
