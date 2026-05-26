import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // Delete recipe
  const handleDeleteRecipe = (recipeIndex) => {
    const updatedRecipes = recipes.filter(
      (_, index) => index !== recipeIndex
    );

    setRecipes(updatedRecipes);
  };

  // Create recipe
  const handleCreateRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>

      <RecipeList
        recipes={recipes}
        deleteRecipe={handleDeleteRecipe}
      />

      <RecipeCreate createRecipe={handleCreateRecipe} />
    </div>
  );
}

export default App;
