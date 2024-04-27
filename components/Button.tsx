import React from 'react'

interface ButtonProps {
    title: string;
    primaryColor: string;
    hoverColor: string;
    onClick: () => void;
}

const Button = ({
    title,
    primaryColor,
    hoverColor,
    onClick = () => { }
}: ButtonProps) => {
    return (
        <div
            className={`bg-${primaryColor} text-white rounded-lg px-4 py-1 hover:bg-${hoverColor} cursor-pointer whitespace-nowrap`}
            onClick={onClick}
        >
            {title}
        </div>
    )
}

export default Button