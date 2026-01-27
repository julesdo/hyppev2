"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  const isEven = id % 2 === 0;

  return (
    <motion.div
      className="group relative w-full overflow-hidden rounded-2xl border border-[#e4ded7]/10 bg-[#e4ded7]/[0.02] transition-all duration-500 hover:border-[#e4ded7]/20 hover:bg-[#e4ded7]/[0.04]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hover Gradient Effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[#FC5757]/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-[#e4ded7]/5 blur-3xl" />
      </div>

      {/* Main Grid Layout */}
      <div
        className={`relative grid min-h-[420px] grid-cols-1 lg:grid-cols-2 ${
          isEven ? "" : "lg:[direction:rtl]"
        }`}
      >
        {/* Content Column */}
        <div
          className={`flex flex-col justify-between p-6 sm:p-8 lg:p-10 ${
            isEven ? "" : "lg:[direction:ltr]"
          }`}
        >
          {/* Top: Project Number & Links */}
          <div className="mb-6 flex items-center justify-between">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#e4ded7]/30">
              Project 0{id}
            </span>
            <div className="flex items-center gap-2">
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  data-blobity-radius="18"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e4ded7]/20 bg-[#e4ded7]/5 text-[#e4ded7]/60 transition-all hover:border-[#e4ded7]/40 hover:bg-[#e4ded7]/10 hover:text-[#e4ded7]"
                  aria-label="Open GitHub Repository"
                >
                  <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
                </Link>
              )}
              {available && demo ? (
                <Link
                  href={demo}
                  target="_blank"
                  data-blobity-radius="18"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e4ded7]/20 bg-[#e4ded7]/5 text-[#e4ded7]/60 transition-all hover:border-[#FC5757]/40 hover:bg-[#FC5757]/10 hover:text-[#FC5757]"
                  aria-label="Open Live Demo"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="h-3.5 w-3.5"
                  />
                </Link>
              ) : (
                <span className="rounded-full border border-[#e4ded7]/10 bg-[#e4ded7]/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#e4ded7]/40">
                  Soon
                </span>
              )}
            </div>
          </div>

          {/* Middle: Title & Description */}
          <div className="flex-1">
            <h3 className="text-[24px] font-bold leading-tight text-[#e4ded7] sm:text-[28px] md:text-[32px] lg:text-[36px]">
              {name}
            </h3>
            <p className="mt-4 max-w-[480px] text-[14px] font-medium leading-relaxed text-[#e4ded7]/50 sm:text-[15px]">
              {description}
            </p>
          </div>

          {/* Bottom: Tech Stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full border border-[#e4ded7]/10 bg-[#e4ded7]/5 px-3 py-1.5 text-[11px] font-medium text-[#e4ded7]/60 sm:text-[12px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div
          className={`relative flex items-center justify-center overflow-hidden p-6 lg:p-8 ${
            isEven ? "" : "lg:[direction:ltr]"
          }`}
        >
          <div className="relative h-[220px] w-full overflow-hidden rounded-xl border border-[#e4ded7]/10 bg-gradient-to-br from-[#e4ded7]/5 to-transparent sm:h-[260px] lg:h-[320px]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#FC5757] to-[#e4ded7]/50 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
};

export default ProjectCard;
