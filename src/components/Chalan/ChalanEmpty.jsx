import React, { useContext } from 'react'
import { LoadContext } from '../../Context/LoadContextProvider'
import { TopNavContext } from '../../Context/TopNavContextProvider'
import { CountContext } from '../../Context/CountContextProvider'
import Table from '../BaseComponents/Table'
import BlurTable from '../BaseComponents/BlurTable'

function ChalanEmpty() {
    const {emptyContent, count} = useContext(LoadContext)
  const {type} = useContext(TopNavContext)
  // const { count } = useContext(CountContext) 
  return (
    <div className='py-3 flex-1'>
            <div className='text-[35px] m-4 flex gap-3'>
              <input
                value={count.ce}
                type="text"
                disabled
                className='bg-white text-red-600 text-[35px] rounded-full w-[6.5%] text-center'
              />
              <h1> बिल्टी,चलन Issue (Empty)</h1>
            </div>
            {
              count.ce > 0 ? (<Table data={emptyContent} type={type} prob={"बिल्टी,चलन"} id={"ce"} />) : (<BlurTable />) 
    }
            
          </div>
  )
}

export default ChalanEmpty
