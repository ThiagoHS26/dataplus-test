import { Product } from '../types';

export const getTopRepeatedNames = (products: Product[]): string[] => {
  const nameCounts = products.reduce((acc, product) => {
    acc[product.name] = (acc[product.name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(nameCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 5)
    .map(([name]) => name);
};
