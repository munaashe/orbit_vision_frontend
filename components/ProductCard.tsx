import Image from 'next/image';
import React from 'react';
import denis from '@/assets/denis.jpg'

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
    <div className="product-card p-2">
      <div className='h-[110px]'>
        <Image
          src={denis}
          alt={product.title}
          height={100}
          width={100}
        />
      </div>
      <h3 className='text-[14px] font-semibold'>{product.title}</h3>
      <div className='text-[12px] text-secondary italic'>
        {product.availableQuantity && (
          <span className="product-quantity">{product.availableQuantity} in stock</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;