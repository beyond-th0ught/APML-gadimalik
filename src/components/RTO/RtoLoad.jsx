import React, { useContext } from 'react'
import { LoadContext } from '../../Context/LoadContextProvider';
import { TopNavContext } from '../../Context/TopNavContextProvider';
import { CountContext } from '../../Context/CountContextProvider';
import Table from '../BaseComponents/Table';

function RtoPanel() {
  const {loadedContent} = useContext(LoadContext)
  const {type} = useContext(TopNavContext)
  const { count } = useContext(CountContext) 
  return (
    <div>
    <div style={{ fontSize: "35px" }}>
      <input
        type="text"
        value={count.rl}
        disabled
        style={{
          backgroundColor: "black",
          color: "red",
          fontSize: "35px",
        }}
      />
      RTO Issue (Loaded)
    </div>

    <Table data={loadedContent} type={type} prob={"RTO"} />
  </div>
  )
}

export default RtoPanel