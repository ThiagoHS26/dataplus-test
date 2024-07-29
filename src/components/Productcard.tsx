import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="product-card">
    <img src={product.img} alt={product.name} />
    <h3>{product.name}</h3>
    <p>Precio: ${product.price}</p>
    <p>Modelo: {product.model}</p>
    <p>Estado: {product.status}</p>
  </div>
);

export default ProductCard;
