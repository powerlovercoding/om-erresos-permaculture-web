
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { featuredActivity } from '@/data/activitiesData';
import { Calendar, MapPin, Target, Clock } from 'lucide-react';

const FeaturedActivity = () => {
  const { t } = useLanguage();
  const IconComponent = featuredActivity.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-primary/10 to-nature-mint p-6 rounded-2xl shadow-lg border border-primary/20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary rounded-full">
              <IconComponent className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {t('featured.badge')}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 leading-tight">
            {t(featuredActivity.titleKey)}
          </h3>

          <p className="text-base text-gray-700 leading-relaxed">
            {t(featuredActivity.descriptionKey)}
          </p>

          {/* Date and Location in one row */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2 text-primary">
              <Calendar className="w-4 h-4" />
              <span className="font-semibold text-sm">{t('featured.climate.date')}</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <MapPin className="w-4 h-4" />
              <span className="font-semibold text-sm">{t('featured.climate.location')}</span>
            </div>
          </div>

          {/* Goal */}
          <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
            <h4 className="font-semibold text-primary mb-2 flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span className="text-sm">{t('featured.climate.goalTitle')}</span>
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">{t('featured.climate.goal')}</p>
          </div>
        </div>

        {/* Right Column - Image and Schedule */}
        <div className="space-y-4">
          {/* Image */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={featuredActivity.image}
              alt={t(featuredActivity.titleKey)}
              className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Schedule */}
          <div className="bg-white/70 p-4 rounded-xl border border-primary/10">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm">{t('featured.climate.schedule')}</span>
            </h4>
            <div className="space-y-1 text-xs text-gray-700">
              <div>{t('featured.climate.time1')}</div>
              <div>{t('featured.climate.time2')}</div>
              <div>{t('featured.climate.time3')}</div>
              <div>{t('featured.climate.time4')}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedActivity;
