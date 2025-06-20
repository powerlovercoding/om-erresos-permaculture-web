import React from 'react';
import { Target, Heart, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
const AboutSection = () => {
  const {
    t
  } = useLanguage();
  const features = [{
    icon: Target,
    title: t('about.goal'),
    description: t('about.goalDescription')
  }, {
    icon: Heart,
    title: t('about.values'),
    description: t('about.valuesDescription')
  }, {
    icon: Lightbulb,
    title: t('about.method'),
    description: t('about.methodDescription')
  }];
  return <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom section-padding">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="border-l-4 border-primary p-6 rounded-r-lg bg-[DCFCE7] bg-green-100/[0.56]">
              <p className="text-primary font-medium italic">
                {t('about.mission')}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {features.map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#5d9871]">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>)}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="relative">
            <img src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=600&h=400&fit=crop" alt="Sustainable community" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-lg opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;