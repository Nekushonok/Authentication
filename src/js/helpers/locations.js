export function serializeLocatios (locations) {
  let serializedLocations = {};
  for (let key in locations) {
    serializedLocations[locations[key]] = null;
  }
  // console.log(serializedLocations);
  return serializedLocations;
}


