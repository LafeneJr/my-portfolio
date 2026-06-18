import { easeOut, motion, easeInOut } from "framer-motion"
//import { clipPath } from "framer-motion"
import { Hero_Content } from "../constants/Index"

import personal1 from "../assets/personal1.jpeg"

const textVariants = {
    hidden: { opacity: 0, y: 50},
    visible: { opacity: 1, y: 0,
        transition: {
            duration: 0.8,
            ease: easeOut,
        }
    }
}

const containerVariants = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        }
    }
}

const imageVariants = {
    hidden: { clipPath: "inset(0 50% 0 50%"},
    visible: {
        clipPath: "inset(0 0% 0 0%",
        transition: {
            duration: 1.2,
            ease: easeInOut,
        }
    }
}

export const Hero = () => {
  return (
    <section>
    <div className="relative z-10 mt-20 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
        <motion.div
        className="w-full md:w-1/2 p-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
            <motion.h1
            className="text-2xl md:text-3xl lg:text-5xl my-14"
            variants={textVariants}>
                {Hero_Content.greeting}
            </motion.h1>

            <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-4"
            variants={textVariants}>
                {Hero_Content.introduction}
            </motion.p>

            <motion.p
            className="text-xl md:text-2xl lg:text-3xl"
            variants={textVariants}>
                {Hero_Content.description}
            </motion.p>

            <motion.a
            className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl"
            href={Hero_Content.ResumeLink}
            download
            rel="noopener noreferres"
            target="_blank"
            variants={textVariants}>
                {Hero_Content.resumeLinkText}
            </motion.a>
    
        </motion.div>

        <motion.div
        className="md:h-1/2 p-8"
        initial="hidden"
        animate="visible"
        variants={imageVariants}>
        <img src={personal1} alt="MAL" width={400} height={400}
        className="rounded-3xl" />
        </motion.div>
    </div>
    </section>
  )
}
