
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { featuredActivity } from '@/data/activitiesData';
import { Calendar, MapPin, Target } from 'lucide-react';

const FeaturedActivity = () => {
  const { t } = useLanguage();
  const IconComponent = featuredActivity.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-primary/10 to-nature-mint p-8 rounded-3xl shadow-lg border border-primary/20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Content */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-primary rounded-full">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t('featured.badge')}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            {t(featuredActivity.titleKey)}
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed">
            {t(featuredActivity.descriptionKey)}
          </p>

          {/* Date and Location */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-primary">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">{t('featured.climate.date')}</span>
            </div>
            <div className="flex items-center space-x-3 text-primary">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">{t('featured.climate.location')}</span>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white/70 p-6 rounded-2xl border border-primary/10">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <Target className="w-5 h-5 text-primary" />
              <span>{t('featured.climate.schedule')}</span>
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div>{t('featured.climate.time1')}</div>
              <div>{t('featured.climate.time2')}</div>
              <div>{t('featured.climate.time3')}</div>
              <div>{t('featured.climate.time4')}</div>
            </div>
          </div>

          {/* Goal */}
          <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
            <h4 className="font-semibold text-primary mb-3">{t('featured.climate.goalTitle')}</h4>
            <p className="text-gray-700 leading-relaxed">{t('featured.climate.goal')}</p>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={featuredActivity.image}
              alt={t(featuredActivity.titleKey)}
              className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedActivity;
