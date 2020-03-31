import React from 'react'
import { Map , GoogleApiWrapper, Marker } from 'google-maps-react'

const mapStyles = {
    width:'50vw',
    height:'50vh'
}

const EventMap = ({location,google}) => {

    const {latitude, longitude} =  location
    return (
        <Map 
            google={google}
            zoom={10}
            style={mapStyles}
            initialCenter={{lat:latitude, lng:longitude}}
        >
            <Marker position={{lat:latitude, lng:longitude}} />
        </Map>            
    )
}

export default GoogleApiWrapper({
    apiKey:process.env.REACT_APP_GOOGLE_KEY
  })(EventMap);