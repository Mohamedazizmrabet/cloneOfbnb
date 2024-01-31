'use client'
import Link from "next/link"
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import React, {useState,useEffect} from 'react'
import axios from 'axios';
interface Offer{
  offerTitle : string,
  offerDescription : string,
  offerPrice : number,
  offerImages : JSON,
  offerType : string,
  offerStatus : boolean
}
const Couples = () => {

const [data,setData]= useState<Offer[]>([])



const getAllRents= async () => {
  try {
    const res = await fetch("http://localhost:3000/api/getAllByType/justmarried");
    const off = await res.json();
    setData(off)

  } catch (error) {
    console.error(error);
  }
}

useEffect(()=>{getAllRents()} ,[])

  return (
    <div className=" grid grid-cols-4 gap-7 p-12">
                
    {data.map((el,i)=>{

      return(
        <div className="w-[300px] h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={i}>
          
                  
                <Slide>         
                    {el.offerImages.map((slideImage, index)=> (
                        <Link href="/details">
                        <img className="rounded  w-full h-[200px]" src={slideImage}/>
                        <p>{``}</p>
                        </Link>
                    ))} 
                </Slide>
            
            <div className="p-2">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden">{el.offerTitle}</h5>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">{el.offerDescription} </p>
            </div>
        </div>
      )
    })}
               
    </div>
  )
}

export default Couples
