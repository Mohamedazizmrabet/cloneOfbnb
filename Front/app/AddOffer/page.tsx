'use client'
import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { set } from 'date-fns';

const AddOffer = () => {
    const [email,setEmail]= useState<string>('')
    const [description,setDescription]= useState<string>('')
    const [price,setPrice]= useState<number>(0)
    const [show1,setShow1]=useState<boolean>(false)
    const [fixedPrice,setFixedPrice]=useState<boolean>(false)

  return (
    <div className=' ml-[400px] shadow-xl w-[700px] mt-28 h-auto mb-36'>
        <h1 className='font-bold mt-14 text-xl mb-10 ml-4 '> General Description </h1>
    <div className='mb-10 ml-14 '>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
<div className='grid grid-cols-1 '>
    <div className='mb-10 ml-10'> <TextField id="filled-basic" label="Host Name " variant="filled" onChange={(ev)=>{setEmail(ev.target.value)}}/></div>
     <div className='ml-10'><TextField id="filled-basic" label="Description" variant="filled"  sx={ { width: 500 }} onChange={(ev)=>{setDescription(ev.target.value)}}/> </div>
      <div className="w-[450px] rounded-2xl bg-white ml-2">
      <div className='mb-10 ml-8 mt-10'> <TextField id="filled-basic" label="Price" variant="filled"  sx={ { width: 500 }} onChange={(ev)=>{setPrice(Number(ev.target.value))}}/></div> 
     <div className='flex flex-r'>
      <label className="flex cursor-pointer  justify-start mb-6 ml-8 ">
     Fixed Price
      <div className="relative inline-block ml-6">
        <input type="checkbox" className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" onClick={()=>{setFixedPrice(true)}}/>
        <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900"></span>
      </div>
    </label>
    <label className="flex cursor-pointer  mb-6 ml-8">
     Starting Price BID
      <div className="relative inline-block ml-6">
        <input type="checkbox" className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" onClick={()=>{setFixedPrice(false)}}/>
        <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900"></span>
      </div>
    </label></div>
    <button className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 ml-7" onClick={()=>{setShow1(!show1)}} >Confirm</button>
</div>


      </div>
    </Box>
    </div>

{show1 && <div></div>}


    </div>
  )
}

export default AddOffer;
