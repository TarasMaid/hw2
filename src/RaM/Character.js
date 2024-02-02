import React from 'react';

const Character = ({character}) => {
    const {name, id, status, species, gender, image} = character;
    return (
        <div>
            <div>name: {name}</div>
            <div>id: {id}</div>
            <div>status: {status}</div>
            <div>species: {species}</div>
            <div>gender: {gender}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;