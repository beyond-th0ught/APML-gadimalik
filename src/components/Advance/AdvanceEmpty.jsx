import React, { useContext } from 'react'
import { LoadContext } from '../../Context/LoadContextProvider'
import { TopNavContext } from '../../Context/TopNavContextProvider'
import { CountContext } from '../../Context/CountContextProvider'
import Table from '../BaseComponents/Table'

function AdvanceEmpty() {
  const {emptyContent} = useContext(LoadContext)
  const {type} = useContext(TopNavContext)
  const { count } = useContext(CountContext) 
  return (
    <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.ae}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              एडवांस Issue (Empty)
            </div>

            <Table data={emptyContent} type={type} prob={"एडवांस "} id={"ae"} />
          </div>
  )
}

export default AdvanceEmpty