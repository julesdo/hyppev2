"use client";
import ProjectGrid from "./ProjectGrid";
import { motion } from "framer-motion";
import { monaSans } from "../fonts/monaSans";

const Work = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] py-20 md:py-28 lg:py-32"
      id="work"
    >
      {/* Section Header */}
      <motion.div
        className="mb-12 w-[90%] text-center md:mb-16 lg:mb-20 lg:max-w-[1200px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#e4ded7]/50 md:text-[14px]">
          Portfolio
        </p>
        <h2
          className={`text-[32px] font-bold text-[#e4ded7] sm:text-[40px] md:text-[48px] lg:text-[56px] ${monaSans.className}`}
        >
          Projets Récents
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[14px] text-[#e4ded7]/50 md:text-[16px]">
          Des architectures production-ready pour des clients exigeants
        </p>
      </motion.div>

      <ProjectGrid />
    </section>
  );
};

export default Work;
