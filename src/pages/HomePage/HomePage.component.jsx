import React from 'react';
import './HomePage.styles.scss';
import HomeItemList from '../../components/HomeItemList/HomeItemList.component';

const HomePage = () => {

    return (
        <div className='homePage'>
            <HomeItemList  />
        </div>
    )
}


export default HomePage;
