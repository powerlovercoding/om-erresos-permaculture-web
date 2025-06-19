
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

type Activity = {
  icon: any;
  image: string;
  titleKey: string;
  descriptionKey: string;
  fullDescriptionKey?: string;
};

interface ActivityCardProps {
  activity: Activity;
  index: number;
  expandedCard: string | null;
  setExpandedCard: (cardId: string | null) => void;
}

const ActivityCard = ({ activity, index, expandedCard, setExpandedCard }: ActivityCardProps) => {
  const { t } = useLanguage();
  const cardId = `${activity.titleKey}-${index}`;
  const isExpanded = expandedCard === cardId;
  const hasFullDescription = activity.fullDescriptionKey;

  const handleReadMore = () => {
    if (hasFullDescription) {
      setExpandedCard(isExpanded ? null : cardId);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-full flex flex-col">
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
        <div className="p-6 bg-stone-100 flex-1 flex flex-col">
          <p className="text-gray-700 text-sm mb-4 leading-relaxed flex-1">
            {isExpanded && hasFullDescription 
              ? t(activity.fullDescriptionKey) 
              : t(activity.descriptionKey)
            }
          </p>
          <div className="mt-auto">
            {hasFullDescription && (
              <button 
                onClick={handleReadMore}
                className="bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition-colors duration-200 flex items-center gap-2"
              >
                {isExpanded ? 'Διαβάστε λιγότερα' : t('activities.readMore')} →
              </button>
            )}
            {!hasFullDescription && (
              <button className="bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition-colors duration-200 flex items-center gap-2">
                {t('activities.readMore')} →
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
