import { Users, School, Sprout, Recycle, Droplets, Zap, Shirt, Globe } from 'lucide-react';
import images from './activityImages.json';

export type Activity = {
  icon: any;
  image: string;
  titleKey: string;
  descriptionKey: string;
  fullDescriptionKey?: string;
};

export const featuredActivity: Activity = {
  icon: Globe,
  image: images.featured_climate,
  titleKey: 'featured.climate.title',
  descriptionKey: 'featured.climate.description',
  fullDescriptionKey: 'featured.climate.fullDescription'
};

export const communityActivities: Activity[] = [
  {
    icon: Recycle,
    image: images.community_workshop,
    titleKey: 'community.workshop.title',
    descriptionKey: 'community.workshop.description',
    fullDescriptionKey: 'community.workshop.fullDescription'
  },
  {
    icon: Sprout,
    image: images.community_garden,
    titleKey: 'community.garden.title',
    descriptionKey: 'community.garden.description',
    fullDescriptionKey: 'community.garden.fullDescription'
  },
  {
    icon: Users,
    image: images.community_compost,
    titleKey: 'community.compost.title',
    descriptionKey: 'community.compost.description',
    fullDescriptionKey: 'community.compost.fullDescription'
  }
];

export const schoolActivities: Activity[] = [
  {
    icon: School,
    image: images.school_education,
    titleKey: 'school.education.title',
    descriptionKey: 'school.education.description',
    fullDescriptionKey: 'school.education.fullDescription'
  },
  {
    icon: Recycle,
    image: images.school_garden,
    titleKey: 'school.garden.title',
    descriptionKey: 'school.garden.description',
    fullDescriptionKey: 'school.garden.fullDescription'
  },
  {
    icon: Droplets,
    image: images.school_recycling,
    titleKey: 'school.recycling.title',
    descriptionKey: 'school.recycling.description',
    fullDescriptionKey: 'school.recycling.fullDescription'
  },
  {
    icon: Users,
    image: images.school_climate,
    titleKey: 'school.climate.title',
    descriptionKey: 'school.climate.description',
    fullDescriptionKey: 'school.climate.fullDescription'
  },
  {
    icon: Sprout,
    image: images.school_biodiversity,
    titleKey: 'school.biodiversity.title',
    descriptionKey: 'school.biodiversity.description',
    fullDescriptionKey: 'school.biodiversity.fullDescription'
  },
  {
    icon: Zap,
    image: images.school_sustainability,
    titleKey: 'school.sustainability.title',
    descriptionKey: 'school.sustainability.description',
    fullDescriptionKey: 'school.sustainability.fullDescription'
  },
  {
    icon: Shirt,
    image: images.school_upcycling,
    titleKey: 'school.upcycling.title',
    descriptionKey: 'school.upcycling.description',
    fullDescriptionKey: 'school.upcycling.fullDescription'
  }
];
