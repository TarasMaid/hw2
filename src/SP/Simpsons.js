import React from 'react';
import Simpson from "./Simpson";

const Simpsons = () => {
    const simpsons = [
        {

            name: 'Homer',
            image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
            id: 1

        },
        {
            name: 'Bart',
            image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
            id: 3

        },
        {
            name: 'Marge',
            image: 'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png',
            id: 2

        },
        {
            name: 'Lisa',
            image: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png',
            id: 4
        },
        {
            name: 'Meggi',
            image: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png',
            id: 5
        }


    ]
    return (
        <div>
            {simpsons.map((simpson,index)=><Simpson key={index} simpson={simpson}/>)}
        </div>
    );
};

export default Simpsons;