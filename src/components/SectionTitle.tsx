
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface SectionTitleProps {
  titleKey: string;
  isSubtitle?: boolean;
}

const SectionTitle = ({ titleKey, isSubtitle = false }: SectionTitleProps) => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`${isSubtitle ? 'mb-8' : 'text-center mb-12'}`}
    >
      <h2 className={`${isSubtitle ? 'text-2xl md:text-3xl text-left' : 'text-3xl md:text-4xl lg:text-5xl'} font-heading font-bold text-gray-900 mb-6`}>
        {t(titleKey)}
      </h2>
      {!isSubtitle && <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>}
    </motion.div>
  );
};

export default SectionTitle;
