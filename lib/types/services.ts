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

export interface CartItem {
  serviceId: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}