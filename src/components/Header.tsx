import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Car Rentals Montenegro', href: '#fleet' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top contact bar */}
      <div className="bg-black text-white py-2 hidden sm:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>+382 68 269 246</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>Podgorica, Montenegro</span>
            </div>
          </div>
          <div className="text-gold-500">Available 24/7</div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold">
            <span className={`${isScrolled ? 'text-black' : 'text-white'}`}>DV</span>
            <span className="text-gold-500"> Transfers</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors hover:text-gold-500 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-gold-500 text-black px-4 lg:px-6 py-2 rounded-full font-semibold hover:bg-gold-600 transition-colors text-sm lg:text-base">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mx-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-800 hover:text-gold-500 transition-colors border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-4">
              <button className="w-full bg-gold-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-gold-600 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;