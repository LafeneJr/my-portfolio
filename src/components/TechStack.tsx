import { motion } from "framer-motion";
import { TechStack } from "../constants/Index";

export const TechStacks = () => {
  return (
    <section id="tech-stack" className="px-6 py-10">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-5">
        Tech Stack
      </h1>

      <div className="h-1 w-[50px] bg-white mb-10"></div>

      <div className="space-y-12">
        {TechStack.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: groupIndex * 0.2,
            }}
          >
            <h2 className="text-2xl font-semibold mb-6">
              {group.category}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {group.technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <motion.div
                    key={tech.name}
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="rounded-xl bg-stone-500/10 backdrop-blur-3xl border border-white/10 p-6 flex flex-col items-center gap-4 hover:bg-stone-500/20"
                  >
                    <Icon className="text-5xl" />

                    <span className="text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};