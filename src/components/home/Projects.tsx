
import { useState } from "react";
import AnimatedText from "@/components/shared/AnimatedText";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const categories = ["All", "Branding", "Web Design", "Marketing", "Strategy"];

const projects = [
  {
    title: "E-Commerce Brand Refresh",
    category: "Branding",
    description: "Complete brand identity redesign for an established e-commerce platform.",
    image: "/lovable-uploads/0ded62d4-a577-4896-933a-46a149ee5d31.png"
  },
  {
    title: "SaaS Marketing Strategy",
    category: "Marketing",
    description: "Comprehensive marketing plan for a B2B SaaS startup targeting enterprise clients.",
    image: "/lovable-uploads/e7136e3c-633b-45e0-b580-039851cc864d.png"
  },
  {
    title: "Fintech Website Design",
    category: "Web Design",
    description: "Modern, conversion-focused website for an innovative fintech company.",
    image: "/lovable-uploads/88927b70-8a59-49cc-8c5d-eaa1e6f72d46.png"
  },
  {
    title: "Retail Growth Strategy",
    category: "Strategy",
    description: "Market expansion strategy for a retail brand entering new international markets.",
    image: "/lovable-uploads/6f47fe69-5e5e-4b96-a7da-b79583f05c06.png"
  }
];

const stats = [
  { value: "80+", label: "Brands Transformed" },
  { value: "50+", label: "Successful Projects" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "3+", label: "Years of Experience" }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
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
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
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
                <p className="text-muted-foreground mb-4">{project.description}</p>
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
