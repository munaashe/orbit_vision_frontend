import React from 'react'
import Heading from '@/components/Heading'

const PlanInfo = () => {
    return (
        <div className='rounded-lg shadow-md p-4 w-full h-full bg-white'
            style={{
                backgroundColor: '#ffff',
                margin: '8px'
            }}
        >
            <Heading
                title='Plan Information'
            />
            <div>
                Plan Info
            </div>
            <div>
                render counts
            </div>
        </div>
    )
}

export default PlanInfo