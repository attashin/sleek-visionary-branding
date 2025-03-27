
import { useState } from "react";
import AnimatedText from "@/components/shared/AnimatedText";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Rezwan Rafid",
    role: "CEO, TechNova",
    content: "Working with Tashin and his team has been transformative for our brand. Their strategic approach to digital marketing helped us increase our customer base by 40% in just three months.",
    image: "/lovable-uploads/d50f74e0-d14b-423d-8747-dfcf3fec72d2.png"
  },
  {
    name: "Nurun Nabi",
    role: "Founder, GrowthLabs",
    content: "Tashin has a remarkable ability to understand business needs and translate them into effective branding solutions. Their work on our website redesign exceeded our expectations.",
    image: "/lovable-uploads/e75be243-854e-48de-b137-95c2877d3f92.png"
  },
  {
    name: "Jahid Ahamed",
    role: "Marketing Director, FutureScale",
    content: "I've worked with many agencies, but Developito stands out for their professionalism and results-driven approach. They don't just deliver projects; they become partners in your success.",
    image: "/lovable-uploads/c1c8a93e-1744-4eba-a12c-f4445920864a.png"
  },
  {
    name: "Castaneda",
    role: "Startup Founder",
    content: "Tashin brought fresh perspectives to our branding challenges. Their team's creativity and technical expertise helped us establish a distinctive identity in a crowded market.",
    image: "/lovable-uploads/562387ec-49aa-4fdd-8348-18128edd4b7f.png"
  },
  {
    name: "Caven Harbid",
    role: "E-commerce Entrepreneur",
    content: "The attention to detail and strategic thinking that Tashin and his team bring to every project is impressive. They've helped us build a brand that truly resonates with our audience.",
    image: "/lovable-uploads/0f7f41db-658f-4634-ab11-54e8170cf4f0.png"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm leading-6 text-foreground ring-1 ring-border backdrop-blur neo-blur mb-6 animate-on-scroll">
            <span className="font-semibold">Client Reviews</span>
          </div>
          
          <AnimatedText
            tag="h2"
            text="What People Are Saying"
            className="text-3xl md:text-4xl font-display font-bold"
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out-expo" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.name}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-card rounded-2xl p-8 shadow-sm border">
                      <Quote className="h-8 w-8 text-primary/30 mb-4" />
                      <p className="text-lg mb-6">{testimonial.content}</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-primary/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handlePrev}
                className="rounded-full"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleNext}
                className="rounded-full"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
