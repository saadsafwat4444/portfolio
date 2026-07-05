"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-semibold text-primary">
            FEATURED PROJECTS
          </span>

          <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
            Some Things I&apos;ve Built
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            A selection of projects demonstrating my experience in building
            scalable web applications using Laravel, React, Next.js,
            Node.js and modern development practices.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}