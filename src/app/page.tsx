import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Cta from '@/components/Cta';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-16">
        <About />
      </section>
      <section id="services" className="scroll-mt-16">
        <Services />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
    </main>
  );
}