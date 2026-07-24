'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const PageTransitionContext = createContext(null);

export function usePageTransition() {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within PageTransition');
  }
  return context;
}

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [status, setStatus] = useState('idle');
  const [targetPath, setTargetPath] = useState(null);

  const navigate = useCallback(
    (href) => {
      if (!href || href === pathname || status !== 'idle') return;
      setTargetPath(href);
      setStatus('closing');
    },
    [pathname, status]
  );

  useEffect(() => {
    if (status !== 'closing' || !targetPath) return;
    const timeout = window.setTimeout(() => {
      router.push(targetPath);
    }, 280);
    return () => window.clearTimeout(timeout);
  }, [status, targetPath, router]);

  useEffect(() => {
    if (status !== 'closing' || !targetPath) return;
    if (pathname === targetPath) {
      setStatus('opening');
    }
  }, [pathname, status, targetPath]);

  useEffect(() => {
    if (status !== 'opening') return;
    const timeout = window.setTimeout(() => {
      setStatus('idle');
    }, 320);
    return () => window.clearTimeout(timeout);
  }, [status]);

  const contextValue = useMemo(
    () => ({ navigate, isTransitioning: status !== 'idle' }),
    [navigate, status]
  );

  return (
    <PageTransitionContext.Provider value={contextValue}>
      <div className="page-transition-wrapper">
        {children}
        <div className={`page-transition-overlay ${status !== 'idle' ? 'active' : ''}`}>
          <div className={`curtain top ${status === 'closing' ? 'down' : status === 'opening' ? 'up' : ''}`} />
          <div className={`curtain bottom ${status === 'closing' ? 'up' : status === 'opening' ? 'down' : ''}`} />
        </div>
      </div>
    </PageTransitionContext.Provider>
  );
}
