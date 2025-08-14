"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

// Define the L-shaped spatial layout
const SECTIONS = {
  landing: { x: 0, y: 0, route: '/#home' },
  about: { x: 1, y: 0, route: '/#about' },
  projects: { x: 0, y: 1, route: '/#projects' }
};

// Calculate path between two sections for L-shaped layout
const calculatePath = (from, to) => {
  const fromCoords = SECTIONS[from];
  const toCoords = SECTIONS[to];
  
  if (from === to) return [from];
  
  if (from === 'projects' && to === 'about') {
    return ['projects', 'landing', 'about'];
  }
  
  if (from === 'about' && to === 'projects') {
    return ['about', 'landing', 'projects'];
  }
  
  if (
    (from === 'landing' && to === 'about') ||
    (from === 'about' && to === 'landing') ||
    (from === 'landing' && to === 'projects') ||
    (from === 'projects' && to === 'landing')
  ) {
    return [from, to];
  }
  
  return [from, to];
};

const SpatialNavigation = ({ landingContent, aboutContent, projectsContent }) => {
  // Add these new state variables
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });
  
  const [currentSection, setCurrentSection] = useState('landing');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionQueue, setTransitionQueue] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const lastWheelTime = useRef(0);

  // Determine current section from pathname
  useEffect(() => {
    const section = Object.keys(SECTIONS).find(key => 
      SECTIONS[key].route === pathname
    ) || 'landing';
    setCurrentSection(section);
  }, [pathname]);

  // Process transition queue
  useEffect(() => {
    if (transitionQueue.length > 0 && !isTransitioning) {
      const nextSection = transitionQueue[0];
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentSection(nextSection);
        setTransitionQueue(prev => prev.slice(1));
        
        setTimeout(() => {
          setIsTransitioning(false);
          
          if (transitionQueue.length === 1) {
            router.push(SECTIONS[nextSection].route, { shallow: true });
          }
        }, 600);
      }, 50);
    }
  }, [transitionQueue, isTransitioning, router]);

  // Enhanced wheel event handler for scroll navigation
  useEffect(() => {
    const handleWheel = (e) => {
      const now = Date.now();
      
      // Ignore rapid wheel events (trackpad scrolling)
      if (now - lastWheelTime.current < 100) {
        return;
      }
      
      lastWheelTime.current = now;
      
      // Only handle navigation if we're not already transitioning
      if (isTransitioning || transitionQueue.length > 0) {
        e.preventDefault();
        return;
      }

      // Check if we're in the projects section and there's scrollable content
      if (currentSection === 'projects') {
        const projectsElement = document.querySelector('.projects-section');
        if (projectsElement) {
          const { scrollTop, scrollHeight, clientHeight } = projectsElement;
          const isAtTop = scrollTop <= 10;
          const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
          
          // Allow normal scrolling within projects section
          if (!isAtTop && !isAtBottom) {
            return;
          }
          
          // Handle navigation only at scroll boundaries
          if (e.deltaY < 0 && isAtTop) {
            // Scrolling up from top of projects -> go to landing
            e.preventDefault();
            navigateToSection('landing');
            return;
          }
          
          if (e.deltaY > 0 && isAtBottom) {
            // At bottom of projects, do nothing or handle as needed
            return;
          }
        }
      }

      // Handle section navigation for other sections
      const threshold = 50; // Minimum wheel delta to trigger navigation
      
      if (Math.abs(e.deltaY) < threshold) return;
      
      e.preventDefault();
      
      // Clear any existing scroll timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Set scrolling state
      setIsScrolling(true);
      
      // Reset scrolling state after a delay
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
      
      // Determine navigation direction and target
      let targetSection = currentSection;
      
      if (e.deltaY > 0) { // Scrolling down
        switch (currentSection) {
          case 'landing':
            targetSection = 'projects';
            break;
          case 'about':
            targetSection = 'landing';
            break;
          // projects stays at projects (or could go somewhere else)
        }
      } else { // Scrolling up
        switch (currentSection) {
          case 'projects':
            targetSection = 'landing';
            break;
          case 'landing':
            targetSection = 'about';
            break;
          // about stays at about (or could go somewhere else)
        }
      }
      
      if (targetSection !== currentSection) {
        navigateToSection(targetSection);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      
      return () => {
        container.removeEventListener('wheel', handleWheel);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, [currentSection, isTransitioning, transitionQueue.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isTransitioning || transitionQueue.length > 0) return;
      
      let targetSection = currentSection;
      
      switch (e.key) {
        case 'ArrowRight':
          if (currentSection === 'landing') targetSection = 'about';
          break;
        case 'ArrowLeft':
          if (currentSection === 'about') targetSection = 'landing';
          break;
        case 'ArrowDown':
          if (currentSection === 'landing') targetSection = 'projects';
          if (currentSection === 'about') targetSection = 'landing';
          break;
        case 'ArrowUp':
          if (currentSection === 'projects') targetSection = 'landing';
          if (currentSection === 'landing') targetSection = 'about';
          break;
      }
      
      if (targetSection !== currentSection) {
        e.preventDefault();
        navigateToSection(targetSection);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, isTransitioning, transitionQueue.length]);

  const navigateToSection = useCallback((targetSection) => {
    if (targetSection === currentSection || isTransitioning) return;
    
    const path = calculatePath(currentSection, targetSection);
    const transitionPath = path.slice(1);
    
    if (transitionPath.length > 0) {
      setTransitionQueue(transitionPath);
    }
  }, [currentSection, isTransitioning]);

  const getTransform = () => {
    const coords = SECTIONS[currentSection];
    const translateX = -coords.x * 100;
    const translateY = -coords.y * 100;
    return `translate(${translateX}vw, ${translateY}vh)`;
  };

  const navigationProps = {
    navigateToSection,
    isTransitioning,
    currentSection
  };

  // Add touch event handlers
  const handleTouchStart = (e) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  };

  const handleTouchMove = (e) => {
    setTouchEnd({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  };

  const handleTouchEnd = () => {
    if (isTransitioning || transitionQueue.length > 0) return;

    const minSwipeDistance = 50; // minimum distance for swipe
    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = touchStart.y - touchEnd.y;
    
    // Check if it's a horizontal or vertical swipe
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) { // Swipe left
          if (currentSection === 'about') {
            navigateToSection('landing');
          }
        } else { // Swipe right
          if (currentSection === 'landing') {
            navigateToSection('about');
          }
        }
      }
    } else {
      // Vertical swipe
      if (Math.abs(deltaY) > minSwipeDistance) {
        // Check if we're in projects section with scrollable content
        if (currentSection === 'projects') {
          const projectsElement = document.querySelector('.projects-section');
          if (projectsElement) {
            const { scrollTop, scrollHeight, clientHeight } = projectsElement;
            const isAtTop = scrollTop <= 10;
            
            if (deltaY < 0 && isAtTop) { // Swipe down from top
              navigateToSection('landing');
              return;
            }
            // Allow normal scrolling otherwise
            return;
          }
        }

        if (deltaY > 0) { // Swipe up
          if (currentSection === 'landing') {
            navigateToSection('about');
          }
        } else { // Swipe down
          if (currentSection === 'about') {
            navigateToSection('landing');
          } else if (currentSection === 'landing') {
            navigateToSection('projects');
          }
        }
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="spatial-container"
      style={{ 
        overflow: 'hidden',
        height: '100vh',
        width: '100vw'
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="spatial-grid"
        style={{
          transform: getTransform(),
          transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
        }}
      >
        {/* Landing Section */}
        <div className="section landing-section" data-coords="0,0">
          {React.cloneElement(landingContent, { 
            ...navigationProps,
            sectionStatus: currentSection === 'landing' ? 'active' : 'inactive'
          })}
        </div>
        
        {/* About Section */}
        <div className="section about-section" data-coords="1,0">
          {React.cloneElement(aboutContent, { 
            ...navigationProps,
            sectionStatus: currentSection === 'about' ? 'active' : 'inactive'
          })}
        </div>
        
        {/* Projects Section */}
        <div 
          className="section projects-section" 
          data-coords="0,1"
          style={{
            overflowY: currentSection === 'projects' ? 'auto' : 'hidden',
            height: '100vh'
          }}
        >
          {React.cloneElement(projectsContent, { 
            ...navigationProps,
            sectionStatus: currentSection === 'projects' ? 'active' : 'inactive'
          })}
        </div>
      </div>
    </div>
  );
};

export default SpatialNavigation;