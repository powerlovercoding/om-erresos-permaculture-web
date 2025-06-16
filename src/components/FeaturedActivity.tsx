
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
      className="bg-gradient-to-br from-primary/10 to-nature-mint p-8 rounded-2xl shadow-lg border border-primary/20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-primary rounded-full">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t('featured.badge')}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 leading-tight">
            {t(featuredActivity.titleKey)}
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed">
            {t(featuredActivity.descriptionKey)}
          </p>

          {/* Date and Location in one row */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-3 text-primary">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold text-base">{t('featured.climate.date')}</span>
            </div>
            <div className="flex items-center space-x-3 text-primary">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold text-base">{t('featured.climate.location')}</span>
            </div>
          </div>

          {/* Goal */}
          <div className="bg-primary/5 p-5 rounded-xl border border-primary/10">
            <h4 className="font-semibold text-primary mb-3 flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span className="text-base">{t('featured.climate.goalTitle')}</span>
            </h4>
            <p className="text-gray-700 text-base leading-relaxed">{t('featured.climate.goal')}</p>
          </div>
        </div>

        {/* Right Column - Image and Schedule */}
        <div className="space-y-6">
          {/* Image */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={featuredActivity.image}
              alt={t(featuredActivity.titleKey)}
              className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Schedule */}
          <div className="bg-white/70 p-5 rounded-xl border border-primary/10">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-base">{t('featured.climate.schedule')}</span>
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
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
