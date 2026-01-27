import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import LogoAnimated from "../logo";
import FaultyTerminal from "../animations/animatedBgTerminal";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-stretch justify-center bg-[#0E1016] py-0 sm:h-[90vh] md:h-[100vh] 3xl:h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      {/* Terminal Matrix Background Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <FaultyTerminal
          scale={2.5}
          gridMul={[4, 2]}
          digitSize={0.8}
          timeScale={0.1}
          scanlineIntensity={0.05}
          glitchAmount={1.05}
          flickerAmount={0.1}
          noiseAmp={0.4}
          chromaticAberration={0}
          curvature={0}
          tint="#FC5757"
          mouseReact={true}
          mouseStrength={0.2}
          pageLoadAnimation={true}
          brightness={0.35}
          className="opacity-80"
        />
      </div>

      {/* Header Bar */}
      <div className="absolute top-10 z-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div className="flex items-center gap-4">
          <Link
            href="https://cal.com/hypperun/30min"
            target="_blank"
            aria-label="DISCUSS ARCHITECTURE"
            className="w-12 h-12"
          >
            <LogoAnimated />
          </Link>
          <Link
            href="https://cal.com/hypperun/30min"
            target="_blank"
            aria-label="DISCUSS ARCHITECTURE"
          >
            <motion.button
              className="hidden border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] transition-all hover:bg-[#e4ded7] hover:text-[#0E1016] sm:block md:text-[16px] lg:block"
              variants={bodyAnimation}
              data-blobity-radius="4"
            >
              DISCUSS ARCHITECTURE
            </motion.button>
          </Link>
        </div>

        <div className="flex items-center gap-8 text-[#e4ded7] sm:gap-10 md:gap-12 lg:gap-12">
          <Link
            href="https://github.com/julesdo"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] transition-colors hover:text-[#FC5757] md:text-[16px]"
              variants={bodyAnimation}
            >
              GH
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jules-camille-dor%C3%A9/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] transition-colors hover:text-[#FC5757] md:text-[16px]"
              variants={bodyAnimation}
            >
              LN
            </motion.p>
          </Link>
          {/* Malt CTA - Premium */}
          <Link
            href="https://www.malt.fr/profile/julescamilledore"
            target="_blank"
            aria-label="Hire me on Malt"
            className="group"
          >
            <motion.div
              className="flex items-center gap-2 rounded-full bg-[#FC5757] px-4 py-2 text-[14px] font-bold text-white transition-all hover:bg-[#e04545] hover:scale-105 md:text-[16px]"
              variants={bodyAnimation}
              data-blobity-radius="20"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
              <span>AVAILABLE</span>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="z-10 -mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          {/* Status Badge */}
          <motion.div
            className="mb-6 flex items-center gap-2 rounded-full border border-[#e4ded7]/30 bg-[#e4ded7]/5 px-4 py-2 backdrop-blur-sm"
            variants={bodyAnimation}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
            </span>
            <span className="text-[12px] font-medium uppercase tracking-wider text-[#e4ded7]/80 sm:text-[14px]">
              Open to new projects
            </span>
          </motion.div>

          {/* Main Title */}
          <AnimatedWords
            title="HYPPE"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />

          {/* Subtitle with separator */}
          <motion.div 
            className="mt-4 flex flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row sm:gap-4"
            variants={bodyAnimation}
          >
            <h1 className="text-xl font-light uppercase tracking-[0.2em] text-[#e4ded7] sm:text-2xl md:text-3xl lg:text-4xl">
              AI-Native Engineering
            </h1>
            <div className="hidden h-8 w-[1px] bg-[#e4ded7]/40 sm:block"></div>
            <h1 className="text-xl font-light uppercase tracking-[0.2em] text-[#e4ded7] sm:text-2xl md:text-3xl lg:text-4xl">
              Scalable Systems
            </h1>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div 
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            variants={bodyAnimation}
          >
            {["Next.js 16", "TypeScript", "NestJS", "AI/RAG", "Vector DB"].map((tech, index) => (
              <span
                key={index}
                className="rounded-full border border-[#e4ded7]/20 bg-[#e4ded7]/5 px-3 py-1 text-[10px] font-medium text-[#e4ded7]/70 backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-[12px]"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="absolute bottom-10 z-10 flex items-center justify-center md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="max-w-[350px] md:max-w-[400px] lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-semibold text-[#e4ded7] md:text-[18px] lg:text-left">
            Des architectures qui scalent.
          </p>
          <div className="z-50 mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[13px] text-[#e4ded7]/70 md:text-[14px] lg:justify-start">
            <span className="flex items-center gap-1.5">
              <span className="text-green-400">✓</span> 5+ ans d'XP
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-400">✓</span> 100/100 CWV
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-400">✓</span> +15 projets
            </span>
          </div>
        </motion.div>

        <motion.div
          className="hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <Link
            href="https://www.malt.fr/profile/julescamilledore"
            target="_blank"
            className="group flex items-center gap-3 text-right"
          >
            <div>
              <p className="text-[16px] font-semibold text-[#e4ded7] transition-colors group-hover:text-[#FC5757] md:text-[20px]">
                Senior Product Engineer
              </p>
              <p className="text-[14px] text-[#e4ded7]/60">
                490€/jour · Disponible immédiatement
              </p>
            </div>
            <div 
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FC5757] text-white transition-transform group-hover:scale-110"
              data-blobity-radius="20"
            >
              <span className="text-xl">→</span>
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
