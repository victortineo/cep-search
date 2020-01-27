import Geocode from "react-geocode";
import { API_KEY } from './config'

Geocode.setApiKey(API_KEY);
Geocode.setLanguage("pt-br");
Geocode.setRegion("br");

export default function getAddress(addressString, callback) {
  return Geocode.fromAddress(addressString).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      return callback({ lat, lng })
    },
    error => {
      console.error(error);
    }
  );
}