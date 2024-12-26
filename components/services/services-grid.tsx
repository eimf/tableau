"use client";

import Link from 'next/link';
import { ServiceCard } from './service-card';
import { serviceCategories } from '@/lib/services/data/categories';

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {serviceCategories.map((category, index) => (
        <Link key={category.id} href={`/services/${category.id}`}>
          <ServiceCard
            title={category.name}
            description={category.description}
            imageUrl={category.imageUrl}
            index={index}
          />
        </Link>
      ))}
    </div>
  );
}