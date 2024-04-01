import React from 'react';
import classes from './thumbnails.module.css';
import { Link } from 'react-router-dom';


export default function Thumbnails({ foods }) {
    return (
        <ul className={classes.list}>
            {foods.map(food => (
                <li key={food.id}>
                    <Link to={'/food/${food.id}'}>
                        <img
                            className={classes.image}
                            src={'/foods/${food.imageUrl}'}
                            alt={food.name}
                        />

                    </Link>

                </li>
            ))}

        </ul>
    );
}

// export default function Thumbnails({foods}) {
//     return <div>Thumbnails{ foods.length }</div>;
// }