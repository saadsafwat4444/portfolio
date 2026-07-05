// // "use client";

// // import { motion } from "framer-motion";

// // const skills = [
// //   {
// //     title: "Frontend",
// //     items: [
// //       "React",
// //       "Next.js",
// //       "Angular",
// //       "TypeScript",
// //       "JavaScript",
// //       "Tailwind CSS",
// //       "Bootstrap",
// //     ],
// //   },
// //   {
// //     title: "Backend",
// //     items: [
// //       "Laravel",
// //       "Node.js",
// //       "NestJS",
// //       "Express.js",
// //       "Symfony",
// //       "Lumen",
// //     ],
// //   },
// //   {
// //     title: "Database",
// //     items: [
// //       "MySQL",
// //       "REST APIs",
// //       "Authentication",
// //       "JWT",
// //     ],
// //   },
// //   {
// //     title: "Tools",
// //     items: [
// //       "Git",
// //       "GitHub",
// //       "Docker",
// //       "Linux",
// //       "Jenkins",
// //       "Jira",
// //       "Trello",
// //     ],
// //   },
// // ];

// // export default function Skills() {
// //   return (
// //     <section
// //       id="skills"
// //       className="py-28"
// //     >
// //       <div className="mx-auto max-w-7xl px-6">

// //         <div className="mb-16 text-center">
// //           <span className="font-semibold text-primary">
// //             MY SKILLS
// //           </span>

// //           <h2 className="mt-3 text-4xl font-bold">
// //             Technologies I Work With
// //           </h2>

// //           <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
// //             Technologies and tools I use to build scalable,
// //             maintainable and modern web applications.
// //           </p>
// //         </div>

// //         <div className="grid gap-8 md:grid-cols-2">

// //           {skills.map((group, index) => (
// //             <motion.div
// //               key={group.title}
// //               initial={{
// //                 opacity: 0,
// //                 y: 40,
// //               }}
// //               whileInView={{
// //                 opacity: 1,
// //                 y: 0,
// //               }}
// //               viewport={{
// //                 once: true,
// //               }}
// //               transition={{
// //                 delay: index * 0.15,
// //               }}
// //               className="rounded-3xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary"
// //             >
// //               <h3 className="mb-6 text-2xl font-bold">
// //                 {group.title}
// //               </h3>

// //               <div className="flex flex-wrap gap-3">
// //                 {group.items.map((skill) => (
// //                   <span
// //                     key={skill}
// //                     className="rounded-full border bg-background px-4 py-2 text-sm transition hover:border-primary hover:bg-primary/10 hover:text-primary"
// //                   >
// //                     {skill}
// //                   </span>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           ))}

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";

// const skills = [
//   {
//     title: "Frontend",
//     items: [
//       "React",
//       "Next.js",
//       "Angular",
//       "TypeScript",
//       "JavaScript",
//       "Tailwind CSS",
//       "Bootstrap",
//     ],
//   },
//   {
//     title: "Backend",
//     items: [
//       "Laravel",
//       "Node.js",
//       "NestJS",
//       "Express.js",
//       "Symfony",
//       "Lumen",
//     ],
//   },
//   {
//     title: "Database",
//     items: [
//       "MySQL",
//       "REST APIs",
//       "JWT",
//       "Authentication",
//     ],
//   },
//   {
//     title: "Tools",
//     items: [
//       "Git",
//       "GitHub",
//       "Docker",
//       "Linux",
//       "Jenkins",
//       "Jira",
//       "Trello",
//     ],
//   },
// ];

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="relative overflow-hidden py-32"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
//         <div className="absolute right-20 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[150px]" />
//       </div>

//       <div className="mx-auto max-w-7xl px-6">

//         {/* Header */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mx-auto mb-20 max-w-3xl text-center"
//         >
//           <span className="inline-flex rounded-full border bg-background px-4 py-2 text-sm font-semibold text-primary">
//             My Skills
//           </span>

//           <h2 className="mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
//             Technologies I Use Every Day
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-muted-foreground">
//             I build modern, scalable web applications using powerful
//             frontend and backend technologies with clean architecture
//             and best development practices.
//           </p>
//         </motion.div>

//         {/* Cards */}

//         <div className="grid gap-8 md:grid-cols-2">
//           {skills.map((group, index) => (
//             <motion.div
//               key={group.title}
//               initial={{
//                 opacity: 0,
//                 y: 40,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 delay: index * 0.12,
//               }}
//               whileHover={{
//                 y: -8,
//               }}
//               className="
//               group
//               rounded-3xl
//               border
//               bg-card/80
//               p-8
//               backdrop-blur
//               transition-all
//               duration-300
//               hover:border-primary/40
//               hover:shadow-2xl
//               hover:shadow-primary/10
//             "
//             >
//               <h3 className="mb-8 text-2xl font-bold">
//                 {group.title}
//               </h3>

//               <div className="flex flex-wrap gap-3">
//                 {group.items.map((skill) => (
//                   <span
//                     key={skill}
//                     className="
//                     rounded-full
//                     border
//                     bg-background
//                     px-4
//                     py-2
//                     text-sm
//                     font-medium
//                     transition-all
//                     duration-300
//                     hover:-translate-y-1
//                     hover:border-primary
//                     hover:bg-primary
//                     hover:text-white
//                   "
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

 "use client";

import { motion } from "framer-motion";

import {
  FaLaravel,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAngular,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiNestjs,
  SiExpress,
  SiSymfony,
  SiMysql,
  SiJenkins,
  SiJira,
  SiTrello,
  SiLinux,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: FaAngular },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Laravel", icon: FaLaravel },
      { name: "Node.js", icon: FaNodeJs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Symfony", icon: SiSymfony },
    ],
  },
  {
    title: "Database",
    items: [{ name: "MySQL", icon: SiMysql }],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "Linux", icon: SiLinux },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Jira", icon: SiJira },
      { name: "Trello", icon: SiTrello },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border bg-background px-4 py-2 text-sm font-semibold text-primary">
            My Skills
          </span>

          <h2 className="mt-6 text-4xl font-black lg:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A modern stack focused on building scalable,
            maintainable and high-performance web applications.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                rounded-3xl
                border
                bg-card/80
                p-8
                backdrop-blur
                transition-all
                duration-300
                hover:border-primary/40
                hover:shadow-xl
                hover:shadow-primary/10
              "
            >
              <h3 className="mb-8 text-2xl font-bold">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {group.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        scale: 1.04,
                      }}
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        bg-background
                        p-4
                        transition-all
                        duration-300
                        hover:border-primary
                        hover:bg-primary/5
                      "
                    >
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          bg-primary/10
                          text-primary
                          transition
                          group-hover:bg-primary
                          group-hover:text-white
                        "
                      >
                        <Icon size={22} />
                      </div>

                      <span className="font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}