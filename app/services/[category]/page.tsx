'use client';

import { notFound } from 'next/navigation';
import { serviceCategories } from '@/lib/services/data/categories';
import { ServiceList } from '@/components/services/service-list';
import { usePathname } from 'next/navigation';

export default function CategoryPage() {
  const pathname = usePathname();

  const categoryData = serviceCategories.find((cat) => cat.id === pathname.split('/').pop());

  if (!categoryData) {
    return notFound();
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="heading-lg mb-8">
        <span className="gold-gradient">{categoryData.name}</span>
      </h1>
      <p className="body-text mb-12 text-gray-300">{categoryData.description}</p>
      <ServiceList services={categoryData.services} />
    </div>
  );
}