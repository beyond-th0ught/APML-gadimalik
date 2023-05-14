import React, { useContext } from 'react'
import { LoadContext } from '../../Context/LoadContextProvider';
import { TopNavContext } from '../../Context/TopNavContextProvider';
import { CountContext } from '../../Context/CountContextProvider';
import Table from '../BaseComponents/Table';
import BlurTable from '../BaseComponents/BlurTable';


function RtoPanel() {
  const { loadedContent, count, loadingState } = useContext(LoadContext)
  const {type} = useContext(TopNavContext)
  // const { count } = useContext(CountContext) 

  return (
    <div className={`py-3 w-[49%] ${count.rl == 0 && "hidden"}`}>
    <div className='text-[9px] my-4 flex gap-3'>
      <input
        type="text"
        value={count.rl}
        disabled
        className='bg-white text-red-600 text-[11px] rounded-full w-[3%] text-center'
        
      />
      <h1>RTO Issue (Loaded)</h1>
    </div>
    {
      loadingState ? (<BlurTable />) : (
       <> {count.rl > 0 ? ( <Table data={loadedContent} type={type} prob={"RTO"} id={"rl"} />) : (<BlurTable />) }</>
      )
    }
  </div>
  )
}

export default RtoPanel