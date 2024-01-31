'use client'
import { Button } from '@nextui-org/react';
import React,{useState} from 'react'

const AddDocs = () => {
    const [image1, setImage1 ] = useState<string>("");
    const [url1,setUrl1] = useState<string>("")

    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image1)
        data.append("upload_preset", "zmitpmpw")
        data.append("cloud_name","dfvgavtio")
        fetch("https://api.cloudinary.com/v1_1/dfvgavtio/image/upload",{
        method:"post",
        body: data
        })
        .then(res => res.json())
        .then(data => {setUrl1(data.secure_url)})
        .catch(err => console.log(err))}
  
  
  return (
    <div className='w-[600px] h-[400px] grid grid-cols-1 gap-4 ml-[600px] mt-24 mb-32'>
        <h1 className='font-bold text-xl'>Add Documents </h1>
      <input className='w-96 h-14 bg-gray-100 rounded shadow-xl' placeholder='National Identity Card'/>
      <div className='fit-content mb-4 font-extrabold lg:text-xl'>
    <Button component="label" variant="contained"  >
      <input type="file" onChange= {(e)=>setImage1(e.target.files[0])}/>
      </Button>
    <div>
      <img className='h-auto max-w-lg rounded-lg cursor-pointer drop-shadow-2xl' src={url1}/>
      </div>
    </div>
      <input  className='w-96 h-14 bg-gray-100  rounded shadow-xl' placeholder='Contract'/>
      <div className='fit-content mb-4 font-extrabold lg:text-xl'>
    <Button component="label" variant="contained"  >
      <input type="file" onChange= {(e)=>setImage1(e.target.files[0])}/>
      </Button>
    <div>
      <img className='h-auto max-w-lg rounded-lg cursor-pointer drop-shadow-2xl' src={url1}/>
      </div>
    </div>
      <input  className='w-96 h-14 bg-gray-100  rounded shadow-xl' placeholder='Other'/>
      <div className='fit-content mb-4 font-extrabold lg:text-xl'>
    <Button component="label" variant="contained"  >
      <input type="file" onChange= {(e)=>setImage1(e.target.files[0])}/>
      </Button>
    <div>
      <img className='h-auto max-w-lg rounded-lg cursor-pointer drop-shadow-2xl' src={url1}/>
      </div>
    </div>
    <div className='mb-32'>
    <button className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-pink-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95  "> Confirm </button>
    
    </div></div>
  )
}

export default AddDocs
