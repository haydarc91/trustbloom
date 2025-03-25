
import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Section from './ui/Section';

const testimonials = [
  {
    name: 'Jan de Vries',
    position: 'Eigenaar, Café Amsterdam',
    image: 'https://placehold.co/100/f0f7ff/1a91ff?text=JV',
    content: 'Sinds we ReviewUp gebruiken, is ons aantal Google-reviews verdrievoudigd. Het automatisch verzenden van verzoeken na een bezoek heeft ons enorm geholpen!',
    rating: 5,
  },
  {
    name: 'Marloes Bakker',
    position: 'Marketing Manager, TechSolutions',
    image: 'https://placehold.co/100/f0f7ff/1a91ff?text=MB',
    content: 'De mogelijkheid om reviews van verschillende platforms op één plek te beheren heeft ons team veel tijd bespaard. De analytische inzichten zijn ook waardevol voor onze marketingstrategie.',
    rating: 5,
  },
  {
    name: 'Thomas Hendriks',
    position: 'Directeur, Bouwbedrijf Hendriks',
    image: 'https://placehold.co/100/f0f7ff/1a91ff?text=TH',
    content: 'Onze online reputatie is aanzienlijk verbeterd met ReviewUp. We reageren nu sneller op feedback en onze klanten waarderen dat enorm.',
    rating: 4,
  },
  {
    name: 'Sophie van Dijk',
    position: 'Eigenaar, Beautysalon Puur',
    image: 'https://placehold.co/100/f0f7ff/1a91ff?text=SD',
    content: 'De review-widgets op onze website hebben het vertrouwen van nieuwe klanten vergroot. We zien een duidelijke toename in boekingen sinds we ReviewUp gebruiken.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialWidth, setTestimonialWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const updateTestimonialWidth = () => {
      const width = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      setTestimonialWidth(width);
    };

    updateTestimonialWidth();
    window.addEventListener('resize', updateTestimonialWidth);

    return () => window.removeEventListener('resize', updateTestimonialWidth);
  }, []);

  const visibleTestimonials = [];
  for (let i = 0; i < testimonialWidth; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <Section id="testimonials" hasPattern className="overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Wat onze klanten zeggen</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ontdek hoe ReviewUp bedrijven heeft geholpen hun online reputatie te verbeteren.
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
          <button 
            onClick={prevTestimonial}
            className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700 hover:text-brand-600"
            aria-label="Vorige testimonial"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(0)` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {visibleTestimonials.map((testimonial, index) => (
                <div 
                  key={`${testimonial.name}-${index}`} 
                  className="bg-white rounded-xl p-6 shadow-card border border-gray-100 flex flex-col"
                >
                  <div className="flex-1">
                    <div className="text-brand-400 mb-4">
                      <Quote size={32} />
                    </div>
                    <p className="text-gray-700 mb-6">{testimonial.content}</p>
                    
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center mt-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
          <button 
            onClick={nextTestimonial}
            className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700 hover:text-brand-600"
            aria-label="Volgende testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              Math.floor(currentIndex) === index ? 'bg-brand-600' : 'bg-gray-300'
            }`}
            aria-label={`Ga naar testimonial ${index + 1}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
