import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CloseLoop from "@/components/CloseLoop";
import Testimonials from "@/components/Testimonials";
import ScrollText from "@/components/ScrollText";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CloseLoop />
        <Testimonials />
        <ScrollText />
        <Features />
        <Integrations />
        <FooterCTA />
      </main>
      <Footer />
      <Effects />
    </>
  );
}
