
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ActivitiesGrid from './ActivitiesGrid';
import SectionTitle from './SectionTitle';
import { communityActivities, schoolActivities } from '@/data/activitiesData';

const ActivitiesSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

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
            <ActivitiesGrid 
              activities={communityActivities} 
              expandedCard={expandedCard}
              setExpandedCard={setExpandedCard}
            />
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
            <ActivitiesGrid 
              activities={schoolActivities} 
              expandedCard={expandedCard}
              setExpandedCard={setExpandedCard}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
