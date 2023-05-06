import React, { useContext } from 'react'
import { LoadContext } from '../../Context/LoadContextProvider'
import { TopNavContext } from '../../Context/TopNavContextProvider'
import { CountContext } from '../../Context/CountContextProvider'
import Table from '../BaseComponents/Table'
import BlurTable from '../BaseComponents/BlurTable'

function UnloadingEmpty() {
    const {emptyContent, count} = useContext(LoadContext)
    const {type} = useContext(TopNavContext)
    // const { count } = useContext(CountContext) 
    return (
      <div className={`py-3 flex-1 ${count.ue == 0 && "hidden"}`}>
              <div className='text-[35px] m-4 flex gap-3'>
                <input
                  value={count.ue}
                  type="text"
                  disabled
                  className='bg-white text-red-600 text-[35px] rounded-full w-[6.5%] text-center'
                />
                <h1>अनलोडिंग समस्या Issue (Empty)</h1>
              </div>
              {
              count.ue > 0 ? (<Table data={emptyContent} type={type} prob={"अनलोडिंग समस्या "} id={"ue"} />) : (<BlurTable />) 
            }
              
            </div>
    )
}

export default UnloadingEmpty
