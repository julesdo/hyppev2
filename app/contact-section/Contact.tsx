import Link from "next/link";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] py-20 md:min-h-[60vh] lg:py-32"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1200px]">
        {/* Main Heading */}
        <div className={`text-center ${monaSans.className}`}>
          <AnimatedWords2
            title={"LET'S BUILD"}
            style="text-[60px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:text-[80px] md:text-[100px] lg:text-[140px] xl:text-[180px]"
          />
        </div>

        {/* Subtitle */}
        <motion.p
          className="mt-6 max-w-[600px] text-center text-[16px] text-[#e4ded7]/70 md:mt-8 md:text-[18px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Une idée de projet ? Un besoin d'architecture ? Discutons de comment transformer votre vision en système scalable.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Primary CTA - Cal.com */}
          <Link
            href="https://cal.com/hypperun/30min"
            target="_blank"
            data-blobity-radius="28"
            className="group flex items-center gap-3 rounded-full bg-[#e4ded7] px-8 py-4 text-[14px] font-bold uppercase text-[#0E1016] transition-all hover:bg-white hover:scale-105 md:text-[16px]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Book a Call
          </Link>

          {/* Secondary CTA - Email */}
          <Link
            href="mailto:julescamilledore@gmail.com?subject=Project%20Inquiry"
            target="_blank"
            data-blobity-radius="28"
            className="flex items-center gap-2 rounded-full border-2 border-[#e4ded7]/30 px-8 py-4 text-[14px] font-bold uppercase text-[#e4ded7] transition-all hover:border-[#e4ded7] hover:bg-[#e4ded7]/10 md:text-[16px]"
          >
            julescamilledore@gmail.com
          </Link>
        </motion.div>

        {/* Malt Badge */}
        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            href="https://www.malt.fr/profile/julescamilledore"
            target="_blank"
            data-blobity-radius="28"
            className="group flex items-center gap-3 rounded-full border border-[#FC5757]/30 bg-[#FC5757]/10 px-6 py-3 transition-all hover:border-[#FC5757] hover:bg-[#FC5757]/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FC5757] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FC5757]"></span>
            </span>
            <span className="text-[13px] font-medium text-[#e4ded7]/80 md:text-[14px]">
              Disponible sur <span className="font-bold text-[#FC5757]">Malt</span> · 490€/jour
            </span>
            <span className="text-[#FC5757] transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
