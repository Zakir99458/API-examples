console.log("kanye");

const loadQuotes =() =>{
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(kanyeData => displayQuote(kanyeData))
}

displayQuote = quote => {
    const quoteElement = document.getElementById('kanye');
    quoteElement.innerText = quote.quote;
    console.log(quote);
}
