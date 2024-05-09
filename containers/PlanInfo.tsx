'use client'

import React, { useState, useEffect } from 'react'
import Heading from '@/components/Heading'
import ModalHOC from '@/components/modals/ModalsHOC'
import { useDispatch } from 'react-redux';
import { updateModal } from '@/redux/actions/modal';

interface PlanInfoProps {
    shopName: string;
    accessToken: string;
}

const PlanInfo = ({
    shopName = '',
    accessToken = ''
}: PlanInfoProps) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const dispatch = useDispatch()
    console.log(shopName)

    useEffect(() => {
        if (shopName === null || shopName === '') {
            dispatch(updateModal('Add Shop'))
            setModalOpen(true)
        }
    }, [])

    return (
        <>
            <ModalHOC
                open={modalOpen}
                setOpen={setModalOpen}
            />
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
                    <table className="w-full pt-4">
                        <thead className="text-left">
                            <tr>
                                <th className="py-2 px-4">Item</th>
                                <th className="py-2 px-4">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="my-2">
                                <td className="py-1 px-4">
                                    <div className="flex items-center gap-4">
                                        <div>Shop Name</div>
                                    </div>
                                </td>
                                <td className="py-1 px-4">{shopName}</td>
                            </tr>
                            <tr>
                                <td className="py-1 px-4">
                                    <div className="flex items-center gap-4">
                                        <div>URL</div>
                                    </div>
                                </td>
                                <td className="py-1 px-4">{`${shopName}.myshopify.com`}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='pt-8 flex w-full'>
                    <div className='flex-1 font-semibold px-4 w-full'>
                        Render Counts
                    </div>
                    <div className='text-primary px-4'>
                        64
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanInfo