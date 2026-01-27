import Image from "next/image";
import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "FROM PRODUCT DESIGN TO AI-NATIVE ENGINEERING."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-12">
          {/* Portrait Image */}
          <div className="relative mb-10 flex w-full shrink-0 items-start justify-center lg:mb-0 lg:w-[280px]">
            <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl">
              <Image
                src="/jules.jpg"
                alt="Jules - Product Engineer"
                fill
                className="object-cover object-top grayscale transition-all duration-500 hover:grayscale-0"
                sizes="(max-width: 1024px) 280px, 280px"
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E1016]/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Main Text Content */}
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:flex-1 lg:text-[24px]">
            <AnimatedBody
              text={
                "Mon parcours a commencé par le Product Design chez Groupe Coyote (Ubiwan). Face aux exigences de l'industrie, j'ai vite compris qu'une bonne spécification ne vaut rien sans une exécution technique parfaite."
              }
            />
            <AnimatedBody
              text={
                "J'ai donc opéré un pivot radical vers l'ingénierie."
              }
              className="text-[#e4ded7]/60 italic"
            />
            <AnimatedBody
              text={
                "Aujourd'hui, je suis 100% Product Engineer. Je ne dessine plus, je construis. Je conçois des architectures Next.js 16 et des backends NestJS pensés pour la maintenabilité et la scalabilité à long terme."
              }
            />
            <AnimatedBody
              text={
                "Mon passé de designer reste un atout stratégique : il me permet de comprendre vos enjeux business instantanément, mais ma réponse sera toujours technique : du code propre, typé (TypeScript), testé, et une infrastructure conçue pour durer."
              }
            />
          </div>

          {/* Skills Section */}
          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:w-[240px] lg:shrink-0 lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Engineering"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Next.js 16, React Server Components, TypeScript 7, Tailwind, Framer Motion."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Backend & Data"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "NestJS, PostgreSQL, Vector Databases (Pinecone), Convex, Redis."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"AI Ops & Automation"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "LLM Orchestration, RAG Pipelines, n8n, Firecrawl, Docker."
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="TRUSTED BY"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
