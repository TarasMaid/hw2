import React from 'react';

const Characters = () => {
    const charaters = [
        {id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Male",

            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",},
        {"id": 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        }



    ]
    return (
    <div>
        {charaters.map(charater=> <character key={charater.id} character={charater}/>)}
    </div>
    );
};

export default Characters;