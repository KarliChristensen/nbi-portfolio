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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const [currentSection, setCurrentSection] = useState('landing');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionQueue, setTransitionQueue] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const lastWheelTime = useRef(0);
  const wheelDeltaRef = useRef(0);
  const navigationCooldownRef = useRef(false);
  const touchStartTimeRef = useRef(0);

  // Detect if device supports touch
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

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

  // Enhanced wheel event handler for desktop scroll navigation
  useEffect(() => {
    // Skip wheel handling on touch devices to avoid conflicts
    if (isTouchDevice) return;

    const handleWheel = (e) => {
      const now = Date.now();
      
      // Prevent navigation if we're in a cooldown period
      if (navigationCooldownRef.current) {
        e.preventDefault();
        return;
      }
      
      // Ignore rapid wheel events (trackpad scrolling) with increased threshold
      if (now - lastWheelTime.current < 150) {
        return;
      }
      
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
          const isAtTop = scrollTop <= 30;
          const isAtBottom = scrollTop + clientHeight >= scrollHeight - 30;
          
          // Allow normal scrolling within projects section
          if (!isAtTop && !isAtBottom) {
            wheelDeltaRef.current = 0;
            return;
          }
          
          // Handle navigation at scroll boundaries
          if (e.deltaY < 0 && isAtTop) {
            wheelDeltaRef.current += e.deltaY;
            
            if (wheelDeltaRef.current < -80 || e.deltaY < -80) {
              e.preventDefault();
              lastWheelTime.current = now;
              wheelDeltaRef.current = 0;
              
              navigationCooldownRef.current = true;
              setTimeout(() => {
                navigationCooldownRef.current = false;
              }, 800);
              
              navigateToSection('landing');
              return;
            }
            e.preventDefault();
            return;
          }
          
          if (e.deltaY > 0 && isAtBottom) {
            return;
          }
          
          if (e.deltaY > 0) {
            wheelDeltaRef.current = 0;
          }
        }
      }

      // Handle section navigation for other sections
      const threshold = 80;
      
      if (Math.abs(e.deltaY) < threshold) return;
      
      lastWheelTime.current = now;
      e.preventDefault();
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      setIsScrolling(true);
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
      
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
        }
      } else { // Scrolling up
        switch (currentSection) {
          case 'landing':
            targetSection = 'about';
            break;
        }
      }
      
      if (targetSection !== currentSection) {
        navigationCooldownRef.current = true;
        setTimeout(() => {
          navigationCooldownRef.current = false;
        }, 800);
        
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
  }, [currentSection, isTransitioning, transitionQueue.length, isTouchDevice]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isTransitioning || transitionQueue.length > 0 || navigationCooldownRef.current) return;
      
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
        navigationCooldownRef.current = true;
        setTimeout(() => {
          navigationCooldownRef.current = false;
        }, 800);
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

  // Fixed touch event handlers
  const handleTouchStart = (e) => {
    if (!isTouchDevice || isTransitioning || transitionQueue.length > 0 || navigationCooldownRef.current) return;
    
    const touch = e.touches[0];
    setTouchStart({
      x: touch.clientX,
      y: touch.clientY
    });
    setTouchEnd(null);
    touchStartTimeRef.current = Date.now();
  };

  const handleTouchMove = (e) => {
    if (!isTouchDevice || !touchStart) return;
    
    const touch = e.touches[0];
    setTouchEnd({
      x: touch.clientX,
      y: touch.clientY
    });
  };

  const handleTouchEnd = () => {
    if (!isTouchDevice || !touchStart || !touchEnd || isTransitioning || transitionQueue.length > 0 || navigationCooldownRef.current) {
      setTouchStart(null);
      setTouchEnd(null);
      return;
    }

    const touchDuration = Date.now() - touchStartTimeRef.current;
    
    // Ignore very short touches (likely accidental)
    if (touchDuration < 100) {
      setTouchStart(null);
      setTouchEnd(null);
      return;
    }

    const minSwipeDistance = 50; // Increased threshold to reduce sensitivity
    const deltaX = touchStart.x - touchEnd.x; // Positive = swipe left, Negative = swipe right
    const deltaY = touchStart.y - touchEnd.y; // Positive = swipe up, Negative = swipe down
    
    // Check if it's a meaningful swipe (not just a tap or small movement)
    const swipeDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    if (swipeDistance < minSwipeDistance) {
      setTouchStart(null);
      setTouchEnd(null);
      return;
    }
    
    // Determine if it's primarily horizontal or vertical
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX < 0) { 
          // Swipe left (moving from right to left) - go to previous/left section
          if (currentSection === 'about') {
            navigationCooldownRef.current = true;
            setTimeout(() => {
              navigationCooldownRef.current = false;
            }, 1000);
            navigateToSection('landing');
          }
        } else { 
          // Swipe right (moving from left to right) - go to next/right section
          if (currentSection === 'landing') {
            navigationCooldownRef.current = true;
            setTimeout(() => {
              navigationCooldownRef.current = false;
            }, 1000);
            navigateToSection('about');
          }
        }
      }
    } else {
      // Vertical swipe
      if (Math.abs(deltaY) > minSwipeDistance) {
        // Special handling for projects section
        if (currentSection === 'projects') {
          const projectsElement = document.querySelector('.projects-section');
          if (projectsElement) {
            const { scrollTop, scrollHeight, clientHeight } = projectsElement;
            const isAtTop = scrollTop <= 30;
            
            // Only allow navigation from top of projects section when swiping down
            if (deltaY < 0 && isAtTop) { // Swipe down from top
              navigationCooldownRef.current = true;
              setTimeout(() => {
                navigationCooldownRef.current = false;
              }, 1000);
              navigateToSection('landing');
            }
            // For all other cases in projects, allow normal scrolling
          }
        } else {
          // Handle vertical navigation for landing and about sections
          if (deltaY < 0) { 
            // Swipe up - go to section above/up
            if (currentSection === 'landing') {
              navigationCooldownRef.current = true;
              setTimeout(() => {
                navigationCooldownRef.current = false;
              }, 1000);
              navigateToSection('about');
            }
          } else { 
            // Swipe down - go to section below/down
            if (currentSection === 'about') {
              navigationCooldownRef.current = true;
              setTimeout(() => {
                navigationCooldownRef.current = false;
              }, 1000);
              navigateToSection('landing');
            } else if (currentSection === 'landing') {
              navigationCooldownRef.current = true;
              setTimeout(() => {
                navigationCooldownRef.current = false;
              }, 1000);
              navigateToSection('projects');
            }
          }
        }
      }
    }

    // Reset touch state
    setTouchStart(null);
    setTouchEnd(null);
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