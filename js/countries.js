loadcountries =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countriesData => displayCountries(countriesData))
}

displayCountries = (countriesData) =>{
    const countriesDIV = document.getElementById('countries');
    
    countriesData.forEach(country => {    
        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        h3.innerText = country.name.common;
        div.appendChild(h3)
        countriesDIV.appendChild(div);
        console.log(country);
    });
}

loadcountries();