
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Section from './ui/Section';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Hoe werkt het verzamelen van reviews met ReviewUp?',
    answer: 'ReviewUp automatiseert het verzenden van review-uitnodigingen via e-mail of SMS na een klantinteractie. U kunt deze uitnodigingen personaliseren en timing instellen die bij uw bedrijf past. Wanneer klanten een review achterlaten, wordt deze automatisch verzameld in uw ReviewUp-dashboard.',
  },
  {
    question: 'Van welke platforms kan ReviewUp reviews verzamelen?',
    answer: 'Afhankelijk van uw abonnement kan ReviewUp reviews verzamelen van Google, Facebook, Tripadvisor, Trustpilot, Yelp, en vele andere platforms. Ook kunt u rechtstreeks op uw website reviews verzamelen via onze eigen review-formulieren.',
  },
  {
    question: 'Kan ik met ReviewUp op reviews reageren?',
    answer: 'Ja, ReviewUp stelt u in staat om op reviews van alle aangesloten platforms te reageren vanuit één dashboard. U krijgt zelfs suggesties voor antwoorden op basis van de inhoud van de review, waardoor het beheren van uw online reputatie veel efficiënter wordt.',
  },
  {
    question: 'Hoe kan ik reviews op mijn website tonen?',
    answer: 'ReviewUp biedt verschillende aanpasbare widgets die u eenvoudig op uw website kunt integreren. Deze widgets kunnen uw beste reviews tonen, een algemene beoordeling weergeven, of zelfs een real-time feed van nieuwe reviews presenteren.',
  },
  {
    question: 'Biedt ReviewUp integraties met andere systemen?',
    answer: 'Ja, ReviewUp integreert met populaire CRM-systemen, e-commerce platforms, en boekingssystemen om het verzamelen van reviews volledig te automatiseren. We bieden ook een API voor aangepaste integraties.',
  },
  {
    question: 'Is er een gratis proefperiode beschikbaar?',
    answer: 'Ja, alle abonnementen komen met een gratis proefperiode van 14 dagen. U kunt alle functies uitproberen zonder verplichtingen en daarna beslissen of ReviewUp bij uw bedrijf past.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Veelgestelde vragen</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Antwoorden op de meest gestelde vragen over ReviewUp.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-5 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
              <div className="ml-2 flex-shrink-0 text-gray-500">
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>
            <div
              className={`mt-2 transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
