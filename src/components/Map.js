import React from 'react';
import styledComponentsCjs from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../utils/config'; 
import { useStateValue } from '../State';
import { If } from './If';

const defaultPosition = {lat: 51.505, lng: -0.09};

const AddressMap = () => {
  const [{ location }] = useStateValue();
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultPosition} zoom={18}
        center={location}
      >
        <If condition={location}>
          <Marker lat={location && location.lat} lng={location && location.lng} />
        </If>
      </GoogleMapReact>
    </MapContainer>
  );
};
    
const MapContainer = styledComponentsCjs.div`
  position: relative;
  width: 100%;
  height: 400px;
`

const Marker = styledComponentsCjs.div`
  background-image: url('marker.png');
  background-size: cover;
  width: 32px;
  height: 32px;
`
    
export default AddressMap;