// "use client"
// import React;
// import { useForm } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CirclePlus } from 'lucide-react';
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
  
  const saida = (): void => {
    console.log("Agora vai!");
  }



  return (

    <div className="pt-12 w-full">

      <div className="w-full flex flex-row mb-8 items-center gap-4">
        <img src={lessThen} alt="Lessthen" className = "w-10 h-10 "/>
        <h1>Atendimento</h1>
      </div>

      <div className="flex flex-col mb-10">
        <h2 className="mb-6">Qual o médico?</h2>
        <div className="flex flex-row items-center gap-6">
          <h2>caixa input</h2>
          {/* <input {...register("patientName")} 
            type="text" 
            placeholder='Digite aqui...' 
            className = 'border border-black rounded-xl h-12 placeholder-[#D9D9D9] py-4 pl-4'
          /> */}
          
          <Button text="Buscar" color="#7D1AD7" width={116} onClickAction={saida}/>
        </div>

      </div>

      <div>
        <Tabs defaultValue="history" className="w-[400px]">

          <TabsList className="mb-8 flex flex-row">

            <TabsTrigger value="history">
              Histórico
            </TabsTrigger>

            <TabsTrigger value="scheduling">
              Agendamento
            </TabsTrigger>


            <TabsTrigger value="calendar">
              Calendário que falta criar
            </TabsTrigger>


          </TabsList>

          <TabsContent value="history">
            Construir tela de histórico
          </TabsContent>

          <TabsContent value="scheduling">
            Construir tela de agendamento
          </TabsContent>

          <TabsContent value="calendar">
            Construir telinha de calendário talvez com shadcn
          </TabsContent>

        </Tabs>

      </div>
      
      <div className="justify-end">
        <Button text="Nova Consulta" width={205} icon={<CirclePlus />} onClickAction={saida}/>
      </div>

    </div>

  )
}