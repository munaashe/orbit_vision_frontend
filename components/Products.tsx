'use client'
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

export interface Product {
    id: number;
    title: string;
    description?: string;
    price: number;
    imageUrl?: string;
    availableQuantity?: number;
}

interface ProductsProp {
    products: Product[];
}
const Products = ({ products }: ProductsProp) => {
    const [productsPerPage, setProductsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range of products to display on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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
            {currentProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
            <Pagination
                currentPage={currentPage}
                totalProducts={products.length}
                productsPerPage={productsPerPage}
                onPageChange={handlePageChange}
                onProductsPerPageChange={handleProductsPerPageChange}
            />
        </div>
    )
}

export default Products

