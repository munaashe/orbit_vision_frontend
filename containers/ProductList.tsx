'use client'
import React from 'react'
import Searchbar from '@/components/Searchbar'
import Filter from '@/components/Filter'
import Products from '@/components/Products'
import Button from '@/components/Button'

const ProductList = () => {
    const onSearch = () => {

    }
    return (
        <div className='h-full rounded-2xl shadow-2xl p-4 w-full text-center flex flex-col items-center bg-white'>
            <div className='flex w-full gap-4 items-center justify-center'>
                <Searchbar
                    onSearch={onSearch}
                />
                <Button />
            </div>
            <Filter />
            <Products />
        </div>
    )
}

export default ProductList
