const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const itemName = searchField.value;
    searchField.value = '';
    console.log(itemName);

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))

}