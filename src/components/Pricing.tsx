
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import Section from './ui/Section';
import { Badge } from './ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface PricingPlan {
  name: string;
  price: { monthly: string; yearly: string };
  description: string;
  features: string[];
  isPopular?: boolean;
  stripeLink: string;
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
    price: { monthly: '€49', yearly: '€39' },
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
    stripeLink: 'https://buy.stripe.com/4gw2bX1PL7Hqf4IbIJ'
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
    stripeLink: 'https://buy.stripe.com/4gwg2Namhf9S09O8wy'
  },
];

const featureComparison: FeatureComparison[] = [
  { feature: 'Review uitnodigingen', starter: '100/maand', professional: '500/maand', enterprise: 'Onbeperkt' },
  { feature: 'Platforms', starter: 'Google & Facebook', professional: 'Alle platforms', enterprise: 'Alle + Speciale integraties' },
  { feature: 'Reviewwidgets', starter: 'Basis', professional: 'Geavanceerd', enterprise: 'Volledig aanpasbaar' },
  { feature: 'Ondersteuning', starter: 'E-mail', professional: 'E-mail & Telefoon', enterprise: 'Dedicated accountmanager' },
  { feature: 'Rapportage', starter: 'Maandelijks', professional: 'Wekelijks', enterprise: 'Realtime + API' },
  { feature: 'Antwoord suggesties', starter: false, professional: true, enterprise: 'AI-powered' },
  { feature: 'Aangepaste branding', starter: false, professional: true, enterprise: true },
  { feature: 'Multi-locatie beheer', starter: false, professional: false, enterprise: true },
  { feature: 'White label oplossing', starter: false, professional: false, enterprise: true },
  { 
    feature: 'Uniek reviewfilter systeem', 
    starter: 'Basis', 
    professional: 'Geavanceerd', 
    enterprise: 'Enterprise-grade' 
  },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  return (
    <Section id="pricing" className="bg-gradient-to-b from-blue-50 to-white py-24" hasPattern>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Eenvoudige, transparante tarieven</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Kies het abonnement dat het beste bij uw bedrijf past. Altijd 30 dagen gratis proberen.
        </p>

        <div className="flex items-center justify-center mt-8">
          <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                !annual ? 'bg-brand-500 text-white' : 'bg-transparent text-gray-600'
              }`}
            >
              Maandelijks
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                annual ? 'bg-brand-500 text-white' : 'bg-transparent text-gray-600'
              }`}
            >
              Jaarlijks <span className="text-xs opacity-80">20% korting</span>
            </button>
          </div>
        </div>

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
              onClick={() => setViewMode('table')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'table' ? 'bg-brand-500 text-white' : 'bg-transparent text-gray-600'
              }`}
            >
              Vergelijking
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                plan.isPopular
                  ? 'shadow-xl border-2 border-brand-500 relative mt-6'
                  : 'shadow-card bg-white border border-gray-100'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 inset-x-0 text-center transform -translate-y-1/2">
                  <Badge variant="default" className="px-6 py-1.5 bg-brand-500 text-white">
                    Meest gekozen
                  </Badge>
                </div>
              )}

              <div className={`p-8 ${plan.isPopular ? 'bg-gradient-to-br from-white to-brand-50 pt-12' : 'bg-white'}`}>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-6 h-12">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {annual ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-gray-600 ml-2">/maand</span>
                </div>

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
                  {plan.isPopular ? 'Begin uw 30 dagen proefperiode' : 'Probeer 30 dagen gratis'}
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
        <div className="overflow-x-auto rounded-xl shadow-xl bg-white border border-gray-100 mt-10">
          <Table>
            <TableHeader>
              <TableRow className="bg-brand-50">
                <TableHead className="w-1/4 font-bold text-gray-900">Functie</TableHead>
                <TableHead className="text-center font-bold text-gray-900">Starter</TableHead>
                <TableHead className="text-center font-bold text-gray-900 bg-brand-100 relative">
                  <div className="absolute -top-10 inset-x-0 text-center">
                    <Badge variant="default" className="px-4 py-1 bg-brand-500 text-white">
                      Meest gekozen
                    </Badge>
                  </div>
                  Professional
                </TableHead>
                <TableHead className="text-center font-bold text-gray-900">Enterprise</TableHead>
              </TableRow>
              <TableRow className="border-b-2 border-gray-200">
                <TableHead className="w-1/4 font-bold text-gray-900">Prijs</TableHead>
                <TableHead className="text-center font-bold">
                  {annual ? plans[0].price.yearly : plans[0].price.monthly} <span className="text-sm font-normal text-gray-500">/maand</span>
                </TableHead>
                <TableHead className="text-center font-bold bg-brand-50 text-brand-800">
                  {annual ? plans[1].price.yearly : plans[1].price.monthly} <span className="text-sm font-normal text-gray-500">/maand</span>
                </TableHead>
                <TableHead className="text-center font-bold">
                  {annual ? plans[2].price.yearly : plans[2].price.monthly} <span className="text-sm font-normal text-gray-500">/maand</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {featureComparison.map((item, index) => (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <TableCell className="font-medium">{item.feature}</TableCell>
                  <TableCell className="text-center">
                    {typeof item.starter === 'boolean' ? (
                      item.starter ? (
                        <Check size={18} className="mx-auto text-green-500" />
                      ) : (
                        <X size={18} className="mx-auto text-gray-300" />
                      )
                    ) : (
                      <span>{item.starter}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center bg-brand-50">
                    {typeof item.professional === 'boolean' ? (
                      item.professional ? (
                        <Check size={18} className="mx-auto text-green-500" />
                      ) : (
                        <X size={18} className="mx-auto text-gray-300" />
                      )
                    ) : (
                      <span className="font-medium">{item.professional}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof item.enterprise === 'boolean' ? (
                      item.enterprise ? (
                        <Check size={18} className="mx-auto text-green-500" />
                      ) : (
                        <X size={18} className="mx-auto text-gray-300" />
                      )
                    ) : (
                      <span>{item.enterprise}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-brand-50">
                <TableCell colSpan={4} className="text-center py-4">
                  <div className="flex justify-center gap-4">
                    <a
                      href={plans[0].stripeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-6 rounded-lg bg-white border border-brand-500 text-brand-600 hover:bg-gray-50 font-medium"
                    >
                      Probeer 30 dagen gratis
                    </a>
                    <a
                      href="#contact"
                      className="py-2 px-6 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:opacity-90 font-medium"
                    >
                      Vraag een demo aan
                    </a>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}

      <div className="mt-16 bg-gradient-to-r from-brand-100 to-blue-100 p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold mb-3 text-gray-900">Ontdek ons unieke concept</h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Onze klanten zien gemiddeld <span className="font-bold text-brand-700">30% meer positieve reviews</span> dan bij andere platforms. 
          Wat is ons geheim? Vraag een demo aan en ontdek hoe wij zorgen voor een betere online reputatie.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block py-3 px-8 rounded-lg bg-gradient-to-r from-brand-600 to-brand-700 text-white hover:opacity-90 font-medium shadow-lg"
        >
          Ontdek ons geheim
        </a>
      </div>
    </Section>
  );
};

export default Pricing;
