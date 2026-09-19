import { useState, useRef, useEffect, useCallback } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { CosmicBackground } from './components/CosmicBackground';
import { CinematicIntro } from './components/CinematicIntro';
import { Navigation } from './components/Navigation';
import { ScheduleModal } from './components/ScheduleModal';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyContact } from './components/StickyContact';
import { ScrollManager } from './components/ScrollManager';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { WebsiteServicesPage } from './pages/WebsiteServicesPage';
import { SocialMediaPage } from './pages/SocialMediaPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SeoManager } from './components/SeoManager';

function AppShell() {
  const [introCompleted, setIntroCompleted] = useState<boolean>(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState<boolean>(false);
  const [isProjectOpen, setIsProjectOpen] = useState<boolean>(false);
  const [headerTargetRect, setHeaderTargetRect] = useState<DOMRect | null>(null);
  const headerLogoRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const measureHeaderSlot = useCallback(() => {
    if (headerLogoRef.current) {
      const rect = headerLogoRef.current.getBoundingClientRect();
      setHeaderTargetRect(rect);
    }
  }, []);

  useEffect(() => {
    measureHeaderSlot();
    const timer = setTimeout(measureHeaderSlot, 100);
    window.addEventListener('resize', measureHeaderSlot);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measureHeaderSlot);
    };
  }, [measureHeaderSlot]);

  useEffect(() => {
    document.body.style.overflow = introCompleted ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [introCompleted]);

  const handleIntroComplete = useCallback(() => {
    setIntroCompleted(true);
  }, []);

  const handleReplayIntro = useCallback(() => {
    navigate('/');
    window.scrollTo({ top: 0 });
    setIntroCompleted(false);
  }, [navigate]);

  return (
    <main className="relative min-h-screen bg-[#030206] text-white selection:bg-rose-900 selection:text-white overflow-x-hidden font-sans-luxury">
      <CosmicBackground
        isBlurred={false}
        intensity={introCompleted ? 0.9 : 0.6}
        showCenterGlow={true}
      />

      {!introCompleted && (
        <CinematicIntro
          isCompleted={introCompleted}
          onComplete={handleIntroComplete}
          headerLogoTargetRect={headerTargetRect}
        />
      )}

      <div
        className={`relative z-10 transition-all duration-1000 ${
          introCompleted
            ? 'opacity-100 translate-y-0 scale-100 filter blur-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 scale-[0.98] filter blur-sm pointer-events-none'
        }`}
      >
        <SeoManager />
        <ScrollManager />
        <Navigation
          onReplayIntro={handleReplayIntro}
          onOpenSchedule={() => setIsScheduleOpen(true)}
          onOpenProject={() => setIsProjectOpen(true)}
          logoRef={headerLogoRef}
        />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenSchedule={() => setIsScheduleOpen(true)}
                onOpenProject={() => setIsProjectOpen(true)}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                onOpenProject={() => setIsProjectOpen(true)}
                onOpenSchedule={() => setIsScheduleOpen(true)}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onOpenProject={() => setIsProjectOpen(true)}
              />
            }
          />
          <Route
            path="/website-services"
            element={
              <WebsiteServicesPage
                onOpenProject={() => setIsProjectOpen(true)}
                onOpenSchedule={() => setIsScheduleOpen(true)}
              />
            }
          />
          <Route
            path="/social-media"
            element={
              <SocialMediaPage
                onOpenProject={() => setIsProjectOpen(true)}
                onOpenSchedule={() => setIsScheduleOpen(true)}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                onOpenSchedule={() => setIsScheduleOpen(true)}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {location.pathname !== '/contact' && (
          <ContactSection onOpenSchedule={() => setIsScheduleOpen(true)} />
        )}
        <Footer onOpenSchedule={() => setIsScheduleOpen(true)} />
      </div>

      <StickyContact visible={introCompleted} />

      <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
      <ProjectInquiryModal isOpen={isProjectOpen} onClose={() => setIsProjectOpen(false)} />
    </main>
  );
}

export function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}

export default App;
