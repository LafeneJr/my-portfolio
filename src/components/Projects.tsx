import { motion, easeOut, spring } from "framer-motion";
import { pastProjects } from "../constants/Index";

export const Projects = () => {
  const projectsVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
        type: spring,
        bounce: 0.4,
      },
    },
  };

  return (
    <section className="px-4 py-10" id="work">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-5">
        Personal Projects
      </h1>
      <div className="h-1 w-30 mb-10 bg-white"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pastProjects.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden h-auto transition transform bg-stone-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectsVariants}
            >
            {/* Image */}
            <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover"
            />

            {/* Text & Button below */}
            <div className="p-6 flex flex-col justify-between text-white">
                <p className="mb-4 text-xl">{project.description}</p>
                <div className="flex justify-between">                

                <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-center"
                >
                View on Github
                </a>

                <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-center"
                >
                Live Demo
                </a>
                </div>
            </div>
            </motion.div>

        ))}
      </div>
    </section>
  );
};
