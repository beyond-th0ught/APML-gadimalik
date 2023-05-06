import React, { useContext } from 'react'
import { LoadContext } from '../../Context/LoadContextProvider'
import { TopNavContext } from '../../Context/TopNavContextProvider'
import { CountContext } from '../../Context/CountContextProvider'
import Table from '../BaseComponents/Table'

function LoadingEmty() {
    const {emptyContent} = useContext(LoadContext)
    const {type} = useContext(TopNavContext)
    const { count } = useContext(CountContext) 
  return (
    <div className='py-3 flex-1'>
            <div className='text-[35px] m-4 flex gap-3'>
              <input
                value={count.le}
                type="text"
                disabled
                className='bg-white text-red-600 text-[35px] rounded-full w-[6.5%] text-center'
              />
              <h1>लोडिंग समस्या Issue (Empty)</h1>
            </div>

            <Table data={emptyContent} type={type} prob={"लोडिंग समस्या"} id={"le"} />
          </div>
  )
}

export default LoadingEmty
