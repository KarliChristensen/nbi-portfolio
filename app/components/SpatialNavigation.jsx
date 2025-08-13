"use client";

import { useState, useEffect, useCallback } from 'react';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

// Define the L-shaped spatial layout
const SECTIONS = {
  landing: { x: 0, y: 0, route: '/#home' },
  about: { x: 1, y: 0, route: '/#about' },      // Right of landing
  projects: { x: 0, y: 1, route: '/#projects' }  // Below landing
};

// Calculate path between two sections for L-shaped layout
const calculatePath = (from, to) => {
  const fromCoords = SECTIONS[from];
  const toCoords = SECTIONS[to];
  
  // If we're already at the target, no path needed
  if (from === to) return [from];
  
  // For L-shaped navigation, we need to handle specific cases
  // since we can't move diagonally and must go through existing sections
  
  if (from === 'projects' && to === 'about') {
    // projects (0,1) -> landing (0,0) -> about (1,0)
    return ['projects', 'landing', 'about'];
  }
  
  if (from === 'about' && to === 'projects') {
    // about (1,0) -> landing (0,0) -> projects (0,1)
    return ['about', 'landing', 'projects'];
  }
  
  // Direct movements (adjacent sections)
  if (
    (from === 'landing' && to === 'about') ||
    (from === 'about' && to === 'landing') ||
    (from === 'landing' && to === 'projects') ||
    (from === 'projects' && to === 'landing')
  ) {
    return [from, to];
  }
  
  // Fallback - shouldn't happen with current L-shaped layout
  return [from, to];
};

const SpatialNavigation = ({ landingContent, aboutContent, projectsContent }) => {
  const [currentSection, setCurrentSection] = useState('landing');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionQueue, setTransitionQueue] = useState([]);
  const router = useRouter();
  const pathname = usePathname();

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
      
      // Update visual position
      setTimeout(() => {
        setCurrentSection(nextSection);
        setTransitionQueue(prev => prev.slice(1));
        
        // Continue with next transition or finish
        setTimeout(() => {
          setIsTransitioning(false);
          
          // Update URL when we reach final destination
          if (transitionQueue.length === 1) {
            router.push(SECTIONS[nextSection].route, { shallow: true });
          }
        }, 600); // Match CSS transition duration
      }, 50);
    }
  }, [transitionQueue, isTransitioning, router]);

  const navigateToSection = useCallback((targetSection) => {
    if (targetSection === currentSection || isTransitioning) return;
    
    const path = calculatePath(currentSection, targetSection);
    // Remove current section from path since we're already there
    const transitionPath = path.slice(1);
    
    if (transitionPath.length > 0) {
      setTransitionQueue(transitionPath);
    }
  }, [currentSection, isTransitioning]);

  // Calculate transform based on current section
  const getTransform = () => {
    const coords = SECTIONS[currentSection];
    const translateX = -coords.x * 100; // Move left for each x unit
    const translateY = -coords.y * 100; // Move up for each y unit
    return `translate(${translateX}vw, ${translateY}vh)`;
  };

  // Create navigation props object to pass to content components
  const navigationProps = {
    navigateToSection,
    isTransitioning,
    currentSection
  };

  return (
    <div className="spatial-container">
      <div 
        className="spatial-grid"
        style={{
          transform: getTransform(),
          transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
        }}
      >
        {/* L-shaped Layout: Landing(0,0) About(1,0) Projects(0,1) */}
        
        {/* Top Left - Landing */}
        <div className="section landing-section" data-coords="0,0">
          {React.cloneElement(landingContent, { 
            ...navigationProps,
            sectionStatus: currentSection === 'landing' ? 'active' : 'inactive'
          })}
        </div>
        
        {/* Top Right - About */}
        <div className="section about-section" data-coords="1,0">
          {React.cloneElement(aboutContent, { 
            ...navigationProps,
            sectionStatus: currentSection === 'about' ? 'active' : 'inactive'
          })}
        </div>
        
        {/* Bottom Left - Projects */}
        <div className="section projects-section" data-coords="0,1">
          {React.cloneElement(projectsContent, { 
            ...navigationProps,
            sectionStatus: currentSection === 'projects' ? 'active' : 'inactive'
          })}
        </div>
        
        {/* Empty space at (1,1) - Bottom Right */}
        <div className="section empty-section" data-coords="1,1">
        </div>
      </div>
    </div>
  );
};

export default SpatialNavigation;