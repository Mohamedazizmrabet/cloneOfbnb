'use client'
import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { set } from 'date-fns';
import HomeIcon from '@mui/icons-material/Home';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import BedIcon from '@mui/icons-material/Bed';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import AddingFeatures from '../AddingFeature/page';

const AddOffer = () => {
    const [email,setEmail]= useState<string>('')
    const [description,setDescription]= useState<string>('')
    const [type,setType]= useState<string>('')
    const [price,setPrice]= useState<number>(0)
    const [show0,setShow0]=useState<boolean>(true)
    const [show1,setShow1]=useState<boolean>(false)
    const [show2,setShow2]=useState<boolean>(false)
    const [show3,setShow3]=useState<boolean>(false)
    const [fixedPrice,setFixedPrice]=useState<boolean>(false)

  return (
    <div>
{show0 && <div className=' ml-[400px] shadow-xl w-[700px] mt-28 h-auto mb-36'>

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
 <button className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 ml-7" onClick={()=>{setShow1(true); setShow0(false)}} >Confirm</button>
</div>
   </div>
 </Box>
 </div>
</div> }
<div>{show1 && <div  className=' ml-[400px] shadow-xl w-[700px] mt-28 h-auto mb-36'>
    
    <h1 className="font-bold mt-14 text-xl mb-10 ml-4 ">What type of accommodation will be available for guests?</h1>
        <div className="ml-[100px] w-[500px] h-[100px] rounded-sm shadow-xl bg-slate-200 flex flex-r text-2xl font-bold justify-center pt-8 mb-10 mt-10" onClick={()=>{setType("home")}}><div className="mr-8"><HomeIcon height={50} width={50} />  </div> Entire home  </div>
        <div className="ml-[100px] w-[500px] h-[100px] rounded-sm shadow-xl bg-slate-200 flex flex-r text-2xl font-bold justify-center pt-8 mb-10" onClick={()=>{setType("SingleRoom")}}><div className="mr-8">< SingleBedIcon  height={50} width={50} /></div> Entire room  </div>
        <div className="ml-[100px] w-[500px] h-[100px] rounded-sm shadow-xl bg-slate-200 flex flex-r text-2xl font-bold justify-center pt-8 mb-10"><div className="mr-8" onClick={()=>{setType("Shared Room")}}><BedIcon  height={50} width={50} /> </div> Shared room  </div>
        <div className=""><button  className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 ml-24" onClick={()=>{setShow2(true);setShow1(false)}} > Confirm </button></div>
    
    </div>}</div>

    <div>{show2 && <div  className=' ml-[400px] shadow-xl w-[700px] mt-28 h-auto mb-36'>
    
    <h1 className="font-bold mt-14 text-xl mb-10 ml-4 ">Select Options in the Accomodation </h1>
    <AddingFeatures/>
    <div className=""><button  className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 ml-24" onClick={()=>{setShow2(true);setShow1(false)}} > Confirm </button></div>
    
    </div>}</div>

    </div>
  )

}

export default AddOffer;
