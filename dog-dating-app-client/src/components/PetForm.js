import React from "react";

const PetForm = () => {
  return (
    <div>
        <form>
            <h3>Name: </h3>
            <input 
              type="text"
              name="name"
            />
            <h3>Age: </h3>
            <input 
              type="text"
              name="age"
            />
            <h3>Location: </h3>
            <input 
              type="text"
              name="location"
            />
            <h3>Biography: </h3>
            <textarea name="biography"/>
            <h3>Breed: </h3>
            <input 
              type="text"
              name="breed"
            />
            <h3>Likes: </h3>
            <textarea name="likes"/>
            <h3>Dislikes: </h3>
            <textarea name="dislikes"/>
            <h3>Temperament: </h3>
            <input 
              type="text"
              name="temperament"
            />
        </form>
    </div>
  );
};

export default PetForm;