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
  return (
    <button type="button"

      onClick={onClick}
      
      style={{backgroundColor: color, width}}

      className={` h-12 rounded-full text-white flex items-center justify-center gap-[10px] shadow-md px-10`}>
      
      {icon}{text}
      
    </button>
  )
}
