import React from 'react';
import Item from '../HomeItem/homeItem.component';
import {PoemContext} from '../../ContextAPI';

import './HomeItemList.styles.scss';

class HomeItemList extends React.Component { 

    static contextType = PoemContext;

    render() {
        const {poems} = this.context;
        console.log(poems);
        
        return (
            <div className='card-list'>
                {poems.map(poem => <Item key={poem.id} poem={poem} />)}
            </div>
        )
    }
}

export default HomeItemList;