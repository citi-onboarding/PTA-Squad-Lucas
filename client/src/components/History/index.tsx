import { ConsultCardHistory } from "@/components";

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
  id: 1,
  Date: "2025-04-06",
  Time: "07:00",
  typeConsul: "VACINATION",
  doctorName: "Vinícius Santos Lima",
  pacientName: "Miau",
  pacientTutorName: "Carlos",
  pacientAge: 3,
  pacientSpecie: "CAT",
  onClick: () => console.log("Consulta 1 selecionada"),
  },

  {
  id: 1,
  Date: "2025-04-10",
  Time: "07:00",
  typeConsul: "RETURN",
  doctorName: "Matheus Henrique Ferreira Júnior",
  pacientName: "Miau",
  pacientTutorName: "Carlos",
  pacientAge: 3,
  pacientSpecie: "CAT",
  onClick: () => console.log("Consulta 1 selecionada"),
  },

  {
  id: 1,
  Date: "2025-05-15",
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
  id: 1,
  Date: "2025-04-31",
  Time: "07:00",
  typeConsul: "CHECKUP",
  doctorName: "Larissa",
  pacientName: "Miau",
  pacientTutorName: "Carlos",
  pacientAge: 3,
  pacientSpecie: "DOG",
  onClick: () => console.log("Consulta 1 selecionada"),
  },


];

export default function History() {

  const dataAtual = "2025-06-01"
  const idAtual = 1

  function Build(){
    let consultasFiltradas = ConsultCardVetor
      .filter(card =>card.id === (idAtual))
      .filter(card => card.Date<(dataAtual))


    return (consultasFiltradas.map(card => (
      <ConsultCardHistory
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
      
      ))
    )
  }


  return(

    <div className="justify-start">

      <h1 className="mb-8 font-bold text-2xl">Histórico de Consultas</h1>

      <div className="flex flex-col justify-center gap-6 h-auto w-[558px] bg-white border rounded-3xl border-[#D9D9D9] border-dashed p-6">

        {Build()}

      </div>
    </div>

  )
}