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
    'about.description': 'Μέσα από βιωματικά εργαστήρια, εκπαιδευτικές επισκέψεις και δημιουργικές δράσεις, καλλιεργούμε την οικολογική συνείδηση και ενδυναμώνουμε τους νέους της Λέσβου ως φορείς αλλαγής. Τους δίνουμε τα εργαλεία να εκφραστούν, να συνεργαστούν και να δημιουργήσουν ένα πιο ανθεκτικό και συνειδητοποιημένο μέλλον.',
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
    
    // Community Activities - Updated with 3 activities
    'community.workshop.title': 'Καθαρίζουμε και Δημιουργούμε',
    'community.workshop.description': 'Συλλέγουμε απορρίμματα από το περιβάλλον και τα μετατρέπουμε σε χρήσιμα αντικείμενα μέσω δημιουργικής ανακύκλωσης.',
    'community.garden.title': 'Από το Πιάτο στο Χώμα',
    'community.garden.description': 'Μαθαίνουμε την τέχνη της κομποστοποίησης και πώς τα οργανικά απόβλητα γίνονται πλούσιο χώμα για τα φυτά μας.',
    'community.compost.title': 'Κοινοτικός Κήπος και Food Forest',
    'community.compost.description': 'Δημιουργούμε και συντηρούμε κοινοτικούς κήπους και food forest με αρχές permaculture για βιώσιμη τροφική παραγωγή.',
    
    // School Activities - Greek names with 7 activities
    'school.education.title': 'Πράσινο Σχολείο',
    'school.education.description': 'Διαδραστικά μαθήματα για την κατανόηση των κλιματικών αλλαγών.',
    'school.garden.title': 'Ανακύκλωση Πλαστικών',
    'school.garden.description': 'Μαθαίνοντας να ανακυκλώνουμε πλαστικά υλικά αποτελεσματικά.',
    'school.recycling.title': 'Ανακύκλωση Νερού και Επεξεργασία Λυμάτων',
    'school.recycling.description': 'Κατανόηση των συστημάτων διαχείρισης νερού και λυμάτων.',
    'school.climate.title': 'Οι Μέλισσες και οι Επικονιαστές',
    'school.climate.description': 'Εξερεύνηση του ρόλου των μελισσών στο οικοσύστημα.',
    'school.biodiversity.title': 'Τοπικές Ποικιλίες και Σπόροι',
    'school.biodiversity.description': 'Γνωριμία με τις τοπικές ποικιλίες φυτών και τη διατήρηση σπόρων.',
    'school.sustainability.title': 'Θεατρικό Εργαστήρι για Παιδιά',
    'school.sustainability.description': 'Δημιουργική έκφραση μέσω θεάτρου για περιβαλλοντικά θέματα.',
    'school.upcycling.title': 'Δημιουργικό Upcycling Ρούχων',
    'school.upcycling.description': 'Μετατροπή παλαιών ρούχων σε νέα δημιουργικά κομμάτια.',
    
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
    'about.description': 'Through experiential workshops, educational visits and creative actions, we cultivate ecological awareness and empower the youth of Lesvos as agents of change. We give them the tools to express themselves, collaborate and create a more resilient and conscious future.',
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
    
    // Community Activities - English translations for 3 activities
    'community.workshop.title': 'We Clean and Create',
    'community.workshop.description': 'We collect waste from the environment and transform it into useful objects through creative recycling.',
    'community.garden.title': 'From Plate to Soil',
    'community.garden.description': 'We learn the art of composting and how organic waste becomes rich soil for our plants.',
    'community.compost.title': 'Community Garden and Food Forest',
    'community.compost.description': 'We create and maintain community gardens and food forests with permaculture principles for sustainable food production.',
    
    // School Activities - English translations for 7 activities
    'school.education.title': 'Green School',
    'school.education.description': 'Interactive lessons for understanding climate change.',
    'school.garden.title': 'Plastic Recycling',
    'school.garden.description': 'Learning to effectively recycle plastic materials.',
    'school.recycling.title': 'Water Recycling and Wastewater Treatment',
    'school.recycling.description': 'Understanding water and wastewater management systems.',
    'school.climate.title': 'Bees and Pollinators',
    'school.climate.description': 'Exploring the role of bees in the ecosystem.',
    'school.biodiversity.title': 'Local Varieties and Seeds',
    'school.biodiversity.description': 'Getting to know local plant varieties and seed preservation.',
    'school.sustainability.title': 'Theatre Workshop for Children',
    'school.sustainability.description': 'Creative expression through theatre for environmental topics.',
    'school.upcycling.title': 'Creative Clothing Upcycling',
    'school.upcycling.description': 'Transforming old clothes into new creative pieces.',
    
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
