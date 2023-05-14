import React, { useContext } from 'react'
import { LoadContext } from '../../Context/LoadContextProvider';
import { TopNavContext } from '../../Context/TopNavContextProvider';
import { CountContext } from '../../Context/CountContextProvider';
import Table from '../BaseComponents/Table';
import BlurTable from '../BaseComponents/BlurTable';

function AdvanceLoad() {
  const {loadedContent, count} = useContext(LoadContext)
  const {type} = useContext(TopNavContext)
  // const { count } = useContext(CountContext) 
  return (
    <div className={`py-3 w-[49%] ${count.al == 0 && "hidden"}`}>
    <div className='text-[9px] m-4 flex gap-3'>
      <input
        type="text"
        defaultValue={count.al}
        disabled
        className='bg-white text-red-600 text-[11px] rounded-full w-[3%] text-center'
      />
      <h1>एडवांस Issue (Loaded)</h1>
    </div>
    
    {
              count.al > 0 ? (<Table data={loadedContent} type={type} prob={"एडवांस "} id={"al"} />) : (<BlurTable />) 
    }
  </div>
  )
}

export default AdvanceLoad