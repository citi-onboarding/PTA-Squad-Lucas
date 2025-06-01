import Image from "next/image";
import { ArrowRight } from "@/assets";

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

export default function ConsultCardHistory({ id, Date, Time, typeConsul, doctorName, pacientTutorName, pacientName, pacientAge, pacientSpecie, onClick,}: ConsultCardType) {
    
  const tipoCon = {
    "FIRST": "Primeira Consulta",
    "RETURN": "Retorno",
    "CHECKUP": "Check-up",
    "VACINATION": "Vacinação",
  }[typeConsul] || "Default"

  let dataSeparada = Date.split("-");



  return (

    <button type="button" onClick={onClick} className="w-[510px] h-[82x] flex justify-between items-center">

      <div className="bg-[#F0F0F0] rounded-2xl w-[510px] h-20 items-center flex flex-row justify-between px-6">

        {/* Horário e data */}
        <div className="bg-white rounded-md font-semibold w-12 h-12 p-1 justify-center">
          <p className="text-sm"> {dataSeparada[2]}/{dataSeparada[1]} </p>
          <p className="text-sm"> {Time} </p>
        </div>

        {/* Tipo de consulta */}
        <div className="font-semibold w-36 justify-center">
          {tipoCon}
        </div>

        {/* Nome do médico */}
        <p className="w-40 justify-center">
          {doctorName}
        </p>

        {/* Ícone de seta para a direita */}
        <div>
          <Image
            src={ArrowRight}
            alt="Seta de abrir consulta"
            className="w-6 h-6">
          </Image>

        </div>

      </div>

    </button>
  )
}