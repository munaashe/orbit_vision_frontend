import React from 'react'

interface HeadingProps {
    title: string;
}

const Heading = ({ title }: HeadingProps) => {
    return (
        <div
        className='text-2xl font-semibold py-2'
        >
            {title}
        </div>
    )
}

export default Heading