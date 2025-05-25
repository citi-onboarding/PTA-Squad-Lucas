'use client';
import {useRouter} from 'next/navigation';

interface Botao {
  text: string;
  address: string;
  bg_color?: string;
  height?: number;
  width?: number;
  icon?: React.ReactNode;
  
};


export default function Button ({text, address, bg_color="#50E678", height=48, width=205, icon}: Botao) {
  const router = useRouter()
 
  return (
    <button type="button"

      onClick={() => router.push(address)}
      
      style={{backgroundColor: bg_color,height, width}}
      
      className="rounded-full text-white flex items-center justify-center gap-[10px]">

      {icon}{text}
      
    </button>
  )
}
