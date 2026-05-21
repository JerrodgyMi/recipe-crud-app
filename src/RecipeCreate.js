import React, { useState } from "react";

const initialFormState = {
  name: "",
  cuisine: "",
  photo: "",
  ingredients: "",
  preparation: "",
};

function RecipeCreate({ createRecipe }) {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData(initialFormState);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </td>

            <td>
              <input
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                placeholder="Cuisine"
              />
            </td>

            <td>
              <input
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                placeholder="Photo URL"
              />
            </td>

            <td>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                placeholder="Ingredients"
              />
            </td>

            <td>
              <textarea
                name="preparation"
                value={formData.preparation}
                onChange={handleChange}
                placeholder="Preparation"
              />
            </td>

            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
