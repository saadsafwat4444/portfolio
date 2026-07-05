"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
        type Project = {
        title: string;
        description: string;
  image: string;
  technologies: string[];
  github: string;
  
};

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:shadow-xl"
    >
      {/* Image */}

      <div className="relative h-60 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}

      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-bold">
            {project.title}
          </h3>

          <p className="mt-3 leading-7 text-muted-foreground">
            {project.description}
          </p>
        </div>

        {/* Tech */}

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}