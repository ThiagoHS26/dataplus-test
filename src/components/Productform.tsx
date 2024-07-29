import React, { useState } from 'react';
import { Product } from '../types';

interface ProductFormProps {
  addProduct: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ addProduct }) => {
  const [product, setProduct] = useState<Product>({
    name: '',
    price: 0,
    img: '',
    model: '',
    status: ''
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({ ...product, img: reader.result as string });
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ name: '', price: 0, img: '', model: '', status: '' });
    setImagePreview(null);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Nombre"
          required
          readOnly={!!product.name}
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Precio"
          required
        />
        <input
          type="file"
          name="img"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxHeight: '100px', marginTop: '10px' }} />}
        <input
          type="text"
          name="model"
          value={product.model}
          onChange={handleChange}
          placeholder="Modelo"
          required
        />
        <input
          type="text"
          name="status"
          value={product.status}
          onChange={handleChange}
          placeholder="Estado"
          required
        />
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default ProductForm;
