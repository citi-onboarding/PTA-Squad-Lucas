import { ConsultCardHistory } from "@/components";
import { useState } from "react";
import Image from "next/image";
import { ArrowBack } from "@/assets";
import { ArrowForward } from "@/assets";

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

interface HistoryProps {
    vector: ConsulData[];
    onClick: () => void;
}


export default function History({ vector, onClick }: HistoryProps) {

  let dataAtual: string = new Date().toISOString()
  

  function Paginacao(){
    let consultasFiltradas = vector
      .filter(card => card.datetime<(dataAtual))
    
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
              DateTime={card.datetime}
              typeConsul={card.type}
              doctorName={card.doctorName}
              pacientName={card.patient.name}
              pacientTutorName={card.patient.tutorName}
              pacientAge={card.patient.age}
              pacientSpecie={card.patient.species}
              onClick={onClick}/>))
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