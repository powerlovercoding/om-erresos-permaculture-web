
import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const partnerLogos = [
    { name: 'EU', logo: 'EU' },
    { name: 'Ministry', logo: 'MIN' },
    { name: 'University', logo: 'UNI' },
    { name: 'NGO', logo: 'NGO' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:info@omerresos.gr', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Partners Section */}
      <div className="border-b border-gray-800">
        <div className="container-custom section-padding py-12">
          <h3 className="text-xl font-heading font-semibold text-center mb-8">
            {t('footer.partners')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{partner.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">Om</span>
              </div>
              <span className="font-heading font-semibold text-xl">Om Erresos</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Δημιουργώντας ένα βιώσιμο μέλλον για τη Λέσβο μέσω της permaculture και της περιβαλλοντικής εκπαίδευσης.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Γρήγοροι Σύνδεσμοι</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  Σχετικά με εμάς
                </a>
              </li>
              <li>
                <a href="#activities" className="text-gray-300 hover:text-white transition-colors">
                  Δραστηριότητες
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Επικοινωνία
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Επικοινωνία</h4>
            <div className="space-y-2 text-gray-300">
              <p>Ερεσός, Λέσβος</p>
              <p>+30 22530 53000</p>
              <p>info@omerresos.gr</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Om Erresos. {t('footer.rights')}.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
