import React, { useState } from "react";
import "./App.css";

import RecipeList from "./RecipeList";
import RecipeCreate from "./RecipeCreate";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const deleteRecipe = (indexToDelete) => {
    setRecipes(recipes.filter((_, index) => index !== indexToDelete));
  };

  const createRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>

      <RecipeList
        recipes={recipes}
        deleteRecipe={deleteRecipe}
      />

      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
