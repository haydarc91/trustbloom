
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-50 pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="mb-6">
              <a href="#" className="text-brand-700 font-bold text-2xl">
                ReviewUp
              </a>
            </div>
            <p className="text-gray-600 mb-6">
              Verzamel, beheer en presenteer klantreviews eenvoudig vanaf één platform.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-soft text-gray-600 hover:text-brand-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-soft text-gray-600 hover:text-brand-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-soft text-gray-600 hover:text-brand-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-soft text-gray-600 hover:text-brand-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Snelle links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Hoe het werkt
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Voordelen
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Integraties
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Prijzen
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Veelgestelde vragen
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Rechtstreeks</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Over ons
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Algemene voorwaarden
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-brand-600 mr-3 mt-0.5" />
                <span className="text-gray-600">
                  Waterscheerling 93<br />
                  3824 GB Amersfoort
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-brand-600 mr-3" />
                <a href="tel:+31852502502" className="text-gray-600 hover:text-brand-600 transition-colors">
                  085 250 2502
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-brand-600 mr-3" />
                <a href="mailto:info@reviewup.nl" className="text-gray-600 hover:text-brand-600 transition-colors">
                  info@reviewup.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ReviewUp. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-brand-600 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-600 text-sm transition-colors">
              Algemene voorwaarden
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-600 text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
