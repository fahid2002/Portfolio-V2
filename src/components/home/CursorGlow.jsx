'use client';

import { useEffect } from 'react';

export default function CursorGlow() {
  useEffect(() => {
    if (document.querySelector('.cursor-glow')) {
      document.querySelector('.cursor-glow').remove();
    }

    const glow = document.createElement('div');
    glow.classList.add('cursor-glow');

    const getGradient = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'light') {
        // Dark color for light mode
        return 'radial-gradient(circle, rgba(40, 40, 40, 0.25) 0%, rgba(60, 60, 60, 0.12) 30%, rgba(80, 80, 80, 0.04) 60%, transparent 100%)';
      } else {
        // Light color for dark mode
        return 'radial-gradient(circle, rgba(200, 220, 255, 0.2) 0%, rgba(180, 200, 255, 0.1) 30%, rgba(150, 180, 255, 0.03) 60%, transparent 100%)';
      }
    };

    // Set each property individually
    glow.style.position = 'fixed';
    glow.style.width = '280px';
    glow.style.height = '280px';
    glow.style.borderRadius = '50%';
    glow.style.pointerEvents = 'none';
    glow.style.zIndex = '1';
    glow.style.transform = 'translate(-50%, -50%)';
    glow.style.background = getGradient();
    glow.style.opacity = '0';
    glow.style.transition = 'opacity 0.2s ease-out';
    glow.style.mixBlendMode = 'lighten';
    glow.style.filter = 'blur(50px)';

    document.body.appendChild(glow);

    let raf;
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    let started = false;

    const updateGradient = () => {
      glow.style.background = getGradient();
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!started) {
        glowX = mouseX;
        glowY = mouseY;
        started = true;
      }
      glow.style.opacity = '0.5';
    };

    const onLeave = () => {
      glow.style.opacity = '0';
    };

    const animate = () => {
      glowX += (mouseX - glowX) * 0.15;
      glowY += (mouseY - glowY) * 0.15;
      glow.style.left = `${glowX}px`;
      glow.style.top = `${glowY}px`;
      raf = requestAnimationFrame(animate);
    };

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          updateGradient();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      observer.disconnect();
      if (glow.parentNode) glow.remove();
    };
  }, []);

  return null;
}