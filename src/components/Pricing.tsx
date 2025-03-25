
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Section from './ui/Section';
import Badge from './ui/Badge';

interface PricingPlan {
  name: string;
  price: { monthly: string; yearly: string };
  description: string;
  features: string[];
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: { monthly: '€49', yearly: '€39' },
    description: 'Perfect voor kleine bedrijven die net beginnen met het verzamelen van reviews.',
    features: [
      'Tot 100 review-uitnodigingen per maand',
      'Verzamel reviews van Google & Facebook',
      'Basis reviewwidgets voor uw website',
      'E-mail ondersteuning',
      'Maandelijkse rapportage',
    ],
  },
  {
    name: 'Professional',
    price: { monthly: '€99', yearly: '€79' },
    description: 'Voor groeiende bedrijven die hun online reputatie serieus willen verbeteren.',
    features: [
      'Tot 500 review-uitnodigingen per maand',
      'Verzamel reviews van alle platforms',
      'Geavanceerde reviewwidgets',
      'Prioriteit e-mail & telefonische ondersteuning',
      'Wekelijkse rapportage',
      'Review-antwoord suggesties',
      'Aangepaste branding',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: '€199', yearly: '€159' },
    description: 'Voor grote organisaties met meerdere locaties en uitgebreide behoeften.',
    features: [
      'Onbeperkte review-uitnodigingen',
      'Alle platforms + speciale integraties',
      'Volledig aanpasbare reviewwidgets',
      'Toegewijd accountmanager',
      'Realtime rapportage & API-toegang',
      'AI-review-antwoord suggesties',
      'Multi-locatie beheer',
      'White label oplossing',
    ],
  },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <Section id="pricing" hasPattern>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Eenvoudige, transparante tarieven</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Kies het abonnement dat het beste bij uw bedrijf past. Altijd 14 dagen gratis proberen.
        </p>

        <div className="flex items-center justify-center mt-8">
          <button
            onClick={() => setAnnual(false)}
            className={`px-4 py-2 rounded-l-lg font-medium transition-colors ${
              !annual ? 'bg-brand-600 text-white' : 'bg-white text-gray-600'
            }`}
          >
            Maandelijks
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-4 py-2 rounded-r-lg font-medium transition-colors ${
              annual ? 'bg-brand-600 text-white' : 'bg-white text-gray-600'
            }`}
          >
            Jaarlijks <span className="text-xs opacity-80">20% korting</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
              plan.isPopular
                ? 'shadow-xl border-2 border-brand-500 relative'
                : 'shadow-card bg-white border border-gray-100'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 inset-x-0 text-center transform -translate-y-1/2">
                <Badge variant="accent" className="px-6 py-1.5">
                  Meest gekozen
                </Badge>
              </div>
            )}

            <div className={`p-8 ${plan.isPopular ? 'bg-card-gradient pt-12' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
              <p className="text-gray-600 mb-6 h-12">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {annual ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-gray-600 ml-2">/maand</span>
              </div>

              <a
                href="#contact"
                className={`block w-full py-3 px-6 text-center rounded-lg font-medium transition-colors ${
                  plan.isPopular
                    ? 'bg-cta-gradient text-white hover:opacity-90'
                    : 'bg-white border border-gray-200 text-brand-600 hover:bg-gray-50'
                }`}
              >
                {plan.isPopular ? 'Begin uw gratis proefperiode' : 'Probeer gratis'}
              </a>
            </div>

            <div className="bg-white p-8 border-t border-gray-100">
              <p className="font-medium text-gray-900 mb-4">Inbegrepen functies:</p>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-brand-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Pricing;
