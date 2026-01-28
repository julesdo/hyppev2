"use client";

import { Highlight, themes } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  // Map common language aliases
  const languageMap: Record<string, string> = {
    ts: "typescript",
    js: "javascript",
    tsx: "tsx",
    jsx: "jsx",
    py: "python",
    sh: "bash",
    shell: "bash",
    yml: "yaml",
  };

  const normalizedLanguage = languageMap[language] || language || "typescript";

  return (
    <Highlight theme={themes.nightOwl} code={code.trim()} language={normalizedLanguage as any}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="group relative my-6 overflow-hidden rounded-xl">
          {/* Language badge */}
          <div className="flex items-center justify-between bg-[#1a1d24] px-4 py-2 border-b border-[#2a2d34]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#95979D]">
              {normalizedLanguage}
            </span>
            <button
              onClick={() => navigator.clipboard.writeText(code.trim())}
              className="text-xs text-[#95979D] hover:text-[#e4ded7] transition-colors opacity-0 group-hover:opacity-100"
            >
              Copy
            </button>
          </div>
          
          {/* Code content */}
          <pre
            className="overflow-x-auto p-4 text-sm leading-relaxed"
            style={{ ...style, margin: 0, background: "#0d1117" }}
          >
            <code className={className}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="table-row">
                  <span className="table-cell pr-4 text-right text-[#484f58] select-none w-8">
                    {i + 1}
                  </span>
                  <span className="table-cell">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      )}
    </Highlight>
  );
}
