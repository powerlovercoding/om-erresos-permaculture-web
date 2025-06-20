
import React from 'react';
import { Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const {
    t
  } = useLanguage();
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="min-h-screen flex flex-col items-center justify-center pt-16 hero-gradient text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 bg-zinc-950">
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gray-300/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-gray-300/30 rounded-full"></div>
      </div>

      {/* Subtle coral wave in bottom right corner */}
      <div className="absolute pointer-events-none" style={{ 
        bottom: '0', 
        right: '0', 
        width: '200px', 
        height: '120px' 
      }}>
        <svg 
          viewBox="0 0 200 120" 
          className="w-full h-full" 
          preserveAspectRatio="none"
        >
          <path
            d="M200 80 C180 75, 160 85, 140 80 C120 75, 100 85, 80 80 C60 75, 40 85, 20 80 C10 78, 5 79, 0 80 L0 120 L200 120 Z"
            fill="#F5A992"
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="container-custom section-padding relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-6">
            <div className="flex items-center space-x-2 text-nature-leaf mt-8 md:mt-0">
              <Leaf className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Youth led projects against climate change</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-gray-800">
              {t('hero.title')}
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-700 font-medium">
              {t('hero.subtitle')}
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={scrollToAbout} size="lg" className="text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold" style={{
              backgroundColor: '#E5EAE5'
            }}>
                {t('hero.cta')}
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="w-full">
              <img alt="People relaxing on the beach" className="w-full h-96 object-cover rounded-lg shadow-lg" src="/lovable-uploads/fef4016d-1fa4-4b9a-8010-a5fe33ff50c6.jpg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
