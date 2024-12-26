"use client";

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { useCart } from '@/hooks/use-cart';
import type { Service } from '@/lib/types/services';

interface ServiceListProps {
  services: Service[];
}

export function ServiceList({ services }: ServiceListProps) {
  // const { addToCart } = useCart();

  return (
    <div className="grid gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-900 rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div>
            <h3 className="text-xl font-cormorant mb-2">{service.name}</h3>
            <p className="text-gray-400 text-sm mb-2">{service.description}</p>
            <div className="flex items-center gap-4">
              <span className="text-gold-400">{service.price === 0 ? 'Price determined during consultation' : `$${service.price}`}</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400">{service.duration}</span>
            </div>
          </div>
          <div className="flex gap-3">
            {/* <Button
              variant="outline"
              size="sm"
              onClick={() => addToCart(service.id)}
              className="border-gold-500 text-gold-400 hover:bg-gold-500/10"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add to Cart
            </Button> */}
            <Button
              size="sm"
              className="bg-gold-500 hover:bg-gold-600 text-black"
              onClick={() => window.open('https://www.vagaro.com/tableaudekatia/book-now', '_blank')}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}