
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedText from "@/components/shared/AnimatedText";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const categories = ["All", "Branding", "Web Design", "Marketing", "Strategy"];

const projects = [
  {
    title: "E-Commerce Brand Refresh",
    category: "Branding",
    description: "Complete brand identity redesign for an established e-commerce platform.",
    image: "/lovable-uploads/0ded62d4-a577-4896-933a-46a149ee5d31.png",
    year: "2023"
  },
  {
    title: "SaaS Marketing Strategy",
    category: "Marketing",
    description: "Comprehensive marketing plan for a B2B SaaS startup targeting enterprise clients.",
    image: "/lovable-uploads/e7136e3c-633b-45e0-b580-039851cc864d.png",
    year: "2023"
  },
  {
    title: "Fintech Website Design",
    category: "Web Design",
    description: "Modern, conversion-focused website for an innovative fintech company.",
    image: "/lovable-uploads/88927b70-8a59-49cc-8c5d-eaa1e6f72d46.png",
    year: "2022"
  },
  {
    title: "Retail Growth Strategy",
    category: "Strategy",
    description: "Market expansion strategy for a retail brand entering new international markets.",
    image: "/lovable-uploads/6f47fe69-5e5e-4b96-a7da-b79583f05c06.png",
    year: "2022"
  },
  {
    title: "Fashion Brand Identity",
    category: "Branding",
    description: "Complete brand identity for a new sustainable fashion brand entering the market.",
    image: "/lovable-uploads/c1c8a93e-1744-4eba-a12c-f4445920864a.png",
    year: "2023"
  },
  {
    title: "Tech Startup Website",
    category: "Web Design",
    description: "Cutting-edge website design with focus on user experience and conversion.",
    image: "/lovable-uploads/562387ec-49aa-4fdd-8348-18128edd4b7f.png",
    year: "2021"
  },
  {
    title: "Healthcare Marketing Campaign",
    category: "Marketing",
    description: "Integrated digital marketing campaign for a healthcare provider expanding services.",
    image: "/lovable-uploads/0f7f41db-658f-4634-ab11-54e8170cf4f0.png",
    year: "2022"
  },
  {
    title: "Food Delivery App Strategy",
    category: "Strategy",
    description: "Go-to-market strategy for a new food delivery application in a competitive market.",
    image: "/lovable-uploads/d50f74e0-d14b-423d-8747-dfcf3fec72d2.png",
    year: "2023"
  }
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full",
                  activeCategory === category 
                    ? "" 
                    : "text-muted-foreground"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
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
                  <p className="text-muted-foreground">{project.description}</p>
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
