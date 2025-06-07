"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CirclePlus } from 'lucide-react';
import { Button } from "@/components";
import {ConsulCard} from "@/components"
import { 
  lessThen,
} from '@/assets';
import { getAllConsul } from "@/services/ConsulApi";



interface ConsulData  {
    id: number,
    datetime: string,
    type: string,
    description: string,
    doctorName: string,
    patientId: number,
    patient: {
      id: number,
      name: string,
      tutorName: string,
      age: number,
      species: string,
    }}

export default function ServicePage() {

  const [consultas, setConsultas] = useState<ConsulData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllConsul();
      setConsultas(data);
    }
    fetchData();
  }, []);

  const dataAtual = new Date().toISOString()
  console.log(dataAtual)
  const [input, setInput] = useState("");
  const [filtro, setFiltro] = useState("");
  const [inicio, setInicio] = useState("")
  const [fim, SetFim] = useState("")


  function Agendamento() {
    let consultasFiltradas = consultas
      .filter(card =>card.doctorName.toLowerCase().includes(filtro.toLowerCase()))
      .filter(card => card.datetime>=(dataAtual))
      .filter(card => !inicio || card.datetime>=(inicio))
      .filter(card => !fim || card.datetime<=(fim));
    
    if (consultasFiltradas.length === 0) {
      return (
      <div className="col-span-3 flex items-center justify-center text-lg text-gray-500">
        Não há consultas agendadas.
      </div>
      );
    }
    return (
      consultasFiltradas.map(card => (
      <ConsulCard
        key={card.id}
        id={card.id}
        DateTime={card.datetime}
        typeConsul={card.type}
        doctorName={card.doctorName}
        pacientName={card.patient.name}
        pacientTutorName={card.patient.tutorName}
        pacientAge={card.patient.age}
        pacientSpecie={card.patient.species}
        description={card.description}
      />
      ))
    );
  }

      
  
  function AplicarFiltro(){
      setFiltro(input)
  }


  function Historico() {
    let consultasFiltradas = consultas
      .filter(card => card.datetime < (dataAtual))
      .filter(card => card.doctorName.toLowerCase().includes(filtro.toLowerCase()))
      .filter(card => !inicio || card.datetime >= (inicio))
      .filter(card => !fim || card.datetime <= (fim));

    if (consultasFiltradas.length === 0) {
      return (
        <div className="col-span-3 flex items-center justify-center text-lg text-gray-500">
          Não há consultas passadas.
        </div>
      );
    }

    return (
      consultasFiltradas.map(card => (
        <ConsulCard
          key={card.id}
          id={card.id}
          DateTime={card.datetime}
          typeConsul={card.type}
          doctorName={card.doctorName}
          pacientName={card.patient.name}
          pacientTutorName={card.patient.tutorName}
          pacientAge={card.patient.age}
          pacientSpecie={card.patient.species}
          description={card.description}
        />
      ))
    );
  }



  return (

    // Div geral
    <div className="pt-12 pb-20 w-full ">

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
      <div className="flex flex-row w-full mb-48">
        

        <Tabs defaultValue="scheduling" className="w-full ">
          
          <div className="flex flew-row items-center w-full mb-8 justify-between">

            {/* Histórico ou agendamento */}
            <TabsList className="flex flex-row  bg-[#F0F0F0] h-14 w-auto gap-2 p-3 rounded-xl">

              <TabsTrigger value="scheduling" className="font-normal text-black py-2 px-2 rounded-lg data-[state=active]:bg-white">
                Agendamento
              </TabsTrigger>

              <TabsTrigger value="history" className=" font-normal text-black py-2 px-2 rounded-lg data-[state=active]:bg-white">
                Histórico
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

            {Historico()}

          </TabsContent >



          <TabsContent value="scheduling"  className="grid grid-cols-3 grid-rows-2 gap-3 w-[1224px] mt-[-12px]">
            
            {Agendamento()}

          </TabsContent>

        </Tabs>


      </div>

      {/* Botão final de nova consulta */}
      <div className="flex justify-end mb-20">
        <Button
          text="Nova Consulta"
          onClickAction={() => {}}
          width={220}
          icon={<CirclePlus />}
        />
      </div>

    </div>

  )
}