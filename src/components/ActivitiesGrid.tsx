
import React from 'react';
import ActivityCard from './ActivityCard';

type Activity = {
  icon: any;
  image: string;
  titleKey: string;
  descriptionKey: string;
  fullDescriptionKey?: string;
};

interface ActivitiesGridProps {
  activities: Activity[];
  expandedCard: string | null;
  setExpandedCard: (cardId: string | null) => void;
}

const ActivitiesGrid = ({ activities, expandedCard, setExpandedCard }: ActivitiesGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {activities.map((activity, index) => (
        <ActivityCard 
          key={index} 
          activity={activity} 
          index={index}
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
        />
      ))}
    </div>
  );
};

export default ActivitiesGrid;
