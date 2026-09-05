import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import Photos from './pages/Photos';
import Videos from './pages/Videos';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import OurJourney from './pages/OurJourney';
import JourneyRange from './pages/JourneyRange';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout({ children, hideFooter }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      {!hideFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/about/journey" element={<Layout><OurJourney /></Layout>} />
        <Route path="/about/journey/:rangeSlug" element={<Layout><JourneyRange /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/articles" element={<Layout><Articles /></Layout>} />
        <Route path="/gallery" element={<Layout><Photos /></Layout>} />
        <Route path="/photos" element={<Navigate to="/gallery" replace />} />
        <Route path="/videos" element={<Layout><Videos /></Layout>} />
        <Route path="/products" element={<Layout><Catalog /></Layout>} />
        <Route path="/products/:productId" element={<Layout><ProductDetail /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
