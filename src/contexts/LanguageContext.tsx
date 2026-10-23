
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
    'hero.title': 'Οι νέοι για το Κλίμα στη Λέσβο.',
    'hero.subtitle': 'Μια Νέα γενιά για το κλίμα με γνώση, φαντασία και φροντίδα',
    'hero.description': 'Ανακαλύψτε πως συνδιάζοντας πρακτικές βιωσιμότητας, όπως η αναγεννητική καλλιέργεια, η ανακύκλωση και η επαναχρησιμοποίηση και με συλλογικές δράσεις προσπαθούμε να ενδυναμώσουμε τη νεολαία της Λέσβου ως φορείς αλλαγής.',
    'hero.cta': 'Μάθετε Περισσότερα',
    
    // About
    'about.title': 'Σκοπός & Περιγραφή του Προγράμματος',
    'about.description': 'Μέσα από βιωματικά εργαστήρια, εκπαιδευτικές επισκέψεις και δημιουργικές δράσεις, καλλιεργούμε την οικολογική συνείδηση και ενδυναμώνουμε τους νέους της Λέσβου ως φορείς αλλαγής. Τους δίνουμε τα εργαλεία να εκφραστούν, να συνεργαστούν και να δημιουργήσουν ένα πιο ανθεκτικό και συνειδητοποιημένο μέλλον.',
    'about.mission': 'Το πρόγραμμα περιέχει δράσεις όπως ανακύκλωση, κομποστοποίηση, θεματικά εργαστήρια σε σχολεία, δημιουργία κοινοτικών κήπων και καλλιτεχνικές δημιουργίες με επίκεντρο το περιβάλλον. Μέσα από τη γνώση, τη συνεργασία και την πράξη, καλλιεργεί ένα δίκτυο ενεργών πολιτών που αναλαμβάνουν ρόλο στη βιώσιμη αλλαγή.',
    'about.goal': 'Στόχος',
    'about.goalDescription': 'Ευαισθητοποίηση νέων για το κλίμα',
    'about.values': 'Αξίες',
    'about.valuesDescription': 'Βιωσιμότητα και κοινοτική δράση',
    'about.method': 'Μέθοδος',
    'about.methodDescription': 'Βιωματική μάθηση και η συμμετοχική δράση',
    
    // Activities
    'activities.title': 'Οι δράσεις μας',
    'activities.community.title': 'Δραστηριότητες με την κοινότητα',
    'activities.school.title': 'Σχολικές Δραστηριότητες',
    'activities.readMore': 'Διαβάστε περισσότερα',
    
    // Community Activities
    'community.workshop.title': 'Καθαρίζουμε και Δημιουργούμε',
    'community.workshop.description': 'Μια δράση με ουσία: συγκεντρωνόμαστε για να καθαρίσουμε την παραλία και να μετατρέψουμε τα απορρίμματα σε έργα τέχνης.',
    'community.workshop.fullDescription': 'Μια δράση με ουσία: συγκεντρωνόμαστε για να καθαρίσουμε την παραλία και να μετατρέψουμε τα απορρίμματα σε έργα τέχνης. Μέσα από μια δημιουργική διαμαρτυρία, στέλνουμε ένα δυνατό μήνυμα για την προστασία του περιβάλλοντος. Τρίτη 5 Αυγούστου | 18:00 | Κάμπινγκ Σκάλας Ερεσού (πίσω από την καντίνα "Χελώνα").',
    'community.garden.title': 'Από το Πιάτο στο Χώμα',
    'community.garden.description': 'Μια συνεργασία με καταστήματα εστίασης στη Σκάλα Ερεσού, όπου ερευνούμε τις πρακτικές διαχείρισης οργανικών αποβλήτων.',
    'community.garden.fullDescription': 'Μια συνεργασία με καταστήματα εστίασης στη Σκάλα Ερεσού, όπου ερευνούμε τις πρακτικές διαχείρισης οργανικών αποβλήτων. Κατά τη διάρκεια του καλοκαιριού, συλλέγουμε υπολείμματα τροφών και τα μετατρέπουμε σε κομπόστ στον πειραματικό μας αγρό. Ένα βήμα προς έναν κύκλο ζωής χωρίς απόβλητα.',
    'community.compost.title': 'Κοινοτικός Κήπος και Food Forest',
    'community.compost.description': 'Με βιώσιμες αρχές καλλιέργειας και τεχνικές περμακουλτούρας, δημιουργούμε ένα κοινοτικό οικοσύστημα.',
    'community.compost.fullDescription': 'Με βιώσιμες αρχές καλλιέργειας και τεχνικές περμακουλτούρας, δημιουργούμε ένα κοινοτικό οικοσύστημα. Οι νέοι μαθαίνουν να συνεργάζονται με τη φύση και να καλλιεργούν διατροφική αυτάρκεια, μεταμορφώνοντας έναν εγκαταλελειμμένο χώρο σε πηγή ζωής.',
    
    // School Activities - Updated with new texts
    'school.education.title': 'Πράσινο Σχολείο',
    'school.education.description': 'Το κομπόστ που φτιάξαμε με φροντίδα επιστρέφει στο ΓΕΛ Άντισσας.',
    'school.education.fullDescription': 'Το κομπόστ που φτιάξαμε με φροντίδα επιστρέφει στο ΓΕΛ Άντισσας. Το φθινόπωρο, μαζί με μαθητές και εκπαιδευτικούς, φυτεύουμε 15 δέντρα και τοποθετούμε παγκάκια, μεταμορφώνοντας την αυλή σε χώρο ξεκούρασης και οικολογικής συνείδησης.',
    'school.garden.title': 'Ανακύκλωση Πλαστικών',
    'school.garden.description': 'Το Πειραματικό Λύκειο Μυτιλήνης φιλοξενεί για 3 ημέρες το εργαστήριο ανακύκλωσης πλαστικών καπακιών, όπου πρόσφυγες μετατρέπουν απορρίμματα σε χρήσιμα αντικείμενα.',
    'school.garden.fullDescription': 'Το Πειραματικό Λύκειο Μυτιλήνης φιλοξενεί για 3 ημέρες το εργαστήριο ανακύκλωσης πλαστικών καπακιών, όπου πρόσφυγες μετατρέπουν απορρίμματα σε χρήσιμα αντικείμενα. Η δράση συνοδεύεται από ενημέρωση για τις επιπτώσεις του πλαστικού στη φύση, με στόχο την ευαισθητοποίηση των μαθητών. Σε συνεργασία με την ΑΜΚΕ "Stand by Me Lesvos" & τον σύλλογο "Λέσβος Χωρίς Πλαστικά".',
    'school.recycling.title': 'Ανακύκλωση Νερού και Επεξεργασία Λυμάτων',
    'school.recycling.description': 'Το Λύκειο Καλλονής επισκέπτεται τον πειραματικό χώρο HYDRO1 για να γνωρίσει πώς τα λύματα μετατρέπονται σε νερό άρδευσης.',
    'school.recycling.fullDescription': 'Το Λύκειο Καλλονής επισκέπτεται τον πειραματικό χώρο HYDRO1 για να γνωρίσει πώς τα λύματα μετατρέπονται σε νερό άρδευσης. Στη συνέχεια, στο HYDRO2, παρακολουθούν στην πράξη την άρδευση ενός αγροδασικού συστήματος με το επεξεργασμένο νερό. Συνεργασία με το Πανεπιστήμιο Αιγαίου & το έργο Horizon2020 "Hydrousa".',
    'school.climate.title': 'Οι Μέλισσες και οι Επικονιαστές',
    'school.climate.description': 'Ενημερωνόμαστε για τη λεσβιακή μελισσοκομία και την ποικιλότητα των επικονιαστών, καθώς και για τις απειλές που αντιμετωπίζουν.',
    'school.climate.fullDescription': 'Ενημερωνόμαστε για τη λεσβιακή μελισσοκομία και την ποικιλότητα των επικονιαστών, καθώς και για τις απειλές που αντιμετωπίζουν. Η δράση ολοκληρώνεται με εργαστήριο πολλαπλασιασμού φυτών φιλικών προς τις μέλισσες και τους επικονιαστές. Συνεργασία με τον Μελισσοκομικό Συνεταιρισμό Λέσβου.',
    'school.biodiversity.title': 'Τοπικές Ποικιλίες και Σπόροι',
    'school.biodiversity.description': 'Το Γυμνάσιο Άγρας φιλοξενεί την ομάδα του Αιγίλοπα και ενημερώνεται για τη σημασία διατήρησης των τοπικών ποικιλιών καλλιεργούμενων φυτών.',
    'school.biodiversity.fullDescription': 'Το Γυμνάσιο Άγρας φιλοξενεί την ομάδα του Αιγίλοπα και ενημερώνεται για τη σημασία διατήρησης των τοπικών ποικιλιών καλλιεργούμενων φυτών. Οι μαθητές, πολλοί εκ των οποίων προέρχονται από αγροτικές οικογένειες, ενθαρρύνονται να συνεχίσουν την παράδοση της βιώσιμης γεωργίας. Συνεργασία με την ΑΜΚΕ "Αιγίλοπας – Δίκτυο για τη Βιοποικιλότητα".',
    'school.sustainability.title': 'Θεατρικό Εργαστήρι για Εφήβους',
    'school.sustainability.description': 'Μέσα από το θεατρικό παιχνίδι, οι έφηβοι της Λέσβου ανακαλύπτουν τη δύναμη της έκφρασης και "δίνουν φωνή στη Γη".',
    'school.sustainability.fullDescription': 'Μέσα από το θεατρικό παιχνίδι, οι έφηβοι της Λέσβου ανακαλύπτουν τη δύναμη της έκφρασης και "δίνουν φωνή στη Γη". Η τέχνη γίνεται εργαλείο για την κατανόηση και την αντιμετώπιση της κλιματικής κρίσης.',
    'school.upcycling.title': 'Δημιουργικό Upcycling Ρούχων',
    'school.upcycling.description': 'Μαθητές γυμνασίου και λυκείου μαθαίνουν βασικές δεξιότητες ραπτικής και μετατρέπουν παλιά ρούχα σε χρήσιμα αντικείμενα.',
    'school.upcycling.fullDescription': 'Μαθητές γυμνασίου και λυκείου μαθαίνουν βασικές δεξιότητες ραπτικής και μετατρέπουν παλιά ρούχα σε χρήσιμα αντικείμενα. Το εργαστήριο ενισχύει τη δημιουργικότητα, τη συνεργασία και την οικολογική συνείδηση των εφήβων.',
    
    // Featured Activity
    'activities.featured.title': 'Εισήγηση',
    'featured.badge': 'Είσήγηση στο πολιτισμικό κέντρο',
    'featured.climate.title': 'Η Κλιματική Κρίση στο Νησί μας',
    'featured.climate.description': 'Μια ολοήμερη δράση ευαισθητοποίησης γύρω από την κλιματική κρίση, τις επιπτώσεις της στη Λέσβο και τις συλλογικές απαντήσεις που μπορούμε να δώσουμε. Μέσα από θεωρητικές παρουσιάσεις, διάλογο, συλλογικό γεύμα και συμμετοχικό σχεδιασμό δράσεων, καλλιεργούμε τη γνώση, την αλληλεγγύη και την περιβαλλοντική ευθύνη.',
    'featured.climate.date': 'Σάββατο 28 Ιουνίου',
    'featured.climate.location': 'Πολιτιστικό Κέντρο Ερεσού',
    'featured.climate.schedule': 'Πρόγραμμα Ημέρας',
    'featured.climate.time1': '🔸 10:30 – 12:00 | Η κλιματική κρίση στην ανατολική Μεσόγειο και οι τοπικές επιπτώσεις',
    'featured.climate.time2': '🔸 12:30 – 14:00 | Επανασχεδιασμός της ανθρώπινης δραστηριότητας για την προσαρμογή στις νέες συνθήκες',
    'featured.climate.time3': '🔸 14:00 – 15:30 | Συλλογικός μπουφές – τρώμε όλοι μαζί',
    'featured.climate.time4': '🔸 15:30 – 17:00 | Εργαστήριο συμμετοχικού σχεδιασμού & παρουσίαση της δράσης "Υιοθεσία Βελανιδιάς"',
    'featured.climate.goalTitle': 'Στόχος της Δράσης',
    'featured.climate.goal': 'Στόχος της δράσης είναι να ενεργοποιήσει την τοπική κοινωνία και να δώσει φωνή σε όσους θέλουν να γίνουν μέρος της λύσης. Μέσα από γνώση και συλλογική δράση, χτίζουμε ανθεκτικές κοινότητες μπροστά στην κλιματική πρόκληση.',
    
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
    'footer.description': 'Δημιουργώντας ένα βιώσιμο μέλλον για τη Λέσβο μέσω της περιβαλλοντικής εκπαίδευσης.',
    'footer.quickLinks': 'Γρήγοροι Σύνδεσμοι',
    'footer.aboutUs': 'Σχετικά με εμάς',
    'footer.contact': 'Επικοινωνία'
  },
  en: {
    // Header
    'nav.about': 'About',
    'nav.activities': 'Activities',
    'nav.contact': 'Contact',
    
    // Hero - Updated English translations
    'hero.title': 'Youth-coordinated actions for climate change in Lesvos',
    'hero.subtitle': 'A New Generation with Knowledge, Imagination and Care',
    'hero.description': 'Discover how by combining sustainability practices, such as regenerative agriculture, recycling and reuse, and through collective actions, we strive to empower youth, community and our environment.',
    'hero.cta': 'Learn More',
    
    // About
    'about.title': 'Program Purpose & Description',
    'about.description': 'Through experiential workshops, educational visits and creative actions, we cultivate ecological awareness and empower the youth of Lesvos as agents of change. We give them the tools to express themselves, collaborate and create a more resilient and conscious future.',
    'about.mission': 'The program includes activities such as recycling, composting, thematic workshops in schools, creating community gardens and artistic creations focused on the environment. Through knowledge, collaboration and action, it cultivates a network of active citizens who take on a role in sustainable change.',
    'about.goal': 'Goal',
    'about.goalDescription': 'Climate awareness for youth',
    'about.values': 'Values',
    'about.valuesDescription': 'Sustainability and community action',
    'about.method': 'Method',
    'about.methodDescription': 'Experiential learning and participatory action',
    
    // Activities
    'activities.title': 'Our Actions',
    'activities.community.title': 'Community Activities',
    'activities.school.title': 'School Activities',
    'activities.readMore': 'Read more',
    
    // Community Activities
    'community.workshop.title': 'We Clean and Create',
    'community.workshop.description': 'A meaningful action: we gather to clean the beach and transform waste into works of art.',
    'community.workshop.fullDescription': 'A meaningful action: we gather to clean the beach and transform waste into works of art. Through a creative protest, we send a powerful message for environmental protection. Tuesday, August 5 | 6:00 PM | Skala Eressos Camping (behind the "Turtle" canteen).',
    'community.garden.title': 'From Plate to Soil',
    'community.garden.description': 'A collaboration with restaurants in Skala Eressos, where we explore organic waste management practices.',
    'community.garden.fullDescription': 'A collaboration with restaurants in Skala Eressos, where we explore organic waste management practices. During the summer, we collect food scraps and transform them into compost in our experimental farm. A step towards a zero-waste life cycle.',
    'community.compost.title': 'Community Garden and Food Forest',
    'community.compost.description': 'With sustainable cultivation principles and permaculture techniques, we create a community ecosystem.',
    'community.compost.fullDescription': 'With sustainable cultivation principles and permaculture techniques, we create a community ecosystem. Young people learn to collaborate with nature and cultivate nutritional self-sufficiency, transforming an abandoned space into a source of life.',
    
    // School Activities - English translations with updated content
    'school.education.title': 'Green School',
    'school.education.description': 'The compost we carefully made returns to the General high school of Antissa.',
    'school.education.fullDescription': 'The compost we carefully made returns to the General high school of Antissa. In autumn, together with students and teachers, we plant 15 trees and place benches, transforming the courtyard into a space for rest and ecological awareness.',
    'school.garden.title': 'Plastic Recycling',
    'school.garden.description': 'The Experimental high school of Mytilene hosts a 3-day workshop on recycling plastic caps, where refugees transform waste into useful objects.',
    'school.garden.fullDescription': 'The Experimental high school of Mytilene hosts a 3-day workshop on recycling plastic caps, where refugees transform waste into useful objects. The action is accompanied by information about the effects of plastic on nature, aiming to raise student awareness. In collaboration with the NGO "Stand by Me Lesvos" & the association "Lesvos Plastic Free".',
    'school.recycling.title': 'Water Recycling and Wastewater Treatment',
    'school.recycling.description': 'The Lyceum of Kalloni visits the experimental space HYDRO1 to learn how wastewater is converted into irrigation water.',
    'school.recycling.fullDescription': 'The Lyceum of Kalloni visits the experimental space HYDRO1 to learn how wastewater is converted into irrigation water. Then, at HYDRO2, they observe in practice the irrigation of an agroforestry system with the treated water. Collaboration with the University of the Aegean & the Horizon2020 project "Hydrousa".',
    'school.climate.title': 'Bees and Pollinators',
    'school.climate.description': 'We learn about Lesvos beekeeping and the diversity of pollinators, as well as the threats they face.',
    'school.climate.fullDescription': 'We learn about Lesvos beekeeping and the diversity of pollinators, as well as the threats they face. The action concludes with a workshop on propagating plants friendly to bees and pollinators. Collaboration with the Beekeeping Cooperative of Lesvos.',
    'school.biodiversity.title': 'Local Varieties and Seeds',
    'school.biodiversity.description': 'The Gymnasium of Agra hosts the Aegilops team and learns about the importance of preserving local varieties of cultivated plants.',
    'school.biodiversity.fullDescription': 'The Gymnasium of Agra hosts the Aegilops team and learns about the importance of preserving local varieties of cultivated plants. Students, many of whom come from farming families, are encouraged to continue the tradition of sustainable agriculture. Collaboration with the NGO "Aegilops – Network for Biodiversity".',
    'school.sustainability.title': 'Theatre Workshop for Teenagers',
    'school.sustainability.description': 'Through theatrical play, the teenagers of Lesvos discover the power of expression and "give voice to the Earth".',
    'school.sustainability.fullDescription': 'Through theatrical play, the teenagers of Lesvos discover the power of expression and "give voice to the Earth". Art becomes a tool for understanding and addressing the climate crisis.',
    'school.upcycling.title': 'Creative Clothing Upcycling',
    'school.upcycling.description': 'Middle and high school students learn basic sewing skills and transform old clothes into useful objects.',
    'school.upcycling.fullDescription': 'Middle and high school students learn basic sewing skills and transform old clothes into useful objects. The workshop enhances creativity, collaboration and ecological awareness of teenagers.',
    
    // Featured Activity
    'activities.featured.title': 'Presentation',
    'featured.badge': 'Presentation at the Cultural Center',
    'featured.climate.title': 'The Climate Crisis on Our Island',
    'featured.climate.description': 'A full-day awareness action around the climate crisis, its impacts on Lesvos and the collective responses we can give. Through theoretical presentations, dialogue, collective meal and participatory action planning, we cultivate knowledge, solidarity and environmental responsibility.',
    'featured.climate.date': 'Saturday, June 28',
    'featured.climate.location': 'Cultural Center of Eresos',
    'featured.climate.schedule': 'Daily Schedule',
    'featured.climate.time1': '🔸 10:30 – 12:00 | The climate crisis in the eastern Mediterranean and local impacts',
    'featured.climate.time2': '🔸 12:30 – 14:00 | Redesigning human activity for adaptation to new conditions',
    'featured.climate.time3': '🔸 14:00 – 15:30 | Collective buffet – we all eat together',
    'featured.climate.time4': '🔸 15:30 – 17:00 | Participatory design workshop & presentation of the "Oak Tree Adoption" action',
    'featured.climate.goalTitle': 'Action Goal',
    'featured.climate.goal': 'The goal of the action is to activate the local community and give voice to those who want to become part of the solution. Through knowledge and collective action, we build resilient communities in the face of the climate challenge.',
    
    // Contact - Updated English translation
    'contact.title': 'Contact Information',
    'contact.subtitle': 'Contact us for more information about the "Youth-coordinated actions for climate change in Lesvos" program.',
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
    'footer.description': 'Creating a sustainable future for Lesvos through environmental education.',
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
