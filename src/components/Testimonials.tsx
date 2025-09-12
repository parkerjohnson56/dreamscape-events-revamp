'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    names: "Chad & Sammy",
    image: "/images/chadandsammy.png",
    text: "Dreamscape Events made our wedding day absolutely magical! Every detail was perfect, from the floral arrangements to the lighting. We couldn't have asked for a more beautiful celebration.",
    rating: 5,
    event: "Wedding"
  },
  {
    id: 2,
    names: "Chris & Dani",
    image: "/images/chrisanddani.png",
    text: "The team at Dreamscape Events exceeded all our expectations. They transformed our vision into reality and made our special day stress-free. Highly recommend their luxury tier package!",
    rating: 5,
    event: "Wedding"
  },
  {
    id: 3,
    names: "Mark & Vanessa",
    image: "/images/markandvanessa.png",
    text: "From the initial planning to the final dance, Dreamscape Events was incredible. Their attention to detail and professional service made our wedding unforgettable. Thank you for everything!",
    rating: 5,
    event: "Wedding"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="testimonials" className="bg-gradient-to-br from-sage-50 to-primary-50 py-12 px-4 sm:px-6 lg:px-8 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center mb-8">
            <h2 className="font-italiana text-2xl sm:text-3xl text-dark-600 dark:text-gray-100 mb-3 font-semibold">
              Wedding Testimonials
            </h2>
            <p className="text-base text-dark-500 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from the couples who trusted us with their most important day
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 h-full">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.names} wedding`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-dark-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                        {testimonial.event}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Names */}
                    <h3 className="font-italiana text-lg font-semibold text-dark-700 dark:text-gray-100 mb-3">
                      {testimonial.names}
                    </h3>

                    {/* Quote */}
                    <div className="relative mb-4">
                      <Quote className="w-6 h-6 text-primary-400 dark:text-primary-300 mb-2 opacity-60" />
                      <p className="text-dark-600 dark:text-gray-300 text-sm leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-sm text-dark-500 dark:text-gray-400 ml-2">
                        {testimonial.rating}.0
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Message */}
          <motion.div variants={cardVariants} className="text-center mt-8">
            <p className="text-dark-600 dark:text-gray-300 text-sm">
              Ready to create your own magical memories? 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> Let's make your dream event a reality!</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
