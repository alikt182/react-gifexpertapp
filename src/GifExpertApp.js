import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";


export const GifExpertApp = () => {

    //const categories = ['Bebidas','Sopas', 'Pasteleria'];
    const [categories, setCategories] = useState(['Bebidas']);

    // const handleAdd = () =>{
    //     //setCategories(['Postres', ...categories]); 
    //     ////otra manera
    //     setCategories(cats => [
    //         ...categories, 
    //         'Postres'
    //     ])
    //}

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
          {
              categories.map(category =>    (
                <GiftGrid key={category} category={ category }/>
              ))
          }
      </ol>
    </>
  );
};
