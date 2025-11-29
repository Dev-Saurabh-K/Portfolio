"use client";
import { useState, useEffect } from "react";

export default function FadeChanger() {
  const items = ["Saurabh", "Developer", "Cloud Engineer"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setIndex(prev => (prev + 1) % items.length);
        setFade(false);
      }, 500); // match CSS animation time
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <h1 className={fade ? "opacity-0 transition-all duration-500" : "opacity-100 transition-all duration-500"}>
      {items[index]}
    </h1>
  );
}
