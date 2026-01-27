"use client";
import { motion } from "framer-motion";
import { monaSans } from "../fonts/monaSans";

const services = [
  {
    id: 1,
    title: "Architecture",
    subtitle: "Systèmes Scalables",
    descriptionHtml:
      "Je conçois des architectures modulaires et maintenables avec <strong>Next.js</strong>, <strong>NestJS</strong> et <strong>PostgreSQL</strong>. Domain-Driven Design, Clean Architecture, et patterns éprouvés pour des produits qui scalent.",
    features: ["Next.js 16 App Router", "NestJS / Node.js", "PostgreSQL / Redis", "Microservices"],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "AI Engineering",
    subtitle: "RAG & LLM Pipelines",
    descriptionHtml:
      "J'implémente des systèmes IA production-ready. <strong>RAG Pipelines</strong>, <strong>Semantic Search</strong> avec <strong>Pinecone</strong>, et orchestration de modèles pour des applications intelligentes.",
    features: ["Vector Search (Pinecone)", "OpenAI / Anthropic SDK", "RAG Pipelines", "Streaming Responses"],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Performance",
    subtitle: "Core Web Vitals 100/100",
    descriptionHtml:
      "J'optimise chaque milliseconde. <strong>SSR</strong>, <strong>ISR</strong>, <strong>Edge Functions</strong>, et stratégies de cache pour des expériences instantanées qui convertissent.",
    features: ["SSR / ISR / Edge", "Image Optimization", "Bundle Analysis", "Lighthouse 100/100"],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <section
      className="relative z-10 w-full bg-[#0E1016] py-20 md:py-28 lg:py-32"
      id="services"
    >
      <div className="mx-auto w-[90%] lg:max-w-[1200px]">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#e4ded7]/50 md:text-[14px]">
            Ce que je fais
          </p>
          <h2
            className={`text-[32px] font-bold text-[#e4ded7] sm:text-[40px] md:text-[48px] lg:text-[56px] ${monaSans.className}`}
          >
            Expertise Technique
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-3 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl border border-[#e4ded7]/10 bg-[#e4ded7]/[0.02] p-6 transition-all duration-500 hover:border-[#e4ded7]/20 hover:bg-[#e4ded7]/[0.05] md:p-8"
              variants={itemVariants}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex rounded-xl bg-[#e4ded7]/10 p-3 text-[#e4ded7]/70 transition-colors duration-300 group-hover:bg-[#e4ded7]/15 group-hover:text-[#e4ded7]">
                {service.icon}
              </div>

              {/* Title & Subtitle */}
              <h3 className="mb-1 text-[20px] font-bold text-[#e4ded7] md:text-[24px]">
                {service.title}
              </h3>
              <p className="mb-4 text-[14px] font-medium text-[#FC5757]">
                {service.subtitle}
              </p>

              {/* Description */}
              <p 
                className="mb-6 text-[14px] leading-relaxed text-[#e4ded7]/60 md:text-[15px] [&>strong]:font-semibold [&>strong]:text-[#e4ded7]"
                dangerouslySetInnerHTML={{ __html: service.descriptionHtml }}
              />

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-[#e4ded7]/10 bg-[#e4ded7]/5 px-3 py-1 text-[11px] font-medium text-[#e4ded7]/50 md:text-[12px]"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Gradient */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FC5757]/10 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
