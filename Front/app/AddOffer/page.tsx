'use client'
import React,{useState,useEffect,useContext} from 'react'
import { FaSwimmingPool, FaWifi } from "react-icons/fa";
import { PiTelevisionFill } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import BedIcon from '@mui/icons-material/Bed';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import Button from '@mui/material/Button';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { RiSchoolFill } from "react-icons/ri";
import { MdLiving } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { DataContext } from "../context";
import { GiRose } from "react-icons/gi";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import { useRouter } from 'next/navigation'


interface offer{
  offerTitle:string,
  offerImages:string[],
  offerPrice:number,
  offerType:string,
  offerStatus:boolean,
  renterOrNot:boolean,
  latitude:string,
  longitude:string,
  userIduser:number,
  offerDescription:string
}

const addedSucc = () => {
  toast.success('Added Successfully! ', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    })

 }
const successNot = () => {
  toast.success('Nice choice! ', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    });

 }



const AddOffer = () => {

    const [name,setName]= useState<string>('') //Offer Name //
    const [description,setDescription]= useState<string>('') //offer Description //
    const [type,setType]= useState<string>('') // offer type //
    const [price,setPrice]= useState<number>(0) //offer Price //
    const [longitude,setLongitude]=useState<string>("") // Offer Longitude //
    const [latitude,setLatitude]=useState<string>("") // Offer Latitude //
    const [show0,setShow0]=useState<boolean>(true)
    const [show1,setShow1]=useState<boolean>(false)
    const [show2,setShow2]=useState<boolean>(false)
    const [show3,setShow3]=useState<boolean>(false)
    const [show4,setShow4]=useState<boolean>(false)
    const [url1,setUrl1] = useState<string>("")
    const [images,setImages]=useState<string[]>([]) // Offer images //
    const [image1, setImage1 ] = useState<string>("");
    const [fixedPrice,setFixedPrice]=useState<boolean>(false);
    const [idOffer,setIdOffer] = useState<number>(0);
    const feature=[<FaSwimmingPool size={25} />,<TbAirConditioning size={25} />,<PiTelevisionFill size={25}/>,<FaWifi size={25}/>,<GiRose size={25}/>, <RiSchoolFill size={25}/>, <MdLiving size={25}/>,<AiOutlineSafety size={25}/>]
    const context=useContext(DataContext)
    const userId = localStorage.getItem('userId');
    const { push } = useRouter();
    const newOffer : offer = {
      offerTitle: name,
  offerImages: images,
  offerPrice: Number(price),
  offerType: type,
  offerStatus:fixedPrice,
  latitude: latitude,
  longitude: longitude,
  userIduser: Number(userId),
  offerDescription: description,
  renterOrNot : false
    }


    // Add Offer // 
    const addOffer =  (off : offer) => {
      axios.post('http://localhost:3000/api/addOffer',off)
      .then((res)=>{setIdOffer(res.data.idoffer)
      console.log("dataaaa",res.data)})
      .catch((err)=>{console.log(err)})
     }
     
console.log('id of the offer', idOffer)

const redirect = () =>{
  push('/home')
}



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



        // Add Feature to the offer //
        const addFeature = (idcat : number, idoffer : number) => {
          const newFeat = {
            categorieIdcategorie: idcat,
              offerIdoffer: idoffer
        }
          axios.post("http://localhost:3000/api/addFeature",newFeat).then(()=>{})
          .catch((er)=>{console.log(er)})
        }


  return (
    <div>
       <ToastContainer  transition={Zoom}  autoClose={8000}/>
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
 <div className='mb-10 ml-10'> <TextField id="filled-basic" label="Host Name " variant="filled" onChange={(ev)=>{setName(ev.target.value)}}/></div>
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
        <div className="ml-[100px] w-[500px] h-[100px] rounded-sm shadow-xl bg-slate-200 flex flex-r text-2xl font-bold justify-center pt-8 mb-10 mt-10" onClick={()=>{successNot();setType("home")}}><div className="mr-8"><HomeIcon height={50} width={50} />  </div> Entire home  </div>
        <div className="ml-[100px] w-[500px] h-[100px] rounded-sm shadow-xl bg-slate-200 flex flex-r text-2xl font-bold justify-center pt-8 mb-10" onClick={()=>{successNot();setType("SingleRoom")}}><div className="mr-8">< SingleBedIcon  height={50} width={50} /></div> Entire room  </div>
        <div className="ml-[100px] w-[500px] h-[100px] rounded-sm shadow-xl bg-slate-200 flex flex-r text-2xl font-bold justify-center pt-8 mb-10"><div className="mr-8" onClick={()=>{successNot();setType("Shared Room")}}><BedIcon  height={50} width={50} /> </div> Shared room  </div>
        <div className='flex flex-r gap-52 w-[800px] ml-20'>
 <button style={{width:"130px"}}  className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 ml-7" onClick={()=>{setShow0(true); setShow1(false)}} > Previous </button>
 <button style={{width:"130px"}} className="mb-12 ml-4 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95  " onClick={()=>{setShow2(true); setShow1(false)}} > Next </button>
 </div>
    
    </div>}</div>



    {/***************************Specify Localisation ***********/}
    <div>{show2 && <div  className=' ml-[350px] shadow-xl w-[900px] mt-28 h-auto mb-36'>
    
    <h1 className="font-bold mt-14 text-xl mb-10 ml-4  "> Specify Localisation </h1>
    <div className='flex flex-r ml-[180px]'>
    <div className='mb-10 ml-10'> <TextField id="filled-basic" label="Enter Longitude " variant="filled" /></div>
    <div className='mb-10 ml-10'> <TextField id="filled-basic" label="Enter Longitude " variant="filled"/></div>
    </div>
    <div className="ml-[250px] w-[400px] h-[300px] mb-14 bg-green-300 border rounded-[10px]">
            <img className=' w-[400px] h-[300px]' src='https://www.google.com/maps/d/thumbnail?mid=1MJDZAP_MRqUpITeFlJRx0kGwE6E&hl=fr'/>
        </div>
  
    <div className='flex flex-r gap-[500px] w-[900px]'>
 <button style={{width:"130px"}}  className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 ml-7" onClick={()=>{setShow1(true); setShow2(false)}} > Previous </button>
 <button style={{width:"130px"}} className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95  " onClick={()=>{setShow3(true); setShow2(false)}} > Next </button>
 </div>
    </div>}</div>


  {/***************************Add Images***********/}
  <div>{show3 && <div  className=' ml-[350px] shadow-xl w-[900px] mt-28 h-auto mb-36'>
    
    <h1 className="font-bold mt-14 text-xl mb-10 ml-4 "> Add Pictures </h1>

    <div className='fit-content mb-4 font-extrabold lg:text-xl ml-56'>
    <Button component="label" variant="contained"  >
      <input type="file" onChange= {(e)=>setImage1(e.target.files[0])}/>
      </Button>
    <Button onClick={()=>{uploadFirst()}}> <br/> See Picture  </Button>
    <div>
      <img className='h-auto max-w-lg rounded-lg cursor-pointer drop-shadow-2xl' src={url1}/>
      </div>
    </div>

    <div className='flex flex-r gap-96 w-[900px] ml-20'>
 <button style={{width:"130px"}}  className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 ml-12" onClick={()=>{setShow2(true); setShow3(false)}} > Previous </button>
 <button style={{width:"200px"}} className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-pink-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95  " onClick={()=>{addOffer(newOffer); setShow4(true); setShow3(false)}}> Next </button>
 </div>
    </div>}</div>

  {/**********************Features  ********** */}  
  <div>{show4 && <div  className=' ml-[270px] shadow-xl w-[1000px] mt-28 h-auto mb-36'>
    
    <h1 className="font-bold mt-14 text-xl mb-10 ml-4 ">Select Options in the Accomodation </h1>
   
    <div>
 <div className="grid md:grid-cols-2 gap-4 ml-20 mb-24">
 {context?.categories.map((el:any,i)=>{return (                            
 <div className=" flex flex-r w-80 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 mt-30">
<div className="flex flex-center gap-4 ml-4 ">
     <div className=" justify-end">{feature[i]}</div>
      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{el.categorieName}</h5></div>
       <input id="vue-checkbox-list" type="checkbox" className="w-8 h-8 ml-6 bg-gray-100 border-gray-300 rounded focus:ring-orange- dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={()=>{successNot();addFeature(el.idCategorie,idOffer)}}/>                                              
                                      </div>
                                )
                            })}
  </div> </div>   


       <div className='flex flex-r gap-[500px] w-[900px] ml-20'>
 <button style={{width:"130px"}}  className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 ml-7" onClick={()=>{setShow3(true); setShow4(false)}} > Previous </button>
 <button style={{width:"130px"}} className="mb-12 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95  " onClick={()=>{addedSucc();setShow4(false);redirect()}} > Next </button>
 </div>
    </div>}</div>



    </div>
  )

}

export default AddOffer;
