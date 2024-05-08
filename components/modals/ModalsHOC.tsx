import React from "react";
import { useSelector } from "react-redux";
import Modal from '../Modal';
import AddShop from "./AddShop";

interface ModalHOCProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalHOC: React.FC<ModalHOCProps> = ({ open, setOpen }) => {
    const { data: menu } = useSelector((state: any) => state?.modal);
    switch (menu) {
        case 'Add Shop':
            return (
                <Modal
                    open={open}
                    setOpen={setOpen}
                    size='w-[380px] h-[420px]'
                    content={<AddShop />}
                    title='Add Shopify Shop'
                    onClose={() => { }}
                />
            );


        default:
            return null;
    }
};

export default ModalHOC;