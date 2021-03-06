import React from 'react'

import '../index.css';

export const GifGridItem = ( { url, title} ) => {

  return (
    <div className='card animate__animated animate__bounce'>
        <img src={ url } alt={ title } />
        <p> { title } </p>
    </div>
  )

};
