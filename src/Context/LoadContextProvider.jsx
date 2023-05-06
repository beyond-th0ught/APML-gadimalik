import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
// import { fetchData } from "../components/GMI/gmiFunctions";
import useUrls from '../Hooks/useUrls';

export const LoadContext = createContext();

function LoadContextProvider({children}) {
    const [loadedContent, setLoadedContent] = useState([]);
    const [emptyContent, setEmptyContent] = useState([]);
    const [issueUrl, fetchData] = useUrls()
    const [count, setCount] = useState({})
    const [loadingState, setLoadingState] = useState(true)

    useEffect(() => {
        (async () => {
            setLoadingState(true)
            const data = await fetchData();
            setLoadedContent(data[0]);
            setEmptyContent(data[1]);

            const cal = {
                rl: 0,
                re: 0,
                al: 0,
                ae: 0,
                ul: 0,
                ue: 0,
                ll: 0,
                le: 0,
                rol:  0,
                roe:  0,
                kl: 0,
                ke: 0,
                cl: 0,
                ce: 0,
                ol: 0,
                oe: 0,
            }

            if(Array.isArray(data[0])){
                (data[0]).map((val)=> {
                    if(val.prob == "एडवांस ") cal.al++;
                    if(val.prob == "बिल्टी,चलन") cal.cl++;
                    if(val.prob == "खाली ") cal.kl++;
                    if(val.prob == "लोडिंग समस्या") cal.ll++;
                    if(val.prob == "Other issue") cal.ol++;
                    if(val.prob == "रूट समस्या ") cal.rol++;
                    if(val.prob == "RTO") cal.rl++;
                    if(val.prob == "अनलोडिंग समस्या ") cal.ul++;
                    return;
                })
            }

            if(Array.isArray(data[1])){
                (data[1]).map((val)=> {
                    if(val.prob == "एडवांस ") cal.ae++;
                    if(val.prob == "बिल्टी,चलन") cal.ce++;
                    if(val.prob == "खाली ") cal.ke++;
                    if(val.prob == "लोडिंग समस्या") cal.le++;
                    if(val.prob == "Other issue") cal.oe++;
                    if(val.prob == "रूट समस्या ") cal.roe++;
                    if(val.prob == "RTO") cal.re++;
                    if(val.prob == "अनलोडिंग समस्या ") cal.ue++;
                    return;
                })
            }
            setCount(cal)
            setLoadingState(false)
        })();
      }, []);
  return (
    <LoadContext.Provider
        value={{
            loadedContent,
            emptyContent,
            count,
            loadingState
        }}
    >
        {children}
    </LoadContext.Provider>
  )
}

export default LoadContextProvider