import {Sheep,
    Cat,
    Pig,
    Cow, 
    Horse,
    Dog,
    Clock,
    Paw,
  } from "@/assets/index"
import Image from "next/image";
import { useRouter } from "next/navigation"

interface ConsulCard {
  id: number;
  DateTime: string;
  typeConsul: string;
  doctorName: string;
  pacientName: string;
  pacientTutorName: string;
  pacientAge: number;
  pacientSpecie: string;
  description: string;
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
  description,
}: ConsulCard){
  const router = useRouter()
  const consultationDate = new Date(DateTime)
  const nowDate = new Date()

  const handleClick = () => {
    const query = new URLSearchParams({
      id: id.toString(),
    }).toString();
    router.push(`/consulDetail?${query}`);
  };

  const backgroundColor =
    consultationDate < nowDate? "#F0F0F0" :
    {
      "FIRST": "#BFB5FF",
      "RETURN": "#FF641999",
      "CHECKUP": "#9CFF95",
      "VACINATION": "#AAE1FF",
    }[typeConsul] || "#F0F0F0"



  const sMonth = DateTime.slice(5, 7);
  const sDay =  DateTime.slice(8, 10);
  const sTime = DateTime.slice(11, 16);
  

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
      onClick={handleClick}
      style={{backgroundColor}}
      className="w-[396px] h-[108px] rounded-xl px-6 py-4 flex justify-between items-center"
    >
      <div
      className="w-[40px] h-[72px] px-[6px] py-[12px] rounded-[4px] bg-white font-bold text-sm flex flex-col justfy-center items-center text-[12px]">
        <Image src={Clock} alt="imagem de um relógio"
        className="w-4 h-4"
        ></Image>
        <p>{sDay}/{sMonth}</p>
        <p>{sTime}</p>
      </div>
      <div className="flex text-[12px]"><p className="font-semibold">{pacientName}</p>/<p>{pacientTutorName}</p></div>
      <div className="text-[12px]">{doctorName}</div>
      <div className="flex flex-col justify-center items-center w-[90px] h-[86px] gap-2">
        <Image src={Icon} alt="imagem representativa do pet" className="w-[56px] h-[56px]" />
        <p className="flex justify-center items-center w-full h-[30px] bg-white  rounded-sm text-[10px]"> {tipoCon}</p>
      </div>
    </button>
  )
}