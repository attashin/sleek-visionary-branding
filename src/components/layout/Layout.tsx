
import { useEffect } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  useEffect(() => {
    // Intersection Observer for animations
    const animateElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.observe(element);
      });

      return observer;
    };

    const observer = animateElements();

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className={cn("flex min-h-screen flex-col", className)}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
