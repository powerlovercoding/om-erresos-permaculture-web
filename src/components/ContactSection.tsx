
import React from 'react';
import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.address'),
      value: `${t('contact.location')}, 81105, ${t('contact.country')}`,
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+30 22530 53000',
      link: 'tel:+302253053000'
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'om.eressos@gmail.com',
      link: 'mailto:om.eressos@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
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
        }} className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
                {t('contact.contactInfo')}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => <motion.div key={index} initial={{
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
              }} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#91c3a2]">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.label}</h4>
                      <a href={item.link} target={item.icon === Globe || item.icon === MapPin ? "_blank" : undefined} rel={item.icon === Globe || item.icon === MapPin ? "noopener noreferrer" : undefined} className="text-gray-600 hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </motion.div>

          {/* Map / Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="relative"
          >
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/54626974-9505-406d-ba4c-0f5acac0b622.png" 
                alt="Coastal village illustration of Lesvos" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-lg font-semibold">{t('contact.location')}</p>
                  <p className="text-sm">{t('contact.country')}</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="absolute -bottom-6 left-6 right-6 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                {t('contact.cta')}
              </h4>
              <p className="text-sm text-gray-600">
                {t('contact.ctaDescription')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
