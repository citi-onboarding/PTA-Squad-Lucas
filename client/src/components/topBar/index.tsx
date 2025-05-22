import Image from "next/image";
import { LogoCITi} from "../../assets";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LeftTopBar, RightTopBar } from "../../assets";

type Props = {
  page1: React.ReactNode;
};

export default function topBar({page1}: Props) {
  return(

    <div>
      <Tabs defaultValue="topBar" className="flex flex-col items-center bg-white">

        <TabsList className="pt-5 pb-5 bg-white text-[#242424] flex flex-1 flex-row justify-around h-[114px] border-b-2 rounded-none border-solid border-[#D9D9D9] w-full items-center mb-5">
          <Image src={LeftTopBar} alt="Logo CITi Vet"/>

          <div className="pb-2 mt-6">
            <TabsTrigger value="service" className="font-normal p-0 pb-1 mr-6  rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#50E678]">Atendimento</TabsTrigger>
            <TabsTrigger value="register" className="font-normal p-0 pb-1 ml-6 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#50E678]">Cadastro</TabsTrigger>
          </div>

          <Image src={RightTopBar} alt="CITi Slogan"/> 
        </TabsList>

        <TabsContent value="service">

          <div>
            <Image src={LogoCITi} alt="Logo citi" />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white text-4xl font-bold">NextJS Boilerplate</h1>
              <p className="text-white text-xl">Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}<strong>&hearts;</strong> by CITi</p>
            </div>
          </div>

        </TabsContent>
        
        <TabsContent value="register" className="text-black">
          relógio          
          {page1}
        </TabsContent>


      </Tabs>
    </div>

  )
}
