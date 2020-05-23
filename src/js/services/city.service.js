import axios from '../plugins/axios';


export async function getCities(countryIndex) {
  try {
    const response = await axios.get(`/location/get-cities/${countryIndex}`);
    // console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}