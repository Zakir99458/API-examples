const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const itemName = searchField.value;
    searchField.value = '';
    // console.log(itemName);

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`;

    fetch(url)
    .then(response => response.json())
    .then(data => displaySearchedFood(data.meals))
}

const displaySearchedFood = (foods) => {
    const searchResult = document.getElementById('search-result');

    foods.forEach(food => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="${food.strMealThumb}" class="card-img-top" alt="image not found">
                <div class="card-body">
                <h5 class="">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0,200)}</p>
                </div>
            </div>
        `
        console.log("fish", food);
        searchResult.appendChild(div);
    });
    
    // console.log(foods)
}