'use client'

import React, { useState } from 'react'
import Searchbar from '@/components/Searchbar'
import Filter from '@/components/Filter'
import Products from '@/components/Products'
import Button from '@/components/Button'
import { Product } from '@/components/ProductCard'

interface ProductListProps {
    products: Product[]
}
const ProductList = ({
    products
}: ProductListProps) => {
    const onSearch = () => {

    }

    //filter operations
    const [selectedFilter, setSelectedFilter] = useState('all');

    const handleFilterChange = (option: string) => {
        setSelectedFilter(option);
    };

    const filteredProducts = products.filter((product) => {
        if (selectedFilter === 'all') {
            return true;
        } else if (selectedFilter === 'inStock') {
            return product.stock && product.stock > 0;
        } else if (selectedFilter === 'outOfStock') {
            return !product.stock || product.stock === 0;
        } {/*} else if (selectedFilter === 'with3d') {
            return product.has3D;
        } else if (selectedFilter === 'no3d') {
            return !product.has3D;
        }*/}

        return true;
    });

    const filterOptions = [
        { label: 'All', value: 'all' },
        { label: 'In Stock', value: 'inStock' },
        { label: 'Out of Stock', value: 'outOfStock' },
        { label: 'With 3D', value: 'with3d' },
        { label: 'No 3D', value: 'no3d' },
    ];

    return (
        <div className='rounded-lg shadow-md p-4 w-full text-center  bg-white'
            style={{
                backgroundColor: '#ffff',
                margin: '8px'
            }}
        >
            <div className='flex w-full gap-4 items-center justify-center mt-4'>
                <Searchbar
                    onSearch={onSearch}
                />
                <Button
                    title='Render 3D Images'
                    onClick={() => { }}
                    primaryColor='primary'
                    hoverColor='secondary'
                />
            </div>
            <Filter
                options={filterOptions}
                selectedOption={selectedFilter}
                onOptionChange={handleFilterChange}
            />
            <Products
                products={filteredProducts}
            />
        </div>
    )
}

export default ProductList
