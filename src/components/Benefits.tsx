
import React, { useEffect, useRef } from 'react';
import { Shield, TrendingUp, BarChart3, Globe, MessageSquare, Zap } from 'lucide-react';
import Section from './ui/Section';

const benefits = [
  {
    title: 'Verbeter uw online reputatie',
    description: 'Bouw een sterke online aanwezigheid met authentieke klantreviews die het vertrouwen in uw merk vergroten.',
    icon: Shield,
  },
  {
    title: 'Verhoog conversies',
    description: 'Klanten vertrouwen reviews. Meer positieve beoordelingen betekent hogere conversiepercentages en meer verkoop.',
    icon: TrendingUp,
  },
  {
    title: 'Waardevolle inzichten',
    description: 'Analyseer klantfeedback om patronen te identificeren en uw producten of diensten te verbeteren.',
    icon: BarChart3,
  },
  {
    title: 'Betere zoekresultaten',
    description: 'Positieve reviews en hogere ratings helpen uw bedrijf hoger te scoren in lokale zoekresultaten.',
    icon: Globe,
  },
  {
    title: 'Directe klantfeedback',
    description: 'Ontvang eerlijke feedback die u helpt precies te begrijpen wat klanten waarderen en wat beter kan.',
    icon: MessageSquare,
  },
  {
    title: 'Tijdbesparing',
    description: 'Automatiseer het verzamelen en beheren van reviews, zodat u zich kunt concentreren op uw kernactiviteiten.',
    icon: Zap,
  },
];

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('stagger-animation');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Section id="benefits">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Waarom ReviewUp?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ontdek hoe ons platform u kan helpen uw online reputatie te verbeteren en meer klanten aan te trekken.
        </p>
      </div>

      <div 
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-8 shadow-soft border border-gray-100 opacity-0 animate-fade-in hover:shadow-medium transition-all duration-300 hover:border-brand-200 hover:-translate-y-1"
          >
            <div className="bg-brand-50 h-12 w-12 rounded-full flex items-center justify-center mb-5 text-brand-600">
              <benefit.icon size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Benefits;
