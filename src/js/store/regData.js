export function regData(inputsObj) {
  const regData = serializeRegData (inputsObj);
  console.log(regData);
  return regData;
}

function serializeRegData (inputsObj) {
  let regData = {};
  for (let property in inputsObj) {
    switch (property) {
      case 'formReg': 
        continue;
      case 'gender_orientation': 
        let sex = genderOrientation(inputsObj[property]);
        console.log(sex);
        regData[property] = 'sex';
        continue;
      case 'date_of_birth':
        let dateOfBirthObj = dateOfBirth(inputsObj[property].value, property);
        Object.assign(regData, dateOfBirthObj);
        continue;
    }
   
    regData[property] = inputsObj[property].value;
  }

  return regData;
}

function genderOrientation(obj) {
  let sex = '';
  for (let prop in obj) {
    if (obj[prop].checked === true) {
      sex = prop;
    }
  }
  console.log(sex);
  return sex;
}


function dateOfBirth(inputVal = '', prop = '') {
  const dateOfBirthObj = {};
  const arrOfNamesDates = ['_day', '_month', '_year'];
  const arrOfDates = inputVal.split(' / ');
  for (let i = 0; i < arrOfNamesDates.length; i++) {
    dateOfBirthObj[prop.concat(arrOfNamesDates[i])] = arrOfDates[i];
  }
  return dateOfBirthObj;
}

