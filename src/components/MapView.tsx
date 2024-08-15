import { useContext, useLayoutEffect, useRef } from "react"
import { Map } from "maplibre-gl"

import { MapContext, PlacesContext } from "../context"
import { Loading } from "./"



export const MapView = () => {

  const { isLoading, userLocation } = useContext( PlacesContext )
  const { setMap } = useContext( MapContext )
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if ( !isLoading ) {
      const map = new Map({
        container: mapDiv.current!, // container id
        style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=mDMDNZrNJ1KpjGWTOMXJ', // style URL
        center: userLocation,// starting position [lng, lat]
        zoom: 14 // starting zoom
       });

      setMap( map );
    }
  }, [ isLoading ])




  if ( isLoading ) {
    return ( <Loading />)
  }


  return (
    <div ref={ mapDiv } 
        style={{
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            top: 0,
            left: 0,
        }}
    >
      { userLocation?.join(',') }
    </div>
  )
}

