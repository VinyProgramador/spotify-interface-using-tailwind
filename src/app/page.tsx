import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image'
import { SideBar } from './components/Sidebar'
import { Footer } from './components/Footer'
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-8'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='' className="bg-white/10 group flex items-center gap-4 rounded-sm overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/mind-of-mine.png" width={104} height={104} alt='image from mind of mine' />
              <strong>Mind Of Mine</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/10 group flex items-center gap-4 rounded-sm overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/mind-of-mine.png" width={104} height={104} alt='image from mind of mine' />
              <strong>Mind Of Mine</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/10 group flex items-center gap-4 rounded-sm overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/mind-of-mine.png" width={104} height={104} alt='image from mind of mine' />
              <strong>Mind Of Mine</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/10 group flex items-center gap-4 rounded-sm overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/mind-of-mine.png" width={104} height={104} alt='image from mind of mine' />
              <strong>Mind Of Mine</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/10 group flex items-center gap-4 rounded-sm overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/mind-of-mine.png" width={104} height={104} alt='image from mind of mine' />
              <strong>Mind Of Mine</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/10 group flex items-center gap-4 rounded-sm overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/mind-of-mine.png" width={104} height={104} alt='image from mind of mine' />
              <strong>Mind Of Mine</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h3 className='font-semibold text-2xl mt-5'>Made for Zayn Malik</h3>
          <div className='grid grid-cols-7 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-2 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/mind-of-mine.png" className='w-full' width={120} height={120} alt='image from mind of mine' />
              <strong className='font-semibold'>Dayly mix 1</strong>
              <span className='text-sm text-zinc-500'>Zayn Malik</span>
            </a>
            <a href='' className='bg-white/5 p-2 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/mind-of-mine.png" className='w-full' width={120} height={120} alt='image from mind of mine' />
              <strong className='font-semibold'>Dayly mix 1</strong>
              <span className='text-sm text-zinc-500'>Zayn Malik</span>
            </a>
            <a href='' className='bg-white/5 p-2 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/mind-of-mine.png" className='w-full' width={120} height={120} alt='image from mind of mine' />
              <strong className='font-semibold'>Dayly mix 1</strong>
              <span className='text-sm text-zinc-500'>Zayn Malik</span>
            </a>
            <a href='' className='bg-white/5 p-2 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/mind-of-mine.png" className='w-full' width={120} height={120} alt='image from mind of mine' />
              <strong className='font-semibold'>Dayly mix 1</strong>
              <span className='text-sm text-zinc-500'>Zayn Malik</span>
            </a>
            <a href='' className='bg-white/5 p-2 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/mind-of-mine.png" className='w-full' width={120} height={120} alt='image from mind of mine' />
              <strong className='font-semibold'>Dayly mix 1</strong>
              <span className='text-sm text-zinc-500'>Zayn Malik</span>
            </a>
          </div>

        </main>
      </div>
      <Footer />
    </div>
  )
}
