
import AnimatedText from "@/components/shared/AnimatedText";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container">
        <div className="w-48 h-48 bg-primary/5 rounded-full blur-3xl absolute top-1/4 -left-24" />
        
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 order-2 md:order-1">
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/093ab0ff-db87-4d9a-b892-0af913b4e222.png" 
                  alt="Tashin Khan" 
                  className="w-full h-full object-cover animate-on-scroll"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg overflow-hidden border-4 border-background neo-blur animate-on-scroll">
                <img 
                  src="/lovable-uploads/dbb4db3d-9848-4de3-af74-b6cb9fc9f72d.png" 
                  alt="Tashin Khan working" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 order-1 md:order-2">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm leading-6 text-foreground ring-1 ring-border backdrop-blur neo-blur mb-6 animate-on-scroll">
              <span className="font-semibold">About Me</span>
            </div>
            
            <AnimatedText
              tag="h2"
              text="Young Entrepreneur from Bangladesh"
              className="text-3xl md:text-4xl font-display font-bold mb-6"
            />
            
            <div className="space-y-4 text-muted-foreground">
              <p className="animate-on-scroll">
                My name is Tashin Khan, and I'm 19 years old from Bangladesh. I run an agency called Developito, specializing in branding and marketing services for businesses looking to establish a strong online presence.
              </p>
              
              <p className="animate-on-scroll">
                I started my journey in 2019 by exploring various aspects of digital marketing and technology. Over the years, I've worked with dozens of clients, helping them transform their brands and achieve growth in competitive markets.
              </p>
              
              <p className="animate-on-scroll">
                My approach combines strategic thinking with practical execution, focusing on creating sustainable brand identities that resonate with target audiences and drive business results.
              </p>
            </div>
            
            <Button asChild variant="default" className="mt-8 rounded-full animate-on-scroll">
              <Link to="/about">
                Full Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
