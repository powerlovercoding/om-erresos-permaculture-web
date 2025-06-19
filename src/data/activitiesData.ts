
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
  image: "/lovable-uploads/fef4016d-1fa4-4b9a-8010-a5fe33ff50c6.jpg",
  titleKey: 'featured.climate.title',
  descriptionKey: 'featured.climate.description',
  fullDescriptionKey: 'featured.climate.fullDescription'
};

export const communityActivities: Activity[] = [
  {
    icon: Recycle,
    image: "/lovable-uploads/318a0395-32d1-4adf-9360-3f20f25440a8.png",
    titleKey: 'community.workshop.title',
    descriptionKey: 'community.workshop.description',
    fullDescriptionKey: 'community.workshop.fullDescription'
  },
  {
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    titleKey: 'community.garden.title',
    descriptionKey: 'community.garden.description',
    fullDescriptionKey: 'community.garden.fullDescription'
  },
  {
    icon: Users,
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
    titleKey: 'community.compost.title',
    descriptionKey: 'community.compost.description',
    fullDescriptionKey: 'community.compost.fullDescription'
  }
];

export const schoolActivities: Activity[] = [
  {
    icon: School,
    image: "/lovable-uploads/36371c0e-678d-47af-8107-56f98cbeaeb0.png",
    titleKey: 'school.education.title',
    descriptionKey: 'school.education.description',
    fullDescriptionKey: 'school.education.fullDescription'
  },
  {
    icon: Recycle,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
    titleKey: 'school.garden.title',
    descriptionKey: 'school.garden.description',
    fullDescriptionKey: 'school.garden.fullDescription'
  },
  {
    icon: Droplets,
    image: "/lovable-uploads/c3690743-fcbd-4f61-a074-609a8347943b.png",
    titleKey: 'school.recycling.title',
    descriptionKey: 'school.recycling.description',
    fullDescriptionKey: 'school.recycling.fullDescription'
  },
  {
    icon: Users,
    image: "/lovable-uploads/ac6b8ceb-6f7e-4c61-8a03-a305e7db084a.png",
    titleKey: 'school.climate.title',
    descriptionKey: 'school.climate.description',
    fullDescriptionKey: 'school.climate.fullDescription'
  },
  {
    icon: Sprout,
    image: "/lovable-uploads/a2d6ed54-8300-4822-bf8f-a49d8aea7eac.png",
    titleKey: 'school.biodiversity.title',
    descriptionKey: 'school.biodiversity.description',
    fullDescriptionKey: 'school.biodiversity.fullDescription'
  },
  {
    icon: Zap,
    image: "/lovable-uploads/39f20215-b8f5-4a37-a2e7-67a054d9834a.png",
    titleKey: 'school.sustainability.title',
    descriptionKey: 'school.sustainability.description',
    fullDescriptionKey: 'school.sustainability.fullDescription'
  },
  {
    icon: Shirt,
    image: "/lovable-uploads/cf55973a-06a7-428c-87df-83a2d04ff7f1.png",
    titleKey: 'school.upcycling.title',
    descriptionKey: 'school.upcycling.description',
    fullDescriptionKey: 'school.upcycling.fullDescription'
  }
];
