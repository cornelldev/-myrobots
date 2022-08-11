import React from 'react';
import Card from './card';

// card list component
const CardList =({robots}) => {
    return (
        <div>
            {
                // map (or loop) 'robots' ( i.e object), store in 'user' and index with 'i'
                robots.map((user, i) => {
                    return  (
                        <Card 
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    )
}

export default CardList;