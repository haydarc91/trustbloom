
import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Screenshots from '../components/Screenshots';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Section from '../components/ui/Section';
import Integrations from '../components/Integrations';

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        
        <Section color="default">
          <div className="py-8 md:py-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Ons <span className="text-brand-600 relative">unieke concept</span> helpt bedrijven hun online reputatie te verbeteren
              </h2>
              <p className="text-lg text-gray-600">
                Ons reviewplatform zorgt voor gemiddeld 30% meer positieve reviews dan andere platforms. 
                Ontdek hoe wij uw online aanwezigheid kunnen transformeren.
              </p>
            </div>
          </div>
        </Section>
        
        <HowItWorks />
        <Benefits />
        <Integrations />
        <Testimonials />
        <Screenshots />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
