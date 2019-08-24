import React from 'react';
import Item from '../HomeItem/homeItem.component';
import {PoemContext} from '../../ContextAPI';

import './HomeItemList.styles.scss';

class HomeItemList extends React.Component { 

    static contextType = PoemContext;

    render() {
        const {greeting, from} = this.context;
        
        return (
            <div>
                {greeting}
                {from}
                <Item />
            </div>
        )
    }
}

export default HomeItemList;