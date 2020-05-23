import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {serializeCities} from "../../store/cities";




//Init tabs
const tabs = document.querySelector('.tabs');
M.Tabs.init(tabs);

//Init autocomplete
const autocompleteCity = document.getElementById('city-input');
M.Autocomplete.init(autocompleteCity);

const autocompleteCountry = document.getElementById('country-input');
M.Autocomplete.init(autocompleteCountry, {
  onAutocomplete: function (txt) {
    autocompleteCity.removeAttribute('disabled');
    serializeCities(txt);
  }
});





export function getAutocompleteInstance (elem) {
  return M.Autocomplete.getInstance(elem)
}

//Init datepickers
const datepickers = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepickers, {
  format: 'dd / mm / yyyy',
  showClearBtn: true,
  autoClose: true,
});

export function getDatepickerInstance (elem) {
  return M.Datepicker.getInstance(elem)
}