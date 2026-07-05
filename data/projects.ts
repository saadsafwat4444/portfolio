const GITHUB_USER = "https://github.com/saadsafwat4444";

export const projects = [
  {
    id: 1,
    title: "Autoo",
    description:
      "Power station issue reporting platform with role-based access, media uploads, maps and report tracking.",
    image: "/projects/autoo.png",
    technologies: ["Next.js", "Tailwind CSS"],
    github: `${GITHUB_USER}/autoo`,
    featured: true,
  },

  {
    id: 2,
    title: "AI Chat Platform",
    description:
      "Multi-model AI chat platform supporting GPT, Gemini and Grok with Google authentication.",
    image: "/projects/ai.png",
    technologies: ["Next.js", "Tailwind CSS", "NestJS", "PostgreSQL"],
    github: `${GITHUB_USER}/Ai-Multi-Model`,
    featured: true,
  },

  {
    id: 3,
    title: "Ra7al",
    description:
      "Student housing and real estate platform with booking system and role-based authentication.",
    image: "/projects/ra7al.png",
    technologies: ["Angular", "MySQL", "Laravel", "Tailwind CSS"],
    github: `https://github.com/ITI-Teams/ra7al.git`,
    featured: true,
  },

  {
    id: 4,
    title: "HireOn",
    description:
      "Job listing and recruitment platform with authentication and dashboard.",
    image: "/projects/hireon.png",
    technologies: ["Laravel", "Blade", "MySQL"],
    github: `https://github.com/ITI-Projects0/laravel-project.git`,
    featured: true,
  },

  {
    id: 5,
    title: "Event-Planning-Platform",
    description:
      "Event planning platform with booking system and role-based authentication.",
    image: "/projects/event.png",
    technologies: ["Angular", "Tailwind CSS"],
    github: `https://github.com/ITI-Progects-ORG/Event-planning-system`,
    featured: false,
  },

  {
    id: 7,
    title: "Nafsi",
    description:
      "Content management system for creating posts, categories and comments.",
    image: "/projects/nafsi.png",
    technologies: ["Next.js", "Tailwind CSS"],
    github: `${GITHUB_USER}/nafsi`,
    featured: false,
  },

  {
    id: 8,
    title: "ToDo-List",
    description:
      "ToDo list with authentication and role-based access.",
    image: "/projects/smart.png",
    technologies: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    github: `${GITHUB_USER}/todoList_Project`,
    featured: false,
  },
];
