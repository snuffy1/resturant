"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const Contact: React.FC = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-stone-50 text-gray-800 overflow-hidden">
      {/* Top Section: Info & Interior Image */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 relative">
          {/* Left Column: Text Info */}
          <motion.div
            className="flex-1 z-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-serif italic text-gray-900 mb-16 leading-tight"
            >
              come in, <br />
              have a seat
            </motion.h1>

            <div className="space-y-12 max-w-xs">
              <motion.div variants={fadeInUp}>
                <h3 className="font-serif text-2xl mb-2">phone</h3>
                <p className="font-sans text-sm tracking-wide text-gray-600">
                  713.505.1044
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="font-serif text-2xl mb-2">email</h3>
                <p className="font-sans text-sm tracking-wide text-gray-600">
                  contact@jfvegancafe.com
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="font-serif text-2xl mb-2">address</h3>
                <p className="font-sans text-sm tracking-wide text-gray-600 leading-relaxed">
                  2111 W Loop S Suite 100
                  <br />
                  Houston, TX 77027
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="font-serif text-2xl mb-2">hours</h3>
                <div className="font-sans text-sm tracking-wide text-gray-600 space-y-1">
                  <p>Sun - Th: 10:30 am to 10 pm</p>
                  <p>Fri: 10:30 am to 11 pm</p>
                  <p>Sat: 9 am to 11 pm</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Large Interior Image with Decor */}
          <motion.div
            className="flex-1 relative mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Abstract Lines Decoration behind */}
            <div className="absolute -right-20 -bottom-20 w-full h-full border border-[#e2d5c5] rounded-[40px] md:rounded-[80px] z-0 opacity-50 transform rotate-3"></div>
            <div className="absolute -right-16 -bottom-16 w-full h-full border border-[#e2d5c5] rounded-[40px] md:rounded-[80px] z-0 opacity-50 transform rotate-6"></div>

            {/* Main Image Container */}
            <div className="relative z-10 w-full aspect-4/5 md:aspect-square overflow-hidden rounded-[40px] md:rounded-[100px] rounded-tr-[100px] md:rounded-tr-[200px]">
              <Image
                width={2000}
                height={2500}
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"
                alt="Cafe Interior with Gold Chairs"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section: Contact Form & Marble/Drink Visual */}
      <div className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start relative">
          {/* Left Visual: Marble Bar + Drink */}
          <div className="hidden md:block w-1/3 relative mr-12 lg:mr-24">
            {/* Black Marble Rect */}
            <motion.div
              className="w-64 h-96 bg-black overflow-hidden relative z-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                width={2000}
                height={2500}
                src="https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=600&q=80"
                alt="Marble Texture"
                className="w-full h-full object-cover opacity-60"
              />
            </motion.div>

            {/* Floating Drink Image */}
            <motion.div
              className="absolute top-24 -right-12 z-10 w-56 h-64"
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                width={2000}
                height={2500}
                src="https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&w=600&q=80"
                alt="Cocktail"
                className="w-full h-full object-cover drop-shadow-2xl rounded-lg mask-image-gradient"
                style={{
                  clipPath: "polygon(10% 0, 100% 0, 100% 90%, 0% 100%)",
                }} // Slight creative clip
              />
              {/* Use a real clean cutout if available, otherwise standard styling */}
              <div className="absolute inset-0 bg-transparent"></div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
                want to chat? <br />
                get in touch!
              </h2>
            </motion.div>

            <form className="space-y-12 max-w-xl">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Comments / Event Details
                </label>
                <textarea
                  rows={2}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <button
                  type="button"
                  className="w-24 h-24 rounded-full border border-black flex items-center justify-center text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
                >
                  Submit
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
