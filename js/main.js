
class Recipe {
  constructor(name, ingredients, directions) {
    this.name = name;
    this.ingredients = ingredients;
    this.directions = directions;
  }




  
  
  displayRecipe() {
    return `
      <div class="recipe-card">
        <h3>${this.name}</h3>
        <p><strong>Ingredients:</strong> ${this.ingredients}</p>
        <p><strong>Directions:</strong> ${this.directions}</p>
      </div>
    `;
  }
}


const recipeList = document.querySelector('#recipe-list');


const chickenCurryRecipe = new Recipe(
  'Chicken Curry', 
  'Chicken, onions, tomatoes, ginger, garlic, green chili, garam masala, turmeric, cumin, coriander, salt, oil, cilantro',
  '1. Heat oil in a pan. 2. Add onions, ginger, garlic, and green chili, sauté until golden. 3. Add tomatoes and cook until soft. 4. Add chicken pieces, salt, and all the spices (garam masala, turmeric, cumin, coriander). 5. Cook until the chicken is browned. 6. Add water and cook until the chicken is tender. 7. Garnish with cilantro and serve hot.'
);

const paneerBhurjiRecipe = new Recipe(
  'Paneer Bhurji', 
  'Paneer, onions, tomatoes, green chili, ginger, garlic, cumin, turmeric, red chili powder, garam masala, salt, oil, cilantro',
  '1. Heat oil in a pan. 2. Add cumin seeds and sauté. 3. Add onions, ginger, garlic, and green chili, and cook until onions are soft. 4. Add tomatoes and cook until soft. 5. Add turmeric, red chili powder, and garam masala, and cook for a minute. 6. Add crumbled paneer, mix well, and cook for 5-7 minutes. 7. Garnish with cilantro and serve with roti or rice.'
);


recipeList.innerHTML = chickenCurryRecipe.displayRecipe();
recipeList.innerHTML += paneerBhurjiRecipe.displayRecipe();


const recipeForm = document.querySelector('#recipe-form');
recipeForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const recipeName = document.querySelector('#recipe-name').value;
  const recipeIngredients = document.querySelector('#recipe-ingredients').value;
  const recipeDirections = document.querySelector('#recipe-directions').value;

  if (recipeName && recipeIngredients && recipeDirections) {
    const newRecipe = new Recipe(recipeName, recipeIngredients, recipeDirections);
    recipeList.innerHTML += newRecipe.displayRecipe();
  } else {
    alert('Please fill out all fields!');
  }

 
  recipeForm.reset();
});

gsap.registerPlugin(ScrollTrigger);

gsap.to("#progress-bar", {
  width: "100%",
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.5
  }
});