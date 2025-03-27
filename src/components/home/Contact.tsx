
import { useState } from "react";
import AnimatedText from "@/components/shared/AnimatedText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import SocialLinks from "@/components/shared/SocialLinks";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm leading-6 text-foreground ring-1 ring-border backdrop-blur neo-blur mb-6 animate-on-scroll">
            <span className="font-semibold">Get In Touch</span>
          </div>
          
          <AnimatedText
            tag="h2"
            text="Let's Work Together"
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          />
          
          <p className="text-muted-foreground animate-on-scroll">
            Ready to transform your brand or have questions about our services? Reach out using the form below, and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card rounded-2xl p-8 border animate-on-scroll">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Message Received!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button 
                  className="mt-8"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="What's this about?" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message..." 
                      rows={6} 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
          
          <div className="space-y-8 animate-on-scroll">
            <div>
              <h3 className="text-xl font-medium mb-4">
                Connect Directly
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <a href="mailto:contact@tashinkhan.com" className="hover:text-primary">
                    contact@tashinkhan.com
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">
                Follow Me
              </h3>
              <SocialLinks />
              <p className="text-muted-foreground mt-4">
                Connect with me on social media for updates, insights, and more.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-muted/30 border mt-8">
              <h3 className="text-xl font-medium mb-4">
                Agency Information
              </h3>
              <p className="text-muted-foreground">
                <strong>Developito</strong><br />
                Bangladesh<br />
                <a href="https://developito.com" className="text-primary hover:underline">
                  www.developito.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
