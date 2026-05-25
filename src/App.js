import { useState } from "react";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Spaghetti Bolognese",
      description: "Classic pasta dish",
      ingredients: "Pasta, beef, tomato sauce",
      instructions: "Cook and mix",
      image: "https://via.placeholder.com/150"
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    description: "",
    ingredients: "",
    instructions: "",
    image: ""
  });

  // CREATE
  const handleAdd = () => {
    const newRecipe = {
      id: Date.now(),
      ...form
    };

    setRecipes([...recipes, newRecipe]);

    setForm({
      name: "",
      description: "",
      ingredients: "",
      instructions: "",
      image: ""
    });
  };

  // DELETE
  const handleDelete = (id) => {
    setRecipes(recipes.filter((r) => r.id !== id));
  };

  return (
    <div className="App">
      <h1>Recipe CRUD App</h1>

      {/* CREATE FORM */}
      <div>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          placeholder="Ingredients"
          value={form.ingredients}
          onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
        />

        <input
          placeholder="Instructions"
          value={form.instructions}
          onChange={(e) => setForm({ ...form, instructions: e.target.value })}
        />

        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <button onClick={handleAdd}>Add Recipe</button>
      </div>

      {/* READ TABLE */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.name}</td>
              <td>{recipe.description}</td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.instructions}</td>
              <td>
                <img src={recipe.image} alt={recipe.name} />
              </td>

              <td>
                <button onClick={() => handleDelete(recipe.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
