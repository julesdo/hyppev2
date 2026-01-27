import gsap from "gsap";

// Preloader exit animation
export const preLoaderAnim = () => {
  const tl = gsap.timeline();

  tl.to("body", {
    duration: 0.01,
    css: { overflowY: "scroll" },
    ease: "power3.inOut",
  })
    .to(".preloader-content", {
      duration: 0.4,
      opacity: 0,
      y: -20,
      ease: "power3.inOut",
    })
    .to(
      ".preloader",
      {
        duration: 0.5,
        height: "0vh",
        ease: "power3.inOut",
      },
      "-=0.2"
    )
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};
