
import React from 'react';
import { Check, ExternalLink, ChevronRight, PlusCircle } from 'lucide-react';
import Section from './ui/Section';
import { Card, CardContent } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';

// Featured integrations with their logos
const featuredIntegrations = [
  { 
    name: 'Google', 
    description: 'Beheer en reageer op Google Reviews',
    logo: '/lovable-uploads/4997aefa-60fb-44c1-8dde-15b6ea2a77f1.png',
    primary: true
  },
  { 
    name: 'Facebook', 
    description: 'Centraliseer Facebook beoordelingen',
    logo: '/lovable-uploads/58e73bf9-e52d-4c04-b76b-35859e4fe9a7.png',
    primary: true
  },
  { 
    name: 'Booking.com', 
    description: 'Importeer recensies van Booking.com',
    logo: '/lovable-uploads/da58b5b9-54e5-47eb-a236-6db5499ce5bd.png' 
  },
  { 
    name: 'Airbnb', 
    description: 'Verzamel Airbnb beoordelingen',
    logo: '/lovable-uploads/501cce64-445a-4c25-9719-cc3b9be46190.png' 
  },
  { 
    name: 'Google Play', 
    description: 'App beoordelingen centraliseren',
    logo: '/lovable-uploads/36346290-b342-4fba-9485-226f58453646.png' 
  },
  { 
    name: 'Google Shopping', 
    description: 'E-commerce reviews beheren',
    logo: '/lovable-uploads/b5cf953e-04af-4220-993d-80511550a5fa.png'
  },
  { 
    name: 'Trustpilot', 
    description: 'Trustpilot beoordelingen importeren',
    logo: '/lovable-uploads/3f81e3f8-b2f6-42a9-9573-4a14cbcea313.png' 
  },
  { 
    name: 'Etsy', 
    description: 'Etsy shop beoordelingen verzamelen',
    logo: '/lovable-uploads/cd3affd2-9800-4a1f-aba9-ecb602e1f9c2.png' 
  },
  { 
    name: 'Indeed', 
    description: 'Werkgeversrecensies importeren',
    logo: '/lovable-uploads/9eeee3e7-e6c0-4c2b-aebc-c48e78af48ab.png' 
  },
  { 
    name: 'Tripadvisor', 
    description: 'Reis- en restaurantrecensies beheren',
    logo: '/lovable-uploads/10d94c10-1b09-40c0-b4dc-b48d21af9af9.png' 
  },
];

// More available integrations - only names mentioned
const moreIntegrations = [
  'Agoda', 'Amazon', 'eBay', 'Hotels.com', 'OpenTable', 
  'Healthgrades', 'RateMDs', 'Zocdoc', 'BBB', 'Foursquare', 'Zillow', 
  'Expedia', 'Zomato', 'Capterra', 'VRBO', 'Angi', 'Glassdoor', 'HomeAdvisor', 
  'Houzz', 'Lawyers.com', 'Avvo', 'Thumbtack', 'CarGurus', 'DealerRater', 
  'FindLaw', 'Product Review', 'YellowPages'
];

