'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Sparkles, Users, Star, Award } from 'lucide-react';
import { useModal } from '@/contexts/ModalContext';
import Image from 'next/image';

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our hearts into every event, ensuring each celebration reflects your unique story."
  },
  {
    icon: Sparkles,
    title: "Creativity",
    description: "Innovative designs and fresh ideas that bring your vision to life in unexpected ways."
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborating closely with you to create seamless, stress-free event experiences."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Attention to detail and commitment to delivering exceptional quality in everything we do."
  }
];

export default function About() {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="about" className="bg-gradient-to-br from-primary-50 to-sage-100 dark:from-gray-900 dark:to-gray-800 section-padding transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="font-italiana text-4xl sm:text-5xl text-center text-dark-600 dark:text-gray-200 mb-6 font-semibold">
              About Dreamscape Events
            </h2>
            <p className="text-xl text-dark-500 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Where dreams become reality and every celebration tells a unique story
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-sage-200 rounded-full opacity-50"></div>
                <h3 className="font-italiana text-3xl text-dark-700 dark:text-gray-200 mb-6 relative z-10 font-bold">
                  Crafting Magical Moments
                </h3>
              </div>
              
              <p className="text-lg leading-relaxed text-dark-600 dark:text-gray-300 mb-6">
                At Dreamscape Events, we believe that every celebration deserves to be as magical and unique as the people behind it. From intimate gatherings to grand affairs, our passion lies in crafting unforgettable moments that leave a lasting impression.
              </p>
              
                <p className="text-lg leading-relaxed text-dark-600 dark:text-gray-300 mb-6">
                With a keen eye for detail and a flair for creativity, we transform your vision into a seamless and stunning event. Whether you&apos;re dreaming of a romantic wedding under the stars, a chic corporate gala, or a whimsical birthday bash, we bring your ideas to life with style, elegance, and a touch of enchantment.
              </p>

              <motion.button
                onClick={openBookingModal}
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] hover:shadow-[0_35px_70px_-12px_rgba(0,0,0,0.6)] dark:hover:shadow-[0_35px_70px_-12px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-105"
              >
                Get a Quote Today
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                <Image
                  src="/images/about-us.jpg"
                  alt="About Us"
                  width={500}
                  height={500}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-700">500+ Events</p>
                      <p className="text-sm text-dark-500">Successfully Planned</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div variants={containerVariants} className="bg-gradient-to-br from-stone-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12">
            <motion.h3 
              variants={itemVariants}
              className="font-italiana text-3xl text-center text-dark-700 dark:text-gray-200 mb-12 font-semibold"
            >
              What Drives Us
            </motion.h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-dark-700 dark:text-gray-200 mb-3 text-lg">
                        {value.title}
                      </h4>
                      <p className="text-dark-600 dark:text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Quote */}
            <motion.div
              variants={itemVariants}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-r from-primary-100 to-sage-100 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 border border-primary-200 dark:border-gray-600">
                <blockquote className="font-italiana text-xl text-dark-700 dark:text-gray-200 italic mb-4 font-bold">
                  &ldquo;At Dreamscape Events, we don&apos;t just plan events – we craft experiences that become the stories you&apos;ll tell for years to come.&rdquo;
                </blockquote>
                <cite className="text-primary-600 dark:text-primary-400 font-semibold">— The Dreamscape Events Team</cite>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
