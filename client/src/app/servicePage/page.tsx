"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CirclePlus } from 'lucide-react';
import { Button } from "@/components";
import {ConsultCard} from "@/components"
import { 
  lessThen,
  Sheep,
  Cat,
  Pig,
  Cow,
  Horse,
  Dog,
  downSignal,
  PlusIcon,
  Calendar,
} from '@/assets';



interface  ConsultCardType {
id: number; 
Date: string;
Time: string;
typeConsul: string;
doctorName: string;
pacientName: string;
pacientTutorName: string;
pacientAge: number;
pacientSpecie: string;
onClick: () => void;
key?: number;
};


// Preenchendo o vetor
const ConsultCardVetor: ConsultCardType[] = [

{
id: 1,
Date: "2025-03-31",
Time: "07:00",
typeConsul: "FIRST",
doctorName: "Larissa",
pacientName: "Miau",
pacientTutorName: "Carlos",
pacientAge: 3,
pacientSpecie: "CAT",
onClick: () => console.log("Consulta 1 selecionada"),
},

{
id: 2,
Date: "2025-04-05",
Time: "14:00",
typeConsul: "VACINATION",
doctorName: "Lais",
pacientName: "Thor",
pacientTutorName: "Luís",
pacientAge: 1,
pacientSpecie: "DOG",
onClick: () => console.log("Consulta 2 selecionada"),
},

{
id: 3,
Date: "2025-07-27",
Time: "09:00",
typeConsul: "RETURN",
doctorName: "Larissa",
pacientName: "Bela",
pacientTutorName: "Maria",
pacientAge: 2,
pacientSpecie: "SHEEP",
onClick: () => console.log("Consulta 3 selecionada"),
},

{
id: 4,
Date: "2025-07-13",
Time: "16:30",
typeConsul: "CHECKUP",
doctorName: "Manuel",
pacientName: "Bidu",
pacientTutorName: "Ana",
pacientAge: 4,
pacientSpecie: "COW",
onClick: () => console.log("Consulta 4 selecionada"),
},

];




export default function ServicePage() {

  const [input, setInput] = useState("");
  const [filtro, setFiltro] = useState("");
  const [inicio, setInicio] = useState("")
  const [fim, SetFim] = useState("")

  let consultasFiltradas = ConsultCardVetor
    .filter(card =>card.doctorName.toLowerCase().includes(filtro.toLowerCase()))
    .filter(card => !inicio || card.Date>=(inicio))
    .filter(card => !fim || card.Date<=(fim));
      
  
  function AplicarFiltro(){
    setFiltro(input)
  }





  return (

    // Div geral
    <div className="pt-12 pl-48 pr-48 pb-20 w-full ">

      {/* Ícone voltar e "Atendimento" */}
      <div className="w-full flex flex-row mb-8 items-center gap-4">
        <Image src={lessThen} alt="Lessthen" className = "w-10 h-10 "/>
        <h1 className="text-5xl font-semibold">Atendimento</h1>
      </div>

      {/* "Qual o médico?", input e botão de buscar */}
      <div className="flex flex-col mb-10">

        <h2 className="mb-6 text-2xl">Qual o médico?</h2>

        <div className="flex flex-row items-center gap-6">

          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text"
            placeholder="Pesquise aqui..."
            className="border border-[#101010] rounded-lg p-4 w-[520px]"/>

          {/* Botão de buscar */}
          <Button
            text="Buscar"
            onClickAction={AplicarFiltro}
            color="#7D1AD7"
            width={116}/>        
        </div>

      </div>

      {/* Histórico/Agendamento e filtro de calendário */}
      <div className="flex flex-row w-full">
        
        <div className="mb-48">

          <Tabs defaultValue="history" className="w-full ">
            
            <div className="flex flew-row items-center w-full mb-8 justify-between">

              {/* Histórico ou agendamento */}
              <TabsList className="flex flex-row  bg-[#F0F0F0] h-14 w-60 gap-2 p-3 rounded-xl">

                <TabsTrigger value="history" className=" font-normal text-black py-2 px-3 rounded-lg data-[state=active]:bg-white">
                  Histórico
                </TabsTrigger>

                <TabsTrigger value="scheduling" className="font-normal text-black py-2 px-3 rounded-lg data-[state=active]:bg-white">
                  Agendamento
                </TabsTrigger>

              </TabsList>
              
              {/* Filtos de datas */}
              <div className="flex flex-row gap-3 ">
                <input 
                type="date" 
                value={inicio}
                onChange={e => setInicio(e.target.value)}
                className="border border-[#D9D9D9]  px-2 py-2 rounded-lg w-36"></input>
                
                <input 
                type="date" 
                value={fim}
                onChange={e => SetFim(e.target.value)}
                className="border border-[#D9D9D9] px-2 py-2 rounded-lg w-36"></input>
              </div>

            </div>

            <TabsContent value="history" className="grid grid-cols-3 grid-rows-2 gap-3 w-[1224px]" >
              <div>

              </div>
            </TabsContent >



            <TabsContent value="scheduling"  className="grid grid-cols-3 grid-rows-2 gap-3 w-[1224px]">
              
              {consultasFiltradas.map(card => (
                <ConsultCard
                key={card.id}
                id={card.id}
                Date={card.Date}
                Time={card.Time}
                typeConsul={card.typeConsul}
                doctorName={card.doctorName}
                pacientName={card.pacientName}
                pacientTutorName={card.pacientTutorName}
                pacientAge={card.pacientAge}
                pacientSpecie={card.pacientSpecie}
                onClick={card.onClick}
                />
              ))}

            </TabsContent>

          </Tabs>

        </div>

      </div>

      {/* Botão final de nova consulta */}
      <div className="flex justify-end mb-20">
        <Button text="Nova Consulta" onClickAction={() => {}} width={220} icon={<CirclePlus />} />
      </div>

    </div>

  )
}