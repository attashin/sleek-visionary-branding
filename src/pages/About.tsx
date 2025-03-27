
import Layout from "@/components/layout/Layout";
import AnimatedText from "@/components/shared/AnimatedText";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Layout>
      <section className="pt-32 md:pt-40 pb-16">
        <div className="container">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <AnimatedText
              tag="h1"
              text="About Tashin Khan"
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            />
            <p className="text-muted-foreground text-lg max-w-3xl animate-on-scroll">
              Passionate branding expert, agency owner, and digital entrepreneur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <div className="md:col-span-1">
              <div className="sticky top-32">
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 animate-on-scroll">
                  <img 
                    src="/lovable-uploads/093ab0ff-db87-4d9a-b892-0af913b4e222.png" 
                    alt="Tashin Khan" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-8">
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-display font-bold mb-4">My Story</h2>
                <p className="text-muted-foreground mb-4">
                  My name is Tashin Khan, and I'm 19 years old from Bangladesh. My journey into the world of digital branding and entrepreneurship began in 2019, when I was just 14 years old. What started as curiosity about websites and social media quickly developed into a passion for helping businesses establish their online presence.
                </p>
                <p className="text-muted-foreground mb-4">
                  By 16, I was taking on freelance projects, building websites and managing social media accounts for local businesses. I devoted countless hours to learning web development, design principles, and digital marketing strategies, constantly expanding my skill set to provide more comprehensive services to my clients.
                </p>
                <p className="text-muted-foreground">
                  In 2022, I founded Developito, an agency dedicated to providing holistic digital solutions for businesses looking to grow their brand and online presence. Today, we work with clients across various industries, helping them build powerful brand identities and implement effective growth strategies.
                </p>
              </div>
              
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-display font-bold mb-4">My Approach</h2>
                <p className="text-muted-foreground mb-4">
                  I believe that successful branding goes beyond just visual aesthetics—it's about crafting a cohesive identity that authentically represents a business's values and resonates with its target audience. My approach combines strategic thinking with creative execution, ensuring that every brand element serves a purpose in the overall business strategy.
                </p>
                <p className="text-muted-foreground">
                  I'm particularly passionate about helping entrepreneurs who are committed to their vision but may lack the technical expertise or time to build their brand effectively. By providing dedicated support and clear communication throughout the process, I ensure that my clients not only receive exceptional deliverables but also understand the strategic thinking behind them.
                </p>
              </div>
              
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-display font-bold mb-4">Vision for the Future</h2>
                <p className="text-muted-foreground mb-4">
                  As I continue to grow Developito, my vision is to expand our capabilities and reach, helping more businesses leverage the power of strategic branding and digital marketing to achieve their goals. I'm particularly interested in working with innovative startups and forward-thinking entrepreneurs who are disrupting traditional industries and creating meaningful change.
                </p>
                <p className="text-muted-foreground">
                  I'm committed to continuing my own education and staying at the forefront of digital trends and technologies. By constantly refining my skills and approach, I aim to provide increasingly valuable services to my clients and make a lasting impact in the field of digital branding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
