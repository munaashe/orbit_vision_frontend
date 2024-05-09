import React from "react";
import { useSelector } from "react-redux";
import Modal from '../Modal';
import AddShop from "./AddShop";
import Congratulations from "./Congratulations";
import Render3d from "./Render3d";

interface ModalHOCProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalHOC: React.FC<ModalHOCProps> = ({ open, setOpen }) => {
    const { modal: menu } = useSelector((state: any) => state?.modal);
    console.log(menu)
    switch (menu) {
        case 'Add Shop':
            return (
                <Modal
                    open={open}
                    setOpen={setOpen}
                    size='w-[380px] h-[320px]'
                    content={<AddShop />}
                    title='Add Shopify Shop'
                    onClose={() => { }}
                />
            );
        case 'Render 3d':
            return (
                <Modal
                    open={open}
                    setOpen={setOpen}
                    size='w-[580px] h-[480px]'
                    content={<Render3d closeModal={() => setOpen(false)} />}
                    title='Render 3D Images'
                    onClose={() => { }}
                />
            );
        case 'Congratulations':
            return (
                <Modal
                    open={open}
                    setOpen={setOpen}
                    content={<Congratulations closeModal={() => setOpen(false)} />}
                    size='w-[380px] h-[320px]'
                    title=''
                />
            );
        default:
            return null;
    }
};

export default ModalHOC;