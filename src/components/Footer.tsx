'use client';

import { motion } from 'framer-motion';
import { useModal } from '@/contexts/ModalContext';
import { Heart, Sparkles, Users, Star, Award, Zap, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const sitemapLinks = {
  navigation: [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Packages', href: '#packages' },
    { name: 'Fortune Teller', href: '#game' },
  ],
  packages: [
    { name: 'Starter Tier', href: '#packages' },
    { name: 'Premium Tier', href: '#packages' },
    { name: 'Luxury Tier', href: '#packages' },
    { name: 'Custom Package', href: '#packages' },
  ],
  company: [
    { name: 'Our Story', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Get Quote', href: '#booking' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
  ]
};

export default function Footer() {
  const { openBookingModal } = useModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-forest-600 to-forest-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Mobile Footer - Single Column */}
          <div className="block sm:hidden">
            <motion.div variants={itemVariants} className="text-center">
              {/* Company Name */}
              <h3 className="font-pacifico text-xl text-primary-300 mb-4 font-bold">
                Dreamscape Events
              </h3>
              
              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 text-primary-300" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2 text-primary-300" />
                  <span className="text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2 text-primary-300" />
                  <span className="text-sm">hello@dreamscapeevents.com</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={openBookingModal}
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-4 text-sm"
              >
                GET A QUOTE TODAY →
              </button>

              {/* Social Links */}
              <div className="mb-4">
                <h4 className="text-primary-200 text-sm font-semibold mb-3">Join Our Social Community</h4>
                <div className="flex justify-center space-x-4">
                  {sitemapLinks.social.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-8 h-8 bg-forest-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <IconComponent className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Copyright */}
              <div className="text-center">
                <p className="text-gray-400 text-xs mb-1">
                  Made with <Heart className="w-3 h-3 inline text-red-400" /> by Parker Johnson
                </p>
                <p className="text-gray-500 text-xs">
                  © 2024 Dreamscape Events. All Rights Reserved.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Desktop Footer - Multi Column */}
          <div className="hidden sm:block">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6 lg:mb-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1 text-left">
              <div className="mb-6">
                <h3 className="font-pacifico text-2xl lg:text-3xl text-primary-300 mb-4">
                  Dreamscape Events
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-sm lg:text-base">
                  Turning dreams into reality, one event at a time. We craft unforgettable moments that become the stories you'll tell for years to come.
                </p>
                <button
                  onClick={openBookingModal}
                  className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-full font-semibold shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-[0_35px_70px_-12px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-105 text-sm lg:text-base"
                >
                  Get a Quote Today
                </button>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants} className="text-left">
              <h4 className="font-italiana text-base lg:text-lg font-semibold mb-4 lg:mb-6 text-primary-200">
                Navigation
              </h4>
              <ul className="space-y-2 lg:space-y-3">
                {sitemapLinks.navigation.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-300 transition-colors duration-200 flex items-center group text-sm lg:text-base"
                    >
                      <Sparkles className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Packages */}
            <motion.div variants={itemVariants} className="text-left">
              <h4 className="font-italiana text-base lg:text-lg font-semibold mb-4 lg:mb-6 text-primary-200">
                Our Packages
              </h4>
              <ul className="space-y-2 lg:space-y-3">
                {sitemapLinks.packages.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-300 transition-colors duration-200 flex items-center group text-sm lg:text-base"
                    >
                      <Star className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company & Contact */}
            <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1 text-left">
              <h4 className="font-italiana text-base lg:text-lg font-semibold mb-4 lg:mb-6 text-primary-200">
                Company
              </h4>
              <ul className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                {sitemapLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-300 transition-colors duration-200 flex items-center group text-sm lg:text-base"
                    >
                      <Users className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-2 lg:space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-primary-300" />
                  <span className="text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-primary-300" />
                  <span className="text-sm">hello@dreamscapeevents.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-primary-300" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
            </div>
          </div>

          {/* Desktop Bottom Section */}
          <motion.div variants={itemVariants} className="hidden sm:block border-t border-forest-500 pt-6 lg:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                {sitemapLinks.social.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-forest-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm mb-2">
                  Made with <Heart className="w-4 h-4 inline text-red-400" /> by Parker Johnson
                </p>
                <p className="text-gray-500 text-xs">
                  &copy; 2024 Dreamscape Events. All Rights Reserved.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
