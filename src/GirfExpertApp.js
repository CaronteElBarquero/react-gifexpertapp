import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  //   const categories = ["One Punch", "Baki", "Dragon Ball"];
  const [categories, setCategories] = useState([
    "Dragon Ball",
  ]);

  return (
    <>
      <h2 className="card-name">GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={ setCategories }/>
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
          categories.map(( category ) => 
              // <li key={ category }> { category }</li>
              <GifGrid 
                  key={ category }
                  category={ category } 
              />
          )
        }
      </ol>
    </>
  );
};

export default GifExpertApp;
