import React from 'react';
import { ChevronDown, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 hero-gradient text-white relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #86efac 0%, #a7f3d0 50%, #bbf7d0 100%)'
    }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-300/30 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gray-300/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-gray-300/30 rounded-full"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 text-nature-leaf">
              <Leaf className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Permaculture Project
              </span>
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
              <Button
                onClick={scrollToAbout}
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg font-semibold"
              >
                {t('hero.cta')}
              </Button>
            </div>
          </motion.div>

          {/* Hero Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
                  alt="Permaculture garden"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=200&fit=crop"
                  alt="Sustainable farming"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="pt-8">
                <img
                  src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=400&h=400&fit=crop"
                  alt="Community gardening"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <span className="text-sm">Scroll down</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
