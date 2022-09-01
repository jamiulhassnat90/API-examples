const loadCountires = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data));    
}

const displayCountries = countries =>{
    // for (const country of countries ){
    //     console.log(country);
    // }
       const countriesInfo = document.getElementById('countries-info');
       countries.forEach(country=>{
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('myCountry');
        countryDiv.innerHTML =`
         <h3><span style="color:black">Name:</span> <span style="color:red">${country.name.common}</span> </h3>
         <p>Capital: <span style="color:green"> ${country.capital ?country.capital[0]:'No Capital'}</span> </p>
           <button onclick="loadCountryDetail('${country.cca2}')"> Details </button>      
         ` 
        countriesInfo.appendChild(countryDiv);
       })
}

const loadCountryDetail =(code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>countryDetails(data[0]))
}

const countryDetails=(countryData)=>{
    const newDiv= document.getElementById('single-country-details');
    newDiv.innerHTML=`
    <h3>Country Name: ${countryData.name.common}</h3>
    <img src="${countryData.flags.png}">
    `
}
loadCountires();