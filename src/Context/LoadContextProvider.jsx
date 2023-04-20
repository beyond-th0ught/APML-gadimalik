import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
import { fetchData } from "../components/GMI/gmiFunctions";

export const LoadContext = createContext();

function LoadContextProvider({children}) {
    const [loadedContent, setLoadedContent] = useState([]);
    const [emptyContent, setEmptyContent] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await fetchData();
            setLoadedContent(data[0]);
            setEmptyContent(data[1]);
        })();
      }, []);
  return (
    <LoadContext.Provider
        value={{
            loadedContent,
            emptyContent
        }}
    >
        {children}
    </LoadContext.Provider>
  )
}

export default LoadContextProvider