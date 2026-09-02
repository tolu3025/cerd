import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer, ScrollToTop } from './components/layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Research } from './pages/Research';
import { Publications } from './pages/Publications';
import { Facilities } from './pages/Facilities';
import { News } from './pages/News';
import { Staff } from './pages/Staff';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <>
      {/* Scroll restoration on route change */}
      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-canvas text-body font-sans selection:bg-cerd-blue selection:text-white">
        {/* Fixed Top Institutional Navigation */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About Page with Alias */}
            <Route path="/about-us" element={<About />} />
            <Route path="/about" element={<About />} />

            {/* Research Page */}
            <Route path="/research" element={<Research />} />

            {/* Publications Page */}
            <Route path="/publications" element={<Publications />} />

            {/* Facilities Page */}
            <Route path="/facilities" element={<Facilities />} />

            {/* News & Events with Alias */}
            <Route path="/news" element={<News />} />
            <Route path="/news-events" element={<News />} />

            {/* Staff Directory Page */}
            <Route path="/staff" element={<Staff />} />

            {/* Contact Page with Alias */}
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />

            {/* 404 Fallback Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
