import { getCountryIndex } from "../app";
import { getCities } from '../services/city.service';
import { serializeLocatios } from "../helpers/locations";
import { setAutocomleteDataCity } from "../config/uiReg.config";



export async function serializeCities(txt) {
  try {
    let countryName = txt;
    let countryIndex = getCountryIndex(countryName);
    let cities = await getCities(countryIndex);
    let serializedCities = serializeLocatios(cities);
    setAutocomleteDataCity(serializedCities);

  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}