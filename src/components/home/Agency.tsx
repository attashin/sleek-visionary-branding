
import AnimatedText from "@/components/shared/AnimatedText";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Code, 
  BarChart, 
  Target, 
  Lightbulb, 
  Rocket, 
  ExternalLink 
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Brand Strategy",
    description: "Comprehensive brand positioning, messaging, and identity design to establish market presence."
  },
  {
    icon: Code,
    title: "SaaS Development",
    description: "Custom software solutions tailored to specific business needs and growth objectives."
  },
  {
    icon: BarChart,
    title: "Growth Marketing",
    description: "Data-driven marketing approaches to drive customer acquisition and retention."
  },
  {
    icon: Target,
    title: "Market Research",
    description: "In-depth analysis of markets, competitors, and customer behaviors to inform strategy."
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description: "Helping businesses identify and implement innovative solutions for complex challenges."
  },
  {
    icon: Rocket,
    title: "Startup Acceleration",
    description: "Specialized support for early-stage companies looking to scale rapidly and efficiently."
  }
];

export default function Agency() {
  return (
    <section id="agency" className="section-padding">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm leading-6 text-foreground ring-1 ring-border backdrop-blur neo-blur mb-6 animate-on-scroll">
              <span className="font-semibold">Agency & Companies</span>
            </div>
            
            <AnimatedText
              tag="h2"
              text="Building Digital Excellence Through Developito"
              className="text-3xl md:text-4xl font-display font-bold mb-6"
            />
            
            <p className="text-muted-foreground mb-8 animate-on-scroll">
              Developito is a forward-thinking digital agency specializing in brand development, digital marketing, and technology solutions for ambitious businesses. We partner with Minthost to deliver comprehensive hosting and infrastructure services.
            </p>
            
            <Button variant="outline" className="mb-6 animate-on-scroll">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Developito
            </Button>
            
            <div className="flex items-center gap-4 mt-8 animate-on-scroll">
              <div className="flex -space-x-4">
                <img 
                  src="/lovable-uploads/e7136e3c-633b-45e0-b580-039851cc864d.png" 
                  alt="Team member" 
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
                <img 
                  src="/lovable-uploads/37b9cfba-0631-468f-8d9e-cf46f695f953.png" 
                  alt="Team member" 
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
                <img 
                  src="/lovable-uploads/51acaa69-51af-4146-a333-01f5d1fe083b.png" 
                  alt="Team member" 
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
              </div>
              <span className="text-sm text-muted-foreground">Growing team of digital experts</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-square rounded-2xl overflow-hidden animate-on-scroll">
              <img 
                src="/lovable-uploads/88927b70-8a59-49cc-8c5d-eaa1e6f72d46.png" 
                alt="Agency office" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden mt-12 animate-on-scroll">
              <img 
                src="/lovable-uploads/6f47fe69-5e5e-4b96-a7da-b79583f05c06.png" 
                alt="Team collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <div className="text-center mb-16">
            <AnimatedText
              tag="h2"
              text="Our Expertise"
              className="text-3xl md:text-4xl font-display font-bold mb-4"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              We provide comprehensive services to help businesses establish strong brand identities and achieve sustainable growth in competitive markets.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-md transition-all animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
