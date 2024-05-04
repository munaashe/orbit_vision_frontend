import React, { useState } from 'react';

interface FilterOption {
    label: string;
    value: string;
}

interface FilterProps {
    options: FilterOption[];
    selectedOption: string;
    onOptionChange: (option: string) => void;
}

const Filter = ({ options, selectedOption, onOptionChange }: FilterProps) => {
    return (
        <div className='flex justify-evenly w-2/3 py-2'>
            {options.map((option) => (
                <button
                    key={option.value}
                    className={`rounded-xl px-4 py-1 text-white ${option.value === selectedOption ? 'bg-primary' : 'bg-secondary'}`}
                    onClick={() => onOptionChange(option.value)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
};

export default Filter;