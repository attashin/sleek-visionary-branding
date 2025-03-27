
import { Link } from "react-router-dom";
import SocialLinks from "@/components/shared/SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-12 mt-24">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-lg font-display font-bold">Tashin Khan</h3>
          <p className="text-muted-foreground text-sm">
            Helping busy entrepreneurs build powerful business brands with dedicated support for scalable success.
          </p>
          <SocialLinks variant="minimal" className="mt-4" />
        </div>

        <div>
          <h4 className="font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-foreground text-sm">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-muted-foreground hover:text-foreground text-sm">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3">Services</h4>
          <ul className="space-y-2">
            <li className="text-muted-foreground text-sm">Branding Strategy</li>
            <li className="text-muted-foreground text-sm">SaaS Development</li>
            <li className="text-muted-foreground text-sm">Startup Growth</li>
            <li className="text-muted-foreground text-sm">Digital Marketing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3">Get In Touch</h4>
          <a 
            href="mailto:contact@tashinkhan.com" 
            className="text-muted-foreground hover:text-foreground text-sm block mb-2"
          >
            contact@tashinkhan.com
          </a>
          <p className="text-muted-foreground text-sm">Bangladesh</p>
        </div>
      </div>
      
      <div className="container mt-12 pt-6 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Tashin Khan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
