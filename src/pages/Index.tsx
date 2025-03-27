
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Timeline from "@/components/home/Timeline";
import Agency from "@/components/home/Agency";
import Testimonials from "@/components/home/Testimonials";
import Projects from "@/components/home/Projects";
import Vision from "@/components/home/Vision";
import Contact from "@/components/home/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Timeline />
      <Agency />
      <Testimonials />
      <Projects />
      <Vision />
      <Contact />
    </Layout>
  );
};

export default Index;
