
import { cn } from "@/lib/utils";
import AnimatedText from "@/components/shared/AnimatedText";

const timelineItems = [
  {
    year: "2019",
    title: "Digital Journey Begins",
    description: "Started exploring digital marketing, SEO, and web development fundamentals."
  },
  {
    year: "2020",
    title: "First Freelance Projects",
    description: "Took on initial client work, building websites and managing social media accounts."
  },
  {
    year: "2021",
    title: "Skill Development",
    description: "Focused on expanding capabilities in branding, UI/UX design, and marketing strategy."
  },
  {
    year: "2022",
    title: "Founding Developito",
    description: "Launched my agency to provide comprehensive digital services to businesses."
  },
  {
    year: "2023",
    title: "Team Expansion",
    description: "Grew the agency with talented professionals to handle increasing client demand."
  },
  {
    year: "2024",
    title: "Strategic Partnerships",
    description: "Formed key alliances with other agencies and platforms to enhance service offerings."
  }
];

export default function Timeline() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm leading-6 text-foreground ring-1 ring-border backdrop-blur neo-blur mb-6 animate-on-scroll">
            <span className="font-semibold">My Journey</span>
          </div>
          
          <AnimatedText
            tag="h2"
            text="Growth Timeline"
            className="text-3xl md:text-4xl font-display font-bold"
          />
        </div>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-[7px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-border" />
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={item.year} 
                className={cn(
                  "relative grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 items-start",
                  index % 2 === 0 ? "md:text-right" : ""
                )}
              >
                {/* Timeline bullet */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background z-10" />
                
                {/* Year */}
                <div 
                  className={cn(
                    "text-5xl font-display font-bold text-primary/10 animate-on-scroll",
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  )}
                >
                  {item.year}
                </div>
                
                {/* Content */}
                <div 
                  className={cn(
                    "pl-10 md:pl-0 animate-on-scroll",
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  )}
                >
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
