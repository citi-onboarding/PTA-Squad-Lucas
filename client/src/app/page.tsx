'use client';
import { TopBar } from "@/components";
import ServicePage from "./servicePage/page";
import RegisterPage from "./registerScreen/page";

export default function Home() {
  return (
    <TopBar
      page1={<ServicePage />}
      page2={<RegisterPage/>}
    />
  );
}
