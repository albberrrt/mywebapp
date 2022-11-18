import React, { FC } from 'react';
import { BiSearch } from 'react-icons/bi'

interface ButtonProps {
    value?: string;
    bg: string;
    type?: 'DEFAULT' | 'SEARCH';
    width: string;
    id: string;
    name: string;
}

const Button: FC<ButtonProps> = ({ value, bg, type, width, id, name }) => {
    return (
        <>
            <div className="button-div" style={{width}}>
                <button type="submit" name={name} id={id} style={{backgroundColor: bg}} className="flex justify-center items-center">{value} {type === 'SEARCH' ? <BiSearch/> : null} </button>
            </div>
        </>
    )
}

export default Button;