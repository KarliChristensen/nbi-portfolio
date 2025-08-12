import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const ViewManager = ({ homeContent, aboutContent }) => {
  const [currentView, setCurrentView] = useState('main');
  const [currentSection, setCurrentSection] = useState('home');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Sync state with URL
    if (pathname === '/about') {
      setCurrentView('about');
    } else {
      setCurrentView('main');
    }
  }, [pathname]);

  const navigateToSection = (sectionId) => {
    if (sectionId === 'about') {
      setCurrentView('about');
      router.push('/about', { shallow: true });
    } else {
      if (currentView === 'about') {
        setCurrentView('main');
        router.push('/', { shallow: true });
        // Delay scroll until transition completes
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth'
          });
        }, 400);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth'
        });
      }
      setCurrentSection(sectionId);
    }
  };

  return (
    <div className="view-manager">
      <div className={`content-slider ${currentView === 'about' ? 'show-about' : 'show-main'}`}>
        <div className="main-view">
          {React.cloneElement(homeContent, { navigateToSection, currentSection })}
        </div>
        <div className="about-view">
          {React.cloneElement(aboutContent, { navigateToSection })}
        </div>
      </div>
    </div>
  );
};

export default ViewManager;
