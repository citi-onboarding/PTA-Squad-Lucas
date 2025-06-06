'use client';
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { TopBar, Button, History } from "@/components";
import {
  Sheep, Cat, Pig, Cow, Horse, Dog, Paw, ArrowBack, task_alt
} from "@/assets";
import {useRouter} from "next/navigation"
import React, { useState, useEffect } from "react";
import {getConsulById, getHistById} from "services/ConsulApi"
import RegisterPage from "../registerScreen/page";
import ServicePage from "../servicePage/page";


export default function consulDetail() {

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
    
    const searchParams = useSearchParams();
    const id = searchParams.get("id") || "0"

const [consulData, setConsulData] = useState<ConsulData | null>(null);
const [historyData, setHistoryData] = useState<ConsulData[]>([]);


useEffect(() => {
  if (id) {
    getConsulById(Number(id)).then((data) => {
      setConsulData(data);

      // Agora que sabemos o ID do paciente, buscamos o histórico
      if (data?.patientId) {
        getHistById(data.patientId).then((history) => {
          setHistoryData(history);
        });
      }
    });
  }
}, [id]);


if (!consulData) return <div>Carregando...</div>;

const {
  type: typeConsul,
  description,
  doctorName,
  patient: {
    name: pacientName,
    tutorName: pacientTutorName,
    age: pacientAge,
    species: pacientSpecie,
  },
} = consulData;



  const Icon = {
    SHEEP: Sheep,
    CAT: Cat,
    PIG: Pig,
    COW: Cow,
    HORSE: Horse,
    DOG: Dog,
  }[pacientSpecie] || Paw;

    const backgroundColor =
    {
      "FIRST": "#BFB5FF",
      "RETURN": "#FF641999",
      "CHECKUP": "#9CFF95",
      "VACINATION": "#AAE1FF",
    }[typeConsul] || "#F0F0F0"

    const tipoCon = {
        "FIRST": "Primeira Consulta",
        "RETURN": "Retorno",
        "CHECKUP": "Check-up",
        "VACINATION": "Vacinação",
    }[typeConsul] || "Default"


    // const router = useRouter();
    // const handleClick = () => {
    //     router.push("/registerPage")
    // };
    const router = useRouter();
    const handleReturn = () => {
        router.back();
    }

    return(
    <div>   
        <TopBar
            page1={<div/>}
            page2={<RegisterPage></RegisterPage>}
        />   
            <div className="flex flex-row px-[100px]">
            <div className="w-[624px] flex flex-col gap-4">
                <div className="font-bold flex flex-row gap-4 text-[39px] items-center">
                    <button onClick={handleReturn}><Image src={ArrowBack} alt="Botao de voltar" className="w-8 h-8"></Image></button>
                    Detalhes da Consulta
                </div>
                <div className="font-bold text-xl">Paciente</div>
                <div className="flex flex-row">
                    <Image src={Icon} alt="Imagem do paciente" className=" w-[206px] h-[206px]"></Image>
                    <div className="flex flex-col gap-12 ml-10 pt-6">
                        <div className="w-16 h-16 gap-3">
                            <p className="font-bold text-xl">{pacientName}</p>
                            <p className="text-xl">{pacientAge} anos</p>
                        </div>
                            <div className="w-16 h-16 gap-3">
                            <p>{pacientTutorName}</p>
                            <p>{doctorName}</p>
                        </div>
                    </div>
                </div>
                <p className="font-bold">Descrição do Problema:</p>
                {description}
                <div className="flex flex-row h- items-center gap-6">
                    <p className="font-bold">Tipo de consulta:</p>
                    <p style={{ backgroundColor }} className="ml-5 rounded-sm text-[14px] px-2">{tipoCon}</p>
                </div>
                <div className="flex flex-col justify-center border-[1px] items-center gap-6 p-4 rounded-3xl">
                    <p>Deseja realiza outra consulta</p>
                    <Button text = "Agendamento" onClickAction={() => {}} width={570} icon = {<Image src={task_alt} alt="icone do botao de nova consulta" className="w-5 h-5"></Image>}></Button>
                </div>
            </div>
            <div className="w-[558px] flex flex-col items-center">
                <History
                vector={historyData}
                onClick={()=>{}}
                />
            </div>
            
        </div>
    </div>
    )
}