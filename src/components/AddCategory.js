import React, { useState } from "react";
// import GifExpertApp from "../GirfExpertApp";
import PropTypes from 'prop-types' 

export const AddCategory = ( {setCategories} ) => {


  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
      setInputValue( e.target.value )
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( inputValue.trim().length > 2) {

      setCategories( catg => [ inputValue, ...catg ]);
      setInputValue('');
    }

  };


  return (

    <form onSubmit={ handleSubmit }>
      
        <input
          placeholder="Buscar Categoría" 
          type="text" 
          value={ inputValue}
          onChange={ handleInputChange }
        />
        
    </form>
  );
};


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
