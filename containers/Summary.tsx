import React from 'react'
import Button from '@/components/Button'
import Heading from '@/components/Heading'


const Summary = () => {
    return (
        <div className='rounded-2xl shadow-2xl border p-4 w-full h-full w-full bg-white'>
            <Heading />
            <div className='flex items-center w-full gap-4'>
                <div>
                    Current plan
                </div>
                <Button />
            </div>
            <div>
                Available Credit
            </div>
            <div>
                Products with and w/out 3d
            </div>
        </div>
    )
}

export default Summary

