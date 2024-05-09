import Image from 'next/image';
import React from 'react';
import denis from '@/assets/denis.jpg'

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  stock?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card p-2">
      <div className='h-[110px] w-full flex items-center justify-center'>
        <Image
          src={product.images[0]}
          alt={product.name}
          height={100}
          width={100}
        />
      </div>
      <h3 className='text-[14px] font-semibold'>{product.name.substring(0, 20)}</h3>
      <div className='text-[12px] text-secondary italic'>
        {product.stock && (
          <span className="product-quantity">{product.stock} in stock</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;