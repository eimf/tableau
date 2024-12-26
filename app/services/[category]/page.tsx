import { notFound } from 'next/navigation';
import { serviceCategories } from '@/lib/services/data/categories';
import { ServiceList } from '@/components/services/service-list';
import { Metadata } from 'next';

// Update to use the correct Next.js types
type Props = {
  params: {
    category: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams() {
  return serviceCategories.map((category) => ({
    category: category.id,
  }));
}

export default async function CategoryPage(props: Props) {
  const categoryData = serviceCategories.find((cat) => cat.id === props.params.category);

  if (!categoryData) {
    notFound();
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

export async function generateMetadata(props: Props): Promise<Metadata> {
  const category = serviceCategories.find((cat) => cat.id === props.params.category);
  
  return {
    title: category ? `${category.name} | Your Salon Name` : 'Category Not Found',
    description: category?.description || 'Service category page',
  };
}