

import Image from 'next/image';
import logoImg from "../assets/CA-CPS-LOGOS.png";

import { api } from "../lib/axios"

export default function Home() {

  function openForm() {

  }


  return (
    <div>
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
          <div className="relative z-1 w-[86%] -mt-96 mr-auto mb-[125px] ml-auto rounded-t-[6px] flex flex-[0_0_auto] flex-grow pt-[30px] pb-[30px] shadow-[0_20px_20px_-10px_rgb(49,52,57,0.3)]">
            <div className="relative z-10 w-full">
              <form onSubmit={openForm} className="bg-white rounded-t-[6px] pt-[60px] pb-[80px] w-[40%] flex justify-center">

              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
    
  )
}
