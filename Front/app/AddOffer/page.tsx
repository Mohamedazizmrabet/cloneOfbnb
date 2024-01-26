'use client'
import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { set } from 'date-fns';
import HomeIcon from '@mui/icons-material/Home';
import BedIcon from '@mui/icons-material/Bed';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import AddingFeature from '../AddingFeature/page';
import Button from '@mui/material/Button';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';



const AddOffer = () => {
    const [email,setEmail]= useState<string>('')
    const [description,setDescription]= useState<string>('')
    const [type,setType]= useState<string>('')
    const [price,setPrice]= useState<number>(0)
    const [show0,setShow0]=useState<boolean>(true)
    const [show1,setShow1]=useState<boolean>(false)
    const [show2,setShow2]=useState<boolean>(false)
    const [show3,setShow3]=useState<boolean>(false)
    const [show4,setShow4]=useState<boolean>(false)
    const [url1,setUrl1] = useState<string>("")
    const [url2,setUrl2] = useState<string>("")
    const [url3,setUrl3] = useState<string>("")
    const [images,setImages]=useState<string[]>([])
    const [image1, setImage1 ] = useState<string>("");
    const [image2, setImage2 ] = useState<string>("");
    const [image3, setImage3 ] = useState<string>("");
    const [fixedPrice,setFixedPrice]=useState<boolean>(false)

    //Cloudinary //
    const uploadFirst = () => {
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

      //Cloudinary //
    const uploadSecond = () => {
      const data = new FormData()
      data.append("file", image2)
      data.append("upload_preset", "zmitpmpw")
      data.append("cloud_name","dfvgavtio")
      fetch("https://api.cloudinary.com/v1_1/dfvgavtio/image/upload",{
      method:"post",
      body: data
      })
      .then(res => res.json())
      .then(data => {setUrl2(data.secure_url)})
      .catch(err => console.log(err))}


      const uploadThird = () => {
        const data = new FormData()
        data.append("file", image3)
        data.append("upload_preset", "zmitpmpw")
        data.append("cloud_name","dfvgavtio")
        fetch("https://api.cloudinary.com/v1_1/dfvgavtio/image/upload",{
        method:"post",
        body: data
        })
        .then(res => res.json())
        .then(data => {setUrl3(data.secure_url)})
        .catch(err => console.log(err))}


        const setIm = () => {
          let arr= []
          arr.push(url1)
          arr.push(url2)
          arr.push(url3)
          setImages(arr)
        }



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
  <div className='flex flex-r w-[700px]'>
   <label className="flex cursor-pointer  justify-start mb-6 ml-8 ">
  Fixed Price
   <div className="relative inline-block ml-6">
     <input type="checkbox" className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" onClick={()=>{setFixedPrice(true)}}/>
     <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900"></span>
   </div>
 </label>
 <label className="flex cursor-pointer  mb-6 ml-8">
 BID Starting Price 
   <div className="relative inline-block ml-6">
     <input type="checkbox" className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" onClick={()=>{setFixedPrice(false)}}/>
     <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900"></span>
   </div>
 </label></div>
 <div className='flex flex-r gap-64 w-[800px]'>
 <button style={{width:"130px"}}  className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 ml-7" onClick={()=>{setShow1(true); setShow0(false)}} > Previous </button>
 <button style={{width:"130px"}} className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95  " onClick={()=>{setShow1(true); setShow0(false)}} > Next </button>
 </div>
</div>
   </div>
 </Box>
 </div>
</div> }

{/**********************Type of Accomodation ********** */}
<div>{show1 && <div  className=' ml-[400px] shadow-xl w-[700px] mt-28 h-auto mb-36'>
    
    <h1 className="font-bold mt-14 text-xl mb-10 ml-4 ">What type of accommodation will be available for guests?</h1>
        <div className="ml-[100px] w-[500px] h-[100px] rounded-sm shadow-xl bg-slate-200 flex flex-r text-2xl font-bold justify-center pt-8 mb-10 mt-10" onClick={()=>{setType("home")}}><div className="mr-8"><HomeIcon height={50} width={50} />  </div> Entire home  </div>
        <div className="ml-[100px] w-[500px] h-[100px] rounded-sm shadow-xl bg-slate-200 flex flex-r text-2xl font-bold justify-center pt-8 mb-10" onClick={()=>{setType("SingleRoom")}}><div className="mr-8">< SingleBedIcon  height={50} width={50} /></div> Entire room  </div>
        <div className="ml-[100px] w-[500px] h-[100px] rounded-sm shadow-xl bg-slate-200 flex flex-r text-2xl font-bold justify-center pt-8 mb-10"><div className="mr-8" onClick={()=>{setType("Shared Room")}}><BedIcon  height={50} width={50} /> </div> Shared room  </div>
        <div className='flex flex-r gap-52 w-[800px] ml-20'>
 <button style={{width:"130px"}}  className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 ml-7" onClick={()=>{setShow0(true); setShow1(false)}} > Previous </button>
 <button style={{width:"130px"}} className="mb-12 ml-4 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95  " onClick={()=>{setShow2(true); setShow1(false)}} > Next </button>
 </div>
    
    </div>}</div>

  {/**********************Features  ********** */}  
    <div>{show2 && <div  className=' ml-[270px] shadow-xl w-[1000px] mt-28 h-auto mb-36'>
    
    <h1 className="font-bold mt-14 text-xl mb-10 ml-4 ">Select Options in the Accomodation </h1>
    <AddingFeature/>
       <div className='flex flex-r gap-[500px] w-[900px] ml-20'>
 <button style={{width:"130px"}}  className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 ml-7" onClick={()=>{setShow1(true); setShow2(false)}} > Previous </button>
 <button style={{width:"130px"}} className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95  " onClick={()=>{setShow3(true); setShow2(false)}} > Next </button>
 </div>
    </div>}</div>

    {/***************************Specify Localisation ***********/}
    <div>{show3 && <div  className=' ml-[350px] shadow-xl w-[900px] mt-28 h-auto mb-36'>
    
    <h1 className="font-bold mt-14 text-xl mb-10 ml-4 "> Specify Localisation </h1>
    <div className='mb-10 ml-10'> <TextField id="filled-basic" label="Enter Longitude " variant="filled" /></div>
    <div className='mb-10 ml-10'> <TextField id="filled-basic" label="Enter Longitude " variant="filled"/></div>
    <div className='flex flex-r gap-64 w-[900px]'>
 <button style={{width:"130px"}}  className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 ml-7" onClick={()=>{setShow2(true); setShow3(false)}} > Previous </button>
 <button style={{width:"130px"}} className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95  " onClick={()=>{setShow4(true); setShow3(false)}} > Next </button>
 </div>
    </div>}</div>


  {/***************************Add documents***********/}
  <div>{show4 && <div  className=' ml-[350px] shadow-xl w-[900px] mt-28 h-auto mb-36'>
    
    <h1 className="font-bold mt-14 text-xl mb-10 ml-4 "> Add Documents </h1>

    <div className='fit-content mb-4 font-extrabold lg:text-xl ml-56'>
    <Button component="label" variant="contained"  >
      <input type="file" onChange= {(e)=>setImage1(e.target.files[0])}/>
      </Button>
    <Button onClick={()=>{uploadFirst()}}> <AddAPhotoIcon sx={{ width: 40, height: 40 }} /><br/> See Picture 1 </Button>
    <div>
      <img className='h-auto max-w-lg rounded-lg cursor-pointer drop-shadow-2xl' src={url1}/>
      </div>
    </div>

    <div className='fit-content mb-4 font-extrabold lg:text-xl ml-56'>
    <Button component="label" variant="contained"  >
      <input type="file" onChange= {(e)=>setImage2(e.target.files[0])}/>
      </Button>
    <Button onClick={()=>{uploadSecond()}}> <AddAPhotoIcon sx={{ width: 40, height: 40 }} /> <br/> See Picture 2 </Button>
    <div>
      <img className='h-auto max-w-lg rounded-lg cursor-pointer drop-shadow-2xl' src={url2}/>
      </div>
    </div>

    <div className='fit-content mb-4 font-extrabold lg:text-xl ml-56'>
    <Button component="label" variant="contained"  >
      <input type="file" onChange= {(e)=>setImage3(e.target.files[0])}/>
      </Button>
    <Button onClick={()=>{uploadThird()}}> <AddAPhotoIcon sx={{ width: 40, height: 40 }} /> <br/> See Picture 3 </Button>
    <div>
      <img className='h-auto max-w-lg rounded-lg cursor-pointer drop-shadow-2xl' src={url3}/>
      </div>
    </div>
<button className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 ml-8" onClick={()=>{setIm()}}>Confirm Images </button>
    <div className='flex flex-r gap-96 w-[900px]'>
 <button style={{width:"130px"}}  className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 ml-8" onClick={()=>{setShow3(true); setShow4(false)}} > Previous </button>
 <button style={{width:"200px"}} className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-pink-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95  " > Confirm Host </button>
 </div>
    </div>}</div>


    </div>
  )

}

export default AddOffer;
