import {Sheep,
    Cat,
    Pig,
    Cow, 
    Horse,
    Dog,} from "@/assets/index"
import Image from "next/image";

interface consulCard {
  id: number;
  Date: string;
  Time: string;
  typeConsul: string;
  doctorName: string;
  pacientTutorName: string;
  pacientAge: number;
  pacientSpecie: string;
  onClick: () => void; //depois inserir a implementação da consulta aqui
}

export default function consultCard({
  id,
  Date,
  Time,
  typeConsul,
  doctorName,
  pacientTutorName,
  pacientAge,
  pacientSpecie,
  onClick,
}: consulCard){
  const backgroundColor = {
    "FIRST": "#BFB5FF",
    "RETURN": "#FF641999",
    "CHECKUP": "#9CFF95",
    "VACINATION": "#AAE1FF",
  }[typeConsul]

  const Icon = {
    SHEEP: Sheep,
    CAT: Cat,
    PIG: Pig,
    COW: Cow,
    HORSE: Horse,
    DOG: Dog,
  }[pacientSpecie]

  return (
    <button type="button"
      onClick={onClick}
      style={{backgroundColor}}
      className="w-[495px] h-[135px] rounded-xl px-6 py-4 flex justify-between"
    >
      <Image src={Icon} alt="" width={24} height={24} />
      {pacientTutorName}
    </button>
  )
}