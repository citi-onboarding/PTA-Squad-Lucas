import TopBar from "@/components/topBar/";

export default function Home() {
  return (

    <TopBar
    page1={
          <div>
            <div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-black text-4xl font-bold">Page 1</h1>
                <h1 className="text-black text-4xl font-bold">NextJS Boilerplate</h1>
                <p className="text-black text-xl">Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}<strong>&hearts;</strong> by CITi</p>
              </div>
            </div>
          </div>}

    page2={
          <div>
            <div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-red-500 text-4xl font-bold">Page 2</h1>
                <h1 className="text-red-500 text-4xl font-bold">NextJS Boilerplate</h1>
                <p className="text-red-500 text-xl">Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}<strong>&hearts;</strong> by CITi</p>
              </div>
            </div>
          </div>}

    />
  );
}
