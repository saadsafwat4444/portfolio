// "use client";

// import { ArrowUp } from "lucide-react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function ScrollToTop() {
//   const { scrollYProgress } = useScroll();

//   const progress = useSpring(scrollYProgress, {
//     stiffness: 120,
//     damping: 20,
//   });

//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     return progress.on("change", (value) => {
//       setShow(value > 0.1);
//     });
//   }, [progress]);

//   return (
//     <motion.button
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{
//         opacity: show ? 1 : 0,
//         scale: show ? 1 : 0.8,
//       }}
//       transition={{ duration: 0.25 }}
//       onClick={() =>
//         window.scrollTo({
//           top: 0,
//           behavior: "smooth",
//         })
//       }
//       className="fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full bg-background shadow-xl border border-border flex items-center justify-center"
//     >
//       <svg
//         className="absolute inset-0 h-full w-full -rotate-90"
//         viewBox="0 0 100 100"
//       >
//         <motion.circle
//           cx="50"
//           cy="50"
//           r="46"
//           fill="none"
//           stroke="hsl(var(--muted))"
//           strokeWidth="6"
//         />

//         <motion.circle
//           cx="50"
//           cy="50"
//           r="46"
//           fill="none"
//           stroke="hsl(var(--primary))"
//           strokeWidth="6"
//           strokeLinecap="round"
//           style={{
//             pathLength: progress,
//           }}
//         />
//       </svg>

//       <ArrowUp className="relative z-10 h-5 w-5 text-primary" />
//     </motion.button>
//   );
// }

"use client";

import { ArrowUp } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function ScrollToTop() {
  const { scrollYProgress } = useScroll();

  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  const percentage = progress * 100;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: progress > 0.05 ? 1 : 0,
        scale: progress > 0.05 ? 1 : 0.7,
      }}
      transition={{ duration: 0.25 }}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background shadow-xl backdrop-blur-md"
      style={{
        background: `conic-gradient(
          oklch(0.68 0.16 262) ${percentage * 3.6}deg,
          oklch(0.26 0.03 264) ${percentage * 3.6}deg
        )`,
      }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-background">
        <ArrowUp className="h-5 w-5 text-primary" />
      </div>
    </motion.button>
  );
}