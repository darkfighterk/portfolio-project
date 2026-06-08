import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Resume from "@/app/components/Resume";
import Work from "@/app/components/Work";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Resume />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
