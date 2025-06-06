import {Sheep,
    Cat,
    Pig,
    Cow, 
    Horse,
    Dog,
    Clock,
    Paw,
  } from "@/assets/index"
import { time } from "console";
import Image from "next/image";

interface ConsulCard {
  id: number;
  DateTime: string;
  typeConsul: string;
  doctorName: string;
  pacientName: string;
  pacientTutorName: string;
  pacientAge: number;
  pacientSpecie: string;
  onClick: () => void; //depois inserir a implementação da consulta aqui
}

export default function consultCard({
  id,
  DateTime,
  typeConsul,
  doctorName,
  pacientTutorName,
  pacientName,
  pacientAge,
  pacientSpecie,
  onClick,
}: ConsulCard){

  const consultationDate = new Date(DateTime)
  const nowDate = new Date()

  const backgroundColor =
    consultationDate < nowDate? "#F0F0F0" :
    {
      "FIRST": "#BFB5FF",
      "RETURN": "#FF641999",
      "CHECKUP": "#9CFF95",
      "VACINATION": "#AAE1FF",
    }[typeConsul] || "#F0F0F0"



  const sMonth =  DateTime.slice(5, 7);
  const sDay =DateTime.slice(8, 10);
  const sTime = DateTime.slice(11, 16); // "fatia mais significativa da hora"
  

  const tipoCon = {
    "FIRST": "Primeira Consulta",
    "RETURN": "Retorno",
    "CHECKUP": "Check-up",
    "VACINATION": "Vacinação",
  }[typeConsul] || "Default"

  const Icon = {
    SHEEP: Sheep,
    CAT: Cat,
    PIG: Pig,
    COW: Cow,
    HORSE: Horse,
    DOG: Dog,
  }[pacientSpecie] || Paw

  return (
    <button type="button"
      onClick={onClick}
      style={{backgroundColor}}
      className="w-[495px] h-[135px] rounded-xl px-6 py-4 flex justify-between items-center"
    >
      <div
      className="w-[51px] h-[90px] px-[6px] py-[12px] rounded-[4px] bg-white font-bold text-sm flex flex-col justfy-center items-center">
        <Image src={Clock} alt="imagem de um relógio"
        className="w-5 h-5"
        ></Image>
        <p>{sDay}/{sMonth}</p>
        <p>{sTime}</p>
      </div>
      <div className="flex"><p className="font-semibold">{pacientName}</p>/<p>{pacientTutorName}</p></div>
      <p>{doctorName}</p>
      <div className="flex flex-col justify-center items-center w-[100px] l-[100px] gap-2">
        <Image src={Icon} alt="imagem representativa do pet" className="w-[70px] h-[70px]" />
        <p className="flex justify-center items-center w-full h-[25px] bg-white  rounded-sm text-xs"> {tipoCon}</p>
      </div>
    </button>
  )
}