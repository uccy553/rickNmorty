import React from 'react'

const Character = (character) => {
  return (
    <div className='col-3'>
        <div className='card'>
            <img src={character.image} alt={character.name} width="300" />

            <div className='card-body'>
                <h3 className='card-title'>{character.name}</h3>
                <p>{`Origin: ${character.origin && character.origin.name}`}</p>
            </div>
        </div>
    </div>
  )
}

export default Character