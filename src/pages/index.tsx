
import Image from 'next/image';
import logoImg from "../assets/CA-CPS-LOGOS.png";
import asideImg from "../assets/expocuca-aside.png";

import Input from "../components/Input";
import Button from "../components/Button";

import { api } from "../lib/axios"

import { FormEvent, useState } from "react";
import Report from '../components/Report';

export default function Home() {
  const [form, setForm] = useState(false);
  const [aluno, setAluno] = useState('');
  const [report, setReport] = useState([]);

  function openForm() {
    setForm(true);
    console.log(aluno);
  }

  async function getData(event: FormEvent) {
    event.preventDefault();

      var url = "/data.php?n=" + aluno;
      const [alunoReports] = await Promise.all([
        
        api.get(url)
      ])
      
      setReport( arr => alunoReports.data);
      console.log(report);
  }

  const list = report.map(({key, aluno, turno, serie, curso, componente, comentario}) => <Report key={key} aluno={aluno} turno={turno} serie={serie} curso={curso} componente={componente} comentario={comentario} onClick={function (): void {
    throw new Error('Function not implemented.');
  } } />);

  return (
      <div>

        <div className="absolute w-full h-screen z-[100] flex justify-center items-center" style={{display: form ? 'flex' : 'none'}}>
          <div className="w-[60%] min-h-[80%] bg-cablue-800 pr-10 pl-10 flex flex-col rounded-[6px]">
            <form onSubmit={getData} className="w-full h-[10%] flex">
              <Input
                key="random1"
                type="text"
                placeholder="Nome do Aluno"
                name="inputAlunoName"
                id="inputAlunoID"
                width="50%"
                bg="#fff"
                value={aluno}
                onChange={event => setAluno(event.target.value)}
              />
              <Button 
                bg='#ff0002'
                width="10%"
                id="sendButton02Id"
                name="sendButton02Name"
                types='SEARCH'
                className="ml-7"
              />
              <div className='relative right-0 w-full text-right flex items-center mt-[1.7rem]'>
                <span className='w-full text-gray-50 text-3xl mr-4 underline'><span className='hover:cursor-pointer' onClick={() => setForm(false)}>Voltar</span></span>
              </div>
            </form>
            <div className='w-full flex flex-col mt-10 max-h-[480px] overflow-y-auto'>
              {list}
            </div>
          </div>
          <div className="absolute w-full h-screen z-[-10] flex justify-center items-center bg-gray-900 opacity-30" onClick={() => setForm(false)}></div>
        </div>



      <header className="w-full absolute z-50">
        <div className="w-100 relative pt-3 pb-2 pl-[5%] pr-[5%] flex flex-auto items-center">
          <div className="flex flex-grow-0 flex-shrink-0 text-left items-center max-w-[30%]">
            <a className="max-w-[60%]">
              <Image src={logoImg} alt="Logo Camargo Aranha" />
            </a>
          </div>
        </div>
      </header>
      <main className="flex flex-initial flex-col min-h-screen">
        <div className="relative flex-initial flex-shrink-0 flex-grow-0">
          <div className="bg-app bg-cover bg-no-repeat pt-28 pb-14 relative z-0 before:bg-gradient-to-r from-cablue-900 to-red-500 before:w-full before:h-full before:absolute before:inline-block before:z-10 before:opacity-40 before:top-0 ">
            <div className="relative w-[90%] max-width-[1232px] mt-0 mb-0 ml-auto mr-auto pl-4 pr-4 z-50">
              <div className="pt-[18%] pb-[18%] flex flex-initial flex-row flex-wrap items-center">
                <div className="mr-auto ml-auto flex flex-grow flex-shrink basis-0 max-w-full pr-4 pl-4"></div>
              </div>
            </div>
          </div>
          <div className="relative z-1 w-[86%] -mt-[650px] mr-auto mb-[125px] ml-auto rounded-t-[6px] flex flex-[0_0_auto] flex-grow pt-[30px] pb-[30px] ">
            <div className="relative z-10 w-full flex items-center">
              <div onSubmit={openForm} className="bg-gray-50 rounded-[6px] pt-[60px] pb-[80px] w-[40%] max-h-[60%] flex justify-center flex-col items-center shadow-[0_20px_20px_-10px_rgb(49,52,57,0.3)]">
                <h1 className="text-gray-900 font-roboto font-medium text-3xl -mt-4">PESQUISE SEU FORMULÁRIO!</h1>
                <Input 
                  type="text"
                  placeholder="Nome do Aluno"
                  name="input"
                  id="inputID"
                  width="80%"
                  bg="#fff"
                  value={aluno}
                  onChange={event => setAluno(event.target.value)}
                />

                <Button
                  value="Procurar"
                  bg="#002c58"
                  width="80%"
                  id="sendButton01Id"
                  name="sendButton01Name"
                  types="SEARCH"
                  onClick={openForm}
                />
              </div>
              <Image src={asideImg} alt="Expocuca" className='w-[800px] ml-20'/>
            </div>
          </div>
        </div>
      </main>
    </div>
    
  )
}
