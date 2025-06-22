import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { featuredActivity } from '@/data/activitiesData';
import { Calendar, MapPin, Target, Clock } from 'lucide-react';
const FeaturedActivity = () => {
  const {
    t
  } = useLanguage();
  const IconComponent = featuredActivity.icon;
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.7
  }} viewport={{
    once: true
  }} className="from-primary/10 to-nature-mint p-6 rounded-2xl shadow-lg border border-primary/20 bg-[DCFCE7] bg-[#76e8cc]/[0.39]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-[#548f67]">
              <IconComponent className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5d9871]">
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
          {/* Image - Made more square */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img src={featuredActivity.image} alt={t(featuredActivity.titleKey)} className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Schedule - Made shorter */}
          <div className="bg-gradient-to-br from-white to-nature-soft-green p-3 rounded-xl shadow-md border border-nature-green/20">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center space-x-2">
              <div className="p-1 bg-nature-green rounded-lg">
                <Clock className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm">{t('featured.climate.schedule')}</span>
            </h4>
            <div className="space-y-1.5">
              <div className="flex items-start space-x-2 p-1.5 bg-white/60 rounded-lg border-l-2 border-nature-green">
                <div className="text-nature-green font-semibold text-xs mt-0.5">10:30</div>
                <div className="text-xs text-gray-700 leading-relaxed">{t('featured.climate.time1')}</div>
              </div>
              <div className="flex items-start space-x-2 p-1.5 bg-white/60 rounded-lg border-l-2 border-primary">
                <div className="text-primary font-semibold text-xs mt-0.5">12:30</div>
                <div className="text-xs text-gray-700 leading-relaxed">{t('featured.climate.time2')}</div>
              </div>
              <div className="flex items-start space-x-2 p-1.5 bg-white/60 rounded-lg border-l-2 border-secondary">
                <div className="text-secondary font-semibold text-xs mt-0.5">14:00</div>
                <div className="text-xs text-gray-700 leading-relaxed">{t('featured.climate.time3')}</div>
              </div>
              <div className="flex items-start space-x-2 p-1.5 bg-white/60 rounded-lg border-l-2 border-accent">
                <div className="text-accent font-semibold text-xs mt-0.5">15:30</div>
                <div className="text-xs text-gray-700 leading-relaxed">{t('featured.climate.time4')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>;
};
export default FeaturedActivity;