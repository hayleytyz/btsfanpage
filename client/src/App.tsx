import { lazy, Suspense, useEffect } from 'react';
import type { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Import new components
import Hero from './components/Hero';
import MusicSection from './components/MusicSection';
import GallerySection from './components/GallerySection';
import NewsSection from './components/NewsSection';

// Lazy load pages for better performance
const Timeline = lazy(() => import('./pages/Timeline'));
const Forum = lazy(() => import('./pages/Forum'));
const Community = lazy(() => import('./pages/Community'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Scroll to top on route change with smooth behavior
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// Main layout component
const MainLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen bg-bts-light">
    <Navbar />
    <main className="flex-grow">
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </main>
    <Footer />
  </div>
);

// Home page component with all sections
const Home = () => (
  <>
    <Hero />
    <MusicSection />
    <GallerySection />
    <NewsSection />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Suspense 
          fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <LoadingSpinner size="lg" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/community" element={<Community />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
