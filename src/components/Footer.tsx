
import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const {
    t
  } = useLanguage();
  const partnerLogos = [
    {
      name: 'Municipality of West Lesvos',
      logo: '/lovable-uploads/14233595-7b47-43b0-8ea8-55956df06e33.png'
    },
    {
      name: 'Partner Organization 2',
      logo: '/lovable-uploads/6b8345ed-d409-4218-96a0-68d8c09c750a.png'
    },
    {
      name: 'Partner Organization 3', 
      logo: '/lovable-uploads/8dd8608e-2d58-443d-ac43-a2b5dd6f3ec3.png'
    }
  ];
  const socialLinks = [{
    icon: Facebook,
    href: '#',
    label: 'Facebook'
  }, {
    icon: Instagram,
    href: '#',
    label: 'Instagram'
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter'
  }, {
    icon: Mail,
    href: 'mailto:info@omerresos.gr',
    label: 'Email'
  }];
  return <footer className="bg-gray-900 text-white">
      {/* Partners Section */}
      <div className="border-b border-gray-800">
        <div className="container-custom section-padding py-12">
          <h3 className="text-xl font-heading font-semibold text-center mb-8">
            {t('footer.partners')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerLogos.map((partner, index) => <div key={index} className="flex items-center justify-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors min-h-[160px]">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-full max-w-[300px] max-h-[120px] object-contain"
                />
              </div>)}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img alt="Om Erresos Logo" className="w-10 h-10 object-contain" src="/lovable-uploads/791924a5-491b-4fb2-9044-8501763c4d45.png" />
              <span className="font-heading font-semibold text-xl">ERESSOS</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.aboutUs')}
                </a>
              </li>
              <li>
                <a href="#activities" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.activities')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t('contact.title')}</h4>
            <div className="space-y-2 text-gray-300">
              <p>{t('contact.location')}, {t('contact.country')}</p>
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
    </footer>;
};

export default Footer;
