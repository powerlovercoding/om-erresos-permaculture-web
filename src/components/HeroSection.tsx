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
      <div className="absolute inset-0 opacity-20 bg-[nature-light-green] bg-cyan-700">
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gray-300/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-gray-300/30 rounded-full"></div>
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
              <Leaf className="w-6 h-6 text-green-600" />
              <span className="text-sm font-medium uppercase tracking-wider text-green-700">
                Youth led projects against climate change
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              <span className="text-[nature-light-green] text-[#6e734b]">{t('hero.title').split(' ').slice(0, 2).join(' ')}</span>
              <br />
              <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-[#5d623f]">
                {t('hero.title').split(' ').slice(2).join(' ')}
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium">
              <span className="text-gray-700">{t('hero.subtitle')}</span>
            </h2>

            <p className="text-lg leading-relaxed max-w-2xl">
              <span className="text-gray-600 font-light">{t('hero.description')}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={scrollToAbout} size="lg" className="text-gray-800 hover:text-gray-900 px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl" style={{
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