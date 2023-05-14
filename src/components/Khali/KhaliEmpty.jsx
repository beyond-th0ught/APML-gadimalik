import React, { useContext } from 'react'
import { LoadContext } from '../../Context/LoadContextProvider'
import { TopNavContext } from '../../Context/TopNavContextProvider'
import { CountContext } from '../../Context/CountContextProvider'
import Table from '../BaseComponents/Table'

function KhaliEmpty() {
    const {emptyContent} = useContext(LoadContext)
  const {type} = useContext(TopNavContext)
  const { count } = useContext(CountContext)
  return (
    <div className={`py-3 w-[49%] ${count.ke == 0 && "hidden"}`}>
            <div className='text-[9px] m-4 flex gap-3'>
              <input
                value={count.ke}
                type="text"
                disabled
                className='bg-white text-red-600 text-[11px] rounded-full w-[3%] text-center'
              />
              <h1>खाली Issue (Empty) </h1>
            </div>

            <Table data={emptyContent} type={type} prob={"खाली "} id={"ke"} />
          </div>
  )
}

export default KhaliEmpty