const Integrations = () => {
  return (
    <Section id="integrations" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Integraties</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          Beheer beoordelingen van meer dan 35 verschillende platforms en verstuur geautomatiseerd reviewverzoeken.
          Verbind direct met Google en Facebook of importeer beoordelingen van andere platforms.
        </p>
      </div>

      {/* Primaire integraties met login */}
      <div className="mb-16 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Rechtstreekse verbinding</h3>
          <p className="text-gray-600 mb-8">
            Login met uw Google en Facebook accounts om direct recensies te beheren en erop te reageren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredIntegrations
            .filter(integration => integration.primary)
            .map((integration) => (
              <Card key={integration.name} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-gray-100">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-5">
                      <img 
                        src={integration.logo} 
                        alt={`${integration.name} logo`} 
                        className="w-16 h-16 object-contain rounded-lg" 
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{integration.name}</h4>
                      <p className="text-gray-600">{integration.description}</p>
                    </div>
                  </div>
                  <button className="flex items-center justify-center text-white bg-brand-600 hover:bg-brand-700 h-10 w-10 rounded-full transition-all">
                    <ExternalLink size={18} />
                  </button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* Overige populaire integraties */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Populaire platformen</h3>
          <p className="text-gray-600">
            Voor onderstaande platforms kunt u eenvoudig uw pagina-URL invoeren om reviews te importeren. 
            Bekijk een selectie van onze meest gebruikte integraties:
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {featuredIntegrations
            .filter(integration => !integration.primary)
            .map((integration) => (
              <div 
                key={integration.name} 
                className="bg-white rounded-xl border border-gray-200 hover:border-brand-300 transition-all duration-200 p-5 flex flex-col"
              >
                <div className="flex items-center mb-3">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center mr-3 overflow-hidden bg-white">
                    <img 
                      src={integration.logo} 
                      alt={`${integration.name} logo`} 
                      className="w-12 h-12 object-contain" 
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium text-gray-900">{integration.name}</h4>
                  </div>
                  <div className="ml-auto">
                    <Checkbox id={`integration-${integration.name}`} />
                  </div>
                </div>
                <p className="text-sm text-gray-600">{integration.description}</p>
              </div>
            ))}
        </div>

        {/* Custom Integration Section */}
        <div className="bg-gradient-to-r from-brand-50 to-blue-50 p-8 rounded-xl border border-brand-100 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center">
                <PlusCircle className="mr-2 text-brand-600" size={24} />
                Aangepaste integraties op maat
              </h3>
              <p className="text-gray-700 max-w-2xl">
                Geen van bovenstaande platforms? Geen probleem! Wij ontwikkelen ook maatwerk koppelingen 
                voor uw specifieke behoeften. Onze technisch specialisten kunnen vrijwel elk reviewplatform 
                of CRM-systeem verbinden met ons platform.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button variant="default" className="bg-brand-600 hover:bg-brand-700 text-white px-6">
                Informeer naar maatwerk
              </Button>
            </div>
          </div>
        </div>

        {/* "Meer integraties" sectie */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">En nog 20+ andere platformen</h3>
            <button className="flex items-center text-brand-600 hover:text-brand-700 font-medium">
              Bekijk alle integraties <ChevronRight size={18} className="ml-1" />
            </button>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {moreIntegrations.slice(0, 12).map((name) => (
                <div key={name} className="text-sm text-gray-700 flex items-center">
                  <Check size={14} className="text-brand-500 mr-1 flex-shrink-0" /> 
                  <span>{name}</span>
                </div>
              ))}
              <div className="text-sm text-gray-700 flex items-center">
                <span className="text-brand-600 font-medium">En meer...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Refactored review management section with better styling */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Uniek concept voor betere reviews</h3>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-center text-gray-600">
          Ons platform zorgt voor gemiddeld 30% meer positieve reviews dan andere platformen dankzij ons unieke concept.
          Ontdek hoe wij dit mogelijk maken!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <Card className="p-8 bg-gradient-to-br from-brand-50 to-blue-50 border-brand-100 shadow-md hover:shadow-lg transition-all">
            <h4 className="text-xl font-bold text-brand-700 flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              Geavanceerde review-management
            </h4>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 flex items-start shadow-sm">
                <div className="flex-shrink-0 bg-green-500 text-white rounded-full p-1 mr-3 mt-0.5">
                  <Check size={16} />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-1">Geautomatiseerde review-uitnodigingen</h5>
                  <p className="text-gray-600 text-sm">Verstuur automatisch uitnodigingen op het optimale moment</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 flex items-start shadow-sm">
                <div className="flex-shrink-0 bg-blue-500 text-white rounded-full p-1 mr-3 mt-0.5">
                  <Check size={16} />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-1">Multi-locatie ondersteuning</h5>
                  <p className="text-gray-600 text-sm">Beheer reviews voor meerdere locaties vanaf één dashboard</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 flex items-start shadow-sm">
                <div className="flex-shrink-0 bg-purple-500 text-white rounded-full p-1 mr-3 mt-0.5">
                  <Check size={16} />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-1">Intelligent review-systeem</h5>
                  <p className="text-gray-600 text-sm">Filtert ontevreden klanten voordat ze een publieke review plaatsen</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 flex items-start shadow-sm">
                <div className="flex-shrink-0 bg-pink-500 text-white rounded-full p-1 mr-3 mt-0.5">
                  <Check size={16} />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-1">SMS en e-mail uitnodigingen</h5>
                  <p className="text-gray-600 text-sm">Bereik klanten via hun voorkeurskanaal voor hogere conversie</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-blue-50 to-brand-50 border-blue-100 shadow-md hover:shadow-lg transition-all flex flex-col">
            <h4 className="text-xl font-bold text-brand-700 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
              Klantervaring
            </h4>
            
            <div className="flex-grow flex flex-col justify-between">
              <div className="p-6 bg-white rounded-xl shadow-sm mb-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg mb-4 italic">
                  "Dankzij het unieke systeem van ReviewUp is onze online reputatie sterk verbeterd.
                  Ons Google-bedrijfsprofiel heeft nu een 4.8 gemiddelde, terwijl we voorheen 
                  op 3.6 zaten."
                </blockquote>
                <div className="flex items-center pt-4 border-t border-gray-100">
                  <div className="bg-brand-100 rounded-full w-12 h-12 flex items-center justify-center text-brand-700 font-bold text-xl mr-4">
                    JW
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Jan-Willem de Vries</p>
                    <p className="text-gray-500">Marketing Manager, TechSolutions BV</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900">Resultaten in cijfers</h5>
                      <p className="text-sm text-gray-600">Gemiddelde stijging per klant</p>
                    </div>
                  </div>
                  <div className="bg-brand-50 text-brand-600 font-semibold px-3 py-1 rounded-full text-sm">
                    +30%
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-gray-500 text-sm mb-1">Meer reviews</p>
                    <p className="text-gray-900 font-bold text-xl">+43%</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-gray-500 text-sm mb-1">Hogere rating</p>
                    <p className="text-gray-900 font-bold text-xl">+1.2★</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Integrations;
