import React from 'react';
import './homeitem.styles.scss';


const Item = ({poem}) => {

    const {name, content, author} = poem

    return (
        <div className='card-container'>
            <h2>{name}</h2>
            <ul className='extras' >
                {content.map((item, index) => {
                    return  <li key={index}>
                                {item}
                            </li>
                })}
            </ul>
            <h6>{author }</h6>
        </div>
    )
}

export default Item;
