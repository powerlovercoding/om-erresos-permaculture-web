import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
const PartnerLogos = () => {
  const {
    t
  } = useLanguage();
  const partnerLogos = [{
    name: 'Municipality of West Lesvos',
    logo: '/lovable-uploads/14233595-7b47-43b0-8ea8-55956df06e33.png'
  }, {
    name: 'Partner Organization 2',
    logo: '/lovable-uploads/6b8345ed-d409-4218-96a0-68d8c09c750a.png'
  }, {
    name: 'Partner Organization 3',
    logo: '/lovable-uploads/8dd8608e-2d58-443d-ac43-a2b5dd6f3ec3.png'
  }];
  return <section className="bg-gray-50 py-16">
      <div className="container-custom section-padding">
        <h3 className="text-xl font-heading font-semibold text-center mb-8 text-gray-900">
          {t('footer.partners')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerLogos.map((partner, index) => <div key={index} className="flex items-center justify-center p-6 rounded-lg shadow-sm transition-shadow hover:shadow-md min-h-[160px] bg-sky-900">
              <img src={partner.logo} alt={partner.name} className="w-full h-full max-w-[300px] max-h-[120px] object-contain" />
            </div>)}
        </div>
      </div>
    </section>;
};
export default PartnerLogos;