import React from 'react'

import { useEffect } from 'react';
// import './style.css';

const Covid = () => {
    const CovidData= async()=>{
        try {
            const res=await fetch("https://data.covid19india.org/data.json");
            const actualdata=await res.json();
            console.log(actualdata.statewise[0]);

            
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(()=>{
    CovidData();
    },[])
  return (
   <>
       <h2>🟢 LIVE</h2>
       <h1>COVID-19 CORONAVIRUS TRACKER</h1>

       <li className='card'>
           <div className='card_main'>
               <div className='card_inner'>
                   <p className='card_name'><span> fOUR </span>COUNTARY</p>
                   <p className='card__total card_small'>INDIA</p>
               </div>

           </div>
       </li>
   </>
  )
}

export default Covid;