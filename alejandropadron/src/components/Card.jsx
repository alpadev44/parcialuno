import React from 'react'

const Card = ({autor, song, year,genre}) => {

  return (
    <div className='Card'>
        <h3>{autor}</h3>
        <p>{song}</p>
        <p>{year}</p>
        <p>{genre}</p>
    </div>
  )
}

export default Card