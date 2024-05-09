'use client'
import React, { useState, useEffect } from 'react'
import InputField from '../InputField'
import { useDispatch } from 'react-redux';
import Button from '../Button';
import { updateModal } from '@/redux/actions/modal';

export interface AccountDetails {
    shop_name: string;
    access_token: string;
}

const initialState: AccountDetails = {
    shop_name: '',
    access_token: '',
}

const AddShop = () => {
    const [accountDetails, setAccountDetails] = useState<AccountDetails>(initialState)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const dispatch = useDispatch()
    const baseURL: any = process.env.NEXT_PUBLIC_BASE_API_URL



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAccountDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    const onAddShop = () => {
        setIsLoading(true)
        try {
            fetch(`${baseURL}/account`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(accountDetails),
            })
                .then(() => {
                    setIsLoading(false)
                    dispatch(updateModal('Congratulations'))
                })
        } catch (error) {
            setIsLoading(false)
            alert('Error:' + error)
        } finally {
            setIsLoading(false)
            dispatch(updateModal('Congratulations'))

        }
    }
    return (
        <div className='flex flex-col gap-4 pt-8 text-center w-full'>
            <InputField
                label='Shop Name'
                id='shop_name'
                name='shop_name'
                value={accountDetails.shop_name}
                onChange={handleChange}
            />
            <InputField
                label='Access Token'
                id='access_token'
                name='access_token'
                value={accountDetails.access_token}
                onChange={handleChange}
            />
            {isLoading ? (
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-gray-900"></div>
                </div>
            ) : (
                <Button
                    title='Add Shop'
                    onClick={onAddShop}
                    primaryColor='primary'
                />
            )}
        </div>
    )
}

export default AddShop