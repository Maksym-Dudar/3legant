import { PropsWithChildren } from "react";

export function ButtonAction({ text, onClick}: PropsWithChildren<{text:string, onClick: ()=>void}>) {
  
  return(
    <button onClick={onClick} className="flex w-full text-white text-center font-inter bg-black py-2 rounded-lg justify-center text-16 font-500 leading-180">
        {text}
    </button>

);
}