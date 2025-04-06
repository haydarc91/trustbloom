
import React from 'react';
import { Grid, Check } from 'lucide-react';
import Section from './ui/Section';

const platforms = [
  { name: 'Google', category: 'Primary' },
  { name: 'Facebook', category: 'Primary' },
  { name: 'Trustpilot', category: 'Review' },
  { name: 'Tripadvisor', category: 'Travel' },
  { name: 'Booking.com', category: 'Travel' },
  { name: 'Airbnb', category: 'Travel' },
  { name: 'GooglePlay', category: 'Apps' },
  { name: 'AppStore', category: 'Apps' },
  { name: 'Agoda', category: 'Travel' },
  { name: 'Amazon', category: 'Ecommerce' },
  { name: 'eBay', category: 'Ecommerce' },
  { name: 'Hotels.com', category: 'Travel' },
  { name: 'OpenTable', category: 'Food' },
  { name: 'Healthgrades', category: 'Health' },
  { name: 'RateMDs', category: 'Health' },
  { name: 'Zocdoc', category: 'Health' },
  { name: 'BBB', category: 'Business' },
  { name: 'Foursquare', category: 'Local' },
  { name: 'Zillow', category: 'Real Estate' },
  { name: 'Etsy', category: 'Ecommerce' },
  { name: 'Expedia', category: 'Travel' },
  { name: 'Indeed', category: 'Jobs' },
  { name: 'Zomato', category: 'Food' },
  { name: 'Capterra', category: 'Software' },
  { name: 'VRBO', category: 'Travel' },
  { name: 'Google Shopping', category: 'Ecommerce' },
  { name: 'Angi', category: 'Services' },
  { name: 'Glassdoor', category: 'Jobs' },
  { name: 'HomeAdvisor', category: 'Services' },
  { name: 'Houzz', category: 'Home' },
  { name: 'Lawyers.com', category: 'Legal' },
  { name: 'Avvo', category: 'Legal' },
  { name: 'Thumbtack', category: 'Services' },
  { name: 'CarGurus', category: 'Automotive' },
  { name: 'DealerRater', category: 'Automotive' },
  { name: 'FindLaw', category: 'Legal' },
  { name: 'Product Review', category: 'Review' },
  { name: 'YellowPages', category: 'Local' },
];

const Integrations = () => {
  return (
    <Section id="integrations" className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Integraties</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Beheer recensies van meer dan 35 verschillende platforms en verstuur geautomatiseerd reviewverzoeken. Verbind direct met Google en Facebook of importeer reviews van andere platforms.
        </p>
      </div>

      <div className="mb-12 bg-white p-6 md:p-8 rounded-2xl shadow-card border border-gray-100">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Belangrijkste integraties</h3>
          <p className="text-gray-600">
            Login met uw Google en Facebook accounts om direct recensies te beheren en erop te reageren.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl flex items-center">
            <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shadow-sm mr-3">
              <img src="https://placehold.co/100x100/ffffff/4285F4?text=G" alt="Google" className="h-7 w-7" />
            </div>
            <span className="font-medium">Google</span>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl flex items-center">
            <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shadow-sm mr-3">
              <img src="https://placehold.co/100x100/ffffff/1877F2?text=f" alt="Facebook" className="h-7 w-7" />
            </div>
            <span className="font-medium">Facebook</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-card border border-gray-100">
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Beschikbare platforms</h3>
          <p className="text-gray-600">
            Voor onderstaande platforms kunt u eenvoudig uw pagina-URL invoeren om reviews te importeren. 
            Wij ondersteunen meer dan 35 verschillende platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {platforms.map((platform) => (
            <div 
              key={platform.name} 
              className="p-4 rounded-xl border border-gray-100 hover:border-brand-300 transition-colors flex items-center justify-between bg-gray-50"
            >
              <span className="text-sm">{platform.name}</span>
              <Check size={16} className="text-brand-500" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Uniek concept voor betere reviews</h3>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Ons platform zorgt voor gemiddeld 30% meer positieve reviews dan andere platformen dankzij ons unieke concept.
          Ontdek hoe wij dit mogelijk maken!
        </p>
        <div className="bg-gradient-to-r from-brand-50 to-blue-50 p-8 rounded-2xl border border-brand-100 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <div className="flex items-center mb-2">
                <Grid className="text-brand-600 mr-2" size={20} />
                <h4 className="font-semibold text-lg">Geavanceerde review-management</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span>Geautomatiseerde review-uitnodigingen</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span>Multi-locatie ondersteuning</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span>Intelligent review-systeem</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-1 mr-2" />
                  <span>SMS en e-mail uitnodigingen</span>
                </li>
              </ul>
            </div>
            <div className="border-l border-brand-200 h-32 hidden md:block"></div>
            <div className="text-left">
              <p className="text-gray-600 italic mb-4">
                "Dankzij het unieke systeem van ReviewUp is onze online reputatie sterk verbeterd.
                Ons Google-bedrijfsprofiel heeft nu een 4.8 gemiddelde, terwijl we voorheen 
                op 3.6 zaten."
              </p>
              <p className="font-medium">Jan-Willem de Vries</p>
              <p className="text-sm text-gray-500">Marketing Manager, TechSolutions BV</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Integrations;
