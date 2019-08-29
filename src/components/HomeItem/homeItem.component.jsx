import React from 'react';
import './homeitem.styles.scss';


const Item = ({poem}) => {

    const {name, content, author, size} = poem;
    const sliceContent = content.slice(0, 9);

    return (
        <div className={`${size} card-container`}>
            <h2 className='title'>{name}</h2>
            <ul className='ul' >
                {sliceContent.map((item, index) => {
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
