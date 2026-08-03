import Image from "next/image";
import MemeBtn from "../components/MemeBtn";
import Navbar from "../components/Navbar";

interface Meme {
  id: string;
  height: number;
  width: number;
  url: string;
  name: string;
  box_count: number;
}

const Meme = async () => {
  const data = await fetch("https://api.imgflip.com/get_memes", { cache: 'no-store' });

  const memes = await data.json();
  console.log(memes)


  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 py-10 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-800">
          😂 Meme Generator
        </h1>
        <p className="text-gray-500 mt-3 text-lg">
          Browse popular meme templates from Imgflip.
        </p>
      </div>

      {/* Meme Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {memes.data.memes.map((item: Meme) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative w-full h-72">
              <Image
                src={item.url}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
                {item.name}
              </h2>

              <div className="flex justify-between mt-4 text-sm text-gray-500">
                <span>{item.width} px</span>
                <span>{item.height} px</span>
              </div>

              <MemeBtn meme={item} />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

  export default Meme;