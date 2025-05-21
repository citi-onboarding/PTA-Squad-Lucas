import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogoCITi, LeftTopBar, RightTopBar } from "../assets";



export default function Home() {
  return (
    <div className="bg-red-100">
      
  
      <div className="h-[114px] border-b-2 border-solid border-[#D9D9D9] w-full flex flex-1 flex-row items-center mb-[70px] bg-[#FFFFFF]">

        <div>
          <Image src={LeftTopBar} alt="Logo CITi Vet" className="ml-[50px]" /> 
        </div>

        <div className="flex flex-1 flex-col h-full justify-around items-center bg-none">

            <Tabs defaultValue="account" className="flex flex-col items-center">
              <TabsList className="bg-white text-[#242424] bg-transparent">
                <TabsTrigger value="service" className="mr-[30px] font-normal">Atendimento</TabsTrigger>
                <TabsTrigger value="register" className="font-normal">Cadastro</TabsTrigger>
              </TabsList>

              <div className="h-[2px] w-[80px] bg-[#50E678] rounded-full mr-[110px]">

              </div>


            </Tabs>

        </div>

        <div>
          <Image src={RightTopBar} alt="CITi Slogan" className="mr-[50px]" /> 
        </div>

      </div>


      <div>
        <Image src={LogoCITi} alt="Logo citi" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold">NextJS Boilerplate</h1>
        <p className="text-white text-xl">
          Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}
          <strong>&hearts;</strong> by CITi
        </p>
      </div>
      

    </div>
  );
}
