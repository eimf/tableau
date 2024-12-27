"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "She’s amazing! Super sweet, very understanding and does everything in her power to give you the best experience!! Highly highly recommend her services! Her team is very attentive and supportive.",
    author: "Renata S",
    role: "Fashion Editor"
  },
  {
    text: "Not only is Katia a seasoned professional, but she also a people’s-person. She can strike up a conversation with anyone she meets because her personality is so welcoming and kind. She is great at what she does.",
    author: "Kamryn R",
    role: "Executive"
  },
  {
    text: "Katia is an absolute pro! I had the pleasure of having her do my hair and makeup for a photoshoot and she completely transformed my look. She expertly blended the right colors and created a hairstyle that perfectly complemented my features. The end result was a stunning, photo-ready look that received compliments from everyone involved in the shoot. Katia has a true talent for hair and makeup and I would highly recommend her for any photoshoot or special event.",
    author: "Karina R",
    role: "Interior Designer"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg">
            Client <span className="gold-gradient">Testimonials</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 p-8 rounded-lg relative"
            >
              <Quote className="absolute top-4 right-4 text-gold-500/20 h-8 w-8" />
              <p className="body-text mb-6 text-gray-300">{testimonial.text}</p>
              <div>
                <p className="font-cormorant text-xl text-gold-400">
                  {testimonial.author}
                </p>
                {/* <p className="text-sm text-gray-500">{testimonial.role}</p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}