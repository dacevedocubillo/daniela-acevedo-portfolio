import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
      const current = tabs.find((tab) => {
        const section = document.getElementById(tab.id);
        if (!section) return false;
        const bounds = section.getBoundingClientRect();
        return bounds.top <= 130 && bounds.bottom >= 130;
      });
      if (current) setActiveTab(current.id);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveTab(sectionId);
  };

  return (
    <nav className={`simple-navigation ${isScrolled ? 'is-scrolled' : ''}`} aria-label="Main navigation">
      <div className="simple-nav-inner">
        <button className="simple-nav-brand" type="button" onClick={() => goTo('about')} aria-label="Go to introduction">
          <span>DA</span>
          <strong>Daniela Acevedo</strong>
        </button>

        <div className="simple-nav-links" aria-label="Portfolio sections">
          {tabs.map((tab) => (
            <button key={tab.id} type="button" className={activeTab === tab.id ? 'active' : ''} onClick={() => goTo(tab.id)}>
              {tab.label}
            </button>
          ))}
        </div>

        <button className="simple-menu-toggle" type="button" onClick={() => setIsMobileMenuOpen((open) => !open)} aria-expanded={isMobileMenuOpen} aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="simple-mobile-menu">
          {tabs.map((tab) => (
            <button key={tab.id} type="button" className={activeTab === tab.id ? 'active' : ''} onClick={() => goTo(tab.id)}>
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
