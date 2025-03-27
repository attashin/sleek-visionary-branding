
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedText from "@/components/shared/AnimatedText";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "MechaVerse - E-Commerce",
    category: "Web Design",
    description: "Premium mechanical keyboard products with responsive interface design.",
    image: "/lovable-uploads/f8d6d39d-69d5-452a-bebb-271636d6195e.png",
    url: "mechaversebd.com",
    year: "2023"
  },
  {
    title: "GrooveLand - Music Platform",
    category: "Branding",
    description: "Complete branding and website for a music career platform.",
    image: "/lovable-uploads/73f1de28-f063-49cf-9dae-c832ef7e2b97.png",
    url: "www.thegrooveland.com",
    year: "2023"
  },
  {
    title: "MintHost - Hosting Solution",
    category: "Web Design",
    description: "Fresh and reliable web hosting solution with modern UI design.",
    image: "/lovable-uploads/e3ba38f5-ab7c-4e36-a69a-41bd0d9373f5.png",
    url: "www.minthost.com.bd",
    year: "2022"
  },
  {
    title: "Dezzify - Branding Project",
    category: "Branding",
    description: "Minimalist branding with strong visual identity.",
    image: "/lovable-uploads/e9354491-771e-4254-8f0d-5ac4d4bc40b4.png",
    url: "dezzify.com",
    year: "2022"
  },
  {
    title: "ZyroNodes - Game Hosting",
    category: "Web Design",
    description: "Reliable game hosting service with affordable pricing and modern design.",
    image: "/lovable-uploads/7554a428-e00e-40cf-a48f-1027864fe98d.png",
    url: "zyronodes.com",
    year: "2023"
  },
  {
    title: "TikKit - Clothing Brand",
    category: "Branding",
    description: "Photographer-designed clothing brand with minimalist aesthetic.",
    image: "/lovable-uploads/e7125e4d-544d-4e81-87d8-b1ea5589b7ca.png",
    url: "weartikkit.com",
    year: "2021"
  },
  {
    title: "BRHS - School Website",
    category: "Web Design",
    description: "Complete website redesign for Badda Residential High School.",
    image: "/lovable-uploads/eaf7c214-7881-4ce2-98a2-589776249e58.png",
    url: "brhs.info",
    year: "2022"
  },
  {
    title: "Social Apps HQ",
    category: "Marketing",
    description: "All-in-one marketing platform with comprehensive solutions.",
    image: "/lovable-uploads/3e1a6930-3f4d-419d-8d00-ff7b082e7880.png",
    url: "socialappshq.com",
    year: "2023"
  },
  {
    title: "Visual Marketing Australia",
    category: "Strategy",
    description: "Digital marketing strategy for Australian market.",
    image: "/lovable-uploads/95b730ec-9f9f-44c5-8c80-5603048b3777.png",
    url: "visualmarketing.com.au",
    year: "2023"
  },
  {
    title: "AVroHost - VPS Service",
    category: "Web Design",
    description: "VPS hosting service with modern and clean interface.",
    image: "/lovable-uploads/c70a0172-76ca-4e89-9392-8e43646608e5.png",
    url: "avrohost.com",
    year: "2022"
  }
];

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="pt-32 md:pt-40 pb-16">
        <div className="container">
          <div className="mb-12">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <AnimatedText
              tag="h1"
              text="Projects & Case Studies"
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            />
            <p className="text-muted-foreground text-lg max-w-3xl animate-on-scroll">
              Explore our portfolio of successful brand transformations and digital projects.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="group overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-md transition-all animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                    {project.year}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2">{project.description}</p>
                  <p className="text-sm text-primary">{project.url}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
