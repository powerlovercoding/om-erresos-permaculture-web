
import React, { useState } from 'react';
import { Users, School, Sprout, Recycle, Droplets, Zap, Shirt } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const ActivitiesSection = () => {
  const { t } = useLanguage();

  const communityActivities = [
    {
      icon: Recycle,
      image: "/lovable-uploads/318a0395-32d1-4adf-9360-3f20f25440a8.png",
      titleKey: 'community.workshop.title',
      descriptionKey: 'community.workshop.description'
    },
    {
      icon: Sprout,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      titleKey: 'community.garden.title',
      descriptionKey: 'community.garden.description'
    },
    {
      icon: Users,
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
      titleKey: 'community.compost.title',
      descriptionKey: 'community.compost.description'
    }
  ];

  const schoolActivities = [
    {
      icon: School,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      titleKey: 'school.education.title',
      descriptionKey: 'school.education.description'
    },
    {
      icon: Recycle,
      image: "/lovable-uploads/96546591-423c-4455-b2a2-acf2379584a7.png",
      titleKey: 'school.garden.title',
      descriptionKey: 'school.garden.description'
    },
    {
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      titleKey: 'school.recycling.title',
      descriptionKey: 'school.recycling.description'
    },
    {
      icon: Users,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      titleKey: 'school.climate.title',
      descriptionKey: 'school.climate.description'
    },
    {
      icon: Sprout,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      titleKey: 'school.biodiversity.title',
      descriptionKey: 'school.biodiversity.description'
    },
    {
      icon: Zap,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop",
      titleKey: 'school.sustainability.title',
      descriptionKey: 'school.sustainability.description'
    },
    {
      icon: Shirt,
      image: "/lovable-uploads/cf55973a-06a7-428c-87df-83a2d04ff7f1.png",
      titleKey: 'school.upcycling.title',
      descriptionKey: 'school.upcycling.description'
    }
  ];

  const ActivitiesGrid = ({ activities }: { activities: typeof communityActivities }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {activities.map((activity, index) => (
          <ActivityCard key={index} activity={activity} index={index} />
        ))}
      </div>
    );
  };

  const ActivityCard = ({ activity, index }: { activity: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-full">
        <div className="relative h-56 overflow-hidden">
          <img
            src={activity.image}
            alt={t(activity.titleKey)}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
            <h3 className="text-white font-bold text-xl mb-1">
              {t(activity.titleKey)}
            </h3>
          </div>
        </div>
        <div className="p-6 bg-stone-100">
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            {t(activity.descriptionKey)}
          </p>
          <button className="bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition-colors duration-200 flex items-center gap-2">
            {t('activities.readMore')} →
          </button>
        </div>
      </div>
    </motion.div>
  );

  const SectionTitle = ({ titleKey, isSubtitle = false }: { titleKey: string, isSubtitle?: boolean }) => (
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

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container-custom section-padding">
        <SectionTitle titleKey="activities.title" />
        
        {/* Community Activities Section */}
        <div className="mb-20">
          <SectionTitle titleKey="activities.community.title" isSubtitle={true} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ActivitiesGrid activities={communityActivities} />
          </motion.div>
        </div>
        
        {/* School Activities Section */}
        <div>
          <SectionTitle titleKey="activities.school.title" isSubtitle={true} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ActivitiesGrid activities={schoolActivities} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
