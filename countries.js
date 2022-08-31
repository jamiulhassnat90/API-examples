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
        countryDiv.classList.add('country');
        countryDiv.innerHTML =`
         <h3><span style="color:black">Name:<span> <span style="color:red"> ${country.name.common}</span> </h3>
         <p>Capital: <span style="color:green"> ${country.capital[0]}</span> </p>
        `
        countriesInfo.appendChild(countryDiv);
       })
}

loadCountires();