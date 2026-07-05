
import { Users, School, Sprout, Recycle, Droplets, Zap, Shirt, Globe } from 'lucide-react';

export type Activity = {
  icon: any;
  image: string;
  titleKey: string;
  descriptionKey: string;
  fullDescriptionKey?: string;
};

export const featuredActivity: Activity = {
  icon: Globe,
  image: "/uploads/cdaa293b-d3fd-4442-9c78-28288fa0a2d5.png",
  titleKey: 'featured.climate.title',
  descriptionKey: 'featured.climate.description',
  fullDescriptionKey: 'featured.climate.fullDescription'
};

export const communityActivities: Activity[] = [
  {
    icon: Recycle,
    image: "/uploads/beach-clean-and-art.png",
    titleKey: 'community.workshop.title',
    descriptionKey: 'community.workshop.description',
    fullDescriptionKey: 'community.workshop.fullDescription'
  },
  {
    icon: Sprout,
    image: "/uploads/from-plate-to-soil.png",
    titleKey: 'community.garden.title',
    descriptionKey: 'community.garden.description',
    fullDescriptionKey: 'community.garden.fullDescription'
  },
  {
    icon: Users,
    image: "/uploads/comunal-garden.png",
    titleKey: 'community.compost.title',
    descriptionKey: 'community.compost.description',
    fullDescriptionKey: 'community.compost.fullDescription'
  }
];

export const schoolActivities: Activity[] = [
  {
    icon: School,
    image: "/uploads/greenschool.png",
    titleKey: 'school.education.title',
    descriptionKey: 'school.education.description',
    fullDescriptionKey: 'school.education.fullDescription'
  },
  {
    icon: Recycle,
    image: "/uploads/school-recycling.png",
    titleKey: 'school.garden.title',
    descriptionKey: 'school.garden.description',
    fullDescriptionKey: 'school.garden.fullDescription'
  },
  {
    icon: Droplets,
    image: "/uploads/hydrusa-water.png",
    titleKey: 'school.recycling.title',
    descriptionKey: 'school.recycling.description',
    fullDescriptionKey: 'school.recycling.fullDescription'
  },
  {
    icon: Users,
    image: "/uploads/tree-wild.png",
    titleKey: 'school.climate.title',
    descriptionKey: 'school.climate.description',
    fullDescriptionKey: 'school.climate.fullDescription'
  },
  {
    icon: Sprout,
    image: "/uploads/green-seeds.png",
    titleKey: 'school.biodiversity.title',
    descriptionKey: 'school.biodiversity.description',
    fullDescriptionKey: 'school.biodiversity.fullDescription'
  },
  {
    icon: Zap,
    image: "/uploads/theatre-play.png",
    titleKey: 'school.sustainability.title',
    descriptionKey: 'school.sustainability.description',
    fullDescriptionKey: 'school.sustainability.fullDescription'
  },
  {
    icon: Shirt,
    image: "/uploads/upcycling-clothes.png",
    titleKey: 'school.upcycling.title',
    descriptionKey: 'school.upcycling.description',
    fullDescriptionKey: 'school.upcycling.fullDescription'
  }
];
