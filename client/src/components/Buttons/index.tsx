'use client';
import {useRouter} from 'next/navigation';

interface Botao {
  text: string;
  onClick: () => void;
  color?: string;
  width?: number;
  icon?: React.ReactNode;
  
};

export default function Button ({text, onClick, color="#50E678", width=208, icon}: Botao) {
  const router = useRouter()
  console.log(color)
  return (
    <button type="button"

      onClick={onClick}
      
      className={` bg-[#50E678] h-12 w-[${width}px] rounded-full text-white flex items-center justify-center gap-[10px] shadow-xl`}>
      
      {icon}{text}
      
    </button>
  )
}
