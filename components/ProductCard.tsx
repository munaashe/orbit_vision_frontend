import React from 'react';

interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  imageUrl?: string;
  availableQuantity?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img className="product-image" src={product.imageUrl} alt={product.title} />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-details">
        <span className="product-price">${product.price.toFixed(2)}</span>
        {product.availableQuantity && (
          <span className="product-quantity">{product.availableQuantity} in stock</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;