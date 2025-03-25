
import React, { useEffect, useRef } from 'react';
import { CheckCircle, MessageSquare, Star, PieChart } from 'lucide-react';
import Section from './ui/Section';

const steps = [
  {
    id: 1,
    title: 'Verzamel reviews',
    description: 'Automatiseer het verzamelen van klantreviews met gepersonaliseerde uitnodigingen via e-mail en SMS.',
    icon: MessageSquare,
    color: 'bg-blue-50 text-blue-500',
  },
  {
    id: 2,
    title: 'Beheer & Reageer',
    description: 'Centraliseer al uw reviews op één plaats en reageer tijdig op klantfeedback vanuit één dashboard.',
    icon: Star,
    color: 'bg-yellow-50 text-yellow-500',
  },
  {
    id: 3,
    title: 'Analyseer & Verbeter',
    description: 'Krijg waardevolle inzichten uit klantfeedback en identificeer verbeterpunten voor uw bedrijf.',
    icon: PieChart,
    color: 'bg-green-50 text-green-500',
  },
  {
    id: 4,
    title: 'Toon uw reviews',
    description: 'Presenteer uw beste reviews op uw website met aanpasbare widgets om vertrouwen te wekken bij nieuwe klanten.',
    icon: CheckCircle,
    color: 'bg-purple-50 text-purple-500',
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('stagger-animation');
        }
      },
      {
        threshold: 0.1,
      }
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
    <Section id="how-it-works" hasPattern>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Hoe het werkt</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ons platform maakt het gemakkelijk om reviews te verzamelen, beheren en presenteren in vier eenvoudige stappen.
        </p>
      </div>

      <div 
        ref={sectionRef} 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {steps.map((step) => (
          <div 
            key={step.id} 
            className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 opacity-0 animate-fade-in hover:shadow-medium transition-shadow duration-300"
          >
            <div className={`${step.color} h-14 w-14 rounded-full flex items-center justify-center mb-6`}>
              <step.icon size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              <span className="text-brand-600 mr-2">{step.id}.</span>
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HowItWorks;
