
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
  image: "/lovable-uploads/cdaa293b-d3fd-4442-9c78-28288fa0a2d5.png",
  titleKey: 'featured.climate.title',
  descriptionKey: 'featured.climate.description',
  fullDescriptionKey: 'featured.climate.fullDescription'
};

export const communityActivities: Activity[] = [
  {
    icon: Recycle,
    image: "/lovable-uploads/1a3aaf06-22e5-4a0c-a69b-f610d18a8845.png",
    titleKey: 'community.workshop.title',
    descriptionKey: 'community.workshop.description',
    fullDescriptionKey: 'community.workshop.fullDescription'
  },
  {
    icon: Sprout,
    image: "/lovable-uploads/06d6dd19-2473-461e-92e2-f52d30cd0cbc.png",
    titleKey: 'community.garden.title',
    descriptionKey: 'community.garden.description',
    fullDescriptionKey: 'community.garden.fullDescription'
  },
  {
    icon: Users,
    image: "/lovable-uploads/d08cf0e9-fa46-4503-a10c-4b32c4d8c1f7.png",
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
    image: "/lovable-uploads/a2d6ed54-8300-4822-bf8f-a49d8aea7eac.png",
    titleKey: 'school.climate.title',
    descriptionKey: 'school.climate.description',
    fullDescriptionKey: 'school.climate.fullDescription'
  },
  {
    icon: Sprout,
    image: "/lovable-uploads/2a7045c0-a506-4917-b461-a0a5060116a9.png",
    titleKey: 'school.biodiversity.title',
    descriptionKey: 'school.biodiversity.description',
    fullDescriptionKey: 'school.biodiversity.fullDescription'
  },
  {
    icon: Zap,
    image: "/lovable-uploads/72ba4d86-c815-409a-af6b-540f24fd6e20.png",
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
