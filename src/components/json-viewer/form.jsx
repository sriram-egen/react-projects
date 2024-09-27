import React, { useState } from "react";

function FakerFormComponent({ onSubmit }) {
  const [categories, setCategories] = useState([
    { category: "", method: "", keyName: "" },
  ]);

  const handleCategoryChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index].category = value;
    setCategories(updatedCategories);
  };

  const handleMethodChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index].method = value;
    setCategories(updatedCategories);
  };

  const handlekeyNameChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index].keyName = value;
    setCategories(updatedCategories);
  };

  const handleAddMore = () => {
    setCategories([...categories, { category: "", method: "", keyName: "" }]);
  };

  const handleRemove = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(categories);
  };

  return (
    <form onSubmit={handleSubmit}>
      {categories.map((category, index) => (
        <div key={index}>
          <select
            value={category.category}
            onChange={(e) => handleCategoryChange(index, e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="person">Person</option>
            <option value="word">Word</option>
          </select>

          <select
            value={category.method}
            onChange={(e) => handleMethodChange(index, e.target.value)}
            disabled={!category.category}
          >
            <option value="">Select Method</option>
            {category.category === "food" && (
              <React.Fragment>
                <option value="adjective">Adjective</option>
                <option value="description">Description</option>
                <option value="dish">Dish</option>
                <option value="fruit">Fruit</option>
                <option value="meat">Meat</option>
                <option value="vegetable">Vegetable</option>
              </React.Fragment>
            )}
            {category.category === "person" && (
              <React.Fragment>
                <option value="firstName">First Name</option>
                <option value="lastName">Last Name</option>
                <option value="fullName">Full Name</option>
                <option value="gender">Gender</option>
              </React.Fragment>
            )}
            {category.category === "word" && (
              <React.Fragment>
                <option value="adjective">Adjective</option>
                <option value="verb">Verb</option>
                <option value="noun">Noun</option>
                <option value="words">Words</option>
              </React.Fragment>
            )}
          </select>

          <input
            type="text"
            value={category.keyName}
            onChange={(e) => handlekeyNameChange(index, e.target.value)}
            placeholder="Key name: first_name"
          />

          {index !== categories.length - 1 && (
            <button type="button" onClick={() => handleRemove(index)}>
              Remove
            </button>
          )}
        </div>
      ))}

      <button type="button" onClick={handleAddMore}>
        Add More
      </button>

      <button type="submit">Submit</button>
    </form>
  );
}

export default FakerFormComponent;
