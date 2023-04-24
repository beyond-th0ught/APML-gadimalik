import React, { useState } from 'react'
import { useEffect } from 'react';
import { createContext } from 'react'

export const CountContext = createContext()

function CountContextProvider({children}) {
    let [count, setCount] = useState({
        rl: 0,
        re: 0,
        al: 0,
        ae: 0,
        ul: 0,
        ue: 0,
        ll: 0,
        le: 0,
        rol: 0,
        roe: 0,
        kl: 0,
        ke: 0,
        cl: 0,
        ce: 0,
        ol: 0,
        oe: 0,
      });

      useEffect(()=> {
        // get all the elements with id
        const Interval = setInterval(() => {
        let rl = document.querySelectorAll("#rl");
        let re = document.querySelectorAll("#re");
        let al = document.querySelectorAll("#al");
        let ae = document.querySelectorAll("#ae");
        let ul = document.querySelectorAll("#ul");
        let ue = document.querySelectorAll("#ue");
        let ll = document.querySelectorAll("#ll");
        let le = document.querySelectorAll("#le");
        let rol = document.querySelectorAll("#rol");
        let roe = document.querySelectorAll("#roe");
        let kl = document.querySelectorAll("#kl");
        let ke = document.querySelectorAll("#ke");
        let cl = document.querySelectorAll("#cl");
        let ce = document.querySelectorAll("#ce");
        let ol = document.querySelectorAll("#ol");
        let oe = document.querySelectorAll("#oe");
    
        
          setCount({
            ...count,
            rl: rl.length,
            re: re.length,
            al: al.length,
            ae: ae.length,
            ul: ul.length,
            ue: ue.length,
            ll: ll.length,
            le: le.length,
            rol: rol.length,
            roe: roe.length,
            kl: kl.length,
            ke: ke.length,
            cl: cl.length,
            ce: ce.length,
            ol: ol.length,
            oe: oe.length,
          });
        }, 5000);

        return ()=> {
            clearInterval(Interval)
        }
    }, [])
    
  return (
    <CountContext.Provider
        value={{
            count
        }}
    >
        {children}
    </CountContext.Provider>
  )
}

export default CountContextProvider