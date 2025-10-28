import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import { CertificationsSection } from '../components/CertificationSection';

const Home = () => {
  const {
    hash
  } = useLocation();
  useEffect(() => {
    // If there's a hash in the URL, scroll to that element
    if (hash) {
      // Wait a bit for the page to render
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [hash]);
  return <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CertificationsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactForm />
    </div>;
};
export default Home;