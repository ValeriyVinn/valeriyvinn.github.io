"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{ height: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// ?---------------------------------------
// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";

// export default function PageWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const [displayChildren, setDisplayChildren] = useState(children);

//   useEffect(() => {
//     setDisplayChildren(children);
//   }, [children]);

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={pathname}
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -10 }}
//         transition={{ duration: 0.4, ease: "easeInOut" }}
//         style={{ height: "100%" }}
//       >
//         {displayChildren}
//       </motion.div>
//     </AnimatePresence>
//   );
// }
// -----------------------------------------
// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";

// export default function PageWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   // Визначаємо тип анімації залежно від шляху
//   const getAnimation = () => {
//     if (pathname.startsWith("/tech-skills/javascript")) {
//       return {
//         initial: { opacity: 0, x: 100 },
//         animate: { opacity: 1, x: 0 },
//         exit: { opacity: 0, x: -100 },
//       };
//     }
//     if (pathname.startsWith("/skills")) {
//       return {
//         initial: { opacity: 0, y: 100 },
//         animate: { opacity: 1, y: 0 },
//         exit: { opacity: 0, y: -100 },
//       };
//     }
//     // Default fade
//     return {
//       initial: { opacity: 0 },
//       animate: { opacity: 1 },
//       exit: { opacity: 0 },
//     };
//   };

//   const animation = getAnimation();

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={pathname}
//         initial={animation.initial}
//         animate={animation.animate}
//         exit={animation.exit}
//         transition={{ duration: 0.2, ease: "easeInOut" }}
//         style={{ height: "100%" }}
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// }
