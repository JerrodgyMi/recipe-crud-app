import React, { useState } from "react";

const initialFormData = {
  name: "",
  cuisine: "",
  photo: "",
  ingredients: "",
  preparation: "",
};

function RecipeCreate({ createRecipe }) {
  const [formData, setFormData] = useState(initialFormData);

  // Handle input changes
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();

    createRecipe(formData);

    setFormData(initialFormData);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </td>

            <td>
              <input
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                value={formData.cuisine}
                onChange={handleChange}
              />
            </td>

            <td>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                value={formData.photo}
                onChange={handleChange}
              />
            </td>

            <td>
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                value={formData.ingredients}
                onChange={handleChange}
              />
            </td>

            <td>
              <textarea
                name="preparation"
                placeholder="Preparation"
                value={formData.preparation}
                onChange={handleChange}
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
