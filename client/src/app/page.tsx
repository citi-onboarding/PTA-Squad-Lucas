'use client';
import { TopBar } from "@/components";
import { History } from "@/components"

export default function Home() {
  return (
    <TopBar
      page1={<>
        <History/>
      </>}
      page2={<></>}
    />
  );
}
