import React, { FC } from 'react';

interface InputProps {
    type: string;
    placeholder: string;
    name: string;
    id: string;
    width: string;
    bg?: string;
}

const Input: FC<InputProps> = ({ type, placeholder, name, id, width, bg}) => {
    return (
        <>
            <div className="input-div" style={{width}}>
                <input type={type} name={name} id={id} className="inputClass" placeholder=" " style={{backgroundColor: bg}}></input>
                <label htmlFor={name} className="placeholder-input">{placeholder}</label>
            </div>
        </>
    )
}

export default Input;