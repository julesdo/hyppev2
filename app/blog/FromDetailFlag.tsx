"use client";
import { useEffect } from "react";

const FromDetailFlag = () => {
  useEffect(() => {
    try {
      sessionStorage.setItem("hyppe_from_detail", "1");
    } catch {}
  }, []);
  return null;
};

export default FromDetailFlag;


