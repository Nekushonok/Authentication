// import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import './plugins/materialize';

import UI from './config/ui.config';
import {UIreg, setAutocomleteDataCountry} from './config/uiReg.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login } from './services/auth.service';
import { notify } from './views/notifications';
import { getNews } from './services/news.service';
import { getCountries } from "./services/country.service";
import { serializeLocatios } from "./helpers/locations";
import { regData } from "./store/regData";
import { signUp } from "./services/regForm.service";

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];
const { formReg, email, password } = UIreg;
const inputsReg = [email, password];
let countries = null;



// Events
document.addEventListener('DOMContentLoaded', () => {
  initAutocomplete();
 
  async function initAutocomplete() {
    try {
      countries = await getCountries();
      const serializedCountries = serializeLocatios(countries);
      setAutocomleteDataCountry(serializedCountries);
      
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
 }
})

form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
});
inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

formReg.addEventListener('submit', e => {
  e.preventDefault();
  onSubmitReg();
})
inputsReg.forEach(el => el.addEventListener('focus', () => removeInputError(el)));


// Handlers
async function onSubmit() {
  const isValidForm = inputs.every(el => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    await getNews();
    form.reset();
    notify({ msg: 'Login success', className: 'alert-success' });
  } catch (err) {
    notify({ mas: 'Login faild', className: 'alert-danger' });
  }
}


async function onSubmitReg() {
  const isValidForm = inputsReg.every(el => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    const userData = regData(UIreg);
    await signUp(userData);

    formReg.reset();
    notify({ msg: 'Login success', className: 'alert-success' });
  } catch (err) {
    notify({ mas: 'Login faild', className: 'alert-danger' });
  }
}

export function getCountryIndex (inputVal) {
  const countryIndex = Object.entries(countries).find((el) =>
  el[1] === inputVal);

  return countryIndex[0];
}