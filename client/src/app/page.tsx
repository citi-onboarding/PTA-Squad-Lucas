import TopBar from "@/components/topBar/";

type Props = {
  page: React.ReactNode;
};


export default function Home({page}: Props ) {
  return (

    <TopBar page1={page} />
    
  );
}
