'use client'
import Image from 'next/image';
import React from 'react';
import Button from './Button';
import { useMutation, useQueryClient } from 'react-query'

export interface Product {
  id: number;
  name: string;
  images: string[];
  stock?: number;
  render_status: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const baseURL: any = process.env.NEXT_PUBLIC_BASE_API_URL
  const queryClient = useQueryClient()

  const updateProductMutation = useMutation(
    (newStatus) =>
      fetch(`${baseURL}/products/${product.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...product, render_status: newStatus }),
      }),
    {
      onSettled: () => {
        queryClient.invalidateQueries('products');
      },
    }
  );

  const updateRenderStatus = async (newStatus: any) => {
    updateProductMutation.mutate(newStatus)
  };

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
      <div>
        {product.render_status === 'rendered' ? (
          <div className="uppercase text-green-500">
            3d rendered
          </div>
        ) : (
          <React.Fragment>
            {updateProductMutation.isLoading ? (
              <div className="flex justify-center items-center h-20">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <React.Fragment>
                {product.render_status === 'queued' ? (
                  <div className='w-full flex flex-col items-center justify-center pt-2'>
                    <Button
                      title='Remove from Queue'
                      primaryColor='primary'
                      onClick={() => updateRenderStatus('not_in_queue')}
                    />
                  </div>
                ) : (
                  <div className='w-full flex flex-col items-center justify-center pt-2'>
                    <Button
                      title='Add To Queue'
                      primaryColor='primary'
                      onClick={() => updateRenderStatus('queued')}
                    />
                  </div>
                )}
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default ProductCard;