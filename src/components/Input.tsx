import React, { FC } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    value?: string;
    placeholder: string;
    name: string;
    id: string;
    width: string;
    bg?: string;
}

const Input: FC<InputProps> = ({ type, value, placeholder, name, id, width, bg, ...props}) => {
    return (
        <>
            <div className="input-div" style={{width}}>
                <input type={type} name={name} defaultValue={value} id={id} className="inputClass" placeholder=" " style={{backgroundColor: bg}} {...props}></input>
                <label htmlFor={id} className="placeholder-input">{placeholder}</label>
            </div>
        </>
    )
}

export default Input;