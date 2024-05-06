import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-green-500 min-h-screen flex flex-col items-center justify-center text-white">
      <Head>
        <title>Ser Humano</title>
      </Head>

      <header className="text-5xl font-bold p-5">Ser Humano</header>

      <div className="flex w-full justify-around items-center p-10">
        <div className="bg-white text-black p-5 rounded-lg">
          <img src="/path/to/your/image.jpg" alt="Emprego" className="h-40" />
          <p>
            Crie uma conta e entre no site agora em busca de novas oportunidades
            de mercado
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Quero ser contratado
          </button>
        </div>

        <div className="bg-white text-black p-5 rounded-lg">
          <img src="/path/to/your/image.jpg" alt="Contratar" className="h-40" />
          <p>
            Publique aqui sua vaga e encontre o candidato perfeito para ela e
            seu modelo de negócio, crie sua conta e comece
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Quero contratar
          </button>
        </div>
      </div>
    </div>
  );
}
