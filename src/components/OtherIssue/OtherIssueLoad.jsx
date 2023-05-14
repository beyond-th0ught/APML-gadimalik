import React, { useContext } from 'react'
import { LoadContext } from '../../Context/LoadContextProvider';
import { TopNavContext } from '../../Context/TopNavContextProvider';
import { CountContext } from '../../Context/CountContextProvider';
import Table from '../BaseComponents/Table';
import BlurTable from '../BaseComponents/BlurTable';

function OtherIssueLoad() {
    const {loadedContent, count} = useContext(LoadContext)
    const {type} = useContext(TopNavContext)
    // const { count } = useContext(CountContext) 
  return (
    <div className={`py-3 w-[49%] ${count.ol == 0 && "hidden"}`}>
    <div className='text-[9px] m-4 flex gap-3'>
      <input
        type="text"
        value={count.ol}
        disabled
        className='bg-white text-red-600 text-[11px] rounded-full w-[3%] text-center'
      />
      <h1>Other issue Issue (Loaded)</h1>
    </div>
    {
      count.ol > 0 ? (     <Table data={loadedContent} type={type} prob={"Other issue"} id={"ol"} />
) : (<BlurTable />) 
    }
  </div>
  )
}

export default OtherIssueLoad
