
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, SunMoon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {
    language,
    setLanguage,
    t
  } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'el' ? 'en' : 'el');
  };

  const navItems = [{
    key: 'about',
    href: '#about'
  }, {
    key: 'activities',
    href: '#activities'
  }, {
    key: 'contact',
    href: '#contact'
  }];

  const scrollToSection = (href: string) => {
    console.log('Scrolling to:', href);

    // Close menu first for mobile
    setIsMenuOpen(false);

    // Add a small delay to ensure menu is closed before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        console.log('Successfully scrolled to:', href);
      } else {
        console.log('Element not found:', href);
      }
    }, 100);
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }} className="flex items-center space-x-3">
            <img src="/lovable-uploads/c2986775-ecdc-4368-b744-8a1c50f5881d.png" alt="Om Erresos Logo" style={{
            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))'
          }} className="h-10 w-auto drop-shadow-lg" />
            <span className={`font-heading font-semibold text-xl ${scrolled ? 'text-gray-900' : 'text-gray-800'}`}>
              ERESSOS
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.button 
                  key={item.key} 
                  onClick={() => scrollToSection(item.href)} 
                  className={`transition-all duration-200 font-medium relative px-4 py-2 rounded-lg border-2 ${
                    scrolled 
                      ? 'text-gray-800 hover:text-primary border-gray-300 hover:border-primary bg-white/50 hover:bg-primary/10' 
                      : 'text-gray-800 hover:text-primary border-gray-400 hover:border-primary bg-white/70 hover:bg-white/90'
                  } backdrop-blur-sm shadow-sm`} 
                  initial={{
                    opacity: 0,
                    y: -10
                  }} 
                  animate={{
                    opacity: 1,
                    y: 0
                  }} 
                  transition={{
                    duration: 0.3,
                    delay: 0.1 * index
                  }} 
                  whileHover={{
                    scale: 1.05,
                    y: -2
                  }}
                >
                  {t(`nav.${item.key}`)}
                </motion.button>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="outline" size="sm" onClick={toggleLanguage} className={`flex items-center space-x-1 ${scrolled ? 'bg-white/50 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 text-primary' : 'bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-gray-800'} shadow-sm`}>
              <Globe className="w-4 h-4" />
              <span className="uppercase font-medium">{language}</span>
            </Button>

            {/* Mobile Menu Button */}
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className={`md:hidden p-2 ${scrolled ? 'bg-white/50 backdrop-blur-sm border border-primary/20 text-primary' : 'bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800'} rounded-md shadow-sm`} onClick={() => {
            console.log('Mobile menu button clicked, current state:', isMenuOpen);
            setIsMenuOpen(!isMenuOpen);
          }}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && <motion.nav initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }} className="md:hidden border-t border-gray-200 py-4 bg-white/95 backdrop-blur-sm rounded-b-lg shadow-lg mt-3">
              {navItems.map((item, index) => <motion.div key={item.key} className="block w-full text-left py-3 px-4 text-gray-700 hover:text-primary transition-colors duration-200 hover:bg-primary/10 cursor-pointer" initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.1 * index,
            duration: 0.3
          }} onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile nav button clicked:', item.key, item.href);
            scrollToSection(item.href);
          }}>
                  {t(`nav.${item.key}`)}
                </motion.div>)}
            </motion.nav>}
        </AnimatePresence>
      </div>
    </header>;
};

export default Header;
