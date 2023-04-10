import React from 'react'
import { useState } from 'react';

import { useEffect } from 'react';
// import './style.css';

const Covid = () => {
    const[Data,setData]=useState([]);
    const CovidData= async()=>{
        try {
            const res=await fetch("https://data.covid19india.org/data.json");
            const actualdata=await res.json();
            console.log(actualdata.statewise[0]);
            setData(actualdata.statewise[0]);
            
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(()=>{
    CovidData();
    },[])
  return (
   <>
   <section>
       <h2>🟢 LIVE</h2>
       <h1>COVID-19 CORONAVIRUS TRACKER</h1>
      <ul>
       <li className='card'>
           <div className='card_main'>
               <div className='card_inner'>
                   <p className='card_name'><span> OUR </span>COUNTARY</p>
                   <p className='card__total card_small'>INDIA</p>
               </div>
            </div>
       </li>
       <li className='card'>
           <div className='card_main'>
               <div className='card_inner'>
                   <p className='card_name'><span> Total </span> RECOVERED</p>
                   <p className='card__total card_small'>{Data.recovered}</p>
               </div>
            </div>
       </li>
       <li className='card'>
           <div className='card_main'>
               <div className='card_inner'>
                   <p className='card_name'><span> Total </span>DEATHS</p>
                   <p className='card__total card_small'>{Data.deaths}</p>
               </div>
            </div>
       </li>
       <li className='card'>
           <div className='card_main'>
               <div className='card_inner'>
                   <p className='card_name'><span> Total </span>CONFIRMED</p>
                   <p className='card__total card_small'>{Data.confirmed}</p>
               </div>
            </div>
       </li>
       <li className='card'>
           <div className='card_main'>
               <div className='card_inner'>
                   <p className='card_name'><span> Total </span>ACTIVE</p>
                   <p className='card__total card_small'>{Data.active}</p>
               </div>
            </div>
       </li>
       <li className='card'>
           <div className='card_main'>
               <div className='card_inner'>
                   <p className='card_name'><span> OUR </span>UPDATED</p>
                   <p className='card__total card_small'>{Data.lastupdatedtime}</p>
               </div>
            </div>
       </li>
       </ul>
       </section>
   </>
  )
}

export default Covid;