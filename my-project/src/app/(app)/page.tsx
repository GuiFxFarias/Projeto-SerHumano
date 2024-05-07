import output from "./img/output.png";
import pessoas from "./img/pessoas.png";
import serHumano from "./img/Ser Humano.png";
import logoStatum from "./img/Logo Statum.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-green-300 min-h-screen flex flex-col items-center justify-start text-white">
      <div className="static h-[40vh] z-0">
        <div className="">
          <Image
            src={serHumano}
            alt="Ser Humano"
            className="object-fill h-[55vh] shadow-[10px_25px_30px_0px_rgba(0,0,0,0.3)] max-lg:object-cover max-md:object-cover"
          />
        </div>
        <div className="absolute top-0 left-[92%] ">
          <Image src={logoStatum} alt="Ser Humano" className="w-[8vw]" />
        </div>
      </div>

      <div className="flex justify-center items-center mt-[-150px] z-0">
        <div className="flex w-[60%] space-x-10 p-10 ">
          <div className="bg-white text-black p-4 rounded-lg w-[50%] flex flex-col justify-around shadow-[15px_-10px_25px_0px_rgba(0,0,0,0.3)]">
            <Image src={output} alt="Emprego" className="rounded-lg" />
            <p className="py-1">
              Crie uma conta e entre no site agora em busca de novas
              oportunidades de mercado
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Quero ser contratado
            </button>
          </div>

          <div className="bg-white text-black p-4 rounded-lg w-[50%] flex flex-col justify-around shadow-[15px_-10px_25px_0px_rgba(0,0,0,0.3)]">
            <Image src={pessoas} alt="Emprego" className="rounded-lg" />
            <p className="py-1">
              Publique aqui sua vaga e encontre o candidato perfeito para ela e
              seu modelo de negócio, crie sua conta e comece
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Quero contratar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
