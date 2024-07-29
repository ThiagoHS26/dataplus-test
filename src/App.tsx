import React, { useState } from 'react';
import ProductForm from './components/Productform';
import ProductList from './components/Productlist';
import { Product } from './types';
import { getTopRepeatedNames } from './utils/filterProducts';
import './App.css';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const topRepeatedNames = getTopRepeatedNames(products);

  const handleViewRepeated = () => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write('<html><head><title>Productos Repetidos</title></head><body>');
      newWindow.document.write('<h2>Top 5 Nombres más Repetidos</h2>');
      newWindow.document.write('<ul>');
      topRepeatedNames.forEach(name => {
        newWindow.document.write(`<li>${name}</li>`);
      });
      newWindow.document.write('</ul>');
      newWindow.document.write('</body></html>');
      newWindow.document.close();
    }
  };

  return (
    <div className="App">
      <h1>Gestión de Productos</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} />
      <div className="top-repeated">
        <button onClick={handleViewRepeated}>Ver Repetidos</button>
      </div>
    </div>
  );
};

export default App;
