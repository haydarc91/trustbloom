
import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, StarHalf, Sparkles, Filter, Mail, MessageSquare, Bot } from 'lucide-react';
import { Badge } from './ui/badge';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-brand-50 via-white to-blue-50 relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
            <Badge className="mb-4 bg-gradient-to-r from-brand-400 to-brand-500">Nieuw platform</Badge>
            <h1 className="font-bold text-balance mb-6 text-gray-900">
              Verbeter uw <span className="text-brand-600 relative">
                online reputatie
                <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-brand-200 to-brand-300 -z-10 rounded-full"></span>
              </span> met ons unieke review systeem
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg text-balance">
              Verzamel reviews van meer dan 35 platforms, reageer eenvoudig met AI, en wijs klanten automatisch naar het juiste review kanaal. Onze klanten zien gemiddeld 30% meer positieve reviews.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://buy.stripe.com/4gw2bX1PL7Hqf4IbIJ" className="btn-primary inline-flex items-center justify-center bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700">
                <span>Start 30 dagen gratis test</span>
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#how-it-works" className="btn-secondary inline-flex items-center justify-center">
                Hoe het werkt
              </a>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-brand-100 shadow-sm flex items-center">
                <Filter size={16} className="text-brand-500 mr-1.5" />
                <span className="text-sm">Slim review management</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-brand-100 shadow-sm flex items-center">
                <Mail size={16} className="text-brand-500 mr-1.5" />
                <span className="text-sm">Geautomatiseerde uitnodigingen</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-brand-100 shadow-sm flex items-center">
                <MessageSquare size={16} className="text-brand-500 mr-1.5" />
                <span className="text-sm">35+ platform integraties</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-brand-100 shadow-sm flex items-center">
                <Bot size={16} className="text-brand-500 mr-1.5" />
                <span className="text-sm">AI review antwoorden</span>
              </div>
            </div>

            <div className="flex items-center p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-brand-100 shadow-sm">
              <div className="flex mr-3">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
                <StarHalf size={18} className="text-yellow-400 fill-yellow-400" />
              </div>
              <span className="text-gray-700">Meer dan 500+ tevreden klanten</span>
              <div className="ml-auto flex items-center text-brand-600">
                <Sparkles size={16} className="mr-1" />
                <span className="text-sm font-medium">Uniek concept</span>
              </div>
            </div>
          </div>

          <div className={`${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-300 relative`}>
            <div className="absolute -top-12 -right-8 bg-brand-200 rounded-full h-40 w-40 z-0 blur-xl opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 bg-blue-200 rounded-full h-32 w-32 z-0 blur-xl opacity-60"></div>
            
            <div className="relative bg-white p-4 rounded-2xl shadow-card animate-float">
              <div className="p-2 bg-white rounded-xl relative z-10 overflow-hidden shadow-sm">
                <img 
                  src="https://placehold.co/600x400/f0f7ff/1a91ff?text=Dashboard+Preview&font=Inter"
                  alt="ReviewUp Dashboard Preview" 
                  className="rounded-lg w-full h-auto"
                />
                
                <div className="absolute top-4 left-4 bg-gradient-to-r from-brand-500 to-brand-600 py-1.5 px-3 rounded-lg text-white text-sm font-medium">
                  ReviewUp Dashboard
                </div>
              </div>
            </div>
            
            <div className="absolute -right-4 top-1/4 bg-white rounded-xl shadow-soft p-4 animate-pulse-soft">
              <div className="flex items-center space-x-2">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="font-medium text-gray-800">Nieuwe 5-sterren review</span>
              </div>
            </div>

            <div className="absolute -left-6 bottom-1/4 bg-white rounded-xl shadow-soft p-4 animate-pulse-soft animation-delay-2000">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-gray-800">Review antwoord verzonden</span>
              </div>
            </div>
            
            <div className="absolute -bottom-2 right-1/4 bg-brand-50 border border-brand-100 rounded-xl shadow-soft p-4 animate-pulse-soft animation-delay-1000">
              <div className="flex items-center space-x-2">
                <Bot size={16} className="text-brand-500" />
                <span className="font-medium text-gray-800">AI antwoord gegenereerd</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/3 right-[5%] w-64 h-64 bg-brand-200 rounded-full filter blur-3xl opacity-60 animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 left-[10%] w-48 h-48 bg-blue-200 rounded-full filter blur-3xl opacity-60 animate-pulse-soft"></div>
    </section>
  );
};

export default HeroSection;
