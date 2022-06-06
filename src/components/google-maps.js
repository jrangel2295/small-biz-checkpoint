import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '300px',
  height: '300px'
};


function Maps(props) {
    const {lat, long} = props.address
    return (

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat:+lat, lng: +long}}
        zoom={15}
      >
        <Marker position={{ lat:+lat, lng: +long }} />
        { /* Child components, such as markers, info windows, etc. */ }
      </GoogleMap>
  )
}



export default Maps