"use client"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import { useEffect, useState } from "react"
import L, { latLng } from "leaflet";
import { useMap } from "react-leaflet";

export default function AllOffersMap(){
  const [lat,setLat]=useState(0)
  const [lng,setLng]=useState(0)
 console.log(lat)
 console.log(lng)

  const map = useMap()

    useEffect(()=>{

      map.on('click',(e:any)=>{
        setLat(e.latlng.lat)
        setLng(e.latlng.lng) 
      
        L.Routing.control({
            waypoints: [
              L.latLng(e.latlng.lat,e.latlng.lng)
            ],
            lineOptions:{
                styles:[{color:"brown"}]
            },
            routeWhileDragging:false,
            geocoder: L.Control.Geocoder.nominatim(),
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: true,
          }).addTo(map);

    })

         L.Control.geocoder({
            defaultMarkGeocode: false
          })
            .on('markgeocode', function(e:any) {

             const lat_lng=e.geocode.center
              setLat(lat_lng.lat)
              setLng(lat_lng.lng)
             L.marker(lat_lng).addTo(map).bindPopup(e.geocode.name).openPopup();
             map.fitBounds(e.geocode.bbox);

            })
            .addTo(map);
            },[])

    return null

}