import React, { useContext } from 'react'
import { LoadContext } from '../../Context/LoadContextProvider'
import { TopNavContext } from '../../Context/TopNavContextProvider'
import { CountContext } from '../../Context/CountContextProvider'
import Table from '../BaseComponents/Table'
import BlurTable from '../BaseComponents/BlurTable'


function RtoEmpty() {
    const {emptyContent, count} = useContext(LoadContext)
  const {type} = useContext(TopNavContext)
  // const { count } = useContext(CountContext) 
  return (
    <div className={`py-3 w-[49%] ${count.re == 0 && "hidden"}`}>
            <div className='text-[9px] m-4 flex gap-3'>
              <input
                value={count.re}
                type="text"
                disabled
                className='bg-white text-red-600 text-[11px] rounded-full w-[3%] text-center'
              />
              <h1>RTO Issue (Empty)</h1>
            </div>
            
            {
                count.re > 0 ? (<Table data={emptyContent} type={type} prob={"RTO"} id={"re"} />) : (<BlurTable />) 
            }
          </div>
  )
}

export default RtoEmpty