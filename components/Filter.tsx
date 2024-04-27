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
        <div className="filter">
            {options.map((option) => (
                <button
                    key={option.value}
                    className={option.value === selectedOption ? 'selected' : ''}
                    onClick={() => onOptionChange(option.value)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
};

export default Filter;