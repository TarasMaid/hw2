import React from 'react';

const Simpson = ({simpson}) => {
    const {name,id,image} = simpson;
    return (
        <div>
            <div>name: {name}</div>
            <div>id: {id}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Simpson;