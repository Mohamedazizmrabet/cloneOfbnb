"use client"

import { useContext, useState } from "react"
import { FaSwimmingPool, FaWifi } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { PiTelevisionFill } from "react-icons/pi";
import { IoMdArrowDropright } from "react-icons/io";
import { GiRose } from "react-icons/gi";
import { Slide } from "react-slideshow-image";
import { RiSchoolFill } from "react-icons/ri";
import { MdLiving } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { DataContext } from "../context";

export default function AddingFeatures(){

    const feature=[<FaSwimmingPool size={25} />,<TbAirConditioning size={25} />,<PiTelevisionFill size={25}/>,<FaWifi size={25}/>,<GiRose size={25}/>, <RiSchoolFill size={25}/>, <MdLiving size={25}/>,<AiOutlineSafety size={25}/>]
    const context=useContext(DataContext)
    

    return (

        <div>
                   

                        <div className="grid md:grid-cols-2 gap-4 ml-20 mb-24">

                            {context?.categories.map((el:any,i)=>{

                                return (
                                
                                    <div className=" flex flex-r w-80 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 mt-30">
                                    
                                    <div className="flex flex-center gap-4 ml-4 ">
                                    <div className=" justify-end">{feature[i]}</div>
                                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{el.categorieName}</h5>
                                  
                                        </div>
                                    <input id="vue-checkbox-list" type="checkbox"
                                    className="w-8 h-8 ml-6 bg-gray-100 border-gray-300 rounded focus:ring-orange- dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>                                              
                                    
                                    </div>
                                )
                            })}

                                       


                        </div> 

               
                        
        </div>
        
        
    )
}