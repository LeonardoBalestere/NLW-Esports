import '../styles/main.css'

import logoImg from './assets/Logo-ESports.svg'

function App(){
  return (
  <div className='max-w-[1344px] mx-auto flex flex-col items-center mt-20'>
    <img src={logoImg} alt="Logo" />

    <h1 className='text-6xl text-white font-black mt-20'>
      Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
    </h1>
    
    <div className='grid grid-cols-6 gap-6 mt-16'>
      <a href="" className='relative rounded-lg overflow-hidden'>
        <img src="/g1.png" alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradiant absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>Liga das lendas</strong>
          <span className='text-zinc-300 text-sm block'>2 Anuncios</span>
        </div>
      </a>
      <a href="" className='relative'>
        <img src="/g2.png" alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradiant absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>Dota 2</strong>
          <span className='text-zinc-300 text-sm block'>6 Anuncios</span>
        </div>
      </a>
      <a href="" className='relative'>
        <img src="/g3.png" alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradiant absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>CSzinho</strong>
          <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
        </div>
      </a>
      <a href="" className='relative'>
        <img src="/g4.png" alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradiant absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>Apex Legenda</strong>
          <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
        </div>
      </a>
      <a href="" className='relative'>
        <img src="/g5.png" alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradiant absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>Forte Nigth</strong>
          <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
        </div>
      </a>
      <a href="" className='relative'>
        <img src="/g6.png" alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradiant absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>WOW</strong>
          <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
        </div>
      </a>            
    </div>
    
    <div className='bg-[#2A2634] px-8 py-6 mt-8 self-stretch'>

    </div>

  </div>
  
  
  )
}

export default App
