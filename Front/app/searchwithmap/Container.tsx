"use client"
import { LatLngTuple } from 'leaflet'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from "leaflet"
import AllOffersMap from './AllOffersMap'
import Map from '../map/Map'

const DefaultIcon = new L.Icon({
    iconUrl:"/home.png",
    iconSize: [30, 30],
    color:"red",
    iconAnchor:[10,41],
    popupAnchor:[10,-40]
  });



const SearchMap = ()=>{


  const position:LatLngTuple  = [36.8065,10.1815]

    return (

        <MapContainer center={position} zoom={9} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <h1 src="/logo.png">Rentavilla Map</h1> '
          url="https://{s}.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png"
        />

       <AllOffersMap/>

      </MapContainer>
   
    )
}

L.Marker.prototype.options.icon=DefaultIcon

export default SearchMap;