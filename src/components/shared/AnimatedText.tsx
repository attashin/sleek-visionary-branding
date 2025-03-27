
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
}

export default function AnimatedText({
  text,
  className,
  once = true,
  tag = "h1",
  delay = 0,
}: AnimatedTextProps) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animated");
              if (once) observer.unobserve(entry.target);
            }, delay);
          } else if (!once) {
            entry.target.classList.remove("animated");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [once, delay]);

  const TagName = tag;

  return (
    <TagName
      ref={elementRef}
      className={cn("animate-on-scroll", className)}
    >
      {text}
    </TagName>
  );
}
