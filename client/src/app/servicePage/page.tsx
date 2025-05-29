"use client";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CirclePlus } from 'lucide-react'; // isso aqui pode usar? se não, como faço para colcoar img no parâmetro de ícone?
import { Button } from "@/components"


import { 
  lessThen,
  Sheep,
  Cat,
  Pig,
  Cow,
  Horse,
  Dog,
  downSignal,
  Alarm,
  Calendar,
 } from '@/assets';


export default function ServicePage() {

  return (

    // div geral
    // largura não ajusta automaticamnte com o w-full
    <div className="pt-12 pl-48 pr-48 pb-20 w-[1300px] ">

      {/* div ícone de voltar e título "Atendimento" */}
      <div className="w-full flex flex-row mb-8 items-center gap-4">
        <Image src={lessThen} alt="Lessthen" className = "w-10 h-10 "/>
        <h1 className="text-5xl font-semibold">Atendimento</h1>
      </div>

      {/* div pergunta "Qual o médico?", caixa de texto para busca e botão de busca */}
      <div className="flex flex-col mb-10">

        <h2 className="mb-6 text-xl">Qual o médico?</h2>
        <div className="flex flex-row items-center gap-6">

          {/* tenho dúvidas em como fazer isso */}
          <h2>caixa input</h2>

          {/* edições no componente Button */}
          <Button text="Buscar" onClickAction={() => console.log("Deu certo!")} color="#7D1AD7" width={116}/>
        </div>

      </div>

      {/* div escolha entre histórico e agendamento e filtro de calendário */}
      <div className="flex flex-row">

        {/* div escolha entre histórico e agendamento */}
        <div className="mb-48">

          <Tabs defaultValue="history" className="w-[400px]">
            
            <div className="flex flew-row items-center mb-8 ">

              <TabsList className="flex flex-row bg-[#F0F0F0] h-14 w-60 gap-2 p-3 rounded-xl">

                <TabsTrigger value="history" className=" font-normal text-black py-2 px-3 rounded-md data-[state=active]:bg-white">
                  Histórico
                </TabsTrigger>

                <TabsTrigger value="scheduling" className="font-normal text-black py-2 px-3 rounded-md data-[state=active]:bg-white">
                  Agendamento
                </TabsTrigger>

              </TabsList>
              
            </div>


            <TabsContent value="history">
              {/* vai receber um page3? */}
              Construir tela de histórico
            </TabsContent>

            <TabsContent value="scheduling">
              {/* vai receber um page4? */}
              Construir tela de agendamento
            </TabsContent>

          </Tabs>

        </div>
        {/* div filtro de calendário */}
        {/* vai usar o tabs, igual o de cima? */}
        {/* como colocar ícones de calendário? */}
        <div className="mb-48 flex justify-between">

          <Tabs defaultValue="history" className="w-[400px]">
            
            <div className="flex flew-row items-center mb-8 ">

              <TabsList className="flex flex-row bg-[#F0F0F0] h-14 w-60 gap-2 p-3 rounded-xl">

                <TabsTrigger value="history" className=" font-normal text-black py-2 px-3 rounded-md data-[state=active]:bg-white">
                  Icone?
                </TabsTrigger>

                <TabsTrigger value="scheduling" className="font-normal text-black py-2 px-3 rounded-md data-[state=active]:bg-white">
                  Icone?
                </TabsTrigger>

              </TabsList>
              
            </div>

            {/* se for assim, ele deve abrir uma telinha menor? */}
            <TabsContent value="history">
              Construir tela de histórico
            </TabsContent>

            {/* se for assim, ele deve abrir uma telinha menor? */}
            <TabsContent value="scheduling">
              Construir tela de agendamento
            </TabsContent>

          </Tabs>

        </div>


      </div>





      {/* div botão final de nova consulta */}
      {/* ajustar propriedade de tamanho de fonte, padding, flex-row */}
      <div className="flex justify-end mb-20">
        <Button text="Nova Consulta" onClickAction={() => console.log("Deu certo!")} width={205} icon={<CirclePlus />} />
      </div>

    </div>

  )
}