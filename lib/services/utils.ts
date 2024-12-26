import { serviceCategories } from './data/categories';
import type { Service } from './types';

export const findServiceById = (serviceId: string): Service | undefined => {
  return serviceCategories
    .flatMap(cat => cat.services)
    .find(s => s.id === serviceId);
};