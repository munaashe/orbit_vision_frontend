import React from 'react'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { updateModal } from '@/redux/actions/modal';

const Congratulations = ({ closeModal = () => { } }) => {
    const dispatch = useDispatch();
    const onClose = () => {
        dispatch(updateModal({}));
        closeModal();
    }
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center justify-center w-full w-3/4'>
                <div className='text-[24px] font-semibold pt-2'>
                    Congratulations!
                </div>
                <div className='w-full pt-2 text-[14px]'>
                    The operation was successful
                </div>
                <div className='rounded-xl bg-primary hover:bg-secondary text-white text-center px-4 py-2 mt-8 w-1/2 cursor-pointer'
                    onClick={onClose}
                >
                    Close
                </div>
            </div>
        </div>
    )
}

export default Congratulations