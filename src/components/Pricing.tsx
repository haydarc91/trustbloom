
import React, { useState } from 'react';
import { Check, X, Sparkles, Zap } from 'lucide-react';
import Section from './ui/Section';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  stripeLink: string;
  aiFeatures?: boolean;
  customIntegrations?: boolean;
}

interface FeatureComparison {
  feature: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '€49',
    description: 'Perfect voor kleine bedrijven die net beginnen met het verzamelen van reviews.',
    features: [
      'Tot 100 review-uitnodigingen per maand',
      'Verzamel reviews van Google & Facebook',
      'Basis reviewwidgets voor uw website',
      'E-mail ondersteuning',
      'Maandelijkse rapportage',
    ],
    stripeLink: 'https://buy.stripe.com/3cs6sd661bXG9Ko5kk'
  },
  {
    name: 'Professional',
    price: '€99',
    description: 'Voor groeiende bedrijven die hun online reputatie serieus willen verbeteren.',
    features: [
      'Tot 500 review-uitnodigingen per maand',
      'Verzamel reviews van alle platforms',
      'Geavanceerde reviewwidgets',
      'Prioriteit e-mail & telefonische ondersteuning',
      'Wekelijkse rapportage',
      'AI review-antwoord suggesties',
      'Aangepaste branding',
      'Gratis maatwerk integraties',
    ],
    isPopular: true,
    stripeLink: 'https://buy.stripe.com/4gw2bX1PL7Hqf4IbIJ',
    aiFeatures: true,
    customIntegrations: true
  },
  {
    name: 'Enterprise',
    price: '€199',
    description: 'Voor grote organisaties met meerdere locaties en uitgebreide behoeften.',
    features: [
      'Onbeperkte review-uitnodigingen',
      'Alle platforms + speciale integraties',
      'Volledig aanpasbare reviewwidgets',
      'Toegewijd accountmanager',
      'Realtime rapportage & API-toegang',
      'Geavanceerde AI-review antwoorden',
      'Multi-locatie beheer',
      'White label oplossing',
      'Gratis maatwerk integraties',
    ],
    stripeLink: 'https://buy.stripe.com/4gwg2Namhf9S09O8wy',
    aiFeatures: true,
    customIntegrations: true
  },
];

const featureComparison: FeatureComparison[] = [
  { feature: 'Review uitnodigingen', starter: '100/maand', professional: '500/maand', enterprise: 'Onbeperkt' },
  { feature: 'Platforms', starter: 'Google & Facebook', professional: 'Alle platforms', enterprise: 'Alle + Speciale integraties' },
  { feature: 'Reviewwidgets', starter: 'Basis', professional: 'Geavanceerd', enterprise: 'Volledig aanpasbaar' },
  { feature: 'Ondersteuning', starter: 'E-mail', professional: 'E-mail & Telefoon', enterprise: 'Dedicated accountmanager' },
  { feature: 'Rapportage', starter: 'Maandelijks', professional: 'Wekelijks', enterprise: 'Realtime + API' },
  { feature: 'AI-review antwoorden', starter: false, professional: true, enterprise: 'Geavanceerd' },
  { feature: 'Aangepaste branding', starter: false, professional: true, enterprise: true },
  { feature: 'Multi-locatie beheer', starter: false, professional: false, enterprise: true },
  { feature: 'White label oplossing', starter: false, professional: false, enterprise: true },
  { feature: 'Maatwerk integraties', starter: false, professional: 'Inbegrepen', enterprise: 'Inbegrepen' },
  { 
    feature: 'Uniek reviewfilter systeem', 
    starter: 'Basis', 
    professional: 'Geavanceerd', 
    enterprise: 'Enterprise-grade' 
  },
];

