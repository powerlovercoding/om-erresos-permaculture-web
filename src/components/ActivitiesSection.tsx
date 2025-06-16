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
      image: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=400&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      titleKey: 'school.upcycling.title',
      descriptionKey: 'school.upcycling.description'
    }
  ];

  const ActivitiesGrid = ({ activities }: { activities: typeof communityActivities }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <Card className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group">
        <div className="relative h-52 overflow-hidden">
          <img
            src={activity.image}
            alt={t(activity.titleKey)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <activity.icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-xl font-heading line-clamp-2">
            {t(activity.titleKey)}
          </h3>
        </div>
        <CardContent className="p-4">
          <p className="text-sm text-gray-600 line-clamp-4 leading-relaxed">
            {t(activity.descriptionKey)}
          </p>
          <div className="mt-4 flex justify-end">
            <span className="text-xs text-primary font-medium hover:underline cursor-pointer transition-all">
              {t('activities.readMore')} →
            </span>
          </div>
        </CardContent>
      </Card>
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
      <h2 className={`${isSubtitle ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl lg:text-5xl'} font-heading font-bold text-gray-900 mb-6`}>
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
