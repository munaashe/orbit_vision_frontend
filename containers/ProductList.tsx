'use client'

import React, { useEffect, useState } from 'react'
import Searchbar from '@/components/Searchbar'
import Filter from '@/components/Filter'
import Products from '@/components/Products'
import Button from '@/components/Button'
import { useQuery } from 'react-query'
import ModalHOC from '@/components/modals/ModalsHOC'
import { useDispatch } from 'react-redux'
import { updateModal } from '@/redux/actions/modal'
import { getProducts } from '@/utils/fetchData'
import { Product } from '@/components/ProductCard'

interface ProductListProps {
}
const ProductList = ({
}: ProductListProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const dispatch = useDispatch()

    const { data: products, isLoading, isError, isSuccess } = useQuery('products', getProducts);


    useEffect(() => {
        if (products) {
            const filteredProducts = products.filter((product: { render_status: string }) => product.render_status === 'queued');
        }
    }, [products]);
    const onSearch = () => {

    }

    //filter operations
    const [selectedFilter, setSelectedFilter] = useState('all');

    const handleFilterChange = (option: string) => {
        setSelectedFilter(option);
    };


    const filteredProducts = isSuccess ? products?.filter((product: any) => {
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

        return ;
    }) : products;

    const filterOptions = [
        { label: 'All', value: 'all' },
        { label: 'In Stock', value: 'inStock' },
        { label: 'Out of Stock', value: 'outOfStock' },
        { label: 'With 3D', value: 'with3d' },
        { label: 'No 3D', value: 'no3d' },
    ];

    const onRenderInitiate = () => {
        dispatch(updateModal('Render 3d'))
        setOpenModal(true)
    }

    return (
        <>
            <ModalHOC
                open={openModal}
                setOpen={setOpenModal}
            />
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
                        title='Initiate Rendering'
                        onClick={onRenderInitiate}
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
        </>
    )
}

export default ProductList
