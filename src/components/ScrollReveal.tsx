"use client";

import { useEffect, useRef, useState, CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  scale?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  scale = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (visible) return scale ? "translateY(0px) scale(1)" : "translateY(0px)";
    const move = {
      up: "translateY(32px)",
      left: "translateX(-32px)",
      right: "translateX(32px)",
      none: "translateY(0px)",
    }[direction];
    return scale ? `${move} scale(0.97)` : move;
  };

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
