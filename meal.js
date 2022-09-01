const loadMeals = (foodName) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>mealMenus(data.meals))
}

const mealMenus=(mealData)=>{
    const divId= document.getElementById('meal-container');
    divId.innerHTML = '';
    mealData.forEach(meal =>{
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML= `
        <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Card title ${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
        </div>
        `;
        divId.appendChild(mealDiv);
        

    }

    )

}
const newSearchField=()=>{
   const inputFood = document.getElementById('input-food');
   const inputFieldValue = inputFood.value;
   loadMeals(inputFieldValue);
   inputFood.value = '';
}

