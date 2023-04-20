import React, { useContext } from 'react'
import { TopNavContext } from '../../Context/TopNavContextProvider'

function Topnav() {
  
  const {handleType}  = useContext(TopNavContext)

  return (
    <div>
        <button onClick={() => handleType("all")}>ALL</button>
        <button onClick={() => handleType("LINE_MXL")}>LINE_MXL</button>
        <button onClick={() => handleType("LINE_SXL")}>LINE_SXL</button>
        <button onClick={() => handleType("LINE_TRAILER")}>LINE_TRAILER</button>
        <button onClick={() => handleType("LINE_AS")}>LINE_AS</button>
        <button onClick={() => handleType("LINE_DOUBLEDECK")}>
          LINE_SP_DOUBLEDECK
        </button>
        <button onClick={() => handleType("LINE_SP")}>LINE_SP</button>
        <button onClick={() => handleType("LINE_CAR")}>LINE_CAR</button>
        <button onClick={() => handleType("OTHER")}>OTHER</button>
    </div>
  )
}

export default Topnav