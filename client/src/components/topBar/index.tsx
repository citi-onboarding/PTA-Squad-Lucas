import Image from "next/image";
import { LogoCITi} from "../../assets";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LeftTopBar, RightTopBar } from "../../assets";


export default function topBar() {
  return(

    <div>
      <Tabs defaultValue="topBar" className="flex flex-col items-center bg-white">

        <TabsList className="pt-5 pb-5 bg-white text-[#242424] flex flex-1 flex-row justify-around h-[114px] border-b-2 rounded-none border-solid border-[#D9D9D9] w-full items-center mb-[20px]">
          <Image src={LeftTopBar} alt="Logo CITi Vet" className="" />
          <TabsTrigger value="service" className="font-normal">Atendimento</TabsTrigger>
          <TabsTrigger value="register" className="font-normal">Cadastro</TabsTrigger>
          <Image src={RightTopBar} alt="CITi Slogan"/> 
        </TabsList>

        <TabsContent value="service"><div className="h-[2px] w-[80px] bg-[#50E678]"></div>

          <div>
            <Image src={LogoCITi} alt="Logo citi" />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white text-4xl font-bold">NextJS Boilerplate</h1>
              <p className="text-white text-xl">Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}<strong>&hearts;</strong> by CITi</p>
            </div>
          </div>

        </TabsContent>
        
        <TabsContent value="register">
          <h1>Squad Lucas</h1>
          <div className="h-[2px] w-[80px] bg-[#50E678] rounded-full"></div>
        </TabsContent>


      </Tabs>
    </div>

  )
}