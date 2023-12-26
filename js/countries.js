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
        div.innerHTML = `
            <h3> ${country.name.common} </h3>
            <p> ${country.name.official} </p>
            <button onClick="loadCountryByName('${country.name.common}')"> Show Details </button>
        `
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name.common;
        // div.appendChild(h3)
        // const p = document.createElement('p');
        // p.innerText = country.name.official
        // div.appendChild(p);

        countriesDIV.appendChild(div);
        // console.log(country);
    });
}

loadcountries();

const loadCountryByName = (name) =>{
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayCountryDetail(data[0]))
    // console.log(url)
}
const displayCountryDetail = country =>{
    // country.forEach(data=>{
    //     console.log("Display: " + data);
    // })
    const div = document.getElementById('country-detail');
    div.innerHTML = `
        <h5> ${country.name.common} </h5>
        <p> Official: ${country.name.official} </p>
        <p> nativeName: ${country.name.nativeName.eng.common} </p>
    `
    console.log(country.name);
}