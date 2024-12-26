"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

export function ServiceCard({ title, description, imageUrl, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      whileHover={{ scale: 1.05 }}
      className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="font-cormorant text-2xl mb-2 text-white">{title}</h3>
        <p className="text-sm text-gray-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {description}
        </p>
      </div>
    </motion.div>
  );
}