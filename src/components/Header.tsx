
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  // Add scroll effect with mobile header hiding
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Only hide header on mobile (screen width < 768px)
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - hide header
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show header
          setIsVisible(true);
        }
      } else {
        // Always visible on desktop
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-3 md:py-4'
    } ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="w-full max-w-none px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[48px] md:min-h-[56px] w-full">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }} 
            className="flex items-center space-x-2 md:space-x-3 flex-shrink-0"
          >
            <img 
              src="/lovable-uploads/c2986775-ecdc-4368-b744-8a1c50f5881d.png" 
              alt="Om Erresos Logo" 
              style={{
                filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))'
              }} 
              className="h-6 w-auto md:h-10 drop-shadow-lg flex-shrink-0" 
              loading="eager"
              decoding="async"
            />
            <span className={`font-heading font-semibold text-sm md:text-xl whitespace-nowrap ${
              scrolled ? 'text-gray-900' : 'text-gray-800'
            }`}>
              ERESSOS
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block flex-shrink-0">
            <NavigationMenuList className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.button 
                  key={item.key} 
                  onClick={() => scrollToSection(item.href)} 
                  className={`transition-all duration-200 font-medium relative px-4 py-2 rounded-lg border-2 whitespace-nowrap ${
                    scrolled 
                      ? 'text-gray-800 hover:text-primary border-gray-300 hover:border-primary bg-white/50 hover:bg-primary/10' 
                      : 'text-gray-800 hover:text-primary border-gray-400 hover:border-primary bg-white/70 hover:bg-white/90'
                  } backdrop-blur-sm shadow-sm`} 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.3, delay: 0.1 * index }} 
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {t(`nav.${item.key}`)}
                </motion.button>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLanguage} 
              className={`flex items-center space-x-1 px-2 py-1 text-xs md:text-sm whitespace-nowrap ${
                scrolled 
                  ? 'bg-white/50 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 text-primary' 
                  : 'bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-gray-800'
              } shadow-sm`}
            >
              <Globe className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span className="uppercase font-medium">{language}</span>
            </Button>

            {/* Mobile Menu Sheet */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }} 
                  className={`md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0 ${
                    scrolled 
                      ? 'bg-white/50 backdrop-blur-sm border border-primary/20 text-primary' 
                      : 'bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800'
                  } rounded-md shadow-sm`}
                  onClick={() => {
                    console.log('Mobile menu button clicked, current state:', isMenuOpen);
                  }}
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 max-w-[85vw] bg-gradient-to-br from-white/95 to-primary/5 backdrop-blur-xl border-l border-primary/20">
                <div className="flex flex-col space-y-6 mt-8 h-full overflow-y-auto">
                  {/* Logo in mobile menu */}
                  <div className="flex items-center space-x-3 px-2 pb-4 border-b border-primary/20">
                    <img 
                      src="/lovable-uploads/c2986775-ecdc-4368-b744-8a1c50f5881d.png" 
                      alt="Om Erresos Logo" 
                      className="h-8 w-auto drop-shadow-lg flex-shrink-0" 
                    />
                    <span className="font-heading font-semibold text-lg text-gray-800">
                      ERESSOS
                    </span>
                  </div>

                  {/* Navigation Items */}
                  <nav className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.button 
                        key={item.key}
                        onClick={() => scrollToSection(item.href)}
                        className="w-full text-left py-4 px-6 text-gray-800 hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-xl border border-transparent hover:border-primary/20 backdrop-blur-sm font-medium"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {t(`nav.${item.key}`)}
                      </motion.button>
                    ))}
                  </nav>

                  {/* Language Toggle in mobile menu */}
                  <div className="pt-4 border-t border-primary/20 mt-auto">
                    <Button 
                      variant="outline" 
                      onClick={toggleLanguage} 
                      className="w-full flex items-center justify-center space-x-2 bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary font-medium py-3"
                    >
                      <Globe className="w-5 h-5" />
                      <span className="uppercase">{language}</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
