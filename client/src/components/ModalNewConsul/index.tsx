import Image from "next/Image"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LeftTopBar } from "@/assets";
import { CheckCircle } from "@/assets";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


enum ConsType {
  FIRST = "FIRST",
  VACINATION = "VACINATION",
  RETURN = "RETURN",
  CHECKUP = "CHECKUP"
}

export default function ModalNewConsul () {

  const formSchema = z.object({
    consultType: z.nativeEnum(ConsType, { required_error: "Tipo da consulta é obrigatório!" }),
    doctorName: z.string().min(1, "Nome do medico é obrigatório"),
    date: z.date({required_error: "Data da consulta é obrigatória"}),
    time: z.string().min(1, "Horário da consulta é obrigatório"),
  });

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<z.infer<typeof formSchema>> ({resolver: zodResolver(formSchema)});  


  return (
    <Dialog>
      <form className="flex justify-end  mt-16 mb-10 w-full">

        <DialogTrigger asChild >
          <Button variant="outline" className="text-white text-base justify-center bg-[#50E678] w-[570px] h-[48px] rounded-full shadow-md hover:bg-[#50E678] hover:text-white hover:opacity-80 active:opacity-50 transition"> Agendamento</Button>
        </DialogTrigger>

        <DialogContent className="!w-[800px] !max-w-none h-[500px] p-10 !rounded-3xl">

          <DialogHeader className="items-center">
            <DialogTitle className="mb-6"><Image src={LeftTopBar} alt="Logo CITi"/></DialogTitle>
            <DialogDescription className="text-base text-black flex flex-row text-center gap-1">
              <span className="font-bold text-base justify-center">O pet já está cadastrado no sistema! </span> Preencha os dados da <span className="text-base font-bold justify-center">consulta</span>
            </DialogDescription>
          </DialogHeader>

          {/* Divs inputs */}
          <div className="grid justify-center ">

            {/* Divs de cima */}
            <div className="flex gap-3 mb-10">
              {/* Div superior esquerda */}
              <div className='w-[350px] h-12 flex flex-col gap-3'>
                <p className='font-bold text-4'>Tipo de consulta</p>
                <select
                  {...register("consultType")}
                  className="border border-black rounded-lg py-3 pl-4 text-base box-border"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione aqui
                  </option>
                  <option value={ConsType.FIRST}>Primeira Consulta</option>
                  <option value={ConsType.VACINATION}>Vacinação</option>
                  <option value={ConsType.RETURN}>Retorno</option>
                  <option value={ConsType.CHECKUP}>Check-up</option>
                </select>
              </div>

              {/* Div superior direita */}
              <div className = 'w-[350px] h-12 flex flex-col gap-3'>
                  <p className='font-bold text-4'>Médico Responsável</p>        
                  <input {...register("doctorName")} 
                  type="text" 
                  placeholder='Digite aqui...' 
                  className = 'border border-black rounded-lg h-12 placeholder-[#D9D9D9] py-4 pl-4'/>
              </div>

            </div>

            {/* Divs de baixo */}
            <div className="flex gap-3 mb-10">

              {/* Div inferior esquerda */}
              <div className = 'w-[350px] h-12 flex flex-col gap-3'>
                  <p className='font-bold text-4'>Data do atendimento</p>        
                  <input {...register("date")} 
                  type="date" 
                  placeholder='Digite aqui...' 
                  className = 'border border-black rounded-lg h-12 placeholder-[#D9D9D9] py-4 pl-4'/>
              </div>

              {/* Div inferior direita */}
            <div className = 'w-[350px] h-12 flex flex-col gap-3'>
                <p className='font-bold text-4'>Horário do atendimento</p>        
                <input {...register("time")} 
                type="time" 
                placeholder='00:00' 
                className = 'border border-black rounded-lg h-12 placeholder-[#D9D9D9] py-4 pl-4'/>
            </div>

            </div>

          </div>


          <DialogFooter>
            <Button type="submit" className="text-base justify-center mt-3 bg-[#50E678] w-full h-[42px] rounded-full shadow-md hover:bg-[#50E678] hover:opacity-80 active:opacity-50 transition ">Finalizar cadastro</Button>
          </DialogFooter>

        </DialogContent>
      </form>
    </Dialog>
  )
}