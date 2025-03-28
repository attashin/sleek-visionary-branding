
import { useState } from "react";
import AnimatedText from "@/components/shared/AnimatedText";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "MechaVerse - E-Commerce",
    category: "Web Design",
    description: "Premium mechanical keyboard products with responsive interface design.",
    image: "/lovable-uploads/f8d6d39d-69d5-452a-bebb-271636d6195e.png",
    url: "mechaversebd.com"
  },
  {
    title: "GrooveLand - Music Platform",
    category: "Branding",
    description: "Complete branding and website for a music career platform.",
    image: "/lovable-uploads/73f1de28-f063-49cf-9dae-c832ef7e2b97.png",
    url: "www.thegrooveland.com"
  },
  {
    title: "MintHost - Hosting Solution",
    category: "Web Design",
    description: "Fresh and reliable web hosting solution with modern UI design.",
    image: "/lovable-uploads/e3ba38f5-ab7c-4e36-a69a-41bd0d9373f5.png",
    url: "www.minthost.com.bd"
  },
  {
    title: "Dezzify - Branding Project",
    category: "Branding",
    description: "Minimalist branding with strong visual identity.",
    image: "/lovable-uploads/e9354491-771e-4254-8f0d-5ac4d4bc40b4.png",
    url: "dezzify.com"
  }
];

const stats = [
  { value: "80+", label: "Brands Transformed" },
  { value: "50+", label: "Successful Projects" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "3+", label: "Years of Experience" }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm leading-6 text-foreground ring-1 ring-border backdrop-blur neo-blur mb-6 animate-on-scroll">
            <span className="font-semibold">Projects & Achievements</span>
          </div>
          
          <AnimatedText
            tag="h2"
            text="Featured Work"
            className="text-3xl md:text-4xl font-display font-bold"
          />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-2">{project.description}</p>
                <p className="text-sm text-primary mb-4">{project.url}</p>
                <Button variant="ghost" className="p-0 h-auto text-primary" asChild>
                  <Link to="/projects">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="mt-24 bg-muted/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">
            Impact Metrics
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
