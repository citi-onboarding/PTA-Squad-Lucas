'use client';
import { TopBar } from "@/components";
import RegisterPage from "./registerScreen/page";

export default function Home() {
  return (
    <TopBar
      page1={<></>}
      page2={<RegisterPage />}
    />
  );
}
