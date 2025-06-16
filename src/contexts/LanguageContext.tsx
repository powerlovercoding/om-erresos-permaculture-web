
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
    'hero.subtitle':  'Δημιουργώντας ένα βιώσιμο μέλλον μέσω της Permaculture',
    'hero.description': 'Ανακαλύψτε πώς η permaculture μπορεί να μεταμορφώσει τις κοινότητές μας και να προστατεύσει το περιβάλλον για τις επόμενες γενιές.',
    'hero.cta': 'Μάθετε Περισσότερα',
    
    // About
    'about.title': 'Σκοπός & Περιγραφή του Προγράμματος',
    'about.description': 'Το πρόγραμμα "Νέοι για το Κλίμα στη Λέσβο" στοχεύει στην ευαισθητοποίηση και εκπαίδευση των νέων σχετικά με τις κλιματικές αλλαγές και τη βιώσιμη ανάπτυξη. Μέσω πρακτικών δραστηριοτήτων permaculture, οι συμμετέχοντες μαθαίνουν να δημιουργούν βιώσιμες λύσεις για τις περιβαλλοντικές προκλήσεις.',
    'about.mission': 'Η αποστολή μας είναι να ενδυναμώσουμε τη νεολαία με γνώσεις και εργαλεία για την αντιμετώπιση των κλιματικών προκλήσεων μέσω πρακτικών και βιώσιμων μεθόδων.',
    'about.goal': 'Στόχος',
    'about.goalDescription': 'Ευαισθητοποίηση νέων για το κλίμα',
    'about.values': 'Αξίες',
    'about.valuesDescription': 'Βιωσιμότητα και κοινοτική δράση',
    'about.method': 'Μέθοδος',
    'about.methodDescription': 'Πρακτική εκμάθηση permaculture',
    
    // Activities
    'activities.title': 'Δραστηριότητες του Προγράμματος',
    'activities.community.title': 'Community Δραστηριότητες',
    'activities.school.title': 'Σχολικές Δραστηριότητες',
    'activities.readMore': 'Διαβάστε περισσότερα',
    
    // Community Activities - Updated names
    'community.workshop.title': 'Εισαγωγή στις Πολιτιστικές Πτυχές',
    'community.workshop.description': 'Εξερεύνηση των πολιτιστικών παραδόσεων και της σχέσης τους με το περιβάλλον.',
    'community.garden.title': 'Καλλιτεχνική Παρέμβαση στην Παραλία',
    'community.garden.description': 'Δημιουργικές δραστηριότητες τέχνης που αναδεικνύουν την περιβαλλοντική ευαισθητοποίηση.',
    'community.compost.title': 'Κοινοτικός Κήπος',
    'community.compost.description': 'Δημιουργία και συντήρηση κοινοτικών κήπων με αρχές permaculture.',
    'community.water.title': 'Ερωτηματολόγιο και Συλλογή Απορριμμάτων',
    'community.water.description': 'Έρευνα και πρακτική δράση για την καθαριότητα του περιβάλλοντος.',
    'community.seeds.title': 'Εργαστήριο Permaculture',
    'community.seeds.description': 'Πρακτικά εργαστήρια για την εκμάθηση τεχνικών permaculture και βιώσιμης καλλιέργειας.',
    'community.energy.title': 'Εργαστήριο Βοτάνων',
    'community.energy.description': 'Μάθετε για τα τοπικά βότανα και τις θεραπευτικές τους ιδιότητες.',
    
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
    'contact.subtitle': 'Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες σχετικά με το πρόγραμμα "Νέοι για το Κλίμα στη Λέσβο".',
    'contact.address': 'Διεύθυνση',
    'contact.phone': 'Τηλέφωνο',
    'contact.email': 'Email',
    'contact.website': 'Ιστοσελίδα',
    'contact.contactInfo': 'Στοιχεία Επικοινωνίας',
    'contact.hours': 'Ώρες Λειτουργίας',
    'contact.monday': 'Δευτέρα - Παρασκευή',
    'contact.saturday': 'Σάββατο',
    'contact.sunday': 'Κυριακή',
    'contact.closed': 'Κλειστά',
    'contact.cta': 'Γίνετε μέρος της αλλαγής!',
    'contact.ctaDescription': 'Επικοινωνήστε μαζί μας για να συμμετέχετε στις δράσεις permaculture.',
    'contact.location': 'Ερεσός, Λέσβος',
    'contact.country': 'Ελλάδα',
    
    // Footer
    'footer.partners': 'Συνεργαζόμενοι Φορείς',
    'footer.rights': 'Όλα τα δικαιώματα διατηρούνται',
    'footer.privacy': 'Πολιτική Απορρήτου',
    'footer.terms': 'Όροι Χρήσης',
    'footer.description': 'Δημιουργώντας ένα βιώσιμο μέλλον για τη Λέσβο μέσω της permaculture και της περιβαλλοντικής εκπαίδευσης.',
    'footer.quickLinks': 'Γρήγοροι Σύνδεσμοι',
    'footer.aboutUs': 'Σχετικά με εμάς',
    'footer.contact': 'Επικοινωνία'
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
    'about.goal': 'Goal',
    'about.goalDescription': 'Climate awareness for youth',
    'about.values': 'Values',
    'about.valuesDescription': 'Sustainability and community action',
    'about.method': 'Method',
    'about.methodDescription': 'Practical permaculture learning',
    
    // Activities
    'activities.title': 'Program Activities',
    'activities.community.title': 'Community Activities',
    'activities.school.title': 'School Activities',
    'activities.readMore': 'Read more',
    
    // Community Activities - Updated with correct names
    'community.workshop.title': 'Introduction to Cultural Aspects',
    'community.workshop.description': 'Exploring cultural traditions and their relationship with the environment.',
    'community.garden.title': 'Art Intervention on the Beach',
    'community.garden.description': 'Creative art activities that highlight environmental awareness.',
    'community.compost.title': 'Communal Garden',
    'community.compost.description': 'Creating and maintaining community gardens with permaculture principles.',
    'community.water.title': 'Questionnaire and Waste Collection',
    'community.water.description': 'Research and practical action for environmental cleanliness.',
    'community.seeds.title': 'Permaculture Workshop',
    'community.seeds.description': 'Practical workshops for learning permaculture techniques and sustainable cultivation.',
    'community.energy.title': 'Herb Workshop',
    'community.energy.description': 'Learn about local herbs and their therapeutic properties.',
    
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
    'contact.subtitle': 'Contact us for more information about the "Youth for Climate in Lesvos" program.',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email', 
    'contact.website': 'Website',
    'contact.contactInfo': 'Contact Information',
    'contact.hours': 'Operating Hours',
    'contact.monday': 'Monday - Friday',
    'contact.saturday': 'Saturday',
    'contact.sunday': 'Sunday',
    'contact.closed': 'Closed',
    'contact.cta': 'Be part of the change!',
    'contact.ctaDescription': 'Contact us to participate in permaculture activities.',
    'contact.location': 'Eresos, Lesvos',
    'contact.country': 'Greece',
    
    // Footer
    'footer.partners': 'Partner Organizations',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.description': 'Creating a sustainable future for Lesvos through permaculture and environmental education.',
    'footer.quickLinks': 'Quick Links',
    'footer.aboutUs': 'About Us',
    'footer.contact': 'Contact'
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
