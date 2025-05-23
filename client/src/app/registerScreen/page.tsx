"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { lessThen } from '@/assets';
import { Sheep } from '@/assets';
import { Cat } from '@/assets';
import { Pig } from '@/assets'
import { Cow } from '@/assets';
import { Horse } from '@/assets';
import { Dog } from '@/assets';
import { downSignal } from '@/assets';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



enum PatientSpecie {
  SHEEP = "SHEEP",
  CAT = "CAT",
  PIG = "PIG",
  COW = "COW",
  HORSE = "HORSE",
  DOG = "DOG"
}

type ConsultForm = {
    patientName: string;
    tutorName: string;
    species: PatientSpecie;
    patientAge: string;
    consultType: string;
};

export default function Forms() {
  const formSchema = z.object({
    patientName: z.string().min(1, "Nome do paciente é obrigatório"),
    tutorName: z.string().min(1, "Nome do tutor é obrigatório!"),
    species: z.nativeEnum(PatientSpecie, {required_error: "Selecione uma espécie!",}),
    patientAge: z.string().min(1, "Idade do paciente é obrigatória!"),
    consultType: z.string().min(1, "Tipo da consulta é obrigatório!")
  });
  
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<z.infer<typeof formSchema>> ({resolver: zodResolver(formSchema)});  
  
  const handleChange = (data: ConsultForm) => {
    console.log("Form data:", data);
  };
  
  const [selectedSpecies, setSelectedSpecies] = useState<PatientSpecie | null>(null);
  

  return (
    <form onSubmit={handleSubmit(handleChange)}>
      <div className = "pt-40 pl-48">
        <div className = 'w-72 h-14 flex flex-row'>
          <div className = 'pt-[8px]'>
            <Image src= { lessThen } alt="Less then" className = 'w-10 h-10'/>
          </div>
          <p className = 'text-5xl pl-4 font-bold tracking-0'>Cadastro</p>
        </div>

        <div className = 'w-[1532px] h-[644px] gap-6 flex flex-col'>
          <div className='flex flex-row gap-6'>
              <div className = 'w-[754px] pt-8  h-20 flex flex-col gap-3'>
                  <p className='font-bold text-4 tracking-0'>Nome do Paciente</p>        
                  <input {...register("patientName")} type="text" placeholder='Digite aqui...' className = 'border border-black rounded-2xl max-w-3xl h-12 placeholder-[#D9D9D9] pt-4 pl-4 pb-4 ' />
              </div>
              <div className = 'w-[754px] pt-8 h-20 flex flex-col gap-3'>
                  <p className='font-bold text-4 tracking-0'>Nome do Tutor</p>        
                  <input {...register("tutorName")} type="text" placeholder='Digite aqui...' className = 'border border-black rounded-2xl max-w-3xl h-12 placeholder-[#D9D9D9] pt-4 pl-4 pb-4 '/>
              </div>        
          </div>

          <div className = 'w-[1042.37] h-44 pt-10 flex flex-col'>
              <p className = 'font-bold text-4 tracking-0'>Qual é a espécie do paciente?</p>
              <div className = 'flex flex-row pt-6 w-[1042.37] gap-[60px] h-36 px-3'>
                <div className={` w-[100px] h-auto rounded-xl cursor-pointer ${selectedSpecies === PatientSpecie.SHEEP ? 'bg-gray-300' : ''}`} onClick={() => {setValue("species", PatientSpecie.SHEEP); setSelectedSpecies(PatientSpecie.SHEEP);}}>  
                  <Image src= { Sheep } alt= "sheep" className = 'w-[100px] h-[100px]'/>
                </div>
                <div className={`pl-2 w-30 h-30 rounded-xl cursor-pointer ${selectedSpecies === PatientSpecie.CAT ? 'bg-gray-300' : ''}`} onClick={() => {setValue("species", PatientSpecie.CAT); setSelectedSpecies(PatientSpecie.CAT);}}>
                  <Image src= { Cat } alt= "cat" className = 'w-[98px] h-[100px]'/>
                </div>
                <div className={`pl-2 w-30 h-30 rounded-xl cursor-pointer ${selectedSpecies === PatientSpecie.PIG ? 'bg-gray-300' : ''}`} onClick={() => {setValue("species", PatientSpecie.PIG); setSelectedSpecies(PatientSpecie.PIG);}}>
                  <Image src= { Pig } alt= "pig" className = 'w-[100px] h-[100px]'/>
                </div>
                <div className={`pl-2 w-30 h-30 rounded-xl cursor-pointer ${selectedSpecies === PatientSpecie.COW ? 'bg-gray-300' : ''}`} onClick={() => {setValue("species", PatientSpecie.COW); setSelectedSpecies(PatientSpecie.COW);}}>
                  <Image src= { Cow } alt= "cow" className = 'w-[100px] h-[100px]'/>
                </div>
                <div className={`pl-2 w-30 h-30 rounded-xl cursor-pointer ${selectedSpecies === PatientSpecie.HORSE ? 'bg-gray-300' : ''}`} onClick={() => {setValue("species", PatientSpecie.HORSE); setSelectedSpecies(PatientSpecie.HORSE);}}>
                  <Image src= { Horse } alt= "horse" className = 'w-[100px] h-[100px]'/>
                </div>
                <div className={`pl-2 w-30 h-30 rounded-xl cursor-pointer ${selectedSpecies === PatientSpecie.DOG ? 'bg-gray-300' : ''}`} onClick={() => {setValue("species", PatientSpecie.DOG); setSelectedSpecies(PatientSpecie.DOG);}}>
                  <Image src= { Dog } alt= "dog" className = 'w-[100px] h-auto pt-1'/>
                </div>
              </div>
          </div>

          <div className='flex flex-row gap-6 '>
              <div className = 'w-[754px] pt-8  h-20 flex flex-col gap-3'>
                  <p className='font-bold text-4 tracking-0'>Idade do Paciente</p>        
                  <input {...register("patientAge")} type="text" placeholder='Digite aqui...' className = 'border border-black rounded-2xl max-w-3xl h-12 placeholder-[#D9D9D9] pt-4 pl-4 pb-4 ' />
              </div>
              <div className='w-[754px] pt-8 h-20 flex flex-col gap-3'>
                <p className='font-bold text-4 tracking-0'>Tipo de consulta</p>
                <div className='flex items-center border border-black rounded-2xl w-full h-12 pl-4 pr-4 bg-white'>
                  <input {...register("consultType")} type="text" placeholder="Selecione aqui" className="w-full h-full outline-none placeholder-[#D9D9D9] pt-4  pb-4"/>
                  <Image src={downSignal} alt="Down Signal" className="ml-2"/>
                </div>
              </div>       
          </div>
        </div>
      </div>
    </form>
  );
}

