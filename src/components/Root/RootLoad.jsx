import React, { useContext } from 'react'
import { LoadContext } from '../../Context/LoadContextProvider'
import { TopNavContext } from '../../Context/TopNavContextProvider'
import { CountContext } from '../../Context/CountContextProvider'
import Table from '../BaseComponents/Table'
import BlurTable from '../BaseComponents/BlurTable'

function RootLoad() {
    const { loadedContent, count } = useContext(LoadContext)
  const {type} = useContext(TopNavContext)
  // const { count } = useContext(CountContext) 

  return (
    <div className={`py-3 w-[49%] ${count.rol == 0 && "hidden"}`}>
    <div className='text-[9px] m-4 flex gap-3'>
      <input
        type="text"
        value={count.rol}
        disabled
        className='bg-white text-red-600 text-[11px] rounded-full w-[3%] text-center'
      />
      <h1>रूट समस्या Issue (Loaded)</h1>
    </div>
    {
      count.rol > 0 ? ( <Table data={loadedContent} type={type} prob={"रूट समस्या "} id={"rol"} />) : (<BlurTable />) 
    }

  </div>
  )
}

export default RootLoad
