import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <motion.section
      className=" h-[15vh] w-full  items-center justify-center border-t-[3px] border-[#e4ded7]/30 bg-[#0E1016] pt-10  font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0"
      initial="initial"
      animate="animate"
    >
      <motion.div className="mx-auto flex w-[90%] flex-row items-center justify-between text-center text-[12px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
        <AnimatedBody text={`Copyright ${year}`} className={"m-0 p-0"} />
        <div className="flex flex-col sm:flex-row  sm:gap-1 md:gap-2">
          <AnimatedBody
            text={"Design & Development by"}
            className={"m-0 p-0"}
          />
          <Link
            href="#home"
            target="_blank"
            aria-label="Hyppe Studio"
          >
            <span className="underline underline-offset-2 hover:no-underline">
              <AnimatedBody text={"Hyppe"} className={"m-0 p-0"} />
            </span>{" "}
          </Link>
          <div className="hidden lg:flex gap-3 ml-4">
            <Link href="https://www.linkedin.com/in/jules-camille-dor%C3%A9/" target="_blank" aria-label="LinkedIn">
              <AnimatedBody text={"LinkedIn"} className={"m-0 p-0"} />
            </Link>
            <span>·</span>
            <Link href="https://www.instagram.com/julinmove/" target="_blank" aria-label="Instagram">
              <AnimatedBody text={"Instagram"} className={"m-0 p-0"} />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
