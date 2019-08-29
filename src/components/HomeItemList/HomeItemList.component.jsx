import React, {useContext} from 'react';
import Item from '../HomeItem/homeItem.component';
import {PoemContext} from '../../ContextAPI';

import './HomeItemList.styles.scss';

const HomeItemList = () => { 

    const value = useContext(PoemContext);
    
    const {state} = value;
    const {sortedPoems} = state;
        
    return (
        <div className='card-list'>
            {sortedPoems.map(poem => <Item key={poem.id} poem={poem} />)}
        </div>    
    )
}

export default HomeItemList;