
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-background/80 backdrop-blur-lg border-b" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-display font-bold tracking-tight"
          onClick={closeMenu}
        >
          Tashin Khan
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={cn(
                    "relative py-1.5 font-medium text-sm transition-colors hover:text-foreground",
                    location.pathname === link.path
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <Button asChild className="ml-4">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden gap-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="fixed inset-0 top-[73px] z-50 bg-background animate-fade-in">
            <nav className="container flex flex-col py-8">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={cn(
                        "block py-3 text-lg font-medium border-b border-border transition-colors",
                        location.pathname === link.path
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6">
                <Link to="/contact" onClick={closeMenu}>
                  Get in Touch
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
