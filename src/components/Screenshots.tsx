
import React, { useState } from 'react';
import { Laptop, LayoutDashboard, PieChart, MessageSquare } from 'lucide-react';
import Section from './ui/Section';

const tabs = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: LayoutDashboard,
    image: 'https://placehold.co/800x500/f0f7ff/1a91ff?text=Dashboard+Screenshot',
    description: 'Een overzichtelijk dashboard met al uw belangrijkste review-metrics in één oogopslag.',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    icon: PieChart,
    image: 'https://placehold.co/800x500/f0f7ff/1a91ff?text=Analytics+Screenshot',
    description: 'Gedetailleerde statistieken en trends om uw reviewprestaties te analyseren en te verbeteren.',
  },
  {
    id: 'management',
    title: 'Review beheer',
    icon: MessageSquare,
    image: 'https://placehold.co/800x500/f0f7ff/1a91ff?text=Review+Management+Screenshot',
    description: 'Eenvoudig reviews van verschillende platforms beheren en beantwoorden vanuit één inbox.',
  },
];

const Screenshots = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <Section id="screenshots">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Bekijk ons platform</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ontdek de krachtige functies die ReviewUp te bieden heeft om uw online reputatie te verbeteren.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex justify-center space-x-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-5 py-3 rounded-full transition-all ${
                activeTab === tab.id
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-soft'
              }`}
            >
              <tab.icon size={18} className="mr-2" />
              <span className="font-medium">{tab.title}</span>
            </button>
          ))}
        </div>

        <div className="mb-8 max-w-4xl mx-auto text-center">
          <p className="text-gray-700">{currentTab.description}</p>
        </div>

        <div className="relative max-w-5xl mx-auto animate-fade-in">
          <div className="bg-gradient-to-b from-brand-600 to-brand-700 rounded-t-2xl h-8 w-full flex items-center px-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-b-xl overflow-hidden shadow-card border border-gray-200">
              <img
                src={currentTab.image}
                alt={`${currentTab.title} Screenshot`}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-brand-50 rounded-full filter blur-3xl opacity-60 z-0"></div>
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-50 rounded-full filter blur-3xl opacity-60 z-0"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Screenshots;
