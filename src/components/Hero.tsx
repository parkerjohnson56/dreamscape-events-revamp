'use client';

import { useModal } from '@/contexts/ModalContext';

export default function Hero() {
  const { openBookingModal } = useModal();
  return (
    <section 
      id="hero"
      className="relative h-[80vh] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("/images/hero-image.jpg")'
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white dark:text-gray-100 transition-colors duration-300">
        <h2 className="font-satisfy text-4xl sm:text-5xl lg:text-6xl mb-4 dark:text-gray-100">
          Plan Your Dream Event
        </h2>
        <p className="font-italiana text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 dark:text-gray-200">
          Turning Dreams into Reality, One Event at a Time
        </p>
        <button
          onClick={openBookingModal}
          className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] hover:shadow-[0_35px_70px_-12px_rgba(0,0,0,0.6)] dark:hover:shadow-[0_35px_70px_-12px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-105"
        >
          Get a Quote Today
        </button>
      </div>
    </section>
  );
}
