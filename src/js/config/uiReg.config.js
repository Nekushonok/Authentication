import { getAutocompleteInstance } from "../plugins/materialize/materialize";


export const UIreg = {
  formReg: document.forms['signUpForm'],
  email: document.getElementById('emailReg'),
  password: document.getElementById('passwordReg'),
  nickname: document.getElementById('nickname'),
  first_name: document.getElementById('first_name'),
  last_name: document.getElementById('last_name'),
  phone: document.getElementById('phone'),
  gender_orientation: {
    male: document.getElementById('male'),
    female: document.getElementById('female'),
  },
  city: document.getElementById('city-input'),
  country: document.getElementById('country-input'),
  date_of_birth: document.getElementById('birthdate'),
};



export function setAutocomleteDataCountry(data) {
  const countryAutocomplite = getAutocompleteInstance(UIreg.country);
  countryAutocomplite.updateData(data);
}


export function setAutocomleteDataCity(data) {
  const countryAutocomplite = getAutocompleteInstance(UIreg.city);
  countryAutocomplite.updateData(data);
}