import React, { useState, useEffect } from 'react'
import Character from './Character'

const List = () => {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://rickandmortyapi.com/api/character');
            const { results } = await data.json();
            setCharacter(results);
            setLoading(false)
        }
        fetchData()
    }, [character.length])

  return (
    <div>
        <h2>Characters</h2>

   
        <div className='row'>

        {loading ? (
            <div>Loading...</div>
        ) : (
            character.map((character) => (
                <Character key={character.id} name={character.name} origin={character.origin} image={character.image} />
            ))
        )}
        </div>
    </div>

  )
}

export default List