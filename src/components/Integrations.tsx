
import React from 'react';
import { Grid, Check } from 'lucide-react';
import Section from './ui/Section';

const platforms = [
  { name: 'Google', category: 'Primary', color: '#4285F4', logo: 'G' },
  { name: 'Facebook', category: 'Primary', color: '#1877F2', logo: 'f' },
  { name: 'Trustpilot', category: 'Review', color: '#00B67A', logo: 'T' },
  { name: 'Tripadvisor', category: 'Travel', color: '#34E0A1', logo: 'T' },
  { name: 'Booking.com', category: 'Travel', color: '#003580', logo: 'B' },
  { name: 'Airbnb', category: 'Travel', color: '#FF5A5F', logo: 'A' },
  { name: 'GooglePlay', category: 'Apps', color: '#3DDC84', logo: 'GP' },
  { name: 'AppStore', category: 'Apps', color: '#0D96F6', logo: 'A' },
  { name: 'Agoda', category: 'Travel', color: '#5392F9', logo: 'A' },
  { name: 'Amazon', category: 'Ecommerce', color: '#FF9900', logo: 'A' },
  { name: 'eBay', category: 'Ecommerce', color: '#E53238', logo: 'e' },
  { name: 'Hotels.com', category: 'Travel', color: '#D32F2F', logo: 'H' },
  { name: 'OpenTable', category: 'Food', color: '#DA3743', logo: 'O' },
  { name: 'Healthgrades', category: 'Health', color: '#00C8C8', logo: 'H' },
  { name: 'RateMDs', category: 'Health', color: '#004B91', logo: 'R' },
  { name: 'Zocdoc', category: 'Health', color: '#20C5BA', logo: 'Z' },
  { name: 'BBB', category: 'Business', color: '#0067B1', logo: 'B' },
  { name: 'Foursquare', category: 'Local', color: '#F94877', logo: 'F' },
  { name: 'Zillow', category: 'Real Estate', color: '#1277E1', logo: 'Z' },
  { name: 'Etsy', category: 'Ecommerce', color: '#F45800', logo: 'E' },
  { name: 'Expedia', category: 'Travel', color: '#00355F', logo: 'E' },
  { name: 'Indeed', category: 'Jobs', color: '#003A9B', logo: 'I' },
  { name: 'Zomato', category: 'Food', color: '#CB202D', logo: 'Z' },
  { name: 'Capterra', category: 'Software', color: '#FF9D28', logo: 'C' },
  { name: 'VRBO', category: 'Travel', color: '#3C62CE', logo: 'V' },
  { name: 'Google Shopping', category: 'Ecommerce', color: '#4285F4', logo: 'GS' },
  { name: 'Angi', category: 'Services', color: '#FF6149', logo: 'A' },
  { name: 'Glassdoor', category: 'Jobs', color: '#0CAA41', logo: 'G' },
  { name: 'HomeAdvisor', category: 'Services', color: '#F68B1F', logo: 'H' },
  { name: 'Houzz', category: 'Home', color: '#4DBC15', logo: 'H' },
  { name: 'Lawyers.com', category: 'Legal', color: '#007DB8', logo: 'L' },
  { name: 'Avvo', category: 'Legal', color: '#143E6C', logo: 'A' },
  { name: 'Thumbtack', category: 'Services', color: '#57C1E8', logo: 'T' },
  { name: 'CarGurus', category: 'Automotive', color: '#3C9ACF', logo: 'C' },
  { name: 'DealerRater', category: 'Automotive', color: '#2B9D47', logo: 'D' },
  { name: 'FindLaw', category: 'Legal', color: '#FF5500', logo: 'F' },
  { name: 'Product Review', category: 'Review', color: '#FF1A1A', logo: 'PR' },
  { name: 'YellowPages', category: 'Local', color: '#FFCE00', logo: 'YP' },
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
            <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shadow-sm mr-3 text-[#4285F4] font-bold">
              G
            </div>
            <span className="font-medium">Google</span>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl flex items-center">
            <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shadow-sm mr-3 text-[#1877F2] font-bold">
              f
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
              <div className="flex items-center">
                <div 
                  className="h-8 w-8 rounded-md flex items-center justify-center mr-2 text-white font-bold text-xs"
                  style={{ backgroundColor: platform.color }}
                >
                  {platform.logo}
                </div>
                <span className="text-sm">{platform.name}</span>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4 text-brand-600">
                <Grid className="mr-2" size={24} />
                <h4 className="font-semibold text-lg">Geavanceerde review-management</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start bg-brand-50 p-3 rounded-lg">
                  <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Geautomatiseerde review-uitnodigingen</span>
                </li>
                <li className="flex items-start bg-blue-50 p-3 rounded-lg">
                  <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Multi-locatie ondersteuning</span>
                </li>
                <li className="flex items-start bg-green-50 p-3 rounded-lg">
                  <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Intelligent review-systeem</span>
                </li>
                <li className="flex items-start bg-purple-50 p-3 rounded-lg">
                  <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>SMS en e-mail uitnodigingen</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-center">
              <div className="mb-4">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Dankzij het unieke systeem van ReviewUp is onze online reputatie sterk verbeterd.
                  Ons Google-bedrijfsprofiel heeft nu een 4.8 gemiddelde, terwijl we voorheen 
                  op 3.6 zaten."
                </p>
              </div>
              <div className="mt-auto">
                <p className="font-medium text-brand-700">Jan-Willem de Vries</p>
                <p className="text-sm text-gray-500">Marketing Manager, TechSolutions BV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Integrations;
