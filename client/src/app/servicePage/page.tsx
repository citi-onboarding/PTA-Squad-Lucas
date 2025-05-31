"use client";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CirclePlus } from 'lucide-react';
import { Button } from "@/components";


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
  Alarm,
  Calendar,
 } from '@/assets';


// Vetor local para testes
const nomes: string[] = ["Lucas", "Henrique", "Felipe", "Henricão", "Thais", "Ádson", "Fernando Luis"]


export default function ServicePage() {

  return (

    // div geral
    // largura não ajusta automaticamnte com o w-full
    <div className="pt-12 pl-48 pr-48 pb-20 w-full ">

      {/* div ícone de voltar e título "Atendimento" */}
      <div className="w-full flex flex-row mb-8 items-center gap-4">
        <Image src={lessThen} alt="Lessthen" className = "w-10 h-10 "/>
        <h1 className="text-5xl font-semibold">Atendimento</h1>
      </div>

      {/* div pergunta "Qual o médico?", caixa de texto para busca e botão de busca */}
      <div className="flex flex-col mb-10">

        <h2 className="mb-6 text-2xl">Qual o médico?</h2>
        <div className="flex flex-row items-center gap-6">

          {/* tenho dúvidas em como fazer isso vai ter a ver com prisma e .mapping ou .map 
            No treinamento de bacnco de dados e servidores a partir de 1:47:00 tem algo que possa ser interessante
          */}
          <input type="text" placeholder="Pesquise aqui..." className="border border-[#101010] rounded-lg p-4 w-[520px]"/>

          {/* Botão de buscar */}
          <Button text="Buscar" onClickAction={() => console.log("getConsultationsByDoctorName()")} color="#7D1AD7" width={116}/>
        </div>

      </div>

      {/* div escolha entre histórico e agendamento e filtro de calendário */}
      <div className="flex flex-row w-full">

        {/* div escolha entre histórico e agendamento */}
        <div className="mb-48">

          <Tabs defaultValue="history" className="w-full ">
            
            <div className="flex flew-row items-center w-[960px] mb-8 justify-between">

              <TabsList className="flex flex-row  bg-[#F0F0F0] h-14 w-60 gap-2 p-3 rounded-xl">

                <TabsTrigger value="history" className=" font-normal text-black py-2 px-3 rounded-lg data-[state=active]:bg-white">
                  Histórico
                </TabsTrigger>

                <TabsTrigger value="scheduling" className="font-normal text-black py-2 px-3 rounded-lg data-[state=active]:bg-white">
                  Agendamento
                </TabsTrigger>

              </TabsList>
              
              <div className="flex flex-row gap-3 ">
                <input type="date" id="inicialDate" className="border border-[#D9D9D9]  px-2 py-2 rounded-lg"></input>
                <input type="date" id="finalDate" className="border border-[#D9D9D9] px-2 py-2 rounded-lg"></input>
              </div>

            </div>



            <TabsContent value="history">
              {/* vai receber um page3? */}
              <div>Consultas passadas</div>
            </TabsContent>

            <TabsContent value="scheduling">
              {/* vai receber um page4? */}
              <div>Consultas futuras</div>
            </TabsContent>

          </Tabs>



        </div>

        {/* div filtro de calendário */}
        {/* como colocar ícones de calendário? */}
        {/* <Button text={"dd/mm/aa"} color={"black"} icon={<CalendarDays/>} onClickAction={() => console.log("Tudo bem")}  /> */}
        <div>
          
        <div>

        </div>

        <div>
          
        </div>



        </div>

      </div>





      {/* div botão final de nova consulta */}
      {/* ajustar propriedade de tamanho de fonte, padding, flex-row */}
      <div className="flex justify-end mb-20">
        <Button text="Nova Consulta" onClickAction={() => console.log("Deu certo!")} width={220} icon={<CirclePlus />} />
      </div>

    </div>

  )
}