const Pricing = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'comparison'>('cards');

  return (
    <Section id="pricing" className="bg-gradient-to-b from-blue-50 to-white py-24" hasPattern>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Eenvoudige, transparante tarieven</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Kies het abonnement dat het beste bij uw bedrijf past. Alle pakketten inclusief 30 dagen gratis uitproberen.
        </p>

        <div className="flex items-center justify-center mt-6">
          <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'cards' ? 'bg-brand-500 text-white' : 'bg-transparent text-gray-600'
              }`}
            >
              Pakketten
            </button>
            <button
              onClick={() => setViewMode('comparison')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'comparison' ? 'bg-brand-500 text-white' : 'bg-transparent text-gray-600'
              }`}
            >
              Vergelijking
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                plan.isPopular
                  ? 'shadow-xl border-2 border-brand-500 mt-0'
                  : 'shadow-card bg-white border border-gray-100'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 inset-x-0 text-center mt-4">
                  <Badge variant="default" className="px-6 py-1.5 bg-brand-500 text-white">
                    Meest gekozen
                  </Badge>
                </div>
              )}

              <div className={`p-8 ${plan.isPopular ? 'bg-gradient-to-br from-white to-brand-50 pt-16' : 'bg-white'}`}>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-6 h-12">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/maand</span>
                </div>

                {plan.aiFeatures && (
                  <div className="bg-brand-50 border border-brand-100 rounded-lg p-3 mb-6 flex items-center">
                    <Sparkles size={18} className="text-brand-500 mr-2" />
                    <span className="text-sm text-brand-700 font-medium">Inclusief AI review antwoorden</span>
                  </div>
                )}

                {plan.customIntegrations && (
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-6 flex items-center">
                    <Zap size={18} className="text-blue-500 mr-2" />
                    <span className="text-sm text-blue-700 font-medium">Inclusief maatwerk integraties</span>
                  </div>
                )}

                <a
                  href={plan.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-6 text-center rounded-lg font-medium transition-colors ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:opacity-90'
                      : 'bg-white border border-gray-200 text-brand-600 hover:bg-gray-50'
                  }`}
                >
                  {plan.isPopular ? 'Start nu gratis 30 dagen test' : 'Probeer 30 dagen gratis'}
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
      ) : (
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-4 divide-x divide-gray-100">
            {/* Headers */}
            <div className="p-6 bg-gray-50">
              <div className="h-16"></div> {/* Empty space for alignment */}
              <div className="font-bold text-gray-500 uppercase text-xs tracking-wider mt-8 mb-4">Functies</div>
            </div>
            
            {plans.map((plan, index) => (
              <div key={plan.name} className={`p-6 relative ${plan.isPopular ? 'bg-brand-50' : 'bg-white'}`}>
                {plan.isPopular && (
                  <div className="absolute top-0 inset-x-0 text-center">
                    <Badge variant="default" className="px-4 py-1 bg-brand-500 text-white transform -translate-y-1/2">
                      Meest gekozen
                    </Badge>
                  </div>
                )}
                <div className={`text-center ${plan.isPopular ? 'pt-4' : ''}`}>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="my-4">
                    <span className="text-3xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">/maand</span>
                  </div>
                  <a
                    href={plan.stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-2 px-4 text-center rounded-lg font-medium text-sm transition-colors ${
                      plan.isPopular
                        ? 'bg-brand-500 text-white hover:bg-brand-600'
                        : 'border border-gray-200 text-brand-600 hover:bg-gray-50'
                    }`}
                  >
                    Start 30 dagen gratis test
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Features comparison rows */}
          {featureComparison.map((item, rowIndex) => (
            <div key={rowIndex} className={`grid grid-cols-4 divide-x divide-gray-100 ${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="p-4 font-medium">{item.feature}</div>
              
              {/* Starter column */}
              <div className="p-4 text-center">
                {typeof item.starter === 'boolean' ? (
                  item.starter ? (
                    <Check size={20} className="mx-auto text-green-500" />
                  ) : (
                    <X size={20} className="mx-auto text-gray-300" />
                  )
                ) : (
                  <span>{item.starter}</span>
                )}
              </div>
              
              {/* Professional column */}
              <div className="p-4 text-center">
                {typeof item.professional === 'boolean' ? (
                  item.professional ? (
                    <Check size={20} className="mx-auto text-green-500" />
                  ) : (
                    <X size={20} className="mx-auto text-gray-300" />
                  )
                ) : (
                  <span className="font-medium">{item.professional}</span>
                )}
              </div>
              
              {/* Enterprise column */}
              <div className="p-4 text-center">
                {typeof item.enterprise === 'boolean' ? (
                  item.enterprise ? (
                    <Check size={20} className="mx-auto text-green-500" />
                  ) : (
                    <X size={20} className="mx-auto text-gray-300" />
                  )
                ) : (
                  <span>{item.enterprise}</span>
                )}
              </div>
            </div>
          ))}
          
          {/* Bottom CTA section */}
          <div className="grid grid-cols-4 divide-x divide-gray-100 bg-gray-50 border-t border-gray-100">
            <div className="p-6">
              <p className="text-sm text-gray-500">
                Twijfelt u welk pakket het beste past bij uw situatie?
              </p>
            </div>
            <div className="p-4 flex items-center justify-center">
              <a
                href={plans[0].stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-lg bg-white border border-gray-200 text-brand-600 hover:bg-gray-50 font-medium text-sm"
              >
                Starter testen
              </a>
            </div>
            <div className="p-4 flex items-center justify-center bg-brand-50">
              <a
                href={plans[1].stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-lg bg-brand-500 text-white hover:bg-brand-600 font-medium text-sm"
              >
                Professional testen
              </a>
            </div>
            <div className="p-4 flex items-center justify-center">
              <a
                href={plans[2].stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-lg bg-white border border-gray-200 text-brand-600 hover:bg-gray-50 font-medium text-sm"
              >
                Enterprise testen
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="mt-16 bg-gradient-to-r from-brand-100 to-blue-100 p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold mb-3 text-gray-900">Begin direct met uw 30 dagen gratis test</h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Geen demo's nodig! Begin direct met een 30 dagen gratis test en ontdek zelf hoe onze klanten 
          <span className="font-bold text-brand-700"> gemiddeld 30% meer positieve reviews</span> krijgen dan bij andere platforms.
        </p>
        <a
          href={plans[1].stripeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block py-3 px-8 rounded-lg bg-gradient-to-r from-brand-600 to-brand-700 text-white hover:opacity-90 font-medium shadow-lg"
        >
          Start gratis 30 dagen test
        </a>
      </div>
    </Section>
  );
};

export default Pricing;
