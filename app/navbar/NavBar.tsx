"use client";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, section: string) => {
    e.preventDefault();
    setActiveSection(section);
    const elem = document.getElementById(section);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed bottom-6 left-0 right-0 z-50 mx-auto flex w-fit items-center gap-1 rounded-2xl border border-white/10 bg-[#0a0a0f]/80 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-xl sm:bottom-8 sm:gap-1.5 sm:p-2">
      {/* Navigation Links */}
      <div className="flex items-center gap-0.5 sm:gap-1">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleScroll(e, item.id)}
            aria-label={`Scroll to ${item.label} Section`}
            data-blobity-radius="12"
            className={`relative rounded-xl px-3 py-2 text-[11px] font-medium transition-all duration-300 sm:px-4 sm:py-2.5 sm:text-[13px] ${
              activeSection === item.id
                ? "bg-white/10 text-white"
                : "text-white/60 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white" />
            )}
          </Link>
        ))}
      </div>

      {/* Separator */}
      <div className="mx-1 h-6 w-px bg-white/10 sm:mx-2" />

      {/* Malt CTA */}
      <Link
        href="https://www.malt.fr/profile/julescamilledore"
        target="_blank"
        aria-label="Hire me on Malt"
        data-blobity-radius="12"
        className="group flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#FC5757] to-[#ff6b6b] px-3 py-2 text-[11px] font-semibold text-white shadow-lg shadow-[#FC5757]/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FC5757]/30 sm:px-4 sm:py-2.5 sm:text-[12px]"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
        </span>
        <span className="hidden sm:inline">Hire me</span>
        <span className="sm:hidden">Malt</span>
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
      </Link>
    </nav>
  );
};

export default NavBar;
