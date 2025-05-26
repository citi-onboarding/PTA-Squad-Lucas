'use client';
import { TopBar } from "@/components";
import { Buttons } from "@/components";
import { Bike } from 'lucide-react';

export default function Home() {

  const add = () => {
    console.log("foi");
    return
  }

  return (

    <TopBar
    page1={<>

      <Buttons 
          text={"Nova Páginas"}



          color={"#7D1AD7"}
          
          onClick={add}

          width={300}

          icon={<Bike />}
          />
    
    </>}
    page2={<></>}
    />
  );
}
