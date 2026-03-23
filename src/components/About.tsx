import { motion, easeOut } from "framer-motion"
import { About_Content } from "../constants/Index"

export const About = () => {

    const textVariants = {
        hidden: {
            opacity: 0, y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        transition: {
            duration: 0.6,
            ease: easeOut,
        }
    }

  return (
    <section className="px-6 py-10" id="about">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-5">
            About
        </h1>
        <div className="h-1 w-30 mb-10 bg-white"></div>

        <div className="max-w-4xl mx-auto">
            {About_Content.paragraphs.map ((item, index) => (
                <motion.p
                key={index}
                className="text-xl md:text-2xl lg:text-3xl mb-10 leading-relaxed"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                variants={textVariants}>
                    {item}
                </motion.p>
            ))}
        </div>
    </section>
  )
}
