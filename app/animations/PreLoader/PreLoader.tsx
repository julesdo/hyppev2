"use client";
import { useEffect, useState } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";

const PreLoader = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState<boolean | null>(null); // null = not determined yet
  
  const bootSequence = [
    { text: "> initializing system...", delay: 0 },
    { text: "> loading architecture modules", delay: 400 },
    { text: "> Next.js 16 ✓", delay: 900 },
    { text: "> TypeScript ✓", delay: 1200 },
    { text: "> AI/RAG pipelines ✓", delay: 1500 },
    { text: "> system ready", delay: 1900 },
  ];

  // Determine visibility on mount
  useEffect(() => {
    // Check if this is a SPA navigation
    const wasShownThisSession = sessionStorage.getItem("preloader-shown") === "true";
    
    // Detect navigation type (reload vs navigate)
    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const navigationType = navEntries.length > 0 ? navEntries[0].type : "navigate";
    
    // Skip on SPA navigation (not reload, not first load)
    const shouldSkip = wasShownThisSession && navigationType !== "reload";
    
    if (shouldSkip) {
      setIsVisible(false);
      document.body.style.overflowY = "scroll";
    } else {
      setIsVisible(true);
    }
  }, []);

  // Run animation when visible
  useEffect(() => {
    if (isVisible !== true) return;

    // Animate boot sequence
    const timers: NodeJS.Timeout[] = [];
    bootSequence.forEach((line, index) => {
      const timer = setTimeout(() => {
        setCurrentLine(index + 1);
      }, line.delay);
      timers.push(timer);
    });

    // Start exit animation after boot sequence
    const exitTimer = setTimeout(() => {
      preLoaderAnim();
      sessionStorage.setItem("preloader-shown", "true");
    }, 2400);
    timers.push(exitTimer);

    return () => {
      timers.forEach(t => clearTimeout(t));
    };
  }, [isVisible]);

  // Don't render until we determine visibility, or if not visible
  if (isVisible !== true) {
    return null;
  }

  return (
    <div className="preloader">
      {/* Subtle grid background */}
      <div className="preloader-grid" />
      
      {/* Main content */}
      <div className="preloader-content">
        {/* Logo/Brand */}
        <div className="preloader-brand">
          <span className="brand-text">HYPPE</span>
          <span className="brand-dot" />
        </div>
        
        {/* Boot sequence terminal */}
        <div className="boot-terminal">
          {bootSequence.slice(0, currentLine).map((line, index) => (
            <div 
              key={index} 
              className={`boot-line ${index === currentLine - 1 ? 'latest' : ''} ${line.text.includes('✓') ? 'success' : ''}`}
            >
              {line.text}
            </div>
          ))}
          {currentLine < bootSequence.length && (
            <span className="cursor-blink">_</span>
          )}
        </div>

        {/* Tagline */}
        <div className="preloader-tagline">
          <span>AI-Native Engineering</span>
          <span className="separator">·</span>
          <span>Scalable Systems</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ 
            width: `${(currentLine / bootSequence.length) * 100}%`,
            transition: 'width 0.3s ease-out'
          }} 
        />
      </div>
    </div>
  );
};

export default PreLoader;
