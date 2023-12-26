const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const itemName = searchField.value;
    // Clear content
    searchField.value = '';

    // console.log(itemName);
    // Load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`;

    fetch(url)
    .then(response => response.json())
    .then(data => displaySearchedFood(data.meals))
}

const displaySearchedFood = (foods) => {
    const searchResult = document.getElementById('search-result');
    // Clear data
    searchResult.textContent = '';
    // Display result
    foods.forEach(food => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadMealDetail(${food.idMeal})" class="card">
                <img src="${food.strMealThumb}" class="card-img-top" alt="image not found">
                <div class="card-body">
                <h5 class="">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0,200)}</p>
                </div>
            </div>
        `
        // console.log("fish", food);
        searchResult.appendChild(div);
    });
    
    // console.log(foods)
}

const loadMealDetail = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    
    const response = await fetch(url);
    const data = await response.json();
    displayMealDetails(data.meals[0]);
    
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => displayMealDetails(data.meals[0]))

    // console.log(url);
}

// Display individual meal detail
const displayMealDetails = (mealDeatils) =>{
    const mealdetial = document.getElementById('meal-detail');
    mealdetial.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${mealDeatils.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${mealDeatils.strMeal}</h5>
        <p class="card-text">${mealDeatils.strInstructions.slice(0,150)}</p>
        <a href="${mealDeatils.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    mealdetial.appendChild(div);

    console.log(mealDeatils);
    console.log(div);
}