import React, { useContext } from 'react'
import { TopNavContext } from '../../Context/TopNavContextProvider'

function Topnav() {
  
  const {handleType}  = useContext(TopNavContext)

  return (
    <div className='sticky top-0 z-10'>
    <div className='md:flex md:flex-wrap  grid grid-cols-1 -mb-px text-sm font-medium text-center text-white dark:text-gray-400'>
        <button className='inline-flex p-3 md:w-[10%] sm:w-[50%] sm:my-1 border-2 bg-[#c20505] border-transparent mx-1 hover:text-zinc-300 hover:border-gray-900 dark:hover:text-zinc-300 group' onClick={() => handleType("all")}>ALL</button>
        <button className='inline-flex p-3 md:w-[10%] sm:w-[50%] sm:my-1 border-2 bg-[#c20505] border-transparent mx-1 hover:text-zinc-300 hover:border-gray-900 dark:hover:text-zinc-300 group' onClick={() => handleType("LINE_MXL")}>LINE_MXL</button>
        <button className='inline-flex p-3 md:w-[10%] sm:w-[50%] sm:my-1 border-2 bg-[#c20505] border-transparent mx-1 hover:text-zinc-300 hover:border-gray-900 dark:hover:text-zinc-300 group' onClick={() => handleType("LINE_SXL")}>LINE_SXL</button>
        <button className='inline-flex p-3 md:w-[10%] sm:w-[50%] sm:my-1 border-2 bg-[#c20505] border-transparent mx-1 hover:text-zinc-300 hover:border-gray-900 dark:hover:text-zinc-300 group' onClick={() => handleType("LINE_TRAILER")}>LINE_TRAILER</button>
        <button className='inline-flex p-3 md:w-[10%] sm:w-[50%] sm:my-1 border-2 bg-[#c20505] border-transparent mx-1 hover:text-zinc-300 hover:border-gray-900 dark:hover:text-zinc-300 group' onClick={() => handleType("LINE_AS")}>LINE_AS</button>
        <button className='inline-flex p-3 md:w-[10%] sm:w-[50%] sm:my-1 border-2 bg-[#c20505] border-transparent mx-1 hover:text-zinc-300 hover:border-gray-900 dark:hover:text-zinc-300 group' onClick={() => handleType("LINE_DOUBLEDECK")}>
          LINE_SP_DOUBLEDECK
        </button>
        <button className='inline-flex p-3 md:w-[10%] sm:w-[50%] sm:my-1 border-2 bg-[#c20505] border-transparent mx-1 hover:text-zinc-300 hover:border-gray-900 dark:hover:text-zinc-300 group' onClick={() => handleType("LINE_SP")}>LINE_SP</button>
        <button className='inline-flex p-3 md:w-[10%] sm:w-[50%] sm:my-1 border-2 bg-[#c20505] border-transparent mx-1 hover:text-zinc-300 hover:border-gray-900 dark:hover:text-zinc-300 group' onClick={() => handleType("LINE_CAR")}>LINE_CAR</button>
        <button className='inline-flex p-3 md:w-[10%] sm:w-[50%] sm:my-1 border-2 bg-[#c20505] border-transparent mx-1 hover:text-zinc-300 hover:border-gray-900 dark:hover:text-zinc-300 group' onClick={() => handleType("OTHER")}>OTHER</button>
    </div>
  </div>
  )
}

export default Topnav