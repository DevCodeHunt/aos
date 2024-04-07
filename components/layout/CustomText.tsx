"use client";
import {
  staggerContainer,
  textContainer,
  textVariant2,
} from "@/constants/Motion";
import { motion } from "framer-motion";
export const TypingText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles: string;
}) => (
  <motion.div
    variants={staggerContainer as any}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <motion.p
      variants={textContainer}
      className={`font-righteous text-primary sm:text-5xl min-[400px]:text-2xl text-lg break-words ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  </motion.div>
);
