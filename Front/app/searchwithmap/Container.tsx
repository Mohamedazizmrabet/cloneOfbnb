"use client"
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import L from "leaflet"
import AllOffersMap from "./AllOffersMap"


const DefaultIcon = new L.Icon({
    iconUrl:"/home.png",
    iconSize: [30, 30],
    color:"red",
    iconAnchor:[10,41],
    popupAnchor:[10,-40]
  });



const Container = ()=>{

 
  const position:LatLngTuple  = [36.8568498,10.2662648] || [0,0]

    return (

        <MapContainer center={position} zoom={9} scrollWheelZoom={true} className='w-[700px] h-[300px]'>
        <TileLayer
          attribution='&copy; <h1 src="/logo.png">Rentavilla Map</h1> '
          url="https://{s}.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png"
        />

       <AllOffersMap/>

      </MapContainer>
  
    )
}

L.Marker.prototype.options.icon=DefaultIcon

export default Container;