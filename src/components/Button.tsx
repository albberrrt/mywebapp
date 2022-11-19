import React, { FC } from 'react';
import { BiSearch } from 'react-icons/bi'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    value?: string;
    bg: string;
    types?: 'DEFAULT' | 'SEARCH';
    width: string;
    id: string;
    name: string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ value, bg, types, width, id, name, onClick, ...props}) => {
    return (
        <>
            <div className="button-div" style={{width}}>
                <button type="submit" name={name} id={id} style={{backgroundColor: bg}} onClick={onClick} className="flex justify-center items-center" {...props}>{value} {types === 'SEARCH' ? <BiSearch/> : null} </button>
            </div>
        </>
    )
}

export default Button;