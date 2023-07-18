import React, { ChangeEvent } from 'react';
import './Input.css'

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
                                         type,
                                         placeholder,
                                         value,
                                         onChange,
                                     }) => {
    return (
        <input
            className='input'
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;