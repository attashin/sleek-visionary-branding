
import AnimatedText from "@/components/shared/AnimatedText";
import { Check, Cpu, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously explore new approaches and technologies to deliver cutting-edge solutions."
  },
  {
    icon: Heart,
    title: "Dedication",
    description: "We're committed to our clients' success, going beyond expectations to deliver exceptional results."
  },
  {
    icon: Cpu,
    title: "Expertise",
    description: "Our team brings specialized knowledge and experience across branding, marketing, and technology."
  }
];

export default function Vision() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm leading-6 text-foreground ring-1 ring-border backdrop-blur neo-blur mb-6 animate-on-scroll">
            <span className="font-semibold">Vision & Values</span>
          </div>
          
          <AnimatedText
            tag="h2"
            text="Building Brands That Stand The Test of Time"
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          />
          
          <p className="text-muted-foreground animate-on-scroll">
            Our mission is to help entrepreneurs and businesses build powerful, distinctive brands that connect authentically with their audiences and drive sustainable growth in an ever-evolving digital landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="p-6 rounded-2xl border border-border hover:shadow-md transition-all animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 bg-card rounded-2xl p-8 md:p-12 border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 animate-on-scroll">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Specialized Expertise</h4>
                    <p className="text-muted-foreground text-sm">
                      We bring deep domain knowledge in branding, digital marketing, and SaaS development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 animate-on-scroll">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Results-Driven Approach</h4>
                    <p className="text-muted-foreground text-sm">
                      Our strategies are designed with clear metrics and outcomes in mind.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 animate-on-scroll">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Personalized Service</h4>
                    <p className="text-muted-foreground text-sm">
                      We take time to understand your unique business challenges and goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 animate-on-scroll">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Continuous Growth</h4>
                    <p className="text-muted-foreground text-sm">
                      We're constantly learning and evolving to stay ahead of industry trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <img 
                src="/lovable-uploads/c0d60098-0e41-476b-bb9d-b0fca7ea8b20.png" 
                alt="Tashin Khan at a conference" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
