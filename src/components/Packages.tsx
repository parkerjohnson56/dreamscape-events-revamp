'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Sparkles, Heart, Crown, Gift, Users, Camera, Music, Utensils, Calendar, Phone } from 'lucide-react';
import { useModal } from '@/contexts/ModalContext';

const packages = {
  starter: {
    name: "Starter Tier",
    subtitle: "Perfect Beginnings",
    price: "Starting at $3,500",
    description: "Perfect for intimate gatherings like birthdays, showers, or small parties. Includes expert planning and décor setup to make your event magical.",
    icon: Gift,
    color: "from-primary-400 to-primary-500",
    features: [
      { icon: Sparkles, text: "Basic décor setup (fairy lights, table settings, and balloons)" },
      { icon: Utensils, text: "Catering coordination for light snacks or desserts" },
      { icon: Music, text: "Pre-selected playlist for ambiance" },
      { icon: Users, text: "On-site event assistant for 4 hours" }
    ],
    image: "/images/starter-tier.jpeg",
  },
  premium: {
    name: "Premium Tier",
    subtitle: "Elegant Celebrations",
    price: "Starting at $8,000",
    description: "Designed for weddings, anniversaries, or milestone events, this package offers seamless planning and premium touches to make your day unforgettable.",
    icon: Heart,
    color: "from-primary-500 to-primary-600",
    features: [
      { icon: Sparkles, text: "Full event décor with premium floral arrangements" },
      { icon: Utensils, text: "Catering service setup for up to 50 guests" },
      { icon: Calendar, text: "Venue selection and booking assistance" },
      { icon: Camera, text: "Professional photographer for 2 hours" }
    ],
    image: "/images/premium-tier.jpeg",
  },
  luxury: {
    name: "Luxury Tier",
    subtitle: "Unforgettable Moments",
    price: "Starting at $15,000",
    description: "Designed for grand events, this package includes exclusive planning, luxury décor, and premium services to create a truly memorable experience.",
    icon: Crown,
    color: "from-sage-500 to-sage-600",
    features: [
      { icon: Sparkles, text: "Exclusive luxury décor with premium floral arrangements" },
      { icon: Utensils, text: "Full catering coordination for up to 100 guests" },
      { icon: Users, text: "VIP event assistant for 8 hours" },
      { icon: Camera, text: "Professional photographer and videographer for 4 hours" },
      { icon: Music, text: "Custom lighting design and premium sound setup" }
    ],
    image: "/images/luxury-tier.jpeg",
  },
};

export default function Packages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { openBookingModal } = useModal();

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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "backOut"
      }
    }
  };

  return (
    <section id="packages" className="bg-gradient-to-br from-stone-50 to-amber-50 dark:from-gray-950 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center mb-8">
            <motion.h2
              className="font-italiana text-2xl sm:text-3xl text-center text-dark-600 dark:text-gray-200 mb-3 font-semibold"
            >
              Our Packages
            </motion.h2>
            <motion.p
              className="text-base text-dark-500 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Choose the perfect package for your dream event. Each tier is carefully crafted to bring your vision to life with elegance and style.
            </motion.p>
          </motion.div>

          {/* Package Cards */}
          <motion.div
            variants={containerVariants}
            className="grid lg:grid-cols-3 gap-4"
          >
            {Object.entries(packages).map(([key, pkg], index) => {
              const IconComponent = pkg.icon;
              return (
                <motion.div
                  key={key}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                    {/* Image Section */}
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${pkg.color} opacity-20`}></div>
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-lg flex items-center justify-center backdrop-blur-sm">
                          <IconComponent className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        </div>
                      </div>
                    </div>

                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-r ${pkg.color} p-4 text-white relative overflow-hidden flex-shrink-0`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10 w-full">
                        <h3 className="font-italiana text-lg font-semibold mb-1">
                          {pkg.name}
                        </h3>
                        <p className="text-white/90 font-medium text-xs mb-2">
                          {pkg.subtitle}
                        </p>
                        <div>
                          <span className="text-lg font-bold">
                            {pkg.price}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col">
                      <p className="text-dark-600 dark:text-gray-300 mb-3 leading-relaxed text-xs">
                        {pkg.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-4 flex-1">
                        <h4 className="font-semibold text-dark-700 dark:text-gray-200 flex items-center text-xs">
                          <Star className="w-3 h-3 mr-1 text-primary-500 dark:text-primary-400" />
                          What's Included
                        </h4>
                        <ul className="space-y-1">
                          {pkg.features.map((feature, featureIndex) => {
                            const FeatureIcon = feature.icon;
                            return (
                              <motion.li
                                key={featureIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: 0.4 + (featureIndex * 0.1) }}
                                className="flex items-start"
                              >
                                <div className="w-4 h-4 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                                  <FeatureIcon className="w-2.5 h-2.5 text-primary-600 dark:text-primary-400" />
                                </div>
                                <span className="text-dark-600 dark:text-gray-300 text-xs leading-relaxed">
                                  {feature.text}
                                </span>
                              </motion.li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        onClick={openBookingModal}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-2 px-3 bg-gradient-to-r ${pkg.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group text-xs mt-auto`}
                      >
                        <Phone className="w-3 h-3 mr-1" />
                        Get a Quote Today
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={cardVariants}
            className="text-center mt-8"
          >
            <motion.button
              onClick={openBookingModal}
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 max-w-sm w-full"
            >
              Need a Custom Package?
              <span className="block text-xs font-normal mt-1 opacity-90">
                Contact us to create your perfect event
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
