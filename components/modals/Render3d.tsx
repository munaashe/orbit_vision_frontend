'use client'

import { getProducts } from '@/utils/fetchData';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import ProductCard, { Product } from '../ProductCard';
import Button from '../Button';

interface Render3DProps {
    closeModal: () => void;
}

const Render3d = ({
    closeModal
}: Render3DProps) => {
    const { data: products, isLoading, isError, isSuccess } = useQuery('products', getProducts);
    const [queuedProducts, setQueuedProducts] = useState<Product[]>([])
    useEffect(() => {
        if (isSuccess) {
            const filteredProducts = products.filter((product: { render_status: string; }) => product.render_status === 'queued');
            setQueuedProducts(filteredProducts)
        }
    }, [isSuccess, products])
    const onRender3d = () => {

    }
    return (
        <div className='w-full'>
            {queuedProducts?.length === 0 ? (
                <div className='pt-32  flex flex-col items-center justify-center'>
                    <div className='text-center pb-4 w-2/3'>
                        Please Add Some Products to the Rendering Queue
                    </div>
                    <Button
                        title='Add Products to Queue'
                        primaryColor='primary'
                        onClick={closeModal}
                    />
                </div>
            ) : (
                <>
                    <div className='grid grid-cols-2 gap-4 overflow-y-scroll h-[300px] w-full'>
                        {queuedProducts?.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                    <div className='pt-12 flex flex-col justify-center items-center'>
                        <Button
                            title='Render'
                            primaryColor='primary'
                            onClick={onRender3d}
                        />
                    </div>
                </>
            )}

        </div>
    )
}

export default Render3d