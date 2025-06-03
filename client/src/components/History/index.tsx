import { ConsultCardHistory } from "@/components";
import { useState } from "react";
import Image from "next/image";
import { ArrowBack } from "@/assets";
import { ArrowForward } from "@/assets";

interface  ConsultCardType {
id: number; 
DateTime: string;
typeConsul: string;
doctorName: string;
pacientName: string;
pacientTutorName: string;
pacientAge: number;
pacientSpecie: string;
onClick: () => void;
key?: number;
};


const ConsultCardVetor: ConsultCardType[] = [

  {
  id: 1,
  DateTime: "2025-05-24T14:30:00.000Z",
  typeConsul: "FIRST",
  doctorName: "Monica",
  pacientName: "Miau",
  pacientTutorName: "Carlos",
  pacientAge: 3,
  pacientSpecie: "CAT",
  onClick: () => console.log("Consulta 1 selecionada"),
  },

  {
  id: 1,
  DateTime: "2025-08-01T14:30:00.000Z",
  typeConsul: "FIRST",
  doctorName: "Magali",
  pacientName: "Miau",
  pacientTutorName: "Carlos",
  pacientAge: 3,
  pacientSpecie: "CAT",
  onClick: () => console.log("Consulta 1 selecionada"),
  },

  {
  id: 1,
  DateTime: "2025-06-01T14:30:00.000Z",
  typeConsul: "FIRST",
  doctorName: "Monica",
  pacientName: "Miau",
  pacientTutorName: "Carlos",
  pacientAge: 3,
  pacientSpecie: "CAT",
  onClick: () => console.log("Consulta 1 selecionada"),
  },

  {
  id: 1,
  DateTime: "2025-06-05T14:30:00.000Z",
  typeConsul: "FIRST",
  doctorName: "Monica",
  pacientName: "Miau",
  pacientTutorName: "Carlos",
  pacientAge: 3,
  pacientSpecie: "CAT",
  onClick: () => console.log("Consulta 1 selecionada"),
  },

  {
  id: 1,
  DateTime: "2025-05-14T14:30:00.000Z",
  typeConsul: "FIRST",
  doctorName: "Monica",
  pacientName: "Miau",
  pacientTutorName: "Carlos",
  pacientAge: 3,
  pacientSpecie: "CAT",
  onClick: () => console.log("Consulta 1 selecionada"),
  },

  {
  id: 1,
  DateTime: "2024-03-27T14:30:00.000Z",
  typeConsul: "FIRST",
  doctorName: "Monica",
  pacientName: "Miau",
  pacientTutorName: "Carlos",
  pacientAge: 3,
  pacientSpecie: "CAT",
  onClick: () => console.log("Consulta 1 selecionada"),
  },

  {
  id: 1,
  DateTime: "2026-05-14T14:30:00.000Z",
  typeConsul: "FIRST",
  doctorName: "Monica",
  pacientName: "Miau",
  pacientTutorName: "Carlos",
  pacientAge: 3,
  pacientSpecie: "CAT",
  onClick: () => console.log("Consulta 1 selecionada"),
  },

    {
  id: 1,
  DateTime: "2025-05-14T14:30:00.000Z",
  typeConsul: "FIRST",
  doctorName: "Monica",
  pacientName: "Miau",
  pacientTutorName: "Carlos",
  pacientAge: 3,
  pacientSpecie: "CAT",
  onClick: () => console.log("Consulta 1 selecionada"),
  },

  {
  id: 1,
  DateTime: "2025-05-14T14:30:00.000Z",
  typeConsul: "FIRST",
  doctorName: "Monica",
  pacientName: "Miau",
  pacientTutorName: "Carlos",
  pacientAge: 3,
  pacientSpecie: "CAT",
  onClick: () => console.log("Consulta 1 selecionada"),
  },

  {
  id: 1,
  DateTime: "2025-05-14T14:30:00.000Z",
  typeConsul: "FIRST",
  doctorName: "Monica",
  pacientName: "Miau",
  pacientTutorName: "Carlos",
  pacientAge: 3,
  pacientSpecie: "CAT",
  onClick: () => console.log("Consulta 1 selecionada"),
  },
];

export default function History({
  id,
  DateTime,
  typeConsul,
  doctorName,
  pacientTutorName,
  pacientName,
  pacientAge,
  pacientSpecie,
  onClick,
}: ConsultCardType) {

  let dataAtual: string = new Date().toISOString()
  

  function Paginacao(){
    let consultasFiltradas = ConsultCardVetor
      .filter(card =>card.id === (id))
      .filter(card => card.DateTime<(dataAtual))
    
    const [paginaAtual, setPaginaAtual] = useState(1)
    const consulPorPagina = 5
    
    const totalPaginas = Math.ceil(consultasFiltradas.length / consulPorPagina);

    // Calculando o índice do primeiro elemento que aparecerá na página no array de elementos
    const indiceInicial = (paginaAtual-1) * consulPorPagina
    
    // Calculando o índice do elemento seguinte ao último da página, por causa da slice vai ser o seguinte ao último da página
    const indiceFinal = indiceInicial + consulPorPagina

    // Pegando o recorte das consultas que aparecerão em cada página a partir do índice delas no array
    const consultasSeparadas = consultasFiltradas.slice(indiceInicial, indiceFinal)

    return (
    
      <div className="justify-start mb-80">

        <h1 className="mb-8 font-bold text-2xl">Histórico de Consultas</h1>

        <div className="flex flex-col justify-between gap-4 h-[605px] w-[558px] bg-white border rounded-3xl border-[#D9D9D9] border-dashed p-6 pb-1">

          <div className="flex flex-col justify-center gap-5 top-div">
            {consultasSeparadas.map(card => (
              <ConsultCardHistory
              key={card.id}
              id={card.id}
              DateTime={card.DateTime}
              typeConsul={card.typeConsul}
              doctorName={card.doctorName}
              pacientName={card.pacientName}
              pacientTutorName={card.pacientTutorName}
              pacientAge={card.pacientAge}
              pacientSpecie={card.pacientSpecie}
              onClick={card.onClick}/>))
            }
          </div>
          
          {totalPaginas>1 ?
            <div className="gap-4 items-center justify-between ">

              <button
                onClick={() => setPaginaAtual((paginaAtual) => Math.max(paginaAtual-1, 1))}
                disabled={paginaAtual === 1}
                className="disabled:opacity-50 transition-opacity">

                <Image src={ArrowBack} alt="Botão voltar"></Image>

              </button>


              
              {Array.from({length: totalPaginas}, (_,indice) => (
                  <button
                    key={indice}
                    onClick={() => setPaginaAtual(indice + 1)}
                    className={`transition-all text-2xl font-semibold rounded-lg m-1 p-3 ${indice + 1 === paginaAtual ? "bg-[#D9D9D9]" : "bg-transparent text-xl opacity-70"}`}>
                    
                    {indice+1}

                  </button>
                ))

              }



              <button
                onClick={() => setPaginaAtual((paginaAtual) => paginaAtual<Math.ceil(consultasFiltradas.length/consulPorPagina) ? paginaAtual + 1 : paginaAtual)}
                disabled={paginaAtual === Math.ceil(consultasFiltradas.length/consulPorPagina)}
                className="disabled:opacity-50 transition-opacity">

                  <Image src={ArrowForward} alt="Botão avançar"></Image>

              </button>

            </div>
          : null
          }

        </div>
      </div>
    )
  }


  return(

    Paginacao()
    
  )
}