import React, { useContext } from 'react'
import { LoadContext } from '../../Context/LoadContextProvider'
import { TopNavContext } from '../../Context/TopNavContextProvider'
import { CountContext } from '../../Context/CountContextProvider'
import Table from '../BaseComponents/Table'
import BlurTable from '../BaseComponents/BlurTable'

function UnloadingLoad() {
    const {loadedContent, count} = useContext(LoadContext)
    const {type} = useContext(TopNavContext)
    // const { count } = useContext(CountContext) 
  return (
    <div className={`py-3 w-[49%] ${count.ul == 0 && "hidden"}`}>
            <div className='text-[9px] m-4 flex gap-3'>
              <input
                value={count.ul}
                type="text"
                disabled
                className='bg-white text-red-600 text-[11px] rounded-full w-[3%] text-center'
              />
              <h1>अनलोडिंग समस्या Issue (Loaded)</h1>
            </div>

            {
              count.ul > 0 ? (<Table data={loadedContent} type={type} prob={"अनलोडिंग समस्या "} id={"ul"} />) : (<BlurTable />) 
            }
          </div>
  )
}

export default UnloadingLoad
