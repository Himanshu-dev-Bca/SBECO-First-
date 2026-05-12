import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Updates from './pages/Updates';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Photos from './pages/Photos';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/next"
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
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/updates" element={<Layout><Updates /></Layout>} />
        <Route path="/products" element={<Layout><Catalog /></Layout>} />
        <Route path="/products/:productId" element={<Layout hideFooter><ProductDetail /></Layout>} />
        <Route path="/photos" element={<Layout><Photos /></Layout>} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}
