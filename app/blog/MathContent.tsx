"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import mermaid from "mermaid";
import CodeBlock from "./CodeBlock";

interface MathContentProps {
  html: string;
}

interface ContentPart {
  type: "html" | "code";
  content: string;
  language?: string;
}

// Initialize mermaid with dark theme
mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    primaryColor: "#FC5757",
    primaryTextColor: "#e4ded7",
    primaryBorderColor: "#FC5757",
    lineColor: "#95979D",
    secondaryColor: "#1a1d24",
    tertiaryColor: "#0E1016",
    background: "#0E1016",
    mainBkg: "#1a1d24",
    secondBkg: "#0E1016",
    border1: "#2a2d34",
    border2: "#FC5757",
    arrowheadColor: "#e4ded7",
    fontFamily: "inherit",
    fontSize: "16px",
    textColor: "#e4ded7",
    nodeTextColor: "#e4ded7",
  },
  flowchart: {
    htmlLabels: true,
    curve: "basis",
    padding: 20,
    nodeSpacing: 50,
    rankSpacing: 70,
  },
});

// Decode HTML entities
function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

export default function MathContent({ html }: MathContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const mermaidIdRef = useRef(0);

  // Process and split content into parts
  const contentParts = useMemo(() => {
    let processed = html;
    const parts: ContentPart[] = [];
    
    // Process block math ($$...$$)
    const blockMathRegex = /\$\$([\s\S]*?)\$\$/g;
    processed = processed.replace(blockMathRegex, (_, latex) => {
      try {
        return `<div class="math-block my-6 overflow-x-auto flex justify-center">${katex.renderToString(latex.trim(), {
          displayMode: true,
          throwOnError: false,
        })}</div>`;
      } catch {
        return `<div class="math-block my-6">${latex}</div>`;
      }
    });

    // Process inline math ($...$) - but not $$
    const inlineMathRegex = /(?<!\$)\$(?!\$)(.*?)(?<!\$)\$(?!\$)/g;
    processed = processed.replace(inlineMathRegex, (_, latex) => {
      try {
        return katex.renderToString(latex.trim(), {
          displayMode: false,
          throwOnError: false,
        });
      } catch {
        return latex;
      }
    });

    // Process mermaid code blocks - keep them as special HTML
    const mermaidPreRegex = /<pre><code class="language-mermaid">([\s\S]*?)<\/code><\/pre>/gi;
    processed = processed.replace(mermaidPreRegex, (_, code) => {
      const id = `mermaid-${Date.now()}-${mermaidIdRef.current++}`;
      const decodedCode = decodeHtmlEntities(code);
      return `<div class="mermaid-container my-8 flex justify-center overflow-x-auto rounded-xl bg-[#1a1d24] p-8"><pre class="mermaid" id="${id}" style="min-width: 100%; transform: scale(1.3); transform-origin: center;">${decodedCode}</pre></div>`;
    });

    // Split by code blocks (non-mermaid)
    const codeBlockRegex = /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/gi;
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(processed)) !== null) {
      // Add HTML before this code block
      if (match.index > lastIndex) {
        parts.push({
          type: "html",
          content: processed.slice(lastIndex, match.index),
        });
      }

      // Add the code block
      parts.push({
        type: "code",
        language: match[1],
        content: decodeHtmlEntities(match[2]),
      });

      lastIndex = match.index + match[0].length;
    }

    // Add remaining HTML
    if (lastIndex < processed.length) {
      parts.push({
        type: "html",
        content: processed.slice(lastIndex),
      });
    }

    return parts;
  }, [html]);

  // Render mermaid diagrams after content is set
  useEffect(() => {
    if (!contentRef.current) return;

    const renderMermaid = async () => {
      try {
        const mermaidElements = contentRef.current?.querySelectorAll(".mermaid");
        if (mermaidElements && mermaidElements.length > 0) {
          await mermaid.run({
            nodes: mermaidElements as NodeListOf<HTMLElement>,
          });
        }
      } catch (error) {
        console.error("Mermaid rendering error:", error);
      }
    };

    const timer = setTimeout(renderMermaid, 100);
    return () => clearTimeout(timer);
  }, [contentParts]);

  return (
    <div ref={contentRef}>
      {contentParts.map((part, index) => {
        if (part.type === "code") {
          return (
            <CodeBlock
              key={index}
              code={part.content}
              language={part.language || "typescript"}
            />
          );
        }
        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: part.content }}
          />
        );
      })}
    </div>
  );
}
