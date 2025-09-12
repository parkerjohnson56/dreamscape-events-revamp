'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Packages from '@/components/Packages';
import FortuneTeller from '@/components/FortuneTeller';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { ModalProvider, useModal } from '@/contexts/ModalContext';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';

function HomeContent() {
  const { isBookingModalOpen, closeBookingModal } = useModal();
  const { isDarkMode } = useTheme();

  return (
    <>
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Debug theme indicator */}
        <div className="fixed top-0 right-0 z-50 bg-black/80 text-white p-2 text-xs">
          Theme: {isDarkMode ? 'Dark' : 'Light'}
        </div>
        <Header />
        <Hero />
        <About />
        <Testimonials />
        <Packages />
        <FortuneTeller />
        <Footer />
      </main>
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <HomeContent />
      </ModalProvider>
    </ThemeProvider>
  );
}