import React, { FC } from 'react';

interface IReportProps {
    aluno: string;
    turno: string;
    serie: string;
    curso: string;
    componente: string;
    comentario: string;
    onClick: () => void;
}

const Report: FC<IReportProps> = ({ aluno, turno, serie, curso, componente, comentario, onClick }) => {
    return (
        <div className='rounded-[2px] bg-slate-500 max-h-[8rem] min-h-[8rem] text-slate-50 flex flex-row first:mt-0 mt-4'>
            <div className='flex flex-col ml-4 mt-2 w-[30%]'>
                <span><span className='font-semibold mt-1'>Aluno: </span> {aluno}</span>
                <span><span className='font-semibold mt-1'>Turno: </span> {turno}</span>
                <span><span className='font-semibold mt-1'>Série: </span> {turno}</span>
                <span><span className='font-semibold mt-1'>Curso: </span> {turno}</span>
            </div>
            <div className='flex flex-col ml-4 mt-2 '>
                <span><span className='font-semibold'>Componente: </span> {componente} </span>
                <div className='w-[70%] h-full'>
                     <p className='w-[400px] h-full text-justify break-normal'><span className="font-semibold mt-1">Comentário: </span>{comentario}</p>
                </div>
            </div>
        </div>
    )
}

export default Report;