"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { 
  lessThen,
  Sheep,
  Cat,
  Pig,
  Cow,
  Horse,
  Dog,
  downSignal
 } from '@/assets';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios  from 'axios';
import { Button } from '@/components'; 
import api from '@/services/api';

enum PatientSpecie {
  SHEEP = "SHEEP",
  CAT = "CAT",
  PIG = "PIG",
  COW = "COW",
  HORSE = "HORSE",
  DOG = "DOG"
}

enum ConsType {
  FIRST = "FIRST",
  VACINATION = "VACINATION",
  RETURN = "RETURN",
  CHECKUP = "CHECKUP"
}

type ConsultForm = {
  patientName: string;
  tutorName: string;
  species: PatientSpecie;
  patientAge: number;
  consultType: ConsType;
  doctorName: string;
  date: Date;
  time: string;
  description: string;
};

export default function RegisterPage() {

  const formSchema = z.object({
    patientName: z.string().min(1, "Nome do paciente é obrigatório"),
    tutorName: z.string().min(1, "Nome do tutor é obrigatório!"),
    species: z.nativeEnum(PatientSpecie, {required_error: "Selecione uma espécie!",}),
    patientAge: z.coerce.number().min(1, "Idade do paciente é obrigatória!"),
    consultType: z.nativeEnum(ConsType, { required_error: "Tipo da consulta é obrigatório!" }),
    doctorName: z.string().min(1, "Nome do medico é obrigatório"),
    date: z.date({required_error: "Data da consulta é obrigatória"}),
    time: z.string().min(1, "Horário da consulta é obrigatório"),
    description: z.string().min(1, "Descrição do problema é obrigatória"),
  });
  
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<ConsultForm>();  
  
  const handleChange = async (data: ConsultForm) => {
    console.log("Dados do formulário:", data);
     try {
        const searchParams = new URLSearchParams({
          name: data.patientName,
          tutorName: data.tutorName,
          age: String(data.patientAge),
          species: data.species
        }).toString();

        const response = await api.get('/patient/search', {
  params: {
    name: data.patientName,
    tutorName: data.tutorName,
    species: data.species,
  }
});


        console.log("Paciente encontrado:", response.data);
        //------------------------
        // Se o paciente já existir, pegar o id e mandar como parametro pra consulta
        alert("Paciente já existente!");  

      } catch (error: any) {
        if (error.response?.status === 404) {
          alert("Paciente não encontrado. Você pode prosseguir com o cadastro.");
          const response = await api.get(`/patient?$}`);

        } else {
          console.error("Erro ao verificar paciente existente", error);
          alert("Erro inesperado ao buscar paciente.");
        }
      }
  }

  async function handleGet(data: ConsultForm) {
    const searchParams = new URLSearchParams({
          name: data.patientName,
          tutorName: data.tutorName,
          age: String(data.patientAge),
          species: data.species
        }).toString();

        const response = await api.get(`/patient/search?${searchParams}`);
        console.log("Paciente encontrado:", response.data);
  }
 
  const [selectedSpecies, setSelectedSpecies] = useState<PatientSpecie | null>(null);

  const handleReturn = () => {
    // Esse botão irá voltar paraa página de Atendimento
  }
  
  return (
    <form onSubmit={handleSubmit(handleChange)}>
      <div className = "pt-12 px-48">
        
        <div className = 'w-72 h-14 flex flex-row cursor-pointer' onClick={handleReturn}>
          <div className = 'pt-[8px]'>
            <Image src= { lessThen } alt="Less then" className = 'w-10 h-10'/>
          </div>
          <p className = 'text-5xl pl-4 font-bold'>Cadastro</p>
        </div>

        {/* Forms */}
        <div className = 'w-full gap-6 flex flex-col'>

          <div className='flex flex-row gap-6'>

            {/* Nome do Paciente */}
            <div className = 'w-full pt-8  h-20 flex flex-col gap-3'>
                <p className='font-bold text-4'>Nome do Paciente</p>        
                <input {...register("patientName")} 
                type="text" 
                placeholder='Digite aqui...' 
                className = 'border border-black rounded-xl h-12 placeholder-[#D9D9D9] py-4 pl-4'/>
            </div>

            {/* Nome do Tutor */}
            <div className = 'w-full pt-8 h-20 flex flex-col gap-3'>
                <p className='font-bold text-4'>Nome do Tutor</p>        
                <input {...register("tutorName")} 
                type="text" 
                placeholder='Digite aqui...' 
                className = 'border border-black rounded-xl h-12 placeholder-[#D9D9D9] py-4 pl-4'/>
            </div>        
          </div>

          {/* Espécie do Paciente */}
          <div className = 'h-44 pt-10 flex flex-col'>
            <p className = 'font-bold text-4'>Qual é a espécie do paciente?</p>

            {/* Espécies do Paciente */}
            <div className = 'flex flex-row pt-4 justify-start gap-14 h-36'>
              
              {/* Ovelha */}
              <div 
              className={`p-2 mt-2 w-32 h-32 rounded-xl ${selectedSpecies === PatientSpecie.SHEEP ? 'bg-[#D9D9D9]' : ''}`} 
              onClick={() => {
                setValue("species", PatientSpecie.SHEEP); 
                setSelectedSpecies(PatientSpecie.SHEEP);
              }}>  
                <Image src={Sheep} alt="Ovelha" />
              </div>

              {/* Gato */}
              <div 
              className={`p-2 mt-2 w-32 h-32 rounded-xl ${selectedSpecies === PatientSpecie.CAT ? 'bg-[#D9D9D9]' : ''}`} 
              onClick={() => {
                setValue("species", PatientSpecie.CAT); 
                setSelectedSpecies(PatientSpecie.CAT);
              }}>
                <Image src={Cat} alt="Gato" />
              </div>
              
              {/* Porco */}
              <div 
              className={`p-2 mt-2 w-32 h-32 rounded-xl ${selectedSpecies === PatientSpecie.PIG ? 'bg-[#D9D9D9]' : ''}`} 
              onClick={() => {
                setValue("species", PatientSpecie.PIG); 
                setSelectedSpecies(PatientSpecie.PIG);
              }}>
                <Image src={Pig} alt="Porco" />
              </div>

              {/* Vaca */}
              <div 
              className={`p-2 mt-2 w-32 h-32 rounded-xl ${selectedSpecies === PatientSpecie.COW ? 'bg-[#D9D9D9]' : ''}`} 
              onClick={() => {
                setValue("species", PatientSpecie.COW); 
                setSelectedSpecies(PatientSpecie.COW);
              }}>
                <Image src={Cow} alt="Vaca" />
              </div>

              {/* Cavalo */}
              <div 
              className={`p-2 mt-2 w-32 h-32 rounded-xl ${selectedSpecies === PatientSpecie.HORSE ? 'bg-[#D9D9D9]' : ''}`} 
              onClick={() => {
                setValue("species", PatientSpecie.HORSE); 
                setSelectedSpecies(PatientSpecie.HORSE);
              }}>
                <Image src={Horse} alt="Cavalo" />
              </div>

              <div className={`p-2 mt-2 w-32 h-32 rounded-xl ${selectedSpecies === PatientSpecie.DOG ? 'bg-[#D9D9D9]' : ''}`} 
              onClick={() => {
                setValue("species", PatientSpecie.DOG); 
                setSelectedSpecies(PatientSpecie.DOG);
              }}>
                <Image src= { Dog } alt= "Cachorro"/>
              </div>
            </div>
          </div>

          <div className='flex flex-row gap-6'>

            {/* Idade do Paciente */}
            <div className = 'w-[754px] pt-8  h-20 flex flex-col gap-3'>
                <p className='font-bold text-4'>Idade do Paciente</p>        
                <input {...register("patientAge")} 
                type="number" 
                placeholder='Digite aqui...' 
                className = 'border border-black rounded-xl h-12 placeholder-[#D9D9D9] py-4 pl-4'/>
            </div>

            {/* Tipo de Consulta */}
            <div className='w-[754px] pt-8 h-20 flex flex-col gap-3'>
              <p className='font-bold text-4'>Tipo de consulta</p>
              <select
                {...register("consultType")}
                className="border border-black rounded-xl py-3 pl-4 text-base box-border"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione o tipo de consulta
                </option>
                <option value={ConsType.FIRST}>Primeira Consulta</option>
                <option value={ConsType.VACINATION}>Vacinação</option>
                <option value={ConsType.RETURN}>Retorno</option>
                <option value={ConsType.CHECKUP}>Check-up</option>
              </select>
            </div>
          </div>
          <div className='flex flex-row gap-6'>
            {/*Médico responsável*/}
            <div className = 'w-[696px] pt-8  h-20 flex flex-col gap-3'>
                <p className='font-bold text-4'>Médico responsável</p>        
                <input {...register("doctorName")} 
                type="text" 
                placeholder='Digite aqui...' 
                className = 'border border-black rounded-xl h-12 placeholder-[#D9D9D9] py-4 pl-4'/>
            </div>
            {/*Data do atendimento*/}
            <div className = 'w-[390px] pt-8  h-20 flex flex-col gap-3'>
                <p className='font-bold text-4'>Data do atendimento</p>        
                <input {...register("date")} 
                type="date" 
                placeholder='Digite aqui...' 
                className = 'border border-black rounded-xl h-12 placeholder-[#D9D9D9] py-4 pl-4'/>
            </div>
            {/*Horário do atendimento*/}
            <div className = 'w-[390px] pt-8  h-20 flex flex-col gap-3'>
                <p className='font-bold text-4'>Horário do atendimento</p>        
                <input {...register("time")} 
                type="time" 
                placeholder='Digite aqui...' 
                className = 'border border-black rounded-xl h-12 placeholder-[#D9D9D9] py-4 pl-4'/>
            </div>
          </div>
          {/*Descrição do Problema*/}
            <div className = 'w-full pt-8  flex flex-col gap-3'>
                <p className='font-bold text-4'>Descrição do Problema</p>        
                <textarea {...register("description")}  
                placeholder='Digite aqui...' 
                className = 'border border-black rounded-xl h-[134px] placeholder-[#D9D9D9] py-4 pl-4'/>
            </div>
          <div>
            <button
            type="submit">
            
              Pedro
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}