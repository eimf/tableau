"use client";

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function Philosophy() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Sparkles className="mx-auto mb-8 text-gold-400 h-12 w-12" />
          <h2 className="heading-lg mb-8">
            Our <span className="gold-gradient">Philosophy</span>
          </h2>
          <p className="body-text mb-8 text-gray-300">
            At Tableau de Katia, we believe that every client deserves an
            extraordinary experience. Our approach combines time-honored techniques
            with contemporary innovation, creating looks that are both timeless and
            modern.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Expertise',
                description:
                  'Master stylists with years of international experience',
              },
              {
                title: 'Innovation',
                description:
                  'Latest techniques and premium products for optimal results',
              },
              {
                title: 'Luxury',
                description:
                  'Exceptional service in an elegant, relaxing environment',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 border border-gold-500/20 rounded-lg"
              >
                <h3 className="font-cormorant text-2xl mb-4 gold-gradient">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}