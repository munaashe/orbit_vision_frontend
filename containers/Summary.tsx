'use client'

import React from 'react'
import Button from '@/components/Button'
import Heading from '@/components/Heading'

interface SummaryProps {
    currentPlan: string;
    availableCredit: string;
    productsQuantity: string
}


const Summary = ({
    currentPlan,
    availableCredit,
    productsQuantity,
}: SummaryProps) => {
    return (
        <div className='p-4 w-full rounded-xl shadow shadow-2xl'
            style={{
                backgroundColor: '#ffff',
                margin: '8px'
            }}
        >
            <Heading
                title='Account Summary'
            />
            <table className="w-full pt-4">
                <thead className="text-left">
                    <tr>
                        <th className="py-2 px-4">Item</th>
                        <th className="py-2 px-4">Value</th>
                        <th className="py-2 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="my-2">
                        <td className="py-1 px-4">
                            <div className="flex items-center gap-4">
                                <div>Current plan</div>
                            </div>
                        </td>
                        <td className="py-1 px-4">{currentPlan}</td>
                        <td className="py-1 px-4">
                            <div className="flex items-center justify-center gap-4">
                                <Button
                                    title="Change Plan"
                                    onClick={() => { }}
                                    primaryColor="primary"
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-1 px-4">
                            <div className="flex items-center gap-4">
                                <div>Available Credit</div>
                            </div>
                        </td>
                        <td className="py-1 px-4">{availableCredit}</td>
                        <td className="py-1 px-4">
                            <div className="flex items-center justify-center gap-4">
                                <Button
                                    title="Add Credit"
                                    onClick={() => { }}
                                    primaryColor="primary"
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-1 px-4">
                            <div className="flex items-center gap-4">
                                <div>Products with and without 3D</div>
                            </div>
                        </td>
                        <td className="py-1 px-4">{productsQuantity}</td>
                        <td className="py-1 px-4">
                            <div className="flex items-center justify-center gap-4">
                                <Button
                                    title="Render 3D"
                                    onClick={() => { }}
                                    primaryColor="primary"
                                />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Summary

