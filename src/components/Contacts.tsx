import { motion, easeOut } from "framer-motion"
import { Contact_Content } from "../constants/Index"

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
      delay,
    },
  }),
}

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
      delay,
    },
  }),
}

export const Contacts = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 md:px-10"
      id="contact"
    >
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-5">
        Contact
      </h1>
      <div className="h-1 w-50 mb-10 bg-white"></div>

      <motion.h3
        className="text-5xl md:text-7xl leading-none"
        initial="hidden"
        whileInView="visible"
        custom={0.4}
        variants={textVariants}
      >
        {Contact_Content.headline}
      </motion.h3>

      <motion.p
        className="text-lg md:text-2xl mt-6 max-w-3xl"
        initial="hidden"
        whileInView="visible"
        custom={0.6}
        variants={textVariants}
      >
        {Contact_Content.description}
      </motion.p>

      <motion.a
        href={`mailto:${Contact_Content.email}`}
        className="text-2xl font-medium mt-8"
        initial="hidden"
        whileInView="visible"
        custom={0.8}
        variants={textVariants}
      >
        {Contact_Content.email}
      </motion.a>

      <div className="flex space-x-6 mt-8">
        {Contact_Content.socialLinks.map((links, index) => {
          const Icon =
            links.icon
          return (
            <motion.a
              key={links.platform}
              href={links.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={links.ariaLabel}
              initial="hidden"
              whileInView="visible"
              custom={1.0 + index * 0.2}
              variants={iconVariants}
            >
              <Icon size={36} />
            </motion.a>
          )
        })}
      </div>

      <motion.p
        className="text-sm text-stone-400 mt-20"
        initial="hidden"
        whileInView="visible"
        custom={1.4}
        variants={textVariants}
      >
        {Contact_Content.footerText}
      </motion.p>
    </section>
  )
}
