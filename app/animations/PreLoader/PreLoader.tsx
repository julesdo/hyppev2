"use client";
import { useEffect } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";

const PreLoader = () => {
  // Only show preloader on hard reloads (browser refresh / first navigation)
  // If navigated via Next.js Router (soft navigation), the page won't fully reload and component won't remount, so preloader won't run.
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
      <div className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-extrabold text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
        <span>Fast Websites,</span>
        <span>Smart Automations,</span>
        <span>Real Impact.</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
