import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = ({ google }) => {
    return (
        <Map
            google={google}
            style={{ width: "100%", height: "100%" }}
            zoom={10}
            initialCenter={{ lat: 10.3764, lng: 7.7095 }}
        >
            <Marker position={{ lat: 10.3764, lng: 7.7095 }} />
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY,
})(MapContainer)