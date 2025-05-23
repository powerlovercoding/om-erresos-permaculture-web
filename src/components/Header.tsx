
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, SunMoon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'el' ? 'en' : 'el');
  };

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'activities', href: '#activities' },
    { key: 'contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center overflow-hidden shadow-lg">
              <span className="text-white font-bold text-lg">Om</span>
            </div>
            <span className="font-heading font-semibold text-xl text-primary">
              Om <span className="text-accent">Erresos</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-gray-700 hover:text-primary transition-colors duration-200 font-medium relative ${
                    scrolled ? 'py-2 px-3' : 'py-2 px-3'
                  } rounded-md hover:bg-primary/10`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  {t(`nav.${item.key}`)}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1 bg-white/50 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 shadow-sm"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-medium">{language}</span>
            </Button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 bg-white/50 backdrop-blur-sm rounded-md shadow-sm border border-primary/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden border-t border-gray-200 py-4 bg-white/95 backdrop-blur-sm rounded-b-lg shadow-lg mt-3"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-primary transition-colors duration-200 hover:bg-primary/10"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  {t(`nav.${item.key}`)}
                </motion.button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
