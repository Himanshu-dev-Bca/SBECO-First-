import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import Gallery from './pages/Gallery';
import Videos from './pages/Videos';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import OurTeam from './pages/OurTeam';
import OurJourney from './pages/OurJourney';
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
        <Route path="/about/team" element={<Layout><OurTeam /></Layout>} />
        <Route path="/about/journey" element={<Layout><OurJourney /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/articles" element={<Layout><Articles /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/videos" element={<Layout><Videos /></Layout>} />
        <Route path="/products" element={<Layout><Catalog /></Layout>} />
        <Route path="/products/:productId" element={<Layout hideFooter><ProductDetail /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
