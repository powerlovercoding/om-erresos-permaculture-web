
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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      console.log('Element not found:', href);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
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
          </motion.div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button 
                  key={item.key} 
                  onClick={() => scrollToSection(item.href)} 
                  className={`transition-colors duration-200 font-medium relative ${scrolled ? 'text-gray-700 hover:text-primary py-2 px-3' : 'text-white hover:text-gray-200 py-2 px-3'} rounded-md ${scrolled ? 'hover:bg-primary/10' : 'hover:bg-white/10'}`} 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.3, delay: 0.1 * index }} 
                  whileHover={{ scale: 1.05 }}
                >
                  {t(`nav.${item.key}`)}
                  <motion.span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 ${scrolled ? 'bg-primary' : 'bg-white'} origin-left`} 
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
              className={`flex items-center space-x-1 ${scrolled ? 'bg-white/50 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 text-primary' : 'bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white'} shadow-sm`}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-medium">{language}</span>
            </Button>

            {/* Mobile Menu Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className={`md:hidden p-2 ${scrolled ? 'bg-white/50 backdrop-blur-sm border border-primary/20 text-primary' : 'bg-white/20 backdrop-blur-sm border border-white/30 text-white'} rounded-md shadow-sm`} 
              onClick={() => {
                console.log('Mobile menu button clicked, current state:', isMenuOpen);
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Mobile nav button clicked:', item.key, item.href);
                    scrollToSection(item.href);
                  }}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-primary transition-colors duration-200 hover:bg-primary/10 cursor-pointer" 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  type="button"
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
