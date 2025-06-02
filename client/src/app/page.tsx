'use client';
import { TopBar } from "@/components";
import ConsulCard from "@/components/consulCard"

export default function Home() {
  return (
    <TopBar
      page1={<>
      <div className="flex flex-wrap gap-4">
        <ConsulCard
        id={1}
        DateTime="2025-05-23T14:30:00.000Z"
        typeConsul="FIRST"
        doctorName="Dr. Smith"
        pacientName="Luna"
        pacientTutorName="João"
        pacientAge={5}
        pacientSpecie={"CAT"}
        onClick={() => console.log("clicado")}></ConsulCard>
        <ConsulCard
        id={1}
        DateTime="2025-05-23T14:30:00.000Z"
        typeConsul="RETURN"
        doctorName="Dr. Smith"
        pacientName="Luna"
        pacientTutorName="João"
        pacientAge={5}
        pacientSpecie={"SHEEP"}
        onClick={() => console.log("clicado")}></ConsulCard>
        <ConsulCard
        id={1}
        DateTime="2025-05-23T14:30:00.000Z"
        typeConsul="CHECKUP"
        doctorName="Dr. Smith"
        pacientName="Luna"
        pacientTutorName="João"
        pacientAge={5}
        pacientSpecie={"COW"}
        onClick={() => console.log("clicado")}></ConsulCard>
        <ConsulCard
        id={1}
        DateTime="2025-05-23T14:30:00.000Z"
        typeConsul="VACINATION"
        doctorName="Dr. Smith"
        pacientName="Luna"
        pacientTutorName="João"
        pacientAge={5}
        pacientSpecie={"HORSE"}
        onClick={() => console.log("clicado")}></ConsulCard>
        <ConsulCard
        id={1}
        DateTime="2025-06-27T14:30:00.000Z"
        typeConsul="CHECKUPdafsghk"
        doctorName="Dr. Smith"
        pacientName="Luna"
        pacientTutorName="João"
        pacientAge={5}
        pacientSpecie={"asfdgfgfhg"}
        onClick={() => console.log("clicado")}></ConsulCard>
      </div>
      </>}
      page2={<></>}
    />
  );
}
