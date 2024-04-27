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
        <div className='p-4 w-full bg-white'>
            <Heading
                title='Account Summary'
            />
            <table className="w-full pt-4">
                <thead className='text-center'>
                    <tr>
                        <th>Item</th>
                        <th>Value</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='my-2'>
                        <td>
                            <div className="flex items-center gap-4">
                                <div>Current plan</div>
                            </div>
                        </td>
                        <td>{currentPlan}</td>
                        <td>
                            <div className="flex items-center justify-end gap-4">
                                <Button
                                    title="Change Plan"
                                    onClick={() => { }}
                                    primaryColor="primary"
                                    hoverColor="secondary"
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flex items-center gap-4">
                                <div>Available Credit</div>
                            </div>
                        </td>
                        <td>{availableCredit}</td>
                        <td>
                            <div className="flex items-center gap-4">
                                <Button
                                    title="Add Credit"
                                    onClick={() => { }}
                                    primaryColor="primary"
                                    hoverColor="secondary"
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flex items-center gap-4">
                                <div>Products with and without 3D</div>
                            </div>
                        </td>
                        <td>{productsQuantity}</td>
                        <td>
                            <div className="flex items-center gap-4">
                                <Button
                                    title="Render 3D"
                                    onClick={() => { }}
                                    primaryColor="primary"
                                    hoverColor="secondary"
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

