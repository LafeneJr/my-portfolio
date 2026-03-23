import { motion, easeOut } from "framer-motion";
import { workExperience } from "../constants/Index";

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="px-6 py-10" id="experience">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-5">
        Work Experience
      </h1>
      <div className="h-1 w-[50px] mb-10 bg-white"></div>

      <motion.div
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {workExperience.map((item, index) => (
          <motion.div key={index} variants={childVariants}>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="text-sm md:w-1/4 mb-2 md:mb-0 p-4">
                {item.yearRange}
              </div>

              <div className="md:w-3/4 mb-10">
                <div className="max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg">
                  <h2 className="text-xl mb-2">{item.tittle}</h2>
                  <p className="mb-4 text-sm italic">{item.location}</p>

                  <ul className="list-disc list-inside space-y-2">
                    {item.description.map((list, i) => (
                      <li key={i}>{list}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
