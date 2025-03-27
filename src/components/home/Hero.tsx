
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedText from "@/components/shared/AnimatedText";
import SocialLinks from "@/components/shared/SocialLinks";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-28 md:pt-36 lg:pt-48 pb-16 overflow-hidden">
      <div className="container flex flex-col items-center text-center relative">
        <div className="w-20 h-20 absolute -top-10 -left-10 bg-primary/5 rounded-full blur-3xl" />
        <div className="w-40 h-40 absolute top-1/3 -right-20 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm leading-6 text-foreground ring-1 ring-border backdrop-blur neo-blur mb-6 animate-fade-in">
          <span className="font-semibold">Branding Expert</span>
          <span className="mx-2">·</span>
          <span className="font-medium text-muted-foreground">Agency Owner</span>
        </div>

        <AnimatedText
          tag="h1"
          text="Helping Busy Entrepreneurs Build Powerful Business Brands"
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold max-w-4xl heading-gradient leading-tight mb-6"
        />
        
        <AnimatedText
          tag="p"
          text="Dedicated Support for Scalable Success"
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl"
          delay={200}
        />

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 animate-fade-in">
          <Button asChild size="lg" className="rounded-full px-6">
            <Link to="/contact">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-6">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>

        <SocialLinks className="mt-6 animate-fade-in" />
        
        <div className="w-full max-w-4xl mt-16 p-2 rounded-lg border border-border backdrop-blur-sm neo-blur animate-fade-in">
          <img 
            src="/lovable-uploads/c0d60098-0e41-476b-bb9d-b0fca7ea8b20.png" 
            alt="Tashin Khan at a tech conference" 
            className="w-full h-auto rounded object-cover aspect-[16/9]"
          />
        </div>
      </div>
    </section>
  );
}
