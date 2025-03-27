
import { cn } from "@/lib/utils";
import { Linkedin, Facebook, Instagram, Twitter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  variant?: "default" | "minimal" | "ghost";
}

export default function SocialLinks({ 
  className, 
  iconSize = 18,
  variant = "default"
}: SocialLinksProps) {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/attashin-khan/",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      url: "https://facebook.com/profile.php?id=61573450182823",
      icon: Facebook,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/attashinkhan/",
      icon: Instagram,
    },
    {
      name: "Twitter",
      url: "https://x.com/ImTashin",
      icon: Twitter,
    },
    {
      name: "Agency",
      url: "https://developito.com",
      icon: ExternalLink,
    },
  ];

  const buttonVariant = 
    variant === "minimal" 
      ? "ghost" 
      : variant === "ghost" 
        ? "ghost" 
        : "outline";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((social) => (
        <Button
          key={social.name}
          variant={buttonVariant}
          size="icon"
          asChild
          aria-label={social.name}
          className={cn(
            "rounded-full transition-all duration-300 hover:scale-110",
            variant === "minimal" && "w-8 h-8 bg-transparent hover:bg-background/50 border-none"
          )}
        >
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.icon size={iconSize} strokeWidth={variant === "minimal" ? 1.5 : 1.5} />
          </a>
        </Button>
      ))}
    </div>
  );
}
