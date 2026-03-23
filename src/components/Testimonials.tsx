import { motion } from "framer-motion";
import { TestimonialsOf } from "../constants/Index";

export const Testimonials = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.3,
      },
    }),
  };

  return (
    <section className="px-6 py-10 min-h-screen" id="testimonials">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-5">
        What People Are Saying
      </h1>
      <div className="h-1 w-[50px] mb-10 bg-white"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TestimonialsOf.map((item, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={childVariants}
          >
            <div className="flex items-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full mr-4"
                loading="lazy"
              />

              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm font-light">{item.title}</p>
              </div>
            </div>

            <p className="leading-relaxed">{item.feedback}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
