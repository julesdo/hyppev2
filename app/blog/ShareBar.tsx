"use client";
import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type ShareBarProps = {
  title: string;
  url?: string;
  className?: string;
};

const ShareBar = ({ title, url, className }: ShareBarProps) => {
  const shareUrl = useMemo(() => {
    if (url) return url;
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "";
  }, [url]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch (_) {
      // ignore
    }
  };

  return (
    <div className={className ?? "flex items-center gap-3"}>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className="rounded-full bg-[#0E1016] p-3 text-white"
      >
        <FontAwesomeIcon icon={faTwitter} className="w-[16px]" />
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="rounded-full bg-[#0E1016] p-3 text-white"
      >
        <FontAwesomeIcon icon={faLinkedin} className="w-[16px]" />
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy link"
        className="rounded-full bg-[#0E1016] p-3 text-white"
      >
        <FontAwesomeIcon icon={faLink} className="w-[16px]" />
      </button>
    </div>
  );
};

export default ShareBar;


