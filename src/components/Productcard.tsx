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
    <button onClick={() => console.log(`Clicked on ${product.name}`)}>
      Ver detalles
    </button>
    <hr />
    <button onClick={() => console.log(`Clicked on ${product.name}`)}>
      Comprar
    </button>
  </div>
);

export default ProductCard;
