
import React from 'react';
import { Users, School, Sprout, Recycle, Droplets, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const ActivitiesSection = () => {
  const { t } = useLanguage();

  const communityActivities = [
    {
      icon: Sprout,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      titleKey: 'community.workshop.title',
      descriptionKey: 'community.workshop.description'
    },
    {
      icon: Users,
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
      titleKey: 'community.garden.title',
      descriptionKey: 'community.garden.description'
    },
    {
      icon: Recycle,
      image: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=400&h=300&fit=crop",
      titleKey: 'community.compost.title',
      descriptionKey: 'community.compost.description'
    },
    {
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      titleKey: 'community.water.title',
      descriptionKey: 'community.water.description'
    },
    {
      icon: Sprout,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop",
      titleKey: 'community.seeds.title',
      descriptionKey: 'community.seeds.description'
    },
    {
      icon: Zap,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      titleKey: 'community.energy.title',
      descriptionKey: 'community.energy.description'
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
      icon: Sprout,
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop",
      titleKey: 'school.garden.title',
      descriptionKey: 'school.garden.description'
    },
    {
      icon: Recycle,
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
    }
  ];

  const ActivityCard = ({ activity, index }: { activity: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={activity.image}
          alt={t(activity.titleKey)}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <activity.icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {t(activity.titleKey)}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {t(activity.descriptionKey)}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            {t('activities.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Community Activities */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-2">
              {t('activities.community.title')}
            </h3>
            <div className="w-16 h-1 bg-secondary"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityActivities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} index={index} />
            ))}
          </div>
        </div>

        {/* School Activities */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-secondary mb-2">
              {t('activities.school.title')}
            </h3>
            <div className="w-16 h-1 bg-accent"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolActivities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
