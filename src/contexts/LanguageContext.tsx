
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'el' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  el: {
    // Header
    'nav.about': 'Σχετικά',
    'nav.activities': 'Δραστηριότητες', 
    'nav.contact': 'Επικοινωνία',
    
    // Hero
    'hero.title': 'Νέοι για το Κλίμα στη Λέσβο',
    'hero.subtitle': 'Δημιουργώντας ένα βιώσιμο μέλλον μέσω της Permaculture',
    'hero.description': 'Ανακαλύψτε πώς η permaculture μπορεί να μεταμορφώσει τις κοινότητές μας και να προστατεύσει το περιβάλλον για τις επόμενες γενιές.',
    'hero.cta': 'Μάθετε Περισσότερα',
    
    // About
    'about.title': 'Σκοπός & Περιγραφή του Προγράμματος',
    'about.description': 'Το πρόγραμμα "Νέοι για το Κλίμα στη Λέσβο" στοχεύει στην ευαισθητοποίηση και εκπαίδευση των νέων σχετικά με τις κλιματικές αλλαγές και τη βιώσιμη ανάπτυξη. Μέσω πρακτικών δραστηριοτήτων permaculture, οι συμμετέχοντες μαθαίνουν να δημιουργούν βιώσιμες λύσεις για τις περιβαλλοντικές προκλήσεις.',
    'about.mission': 'Η αποστολή μας είναι να ενδυναμώσουμε τη νεολαία με γνώσεις και εργαλεία για την αντιμετώπιση των κλιματικών προκλήσεων μέσω πρακτικών και βιώσιμων μεθόδων.',
    
    // Activities
    'activities.title': 'Δραστηριότητες του Προγράμματος',
    'activities.community.title': 'Community Δραστηριότητες',
    'activities.school.title': 'Σχολικές Δραστηριότητες',
    
    // Community Activities
    'community.workshop.title': 'Εργαστήρια Permaculture',
    'community.workshop.description': 'Πρακτικά εργαστήρια για την εκμάθηση τεχνικών permaculture και βιώσιμης καλλιέργειας.',
    'community.garden.title': 'Κοινοτικοί Κήποι',
    'community.garden.description': 'Δημιουργία και συντήρηση κοινοτικών κήπων με αρχές permaculture.',
    'community.compost.title': 'Κομποστοποίηση',
    'community.compost.description': 'Μάθετε να μετατρέπετε τα οργανικά απόβλητα σε πολύτιμο λίπασμα.',
    'community.water.title': 'Διαχείριση Νερού',
    'community.water.description': 'Τεχνικές συλλογής και εξοικονόμησης νερού για βιώσιμη καλλιέργεια.',
    'community.seeds.title': 'Τράπεζα Σπόρων',
    'community.seeds.description': 'Συλλογή και διατήρηση παραδοσιακών ποικιλιών σπόρων.',
    'community.energy.title': 'Ανανεώσιμη Ενέργεια',
    'community.energy.description': 'Εργαστήρια για την κατασκευή και χρήση ανανεώσιμων πηγών ενέργειας.',
    
    // School Activities
    'school.education.title': 'Περιβαλλοντική Εκπαίδευση',
    'school.education.description': 'Διαδραστικά μαθήματα για την κατανόηση των κλιματικών αλλαγών.',
    'school.garden.title': 'Σχολικοί Κήποι',
    'school.garden.description': 'Δημιουργία κήπων στα σχολεία με αρχές permaculture.',
    'school.recycling.title': 'Ανακύκλωση & Upcycling',
    'school.recycling.description': 'Μαθαίνοντας να επαναχρησιμοποιούμε και να ανακυκλώνουμε υλικά.',
    'school.climate.title': 'Κλιματικές Αλλαγές',
    'school.climate.description': 'Κατανόηση των αιτιών και επιπτώσεων των κλιματικών αλλαγών.',
    'school.biodiversity.title': 'Βιοποικιλότητα',
    'school.biodiversity.description': 'Εξερεύνηση της τοπικής βιοποικιλότητας και της προστασίας της.',
    'school.sustainability.title': 'Βιωσιμότητα',
    'school.sustainability.description': 'Πρακτικές για έναν βιώσιμο τρόπο ζωής στο σχολείο και το σπίτι.',
    
    // Contact
    'contact.title': 'Στοιχεία Επικοινωνίας',
    'contact.address': 'Διεύθυνση',
    'contact.phone': 'Τηλέφωνο',
    'contact.email': 'Email',
    'contact.website': 'Ιστοσελίδα',
    
    // Footer
    'footer.partners': 'Συνεργαζόμενοι Φορείς',
    'footer.rights': 'Όλα τα δικαιώματα διατηρούνται',
    'footer.privacy': 'Πολιτική Απορρήτου',
    'footer.terms': 'Όροι Χρήσης'
  },
  en: {
    // Header
    'nav.about': 'About',
    'nav.activities': 'Activities',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Youth for Climate in Lesvos',
    'hero.subtitle': 'Creating a Sustainable Future through Permaculture',
    'hero.description': 'Discover how permaculture can transform our communities and protect the environment for future generations.',
    'hero.cta': 'Learn More',
    
    // About
    'about.title': 'Program Purpose & Description',
    'about.description': 'The "Youth for Climate in Lesvos" program aims to raise awareness and educate young people about climate change and sustainable development. Through practical permaculture activities, participants learn to create sustainable solutions for environmental challenges.',
    'about.mission': 'Our mission is to empower youth with knowledge and tools to address climate challenges through practical and sustainable methods.',
    
    // Activities
    'activities.title': 'Program Activities',
    'activities.community.title': 'Community Activities',
    'activities.school.title': 'School Activities',
    
    // Community Activities
    'community.workshop.title': 'Permaculture Workshops',
    'community.workshop.description': 'Practical workshops for learning permaculture techniques and sustainable cultivation.',
    'community.garden.title': 'Community Gardens',
    'community.garden.description': 'Creating and maintaining community gardens with permaculture principles.',
    'community.compost.title': 'Composting',
    'community.compost.description': 'Learn to transform organic waste into valuable fertilizer.',
    'community.water.title': 'Water Management',
    'community.water.description': 'Water collection and conservation techniques for sustainable cultivation.',
    'community.seeds.title': 'Seed Bank',
    'community.seeds.description': 'Collection and preservation of traditional seed varieties.',
    'community.energy.title': 'Renewable Energy',
    'community.energy.description': 'Workshops for building and using renewable energy sources.',
    
    // School Activities
    'school.education.title': 'Environmental Education',
    'school.education.description': 'Interactive lessons for understanding climate change.',
    'school.garden.title': 'School Gardens',
    'school.garden.description': 'Creating gardens in schools with permaculture principles.',
    'school.recycling.title': 'Recycling & Upcycling',
    'school.recycling.description': 'Learning to reuse and recycle materials.',
    'school.climate.title': 'Climate Change',
    'school.climate.description': 'Understanding the causes and effects of climate change.',
    'school.biodiversity.title': 'Biodiversity',
    'school.biodiversity.description': 'Exploring local biodiversity and its protection.',
    'school.sustainability.title': 'Sustainability',
    'school.sustainability.description': 'Practices for a sustainable lifestyle at school and home.',
    
    // Contact
    'contact.title': 'Contact Information',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email', 
    'contact.website': 'Website',
    
    // Footer
    'footer.partners': 'Partner Organizations',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('el');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
