"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { lessThen } from '@/assets';
import { Sheep } from '@/assets';
import { Cat } from '@/assets';
import { Pig } from '@/assets'
import { Cow } from '@/assets';
import { Horse} from '@/assets';
import { Dog } from '@/assets';
import { downSignal } from '@/assets';


enum PatientSpecie {
  SHEEP,
  CAT,
  PIG,
  COW,
  HORSE,
  DOG
}

type Info_registration = {
    patientName: string;
    tutorName: string;
    species: string;
    patientAge: number;
    consultType: string;
};

export default function Forms() {
  const [patientName, setpatientName] = useState(' ');
  const [tutorName, settutorName] = useState(' ');
  return (
    <div className = "pt-40 pl-48">
      <div className = 'w-72 h-14 flex flex-row'>
        <div className = 'pt-[8px]'>
          <Image src= { lessThen } alt="Less then" className = 'w-10 h-10'/>
        </div>
        <p className = 'text-5xl pl-4 font-bold tracking-0'>Cadastro</p>
      </div>

      <div className = 'w-[1532px] h-[644px] gap-6 flex flex-col'>
        <div className='flex flex-row gap-6 '>
            <div className = 'w-[754px] pt-8  h-20 flex flex-col gap-3'>
                <p className='font-bold text-4 tracking-0'>Nome do Paciente</p>        
                <input type="text" placeholder='Digite aqui...' className = 'border border-black rounded-2xl max-w-3xl h-12 placeholder:text-gray-500 pt-4 pl-4 pb-4 ' value={patientName} onChange={(pn) => setpatientName(pn.target.value)} />
            </div>
            <div className = 'w-[754px] pt-8 h-20 flex flex-col gap-3'>
                <p className='font-bold text-4 tracking-0'>Nome do Tutor</p>        
                <input type="text" placeholder='Digite aqui...' className = 'border border-black rounded-2xl max-w-3xl h-12 placeholder:text-gray-500 pt-4 pl-4 pb-4 ' value={tutorName} onChange={(tn) => setpatientName(tn.target.value)} />
            </div>        
        </div>

        <div className = 'w-[1042.37] h-44 pt-6 flex flex-col'>
            <p className = 'font-bold text-4 tracking-0'>Qual é a espécie do paciente?</p>
            <div className = 'flex flex-row gap-[60px] pt-6 w-[1042.37] h-36 '>
                <Image src= { Sheep } alt= "sheep" className = 'w-[120px] h-[120px]'/>
                <Image src= { Cat } alt= "cat" className = 'w-[120px] h-[120px]'/>
                <Image src= { Pig } alt= "pig" className = 'w-[120px] h-[120px]'/>
                <Image src= { Cow } alt= "cow" className = 'w-[120px] h-[120px]'/>
                <Image src= { Horse } alt= "horse" className = 'w-[120px] h-[120px]'/>
                <Image src= { Dog } alt= "dog" className = 'w-[120px] h-[120px]'/>
            </div>
        </div>

        <div className='flex flex-row gap-6  '>
            <div className = 'w-[754px] pt-8  h-20 flex flex-col gap-3'>
                <p className='font-bold text-4 tracking-0'>Idade do Paciente</p>        
                <input type="text" placeholder='Digite aqui...' className = 'border border-black rounded-2xl max-w-3xl h-12 placeholder:text-gray-500 pt-4 pl-4 pb-4 ' value={patientName} onChange={(pn) => setpatientName(pn.target.value)} />
            </div>
            <div className = 'w-[754px] pt-8 h-20 flex flex-col gap-3'>
                <p className='font-bold text-4 tracking-0'>Tipo de consulta</p>  
                <input type="text" placeholder='Digite aqui...' className = 'border border-black rounded-2xl max-w-3xl h-12 placeholder:text-gray-500 pt-4 pl-4 pb-4 ' value={tutorName} onChange={(tn) => setpatientName(tn.target.value)} />
                <Image src={ downSignal } alt="Down Signal" />      
            </div>        
        </div>


        
      </div>
    </div>
  );
}

