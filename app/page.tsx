import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import ProductShowcase from '@/components/sections/ProductShowcase';
import FacilityCarousel from '@/components/sections/FacilityCarousel';
import About from '@/components/sections/About';
import Benefits from '@/components/sections/Benefits';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/sections/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProductShowcase />
        <FacilityCarousel />
        <About />
        <Benefits />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
