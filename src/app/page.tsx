import { Footer } from '@/components/Footer';
import { SideBar } from '@/components/Sidebar';
import { Home as ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'
import { GrPlayFill } from "react-icons/gr";

export default function Home()  {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album1.jpg" width={104} height={104} alt="Capa do álbum Use your illusion 2 da banda Guns n Roses"/>
              <strong>Use Your Illusion 2</strong>
              <button className="w-8 h-8 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <GrPlayFill />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album1.jpg" width={104} height={104} alt="Capa do álbum Use your illusion 2 da banda Guns n Roses"/>
              <strong>Use Your Illusion 2</strong>
              <button className="w-8 h-8 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <GrPlayFill />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album1.jpg" width={104} height={104} alt="Capa do álbum Use your illusion 2 da banda Guns n Roses"/>
              <strong>Use Your Illusion 2</strong>
              <button className="w-8 h-8 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <GrPlayFill />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album1.jpg" width={104} height={104} alt="Capa do álbum Use your illusion 2 da banda Guns n Roses"/>
              <strong>Use Your Illusion 2</strong>
              <button className="w-8 h-8 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <GrPlayFill />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album1.jpg" width={104} height={104} alt="Capa do álbum Use your illusion 2 da banda Guns n Roses"/>
              <strong>Use Your Illusion 2</strong>
              <button className="w-8 h-8 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <GrPlayFill />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album1.jpg" width={104} height={104} alt="Capa do álbum Use your illusion 2 da banda Guns n Roses"/>
              <strong>Use Your Illusion 2</strong>
              <button className="w-8 h-8 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <GrPlayFill />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-3xl mt-10">Made for Tiago Camargo</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
            <Image src="/album1.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Use your illusion 2 da banda Guns n Roses"/>
            <strong className="font-semibold">Daily mix 1</strong>
            <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
            <Image src="/album1.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Use your illusion 2 da banda Guns n Roses"/>
            <strong className="font-semibold">Daily mix 1</strong>
            <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
            <Image src="/album1.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Use your illusion 2 da banda Guns n Roses"/>
            <strong className="font-semibold">Daily mix 1</strong>
            <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
            <Image src="/album1.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Use your illusion 2 da banda Guns n Roses"/>
            <strong className="font-semibold">Daily mix 1</strong>
            <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
            <Image src="/album1.jpg" className="w-full" width={120} height={120} alt="Capa do álbum Use your illusion 2 da banda Guns n Roses"/>
            <strong className="font-semibold">Daily mix 1</strong>
            <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}