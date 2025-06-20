
import React from 'react';
import { Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { t } = useLanguage();
  
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 relative overflow-hidden" style={{ backgroundColor: '#C8D5B0' }}>
      {/* Coral wave in bottom right corner */}
      <div className="absolute bottom-0 right-0 w-1/2 h-3/4 pointer-events-none">
        <svg 
          viewBox="0 0 400 600" 
          className="w-full h-full" 
          preserveAspectRatio="none"
        >
          <path
            d="M150 0 C200 50, 250 30, 300 60 C350 90, 380 120, 400 150 L400 600 L0 600 C30 550, 60 500, 90 450 C120 400, 140 350, 150 300 C160 250, 155 200, 150 150 C145 100, 147 50, 150 0 Z"
            fill="#E5A491"
            opacity="0.8"
          />
        </svg>
      </div>

      <div className="container-custom section-padding relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 text-nature-leaf">
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">
                YOUTH LED PROJECTS AGAINST CLIMATE CHANGE
              </span>
            </div>

            {/* Two-color title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span style={{ color: '#2D5A27' }}>Νέοι για το </span>
              <span style={{ color: '#E5A491' }}>Κλίμα</span>
              <br />
              <span style={{ color: '#2D5A27' }}>στη Λέσβο</span>
            </h1>

            {/* Decorative underline */}
            <div className="w-32 h-1 rounded-full" style={{ backgroundColor: '#E5A491' }}></div>

            <h2 className="text-xl md:text-2xl font-medium" style={{ color: '#2D5A27' }}>
              Δραστηριότητες – Εμπειρίες – Φύση
            </h2>

            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#2D5A27' }}>
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={scrollToAbout} 
                size="lg" 
                className="text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold rounded-full"
                style={{ backgroundColor: '#E5EAE5' }}
              >
                Μάθετε Περισσότερα
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="relative"
          >
            <div className="w-full">
              <img 
                alt="People relaxing on the beach" 
                className="w-full h-96 object-cover rounded-lg shadow-lg" 
                src="/lovable-uploads/fef4016d-1fa4-4b9a-8010-a5fe33ff50c6.jpg" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
