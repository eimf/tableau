export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  services: Service[];
}