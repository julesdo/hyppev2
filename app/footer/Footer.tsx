import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full border-t border-[#e4ded7]/10 bg-[#0E1016] py-8"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center gap-4 text-center lg:max-w-[1200px] lg:flex-row lg:justify-between lg:text-left">
        {/* Left - Copyright */}
        <p className="text-[12px] text-[#e4ded7]/50 md:text-[13px]">
          © {year} Hyppe. All rights reserved.
        </p>

        {/* Center - Tech Signature */}
        <p className="text-[11px] text-[#e4ded7]/30 md:text-[12px]">
          Built with Next.js 16 · TypeScript · Vercel
        </p>

        {/* Right - Social Links */}
        <div className="flex items-center gap-6 text-[12px] font-medium text-[#e4ded7]/50 md:text-[13px]">
          <Link
            href="https://github.com/julesdo"
            target="_blank"
            className="transition-colors hover:text-[#e4ded7]"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/jules-camille-dor%C3%A9/"
            target="_blank"
            className="transition-colors hover:text-[#e4ded7]"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.malt.fr/profile/julescamilledore"
            target="_blank"
            className="transition-colors hover:text-[#FC5757]"
          >
            Malt
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
