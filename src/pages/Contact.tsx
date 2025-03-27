
import Layout from "@/components/layout/Layout";
import AnimatedText from "@/components/shared/AnimatedText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SocialLinks from "@/components/shared/SocialLinks";

const ContactPage = () => {
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
              text="Get In Touch"
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            />
            <p className="text-muted-foreground text-lg max-w-3xl animate-on-scroll">
              Have a project in mind or want to learn more about my services? I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 mt-12">
            <div className="md:col-span-3 bg-card rounded-2xl p-8 border animate-on-scroll">
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
                        rows={8} 
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
            
            <div className="md:col-span-2 space-y-8 animate-on-scroll">
              <div>
                <h3 className="text-xl font-medium mb-4">
                  Contact Information
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
                  Connect on Social Media
                </h3>
                <SocialLinks />
                <p className="text-muted-foreground mt-4">
                  Feel free to connect with me on social platforms for updates, insights, and more.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-muted/30 border mt-8">
                <h3 className="text-xl font-medium mb-4">
                  Business Hours
                </h3>
                <p className="text-muted-foreground">
                  <strong>Monday - Friday:</strong> 9 AM - 6 PM (GMT+6)<br />
                  <strong>Saturday:</strong> 10 AM - 4 PM (GMT+6)<br />
                  <strong>Sunday:</strong> Closed
                </p>
                <p className="text-muted-foreground mt-4">
                  Response time: Within 24-48 hours on business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
