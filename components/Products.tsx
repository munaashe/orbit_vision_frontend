'use client'
import React, { useState } from 'react';
import ProductCard, { Product } from './ProductCard';
import Pagination from './Pagination';


interface ProductsProp {
    products: Product[];
}
const Products = ({ products }: ProductsProp) => {
    const [productsPerPage, setProductsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range of products to display on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct);

    // Handle page change
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Handle products per page change
    const handleProductsPerPageChange = (value: number) => {
        setProductsPerPage(value);
        setCurrentPage(1); // Reset to the first page when changing products per page
    };
    return (
        <div>
            <div className='grid grid-cols-4 gap-4 overflow-y-scroll h-[200px]'>
                {currentProducts?.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalProducts={products?.length}
                productsPerPage={productsPerPage}
                onPageChange={handlePageChange}
                onProductsPerPageChange={handleProductsPerPageChange}
            />
        </div>
    )
}

export default Products

