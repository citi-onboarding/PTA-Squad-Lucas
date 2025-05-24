import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LeftTopBar, RightTopBar } from "@/assets";

type Props = {
  page1: React.ReactNode;
  page2: React.ReactNode;
};


export default function topBar({page1, page2}: Props) {

  return(

    <div>
      <Tabs 
        defaultValue="service" 
        className="flex flex-col items-center bg-white"
      >
        
        <TabsList className="py-5 px-12 bg-white text-[#242424] flex flex-1 flex-row justify-between h-[114px] border-b-2 rounded-none border-solid border-[#D9D9D9] w-full items-center mb-5">
          <Image 
            src={LeftTopBar} 
            alt="Logo CITiVet"
          />

          <div className="pb-2 mt-6">
            <TabsTrigger 
              value="service" 
              className="font-normal p-0 pb-1 mr-6 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#50E678]"
            >
              Atendimento
            </TabsTrigger>
            <TabsTrigger 
              value="register" 
              className="font-normal p-0 pb-1 ml-6 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#50E678]"
            >
              Cadastro
            </TabsTrigger>
          </div>

          <Image 
            src={RightTopBar} 
            alt="CITi Slogan"
          /> 
        </TabsList>

        <TabsContent value="service">
          {page1}
        </TabsContent>
        
        <TabsContent value="register">
          {page2}
        </TabsContent>

      </Tabs>
    </div>

  );
}
