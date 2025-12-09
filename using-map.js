function citiesOnly(arr) {
    return arr.map(obj => obj.city)
}
//let code = word.charCodeAt(j)
function upperCasingStates(arr) {
    return arr.map((str) =>
        str
            .split(" ")
            .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
            .join(" ")
    )
}


function fahrenheitToCelsius(arr) {
  return arr.map(str => {
    const match = str.match(/-?\d+/)[0];   
    return String(Math.floor((Number(match)-32)*5/9) )+"°C"
  });
}



function trimTemp(arr) {
   return arr.map(obj => ({

       ...obj,
       temperature : obj.temperature.replace(/\s+/g, '')
   })
   )
}

function tempForecasts(data_object) {
  return data_object.map(({ city, temperature, state }) => {
    
    const cleanTemp = temperature.replace(/\s+/g, ''); 
    
    const [celsius] = fahrenheitToCelsius([cleanTemp]); 
    const [stateFormatted] = upperCasingStates([state]); 
    
    return `${celsius}elsius in ${city}, ${stateFormatted}`;
  });
}


console.log(tempForecasts([
  {
    city: 'Pasadena',
    temperature: ' 101 °F',
    state: 'california',
    region: 'West',
  },
]) )