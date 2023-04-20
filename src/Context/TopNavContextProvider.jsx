import React, { createContext, useState } from 'react'

export const TopNavContext = createContext()

function TopNavContextProvider({children}) {
  let [type, setType] = useState("all");

  const handleType = (typeString="all") => {
      setType(typeString)
  }

  return (
    <TopNavContext.Provider 
      value={{
        type,
        handleType
      }}
    >
        {children}
    </TopNavContext.Provider>
  )
}

export default TopNavContextProvider